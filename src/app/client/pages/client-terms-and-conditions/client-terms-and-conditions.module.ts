import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientTermsAndConditionsRoutingModule } from "./client-terms-and-conditions-routing.module";
import { ClientTermsAndConditionsComponent } from "./layout/client-terms-and-conditions.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
	declarations: [ClientTermsAndConditionsComponent],
	imports: [CommonModule, ClientTermsAndConditionsRoutingModule, TranslateModule],
})
export class ClientTermsAndConditionsModule {}
