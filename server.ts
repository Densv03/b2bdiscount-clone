import 'zone.js/dist/zone-node';

import {ngExpressEngine} from '@nguniversal/express-engine';
import * as express from 'express';
import {join} from 'path';

import {AppServerModule} from './src/main.server';
import {APP_BASE_HREF} from '@angular/common';
import {existsSync} from 'fs';
import cookieParser from 'cookie-parser';
import * as domino from 'domino';
import * as fs from 'fs';
import * as path from 'path';
import 'localstorage-polyfill';
import {environment} from 'src/environments/environment';

const MockBrowser = require('mock-browser').mocks.MockBrowser;
const mock = new MockBrowser();
const template = fs
	.readFileSync(
		path.join(process.cwd(), 'dist/fe-b2b/browser', 'index.html')
	)
	.toString();

global['navigator'] = mock.getNavigator();
global['localStorage'] = localStorage;
const window = domino.createWindow(template);
global['window'] = window as any;
(global as any)['window']['cookieconsent'] = {
	initialise: function () {
		console.warn('Cookie consent is not working on server side');
	},
};
global['document'] = window.document;

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
	const server = express();
	const distFolder = join(process.cwd(), 'dist/fe-b2b/browser');
	const indexHtml = existsSync(join(distFolder, 'index.original.html'))
		? 'index.original.html'
		: 'index';

	server.use(cookieParser());

	// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
	server.engine(
		'html',
		ngExpressEngine({
			bootstrap: AppServerModule,
		})
	);

	server.set('view engine', 'html');
	server.set('views', distFolder);

	// Example Express Rest API endpoints
	// server.get('/api/**', (req, res) => { });
	// Serve static files from /browser
	server.get(
		'*.*',
		express.static(distFolder, {
			maxAge: '1y',
		})
	);

	server.use('/assets', express.static(`${distFolder}/assets`));

	server.use((req, res, next) => {
		const url = normalizeUrl(req.url);
		const excludedUrls = [
			'registration-complete',
			'email-verify',
			'register-google-account',
			'register-linkedin-account',
			'google-sign-in-success',
			'admin',
			'email-confirmation',
			'b2bmarket',
			'profile'
		];

		const shouldExclude = excludedUrls.some(urlPart => req.url.includes(urlPart));
		const redirectToFaceBook = req.headers['user-agent'].indexOf('facebookexternalhit') === -1;
		if (shouldExclude && !redirectToFaceBook) {
			next();
		}
		else {
			if (url !== req.url && !shouldExclude && redirectToFaceBook) {
				res.redirect(301, url);
			} else {
				next();
			}
		}
	});

	// All regular routes use the Universal engine
	server.get('*', (req, res) => {
		console.log('REQQQQQQQQQQ')
		console.log(req.url)
		console.log(req.get('host'))

		res.render(indexHtml, {
			req,
			providers: [{provide: APP_BASE_HREF, useValue: req.baseUrl}],
		});
	});

	return server;
}

function run(): void {
	const port = process.env['PORT'] || 4000;

	// Start up the Node server
	const server = app();

	server.listen(port, () => {
		console.log(`Node Express server listening on http://localhost:${port}`);
	});
}

function normalizeUrl(url: string): string {
	url = url.toLowerCase();
	url = url.replace(/\/+/g, '/');

	if (
		url.endsWith('index.php') ||
		url.endsWith('home.php') ||
		url.endsWith('index.html') ||
		url.endsWith('home.html') ||
		url.endsWith('index.htm') ||
		url.endsWith('home.htm')
	) {
		url = url.replace(/\/(index|home)\.(php|html|htm)$/, '/');
	}
	if (!url.endsWith('/')) {
		url += '/';
	}

	if (url.endsWith('.')) {
		url = url.slice(0, -1);
	}
	// if (url.includes('www.')) {
	// 	url = url.replace(/^www\./, '');
	// }
	// if (!url.startsWith('https://')) {
	// 	url = url.replace(/^http:\/\//, 'https://');
	// }

	return url;
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
	run();
}

export * from './src/main.server';
