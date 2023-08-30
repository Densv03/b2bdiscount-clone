import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientPrivacyPolicyRoutingModule } from "./client-privacy-policy-routing.module";
import { ClientPrivacyPolicyComponent } from "./layout/client-privacy-policy.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
	declarations: [ClientPrivacyPolicyComponent],
	imports: [CommonModule, ClientPrivacyPolicyRoutingModule, TranslateModule],
})
export class ClientPrivacyPolicyModule {}
