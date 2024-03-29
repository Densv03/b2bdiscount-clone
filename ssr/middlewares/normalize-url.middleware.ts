import { normalizeUrl } from "../providers/url.provider";
import { NextFunction, Request, Response } from "express";

export function normalizeUrlMiddleware(req: Request,
                                       res: Response,
                                       next: NextFunction) {
    const url          = normalizeUrl(req.url);
    const excludedUrls = [
        'registration-complete',
        'email-verify',
        'register-google-account',
        'register-linkedin-account',
        'google-sign-in-success',
        'admin',
        'email-confirmation',
        'b2bmarket',
        'profile',
    ];

    const shouldExclude      = excludedUrls.some(urlPart => req.url.includes(urlPart));
    const redirectToFaceBook = req.headers['user-agent'].indexOf('facebookexternalhit') === -1;
    if (shouldExclude && !redirectToFaceBook) {
        next();
    } else {
        if (url !== req.url && !shouldExclude && redirectToFaceBook) {
            res.redirect(301,
                         url);
        } else {
            next();
        }
    }
}
