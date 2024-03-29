import { handleError, mixpanelToken } from "../../providers/mixpanel.provider";
import * as mp from "mixpanel";
import { MixpanelActionBase, MixpanelIncrement, MixpanelRemove, MixpanelTackChange, MixpanelUnion, MixpanelUnset } from "../../models/mixpanel.model";
import { MixpanelPeopleAction } from "../../enums/mixpanel-people.enum";
import { MixpanelEvent } from "../../models/mixpanel-event.model";

export class MixpanelRepository {
    mixpanel: mp.Mixpanel;

    constructor() {
        this.mixpanel = mp.init(mixpanelToken);
    }

    private get people() {
        return this.mixpanel.people;
    }

    handleAction(
        action: MixpanelPeopleAction,
        body: any) {
        try {
            switch (action) {
                case MixpanelPeopleAction.APPEND:
                    return this.append(body);
                case MixpanelPeopleAction.CLEAR_CHANGES:
                    return this.clearCharges(body);
                case MixpanelPeopleAction.DELETE_USER:
                    return this.deleteUser(body);
                case MixpanelPeopleAction.INCREMENT:
                    return this.increment(body);
                case MixpanelPeopleAction.TRACK_CHARGE:
                    return this.trackCharge(body);
                case MixpanelPeopleAction.SET:
                    return this.set(body);
                case MixpanelPeopleAction.UNION:
                    return this.union(body);
                case MixpanelPeopleAction.SET_ONCE:
                    return this.setOnce(body);
                case MixpanelPeopleAction.REMOVE:
                    return this.remove(body);
                case MixpanelPeopleAction.UNSET:
                    return this.unset(body);
            }
        } catch (e) {
            console.error(JSON.stringify(e));
            throw e;
        }
    }

    public track(body: MixpanelEvent) {
        try {
            this.mixpanel.track(body.eventName,
                                body.properties,
                                this.handleError);
        } catch (e) {
            console.error(JSON.stringify(e));
            throw e;
        }
    }

    private set(body: MixpanelActionBase) {
        this.people.set(body.distinctId,
                        body.properties,
                        this.handleError)
    }

    private append(body: MixpanelActionBase) {
        return this.people.append(body.distinctId,
                                  body.properties,
                                  this.handleError);
    }

    private setOnce(body: MixpanelActionBase) {
        return this.people.set_once(body.distinctId,
                                    body.properties,
                                    this.handleError);
    }

    private deleteUser(body: MixpanelActionBase) {
        return this.people.delete_user(body.distinctId,
                                       this.handleError)
    }

    private clearCharges(body: MixpanelActionBase) {
        return this.people.clear_charges(body.distinctId,
                                         this.handleError);
    }

    private remove(body: MixpanelRemove) {
        return this.people.remove(body.distinctId,
                                  body.data,
                                  this.handleError);
    }

    private union(body: MixpanelUnion) {
        return this.people.union(body.distinctId,
                                 body.data)
    }

    private unset(body: MixpanelUnset) {
        return this.people.unset(body.distinctId,
                                 body.propertyName,
                                 this.handleError);
    }

    private increment(body: MixpanelIncrement) {
        return this.people.increment(body.distinctId,
                                     body.propertyName,
                                     body.incrementBy,
                                     this.handleError);
    }

    private trackCharge(body: MixpanelTackChange) {
        return this.people.track_charge(body.distinctId,
                                        body.amount,
                                        body.properties);
    }

    private handleError(error: Error) {
        return handleError(error);
    }
}
