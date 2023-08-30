import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientRoutingModule } from "./client-routing.module";
import { RouterModule } from "@angular/router";
import { ClientFooterComponent } from "./components/client-footer/client-footer.component";
import { B2bNgxImageModule } from "@b2b/ngx-image";
import { B2bNgxLinkModule } from "@b2b/ngx-link";
import { B2bNgxIconModule } from "@b2b/ngx-icon";
import { environment } from "../../environments/environment";
import { B2bNgxButtonModule } from "@b2b/ngx-button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { B2bNgxInputModule } from "@b2b/ngx-input";
import { B2bNgxSelectModule } from "@b2b/ngx-select";
// import { NgxSmartModalModule } from "ngx-smart-modal";
import { ClientCookiesModalComponent } from "./components/client-cookies-modal/client-cookies-modal.component";
import {ClientComponent} from "./layout/client.component";
import {TranslateModule} from "@ngx-translate/core";
// import { CookieService } from "ngx-cookie-service";

@NgModule({
	declarations: [ClientComponent, ClientFooterComponent, ClientCookiesModalComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterModule,
    B2bNgxImageModule,
    B2bNgxLinkModule,
    B2bNgxIconModule,
    B2bNgxButtonModule,
    FormsModule,
    ReactiveFormsModule,
    B2bNgxInputModule,
    B2bNgxButtonModule,
    // B2bNgxTelModule,
    // B2bNgxTextareaModule,
    B2bNgxSelectModule,
		TranslateModule
    // NgxSmartModalModule.forChild(),
    // SocketIoModule.forRoot({
    // 	url: environment.apiUrl,
    // }),
  ],
	// providers: [CookieService],
})
export class ClientModule {}
