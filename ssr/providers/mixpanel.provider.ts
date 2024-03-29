import express from "express";
import { environment } from "../../src/environments/environment";

export const mixpanelToken: string = environment.apiUrl.includes('-dev') ? '7a0cfcbc67cff070e51719b1e725ded8' : 'c66a4412cf0b4eff56542461afb338bd';

export function handleError(error: Error) {
    if (!error) {
        return;
    }
    console.error('[MIXPANEL ERROR]:',
                  error);
}

export function getIp(req: express.Request) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    return ip;
}
