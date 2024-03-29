import 'zone.js';
import * as express from 'express';
import { join } from 'path';

import bootstrap from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import cookieParser from 'cookie-parser';
import { environment } from 'src/environments/environment';
import * as crypto from 'crypto';
import * as cors from 'cors';
import 'localstorage-polyfill';
import redirectMiddleware from "./ssr/middlewares/redirect.middleware";
import { MixpanelService } from "./ssr/core/services/mixpanel.service";
import { REQUEST, RESPONSE } from "./src/express.tokens";
import { CommonEngine } from "@angular/ssr";
import { normalizeUrlMiddleware } from "./ssr/middlewares/normalize-url.middleware";

const bodyParser                           = require('body-parser')
const MockBrowser                          = require('mock-browser').mocks.MockBrowser;
const mock                                 = new MockBrowser();
global['navigator']                        = mock.getNavigator();
global['window']                           = mock.getWindow();
(global as any)['window']['cookieconsent'] = {
    initialise: function () {
        console.warn('Cookie consent is not working on server side');
    },
};
global['document']                         = window.document;
const secretKey                            = environment.intercomSecretKey;
global['localStorage']                     = localStorage;

function generateIntercomHMAC(userEmail: string): string {
    return crypto.createHmac('sha256',
                             secretKey).update(userEmail).digest('hex');
}

// create application/json parser
var jsonParser = bodyParser.json();

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
    const server     = express();
    const distFolder = join(process.cwd(),
                            'dist/fe-b2b/browser');
    const indexHtml  = existsSync(join(distFolder,
                                       'index.original.html'))
        ? join(distFolder,
               'index.original.html')
        : join(distFolder,
               'index.html');

    const commonEngine = new CommonEngine();

    const mixpanelService = new MixpanelService();
    server.use(cookieParser());
    server.use(cors());

    server.set('view engine',
               'html');
    server.set('views',
               distFolder);


    server.post('/mixpanel/track',
                jsonParser,
                (
                    req: express.Request,
                    res: express.Response) => {
                    return mixpanelService.initTrack(req,
                                                     res);
                });

    server.post('/mixpanel/people/:action',
                jsonParser,
                (
                    req: express.Request,
                    res: express.Response) => {
                    return mixpanelService.initPeople(req,
                                                      res);
                });

    // Example Express Rest API endpoints
    // server.get('/api/**', (req, res) => { });
    // Serve static files from /browser
    server.get(
        '*.*',
        express.static(distFolder,
                       {
                           maxAge: '1y',
                       }),
    );

    server.get('/intercom/hmac',
               (
                   req,
                   res) => {
                   const userEmail = req.query['userEmail'] as string;

                   if (typeof userEmail !== 'string' || !userEmail) {
                       res.status(400).send('User email is required.');
                       return;
                   }

                   try {
                       const hmac = generateIntercomHMAC(userEmail);
                       res.json({hmac});
                   } catch (error) {
                       res.status(500).send('Error generating HMAC.');
                   }
               });


    server.use('/assets',
               express.static(`${distFolder}/assets`));

    server.use(redirectMiddleware)

    server.use(normalizeUrlMiddleware);

    // All regular routes use the Universal engine
    server.get('*',
               (
                   req,
                   res,
                   next) => {
                   const {
                             protocol,
                             originalUrl,
                             baseUrl,
                             headers,
                         } = req;

                   commonEngine
                       .render({
                                   bootstrap,
                                   documentFilePath: indexHtml,
                                   url:              `${protocol}://${headers.host}${originalUrl}`,
                                   publicPath:       distFolder,
                                   providers:        [
                                       {
                                           provide:  APP_BASE_HREF,
                                           useValue: baseUrl,
                                       },
                                       {
                                           provide:  RESPONSE,
                                           useValue: res,
                                       },
                                       {
                                           provide:  REQUEST,
                                           useValue: req,
                                       },
                                   ],
                               })
                       .then((html) => res.send(html))
                       .catch((err) => next(err));
               });

    return server;
}

function run(): void {
    const port = process.env['PORT'] || 4000;

    // Start up the Node server
    const server = app();

    server.listen(port,
                  () => {
                      console.log(`Node Express server listening on http://localhost:${port}`);
                  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule     = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
    run();
}

export * from './src/main.server';
