import {AppComponent} from "../app.component";
import {CommonModule} from "@angular/common";
import {CoreComponent} from "./layout/core.component";
import {NgModule} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {CoreRoutingModule} from "./core-routing.module";
import {TabsModule} from "ngx-bootstrap/tabs";
import {CarouselModule} from "ngx-bootstrap/carousel";
import {ClientHeaderComponent} from "../client/components/client-header/client-header.component";
import {B2bNgxLinkModule} from "@b2b/ngx-link";
import {B2bNgxIconModule} from "@b2b/ngx-icon";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {B2bNgxImageModule} from "@b2b/ngx-image";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthInterceptor} from "../auth/interceptors/auth/auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {NgcCookieConsentConfig, NgcCookieConsentModule} from "ngx-cookieconsent";
import { TreeviewModule } from "@b2b/ngx-treeview";
import {TranslateModule} from "@ngx-translate/core";

const cookieConfig: NgcCookieConsentConfig = {
	cookie: {
		domain: "b2b.discount",
	},
	position: "bottom-right",
	theme: "classic",
	palette: {
		popup: {
			background: "#ffffff",
			text: "#556274",
			link: "#005DFF",
		},
		button: {
			background: "#0F0F11",
			text: "#ffffff",
			border: "transparent",
		},
	},
	type: "opt-out",
	content: {
		message:
			'We use cookies, which are small text files, to improve your experience on our website and to show you personalised content. By clicking "Allow cookies", you accept the use of cookies',
		dismiss: "Allow all",
		deny: "Decline",
		link: "About cookies",
		href: "https://b2b.discount/cookie-policy",
		policy: "Cookie Policy",
	},
}

@NgModule({
	declarations: [AppComponent, CoreComponent, ClientHeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterOutlet,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    B2bNgxLinkModule,
    B2bNgxIconModule,
    B2bNgxButtonModule,
    B2bNgxImageModule,
    BrowserAnimationsModule,
		TranslateModule,
	NgcCookieConsentModule.forRoot(cookieConfig),
    TreeviewModule.forRoot()
  ],
	exports: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ]
})
export class CoreModule {
  constructor() {}

}
