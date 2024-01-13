import { PropertyDict, RemoveData, UnionData } from "mixpanel";

export interface MixpanelActionBase {
   distinctId: string;
   properties?: PropertyDict;
}

export interface MixpanelIncrement extends MixpanelActionBase {
   incrementBy: number;
   propertyName?: string;
}

export interface MixpanelRemove extends MixpanelActionBase {
   data: RemoveData;
}

export interface MixpanelUnion extends MixpanelActionBase {
   data: UnionData;
}

export interface MixpanelTackChange extends MixpanelActionBase {
   amount?: number;
}

export interface MixpanelUnset extends Pick<MixpanelActionBase, 'distinctId'> {
   propertyName?: string;
}
