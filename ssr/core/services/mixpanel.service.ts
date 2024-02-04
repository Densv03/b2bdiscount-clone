import * as express from 'express';
import { MixpanelPeopleAction } from "../../enums/mixpanel-people.enum";
import { MixpanelRepository } from "../repositories/mixpanel.repository";
import { getIp } from "../../providers/mixpanel.provider";

export class MixpanelService {
    mixpanelRepository = new MixpanelRepository();

    initTrack(
        req: express.Request,
        res: express.Response) {
        try {
            const body = req?.body;
            if (!body) {
                return res.status(400).send({
                                                message: 'Empty body',
                                                status:  400,
                                            });
            }
            body.properties.ip = getIp(req);
            console.log(JSON.stringify(body));
            this.mixpanelRepository.track(body);
            return res.status(200).send({
                                            message: 'Success',
                                            status:  200,
                                        });
        } catch (e) {
            return res.status(400).send({
                                            message: 'Something went wrong. Try again',
                                            status:  400,
                                        });
        }
    }

    initPeople(
        req: express.Request,
        res: express.Response) {
        const action         = req.params['action'] as MixpanelPeopleAction;
        const isActionActive = Object.values(MixpanelPeopleAction).includes(action);
        if (!isActionActive) {
            return res.status(404).send({
                                            message: 'Action does not exist',
                                            status:  404,
                                        });
        }
        try {
            console.log(JSON.stringify(req.body));
            this.mixpanelRepository.handleAction(action,
                                                 req.body);
            return res.status(200).send({
                                            message: 'Success',
                                            status:  200,
                                        });
        } catch (e) {
            console.error(e);
            return res.status(501).send({
                                            message: 'Something went wrong.',
                                            status:  501,
                                        });
        }
    }
}
