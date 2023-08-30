import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { B2bNgxButtonModule } from "@b2b/ngx-button";
import { ClientAccountNotRegisteredRoutingModule } from "./client-account-not-registered-routing.module";
import { ClientAccountNotRegisteredComponent } from "./layout/client-account-not-registered.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
	declarations: [ClientAccountNotRegisteredComponent],
	imports: [CommonModule, ClientAccountNotRegisteredRoutingModule, B2bNgxButtonModule, TranslateModule],
})
export class ClientAccountNotRegistereModule {}
