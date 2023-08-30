"use strict";
exports.id = 7143;
exports.ids = [7143];
exports.modules = {

/***/ 46872:
/*!******************************************************************************************!*\
  !*** ./src/app/client/pages/client-cookie-policy/client-cookie-policy-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientCookiePolicyRoutingModule": () => (/* binding */ ClientCookiePolicyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_client_cookie_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/client-cookie-policy.component */ 2461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_client_cookie_policy_component__WEBPACK_IMPORTED_MODULE_0__.ClientCookiePolicyComponent,
    },
];
class ClientCookiePolicyRoutingModule {
}
ClientCookiePolicyRoutingModule.ɵfac = function ClientCookiePolicyRoutingModule_Factory(t) { return new (t || ClientCookiePolicyRoutingModule)(); };
ClientCookiePolicyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClientCookiePolicyRoutingModule });
ClientCookiePolicyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClientCookiePolicyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 37143:
/*!**********************************************************************************!*\
  !*** ./src/app/client/pages/client-cookie-policy/client-cookie-policy.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientCookiePolicyModule": () => (/* binding */ ClientCookiePolicyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _client_cookie_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-cookie-policy-routing.module */ 46872);
/* harmony import */ var _layout_client_cookie_policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/client-cookie-policy.component */ 2461);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 61965);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class ClientCookiePolicyModule {
}
ClientCookiePolicyModule.ɵfac = function ClientCookiePolicyModule_Factory(t) { return new (t || ClientCookiePolicyModule)(); };
ClientCookiePolicyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ClientCookiePolicyModule });
ClientCookiePolicyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _client_cookie_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientCookiePolicyRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClientCookiePolicyModule, { declarations: [_layout_client_cookie_policy_component__WEBPACK_IMPORTED_MODULE_1__.ClientCookiePolicyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _client_cookie_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientCookiePolicyRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule] }); })();


/***/ }),

/***/ 2461:
/*!********************************************************************************************!*\
  !*** ./src/app/client/pages/client-cookie-policy/layout/client-cookie-policy.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientCookiePolicyComponent": () => (/* binding */ ClientCookiePolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 61965);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 1468);




function ClientCookiePolicyComponent_section_13_ngx_datatable_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-datatable", 12);
} if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", option_r1.rows)("columns", option_r1.columns)("headerHeight", 50);
} }
function ClientCookiePolicyComponent_section_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 8)(1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientCookiePolicyComponent_section_13_ngx_datatable_5_Template, 1, 3, "ngx-datatable", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1.rows);
} }
const COOKIES_POLICY = [
    {
        title: "Оur Website Uses Cookies",
        description: `By using this Website, You consent to Our use of Cookies in accordance with the terms of this Cookie Policy. This Cookie Policy is set to inform Our Users of all tracking, how User’s data is being handled, and with whom it is shared. It informs Our Users on their rights and how to exercise them, and states the technical specifications and purpose of each tracker.`,
    },
    {
        title: "Definitions",
        description: `The following terms have the meanings as mentioned below:

“B2B Discount” - refers to “B2B Discount Inc.”, and its affiliates, parents, and subsidiaries, EIN: 86-3844749, registered under the address: 6400 NE HIGHWAY 99 STE G PMB 579 VANCOUVER, WA 98665, incorporated under the laws of the State of Washington of the United States of America (hereinafter – “Company”, “B2B”, “Website”, “We” or “Our”).

“User”, “You” — the natural person that once visited and hence used Our Website.

“Website” - a set of pages of information, all content and links related to the website “https://b2b.discount/”.

“Cookies” - small pieces of data, stored in text files, that are stored on the computer of a User or other device when websites are loaded in a browser.

“Third party” - natural or legal persons, companies, service providers or other persons, that could be involved in a process of receiving certain data from Users.

“Personal Data”, “Data” - any information related to an identified or identifiable natural person (a name, an identification number, location, an online identifier, etc).

“European Union, “EU” — unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area.`,
    },
    {
        title: `What are Cookies?`,
        description: `Cookies are small pieces of data, stored in text files, that are stored on the computer of the User or other device when websites are loaded in a browser. Their purpose is to “remember” preferences of a User, as for a single visit, as for serial visits. They ensure a consistent and efficient experience for visitors, and perform essential functions such as allowing Users to be always logged in. Cookies may be set by the Website that visits a User (first party Cookies), or by Third parties, which are related to a Website (Third party Cookies). For example, those who serve content or provide advertising or analytics services on the Website

When a User visits Our Website, User\`s device will be asked for permission to store this file on that device and access information from it. Once the User visit the Website, the User will be prompted to accept or refuse Cookies.`,
    },
    {
        title: `Consent to the use of Cookies`,
        description: `Only in case when a User actively accepts the use of Cookies via the notice on Our Website, a User consent to the use of Cookies.

Cookies that are not strictly necessary to secure access to the Website are only used if You give Us Your consent.

If a User is a resident of European Union, that User is a subject to the provisions of the European Commission’s General Data Protection Regulation (hereinafter simply “GDPR”). You can read the provisions of GDPR  at the official website: https://eur-lex.europa.eu/eli/reg/2016/679/oj.

Do You know that You can manage Your Cookie settings any time? More at section “Cookies management”.`,
    },
    {
        title: `Types of Cookies used on Our Website`,
        description: `There are just 4 types of Cookies. Please look, how it’s going on:

A) Strictly necessary Cookies
These Cookies are essential in order to enable you to move around Our Website and use some of our features, such as accessing secure areas of the website. Without these Cookies services you have asked for cannot be provided or may be limited.
\t
B) Performance Cookies (analytical / statistic)
These Cookies collect information about how Our visitors use a Website, for instance which pages visitors click on most often, and if they get error messages from web pages. These Cookies don't collect information that identifies a User. All information these Cookies collect is aggregated and therefore anonymous. It is only used to improve how a website works.

C) Functionality Cookies (preferences / settings)
These Cookies allow our Website to remember choices which make a User (such as user name, language or the location) and provide enhanced, more personal features. These Cookies can also be used to remember changes that a User has made to text size, fonts and other parts of web pages that can be customized. They may also be used to provide services a User has asked for.

D) Targeting Cookies (advertising)
These Cookies are used to deliver more relevant ads to User and User’s interests. They are also used to limit the number of times when a User sees the ads, as well as help measure the effectiveness of the advertising campaigns. They are placed by Third-party advertising networks.`,
        rows: [
            {
                name: "_ga",
                provider: ".b2b.discount",
                purpose: "Collects information about the users and their activity on the website for analytics and reporting purposes.",
                type: "Statistical",
                expiryPeriod: "2 years",
                dataIsSentTo: "Google Analytics https://policies.google.com/technologies/partner-sites?hl=en",
            },
            {
                name: "_ga_RYZBQW3SPX",
                provider: ".b2b.discount",
                purpose: "Collects information about the users and their activity on the website for analytics and reporting purposes.",
                type: "Statistical",
                expiryPeriod: "2 years",
                dataIsSentTo: "Google Analytics https://policies.google.com/technologies/partner-sites?hl=en",
            },
            {
                name: "_gat_UA-193007750-1",
                provider: ".b2b.discount",
                purpose: "Collects information about the users and their activity on the website for analytics and reporting purposes.",
                type: "Statistical",
                expiryPeriod: "a few seconds",
                dataIsSentTo: "Google Analytics https://policies.google.com/technologies/partner-sites?hl=en",
            },
            {
                name: "_gid",
                provider: ".b2b.discount",
                purpose: "Collects information about the users and their activity on the website for analytics and reporting ",
                type: "Statistical",
                expiryPeriod: "a day",
                dataIsSentTo: "Google Analytics https://policies.google.com/technologies/partner-sites?hl=en",
            },
            {
                name: "_hjAbsoluteSessionInProgress",
                provider: ".b2b.discount",
                purpose: "Collects information about the users and their activity on the website for analytics and reporting purposes.",
                type: "Statistical",
                expiryPeriod: "30 minutes",
                dataIsSentTo: "Hotjar https://www.hotjar.com/legal/policies/privacy",
            },
            {
                name: "_hjIncludedInPageviewSample",
                provider: ".b2b.discount",
                purpose: "Collects information about the users and their activity on the website for analytics and reporting purposes.",
                type: "Statistical",
                expiryPeriod: "30 minutes",
                dataIsSentTo: "Hotjar https://www.hotjar.com/legal/policies/privacy",
            },
            {
                name: "_hjid",
                provider: ".b2b.discount",
                purpose: "Collects information about the users and their activity on the website for analytics and reporting purposes.",
                type: "Statistical",
                expiryPeriod: "1 year",
                dataIsSentTo: "Hotjar https://www.hotjar.com/legal/policies/privacy",
            },
            {
                name: "_BEAMER_FIRST_VISIT_zeKLgqli17986",
                provider: ".b2b.discount",
                purpose: "Collects information about the users and their activity on the website for analytics and reporting purposes.",
                type: "Statistical",
                expiryPeriod: "300 days",
                dataIsSentTo: "Beamer https://www.getbeamer.com/privacy-policy",
            },
            {
                name: "_BEAMER_USER_ID_zeKLgqli17986",
                provider: ".hotjar.com",
                purpose: "Collects information about the users and their activity on the website for analytics and reporting purposes.",
                type: "Statistical",
                expiryPeriod: "300 days",
                dataIsSentTo: "Beamer https://www.getbeamer.com/privacy-policy",
            },
        ],
        columns: [
            { prop: "name", name: "Name" },
            { prop: "provider", name: "Provider" },
            { prop: "purpose", name: "Purpose" },
            { prop: "type", name: "Type" },
            { prop: "expiryPeriod", name: "Expiry Period" },
            { prop: "dataIsSentTo", name: "Data is sent to" },
        ],
    },
    {
        title: `Third parties Cookies`,
        description: `In case of displaying advertisements and/or redirecting to another website, all Cookies will be collected in accordance with the rules of the Third party processors. That means that We do not have any influence  on Third party’s behaviour.

Our website uses Google Analytics to analyse the User Experience of this website. Google Analytics generates statistical and other information about website use by means of Cookies, which are stored on Users' computers. The information generated relating to our website is used to create reports about the use of the website. Google will store and use this information. Google's privacy policy is available at: http://www.google.com/policies/privacy/.

Our website publishes Google Adsense personalised advertisements on Our Website. These are tailored by Google to reflect User’s interests. To determine User’s interests, Google will track behaviour of a User across the web using Cookies. A User can view, delete or add interest categories associated with a User's browser using Google's Ads Preference Manager, available at: http://www.google.com/ads/preferences/. A User can opt-out of the Adsense partner network cookie at: http://www.google.com/policies/technologies/ads/.`,
    },
    {
        title: "Cookies management",
        description: `Take control of Your Cookies easily! Do You know that You can get a guide on Cookies management on the website aboutcookies.org?

Also, You can delete Cookies that are already set on Your device by clearing the browsing history of Your browser. This can remove certain or even all Cookies from all websites (including Our) You have visited.`,
    },
    {
        title: `Refusing and deleting of Cookies`,
        description: `Most browsers allow their users to refuse to accept Cookies. For example, in Google Chrome browser, a User can refuse all Cookies by clicking: “Settings” - “Cookies and other site data” - “Block all cookies” / “Block third-party cookies” / “Block third-party cookies in Incognito”.

To refuse Cookies in Opera browser, click “Opera Menu” - Go to “Settings” and select “Preferences” 3Click on the “Advanced” tab. On the side Panel click on 'Cookies' and select 'Never accept cookies'

To refuse Cookies in Safari browser, follow: “Safari” - “Preferences”, - click “Privacy”, then do any of the following: Prevent trackers from using cookies and website data to track you: Select “Prevent cross-site tracking.”; Always block cookies: Select “Block all cookies.”; Always allow cookies: Deselect “Block all cookies.”

To clear Cookies in Google Chrome, please click: “Settings” - “Clear browsing data” - Сhoose proper period of time - Click the tick in front of the phrase “Cookies and other site data” - and finally click “Clear data”.

To clear Cookies in the Opera browser, go to “Settings” - “Advanced” - “Privacy and Security” and click “Site settings”. Click “Cookies and site data”, and select “See all cookies and site data”. Use the search bar to find a specific cookie, and click the trash icon to delete individual cookies.

To clear Cookies in Safari browser go to “Settings” - “Safari” - “Advanced” - “Website Data”, then tap Remove All Website Data.`,
    },
    {
        title: `Access to the Cookies information`,
        description: `“B2B Discount” as a Cookies provider has access to the information collected by Cookies. As We use services of Third parties, they have access to Cookies information. There are: hotjar.com, google.com, digitalocean.com

How Cookies are stored?

All relevant information on the period of Cookies storing a User can check in the table in the section “4. Types of Cookies used on Our Website”.

Contact us,

If there any problems or questions about this Cookie Policy occurred, please, drop us a line via email: info@b2b.discount or legal address: 6168 NE Hwy 99 Ste 201 Vancouver WA 98665, USA. We  will try to respond as soon as possible, but no longer than in 60 calendar days.`,
    },
    {
        title: "How Cookies are stored?",
        description: `All relevant information on the period of Cookies storing a User can check in the table in the section “4. Types of Cookies used on Our Website”.`,
    },
    {
        title: "Contact us",
        description: `If there any problems or questions about this Cookie Policy occurred, please, drop us a line via email: info@b2b.discount or legal address: 6168 NE Hwy 99 Ste 201 Vancouver WA 98665, USA. We  will try to respond as soon as possible, but no longer than in 60 calendar days.`,
    },
];
class ClientCookiePolicyComponent {
    constructor() {
        this.options = COOKIES_POLICY;
    }
}
ClientCookiePolicyComponent.ɵfac = function ClientCookiePolicyComponent_Factory(t) { return new (t || ClientCookiePolicyComponent)(); };
ClientCookiePolicyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientCookiePolicyComponent, selectors: [["b2b-client-cookie-policy"]], decls: 14, vars: 10, consts: [[1, "cookies-policy"], [1, "container"], [1, "title-wrapper"], [1, "title"], [1, "dates"], [1, "effective-date"], [1, "modifed-date"], ["class", "section", 4, "ngFor", "ngForOf"], [1, "section"], [1, "section-title"], [1, "section-description"], ["class", "material section-table", "columnMode", "force", "rowHeight", "auto", 3, "rows", "columns", "headerHeight", 4, "ngIf"], ["columnMode", "force", "rowHeight", "auto", 1, "material", "section-table", 3, "rows", "columns", "headerHeight"]], template: function ClientCookiePolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4)(7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClientCookiePolicyComponent_section_13_Template, 6, 3, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "COOKIES.NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, "COOKIES.EFFECTIVE_DATE"), ": 04.06.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, "COOKIES.LAST_MODIFED"), ": 04.06.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__.DatatableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["@charset \"UTF-8\";.ngx-datatable[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  \n  \n  \n  \n  \n  \n  \n   }.ngx-datatable[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%] {\n    display: none !important; }.ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n    position: absolute; }.ngx-datatable.scroll-horz[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:focus {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    z-index: 9; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.sortable[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: move; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%] {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        cursor: ew-resize; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.resizeable[_ngcontent-%COMP%]:hover   .resize-handle[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:hover   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromLeft[_ngcontent-%COMP%] {\n          right: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromRight[_ngcontent-%COMP%] {\n          left: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-template-wrap[_ngcontent-%COMP%] {\n        height: inherit; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      overflow-y: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: flex; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-footer-inner[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 40%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 60%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 20%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: not-allowed; }.ngx-datatable.material[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  \n  \n  \n  \n   }.ngx-datatable.material.striped[_ngcontent-%COMP%]   .datatable-row-odd[_ngcontent-%COMP%] {\n    background: #eee; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%], .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n    height: 50px;\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .loading-row[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%] {\n    background-color: #fff;\n    background-position: 100% 0;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    background-position: 0 0;\n    background-color: #fff;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      font-weight: 400;\n      background-color: #fff;\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: bottom;\n      font-size: 12px;\n      font-weight: 500; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        transition: transform 400ms ease, opacity 400ms ease;\n        opacity: 0.5;\n        transform: scale(1); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        content: ' ';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -30px 0 0 -30px;\n        height: 60px;\n        width: 60px;\n        background: #eee;\n        border-radius: 100%;\n        opacity: 1;\n        filter: none;\n        transform: scale(0);\n        z-index: 9999;\n        pointer-events: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.dragging[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        border-right: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n      border-right: solid 1px #eee; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      padding: 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-group-header[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      border-bottom: solid 1px #d9d8d9;\n      border-top: solid 1px #d9d8d9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%] {\n      display: block;\n      position: sticky;\n      width: 100%;\n      height: 5px;\n      padding: 0;\n      margin: 0;\n      top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 5px;\n        transform: translate(0, 0) scale(1, 1);\n        background-color: #aad1f9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n          transition: all 0.2s linear;\n          animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n          transition: transform 0.2s linear;\n          background-color: #106cc8;\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          width: 100%;\n          height: 5px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 12px;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.54); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      line-height: 50px;\n      height: 50px;\n      padding: 0 1.2rem; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      margin: 0 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        vertical-align: middle; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          color: rgba(0, 0, 0, 0.26) !important;\n          background-color: transparent !important; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          background-color: rgba(158, 158, 158, 0.2);\n          font-weight: bold; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        height: 22px;\n        min-width: 24px;\n        line-height: 22px;\n        padding: 0 6px;\n        border-radius: 3px;\n        margin: 6px 3px;\n        text-align: center;\n        vertical-align: top;\n        color: rgba(0, 0, 0, 0.54);\n        text-decoration: none;\n        vertical-align: bottom; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n          color: rgba(0, 0, 0, 0.75);\n          background-color: rgba(158, 158, 158, 0.2); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-skip[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 20px;\n        padding: 0 3px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]:hover {\n      background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      font-weight: bold; }.datatable-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0 1rem 0 0;\n    cursor: pointer;\n    outline: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:before {\n      transition: all 0.3s ease-in-out;\n      content: '';\n      position: absolute;\n      left: 0;\n      z-index: 1;\n      width: 1rem;\n      height: 1rem;\n      border: 2px solid #f2f2f2; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:checked:before {\n      transform: rotate(-45deg);\n      height: 0.5rem;\n      border-color: #009688;\n      border-top-style: none;\n      border-right-style: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1rem;\n      height: 1rem;\n      background: #fff;\n      cursor: pointer; }@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1); } }@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-'][_ngcontent-%COMP%]::before, [class*=' datatable-icon-'][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter[_ngcontent-%COMP%]::before {\n  content: '\\62';\n}.datatable-icon-collapse[_ngcontent-%COMP%]::before {\n  content: '\\61';\n}.datatable-icon-expand[_ngcontent-%COMP%]::before {\n  content: '\\63';\n}.datatable-icon-close[_ngcontent-%COMP%]::before {\n  content: '\\64';\n}.datatable-icon-up[_ngcontent-%COMP%]::before {\n  content: '\\65';\n}.datatable-icon-down[_ngcontent-%COMP%]::before {\n  content: '\\66';\n}.datatable-icon-sort-unset[_ngcontent-%COMP%]::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort[_ngcontent-%COMP%]::before {\n  content: '\\67';\n}.datatable-icon-done[_ngcontent-%COMP%]::before {\n  content: '\\68';\n}.datatable-icon-done-all[_ngcontent-%COMP%]::before {\n  content: '\\69';\n}.datatable-icon-search[_ngcontent-%COMP%]::before {\n  content: '\\6a';\n}.datatable-icon-pin[_ngcontent-%COMP%]::before {\n  content: '\\6b';\n}.datatable-icon-add[_ngcontent-%COMP%]::before {\n  content: '\\6d';\n}.datatable-icon-left[_ngcontent-%COMP%]::before {\n  content: '\\6f';\n}.datatable-icon-right[_ngcontent-%COMP%]::before {\n  content: '\\70';\n}.datatable-icon-skip[_ngcontent-%COMP%]::before {\n  content: '\\71';\n}.datatable-icon-prev[_ngcontent-%COMP%]::before {\n  content: '\\72';\n}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-opened.ng-select-right[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-left[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{align-items:center;padding-left:10px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;color:#333;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{color:#000}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#D0021B}.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:rgba(0,0,0,0.54);background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  scroll-behavior: auto !important;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}body[_ngcontent-%COMP%] {\n  line-height: 1;\n}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}a[_ngcontent-%COMP%]:visited {\n  color: #000000;\n}button[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}textarea[_ngcontent-%COMP%] {\n  border: none;\n}i[_ngcontent-%COMP%] {\n  font-style: Italic;\n}b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened)    > .ng-select-container[_ngcontent-%COMP%] {\n  box-shadow: none;\n}  form b2b-ngx-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form b2b-ngx-country-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-country-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  height: 49px;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(15, 15, 17, 0.1);\n  border-radius: 4px;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n}.ng-select.ng-select-single.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: transparent;\n}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  top: 15px;\n}.b2b-ngx-button[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%] {\n  background-color: #e63d3d;\n  color: white;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%]:hover {\n  background-color: #e63d3d;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n  transition: 0.2s;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%]:hover {\n  background-color: #0f0f11;\n  border-color: #0f0f11;\n  color: white;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%] {\n  border-color: #0f0f11;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%] {\n  border-color: #005dff;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n  color: #ffffff !important;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled:hover {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n}.b2b-ngx-link[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border: 1px solid transparent;\n}.b2b-ngx-link.text.text-blue[_ngcontent-%COMP%] {\n  color: #005dff;\n}.b2b-ngx-link.text.text-black[_ngcontent-%COMP%] {\n  color: #0f0f11;\n}.b2b-ngx-link.text.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}.b2b-ngx-link.text.text-gray[_ngcontent-%COMP%] {\n  color: #556274;\n}.b2b-ngx-link.text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}.b2b-ngx-link.background[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #e3eaf1;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-link.background.background-gray[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%] {\n  background: #eff4fa;\n  border-radius: 4px;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #005dff !important;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]:hover {\n  background: #e6edfa;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-input[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n  padding: 14px 16px;\n  width: 100%;\n  font-size: 14px;\n  color: #556274;\n}.b2b-ngx-input.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-input.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.b2b-ngx-input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-input.background.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.b2b-ngx-icon.circle[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  background-color: #f3f6f8;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}.b2b-ngx-textarea-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background: #f3f6f8;\n  border-radius: 4px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: #556274;\n  padding: 14px 16px;\n  border: 2px solid transparent;\n  resize: none;\n}.b2b-ngx-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.b2b-ngx-textarea.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-textarea.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-textarea.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  width: 100%;\n  justify-content: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  padding: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: #C4C4C4;\n}@media (max-width: 36em) {\n  .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label-selected[_ngcontent-%COMP%] {\n  color: #000000;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #D9D9D9;\n  margin: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #005DFF;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]   .mat-step-icon-content[_ngcontent-%COMP%] {\n  display: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:first-child {\n  align-items: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:last-child {\n  align-items: flex-end;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border: 2px solid #D9D9D9;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:first-of-type {\n  margin: 0 -7% 0 -10%;\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:last-of-type {\n  margin: 0 -23% 0 -7%;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-content-container[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: initial;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.cookies-policy[_ngcontent-%COMP%] {\n  background-color: white;\n  border-top: 1px solid #e3eaf1;\n  padding: 60px 0;\n}@media (max-width: 55.5em) {\n  .cookies-policy[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}.cookies-policy[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0 auto;\n}@media (max-width: 55.5em) {\n  .cookies-policy[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}.cookies-policy[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}.cookies-policy[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 36px;\n  letter-spacing: 0.01em;\n  color: #0f0f11;\n}@media (max-width: 55.5em) {\n  .cookies-policy[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 15px;\n  }\n}.cookies-policy[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%]   .modifed-date[_ngcontent-%COMP%], .cookies-policy[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%]   .effective-date[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 136%;\n  text-align: right;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #556274;\n}.cookies-policy[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 134%;\n  color: #0f0f11;\n  margin-top: 60px;\n}.cookies-policy[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 200%;\n  letter-spacing: 0.01em;\n  color: #556274;\n  margin-top: 16px;\n}.cookies-policy[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-table[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZy1zZWxlY3Qvbmctc2VsZWN0L3RoZW1lcy9kZWZhdWx0LnRoZW1lLmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCJjbGllbnQtY29va2llLXBvbGljeS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zZWxlY3Qvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWJ1dHRvbi9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpbmsvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnB1dC9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWljb24vc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZXh0YXJlYS9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvbWF0ZXJpYWwtb3ZlcnJpZGUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLENDQWhCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFLEVBQUUsQ0FDSjtJQUNFLHdCQUF3QixFQUFFLENBQzVCOzs7SUFLRSxzQkFBc0IsRUFBRSxDQUMxQjtJQUNFLGdCQUFnQixFQUFFLENBQ3BCO0lBQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxnQkFBZ0I7SUFDaEIsaUNBQWlDLEVBQUUsQ0FDckM7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUUsQ0FDN0I7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQixFQUFFLENBQ3JCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRSxDQUMzQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDL0I7OztJQU9FLGFBQWE7SUFDYixtQkFBbUI7SUFJbkIsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBRSxDQUNsQjs7SUFFRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBRSxDQUNwQjs7TUFFRSxhQUFhLEVBQUUsQ0FDbkI7O0lBRUUsVUFBVSxFQUFFLENBQ2Q7Ozs7SUFJRSxrQkFBa0IsRUFBRSxDQUN0QjtJQUNFLGNBQWM7SUFDZCxnQkFBZ0IsRUFBRSxDQUNsQjtNQUNFLG9CQUFvQjtNQUNwQiw0QkFBNEIsRUFBRSxDQUNoQztNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUIsRUFBRSxDQUN2QjtRQUNFLGVBQWUsRUFBRSxDQUNuQjtRQUNFLFlBQVksRUFBRSxDQUNoQjtRQUNFLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLGVBQWUsRUFBRSxDQUNuQjs7UUFFRSxxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixNQUFNO1FBQ04sU0FBUztRQUNULFVBQVU7UUFDVixjQUFjO1FBQ2Qsa0JBQWtCLEVBQUUsQ0FDdEI7UUFDRSxpQkFBaUIsRUFBRSxDQUNyQjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0UsbUJBQW1CLEVBQUUsQ0FDdkI7UUFDRSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVMsRUFBRSxDQUNYO1VBQ0UsUUFBUSxFQUFFLENBQ1o7VUFDRSxPQUFPLEVBQUUsQ0FDYjtRQUNFLGVBQWUsRUFBRSxDQUN2QjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UscUJBQXFCLEVBQUUsQ0FDekI7TUFDRSxrQkFBa0IsRUFBRSxDQUN0QjtNQUtFLGFBQWE7TUFPYixzQkFBc0IsRUFBRSxDQUMxQjtNQUNFLGFBQWEsRUFBRSxDQUNmO1FBS0UsYUFBYSxFQUFFLENBQ3JCO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjLEVBQUUsQ0FDaEI7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFdBQVcsRUFBRSxDQUNmO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYTtNQUNiLGlCQUFpQixFQUFFLENBQ25COztRQUVFLFVBQVU7UUFDVixTQUFTO1FBQ1QscUJBQXFCO1FBQ3JCLGdCQUFnQixFQUFFLENBQ3BCOztRQUVFLGFBQWEsRUFBRSxDQUNqQjtRQUNFLGVBQWU7UUFDZixxQkFBcUIsRUFBRSxDQUN6QjtRQUNFLG1CQUFtQixFQUFFLENDck03Qjs7Ozs7Ozs7Ozs7Ozs7OztDQWdCQyxDQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFIQUFxSDtFQUNySDs7R0FFQztFQUNEOztHQUVDO0VBQ0Q7O0dBRUM7RUFDRDs7R0FFQztFQUNEOztHQUVDLEVBQUUsQ0FDSDtJQUNFLGdCQUFnQixFQUFFLENBQ3BCOzs7O0lBSUUseUJBQXlCO0lBQ3pCLFdBQVcsRUFBRSxDQUNmOzs7O0lBSUUseUJBQXlCO0lBQ3pCLFdBQVcsRUFBRSxDQUNmOzs7O0lBSUUseUJBQXlCO0lBQ3pCLFdBQVcsRUFBRSxDQUNmOztJQUVFLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLGtDQUFrQyxFQUFFLENBQ3RDOztJQUVFLHNCQUFzQixFQUFFLENBQzFCOztJQUVFLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLGtDQUFrQyxFQUFFLENBQ3RDOztJQUVFLHNCQUFzQixFQUFFLENBQzFCOztJQUVFLHlCQUF5QjtJQUN6QixXQUFXLEVBQUUsQ0FDZjs7SUFFRSx5QkFBeUI7SUFDekIsV0FBVyxFQUFFLENBQ2Y7O0lBRUUseUJBQXlCO0lBQ3pCLFdBQVcsRUFBRSxDQUNmO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWEsRUFBRSxDQUNqQjtJQUNFLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWEsRUFBRSxDQUNqQjs7SUFFRSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQix5SkFBeUosRUFBRSxDQUM3Sjs7SUFFRSx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix5SkFBeUosRUFBRSxDQUM3SjtJQUNFLDRDQUE0QyxFQUFFLENBQzlDO01BQ0UsZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0QixnQkFBZ0I7TUFDaEIsc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLGdCQUFnQixFQUFFLENBQ2xCO1FBQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7UUFDRSxvREFBb0Q7UUFDcEQsWUFBWTtRQUNaLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0UsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLG9CQUFvQixFQUFFLENBQ3hCO1FBQ0Usa0JBQWtCLEVBQUUsQ0FDeEI7TUFDRSw0QkFBNEIsRUFBRSxDQUNsQztJQUNFLGtCQUFrQixFQUFFLENBQ3BCO01BQ0UsbUJBQW1CO01BQ25CLGFBQWEsRUFBRSxDQUNqQjtNQUNFLG1CQUFtQjtNQUNuQixnQ0FBZ0M7TUFDaEMsNkJBQTZCLEVBQUUsQ0FDakM7TUFDRSxnQkFBZ0I7TUFDaEIsc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsMEJBQTBCO01BQzFCLDJCQUEyQjtNQUMzQixlQUFlO01BQ2YsZ0JBQWdCLEVBQUUsQ0FDcEI7TUFDRSxnQkFBZ0I7TUFDaEIsc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsMEJBQTBCO01BQzFCLDJCQUEyQjtNQUMzQixlQUFlO01BQ2YsZ0JBQWdCLEVBQUUsQ0FDcEI7TUFDRSxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxXQUFXO01BQ1gsVUFBVTtNQUNWLFNBQVM7TUFDVCxNQUFNLEVBQUUsQ0FDUjtRQUNFLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxXQUFXO1FBRVgsc0NBQXNDO1FBQ3RDLHlCQUF5QixFQUFFLENBQzNCO1VBQ0UsMkJBQTJCO1VBRTNCLGtFQUFrRTtVQUVsRSxpQ0FBaUM7VUFDakMseUJBQXlCO1VBQ3pCLGtCQUFrQjtVQUNsQixPQUFPO1VBQ1AsTUFBTTtVQUNOLFNBQVM7VUFDVCxXQUFXO1VBQ1gsV0FBVyxFQUFFLENBQ3JCO0lBQ0UseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMEJBQTBCLEVBQUUsQ0FDNUI7TUFDRSxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGlCQUFpQixFQUFFLENBQ3JCO01BQ0UsY0FBYyxFQUFFLENBQ2hCO1FBQ0Usc0JBQXNCLEVBQUUsQ0FDeEI7VUFDRSxxQ0FBcUM7VUFDckMsd0NBQXdDLEVBQUUsQ0FDNUM7VUFDRSwwQ0FBMEM7VUFDMUMsaUJBQWlCLEVBQUUsQ0FDdkI7UUFDRSxZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsc0JBQXNCLEVBQUUsQ0FDeEI7VUFDRSwwQkFBMEI7VUFDMUIsMENBQTBDLEVBQUUsQ0FDaEQ7Ozs7UUFJRSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBQWMsRUFBRSxDQUN0QjtJQUNFLHNCQUFzQixFQUFFLENBQ3hCO01BQ0Usc0JBQXNCLEVBQUUsQ0FDMUI7TUFDRSxpQkFBaUIsRUFBRSxDQUV6Qjs7RUFFRSxDQUNGO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsVUFBVSxFQUFFLENBQ1o7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhLEVBQUUsQ0FDZjtNQUdFLGdDQUFnQztNQUNoQyxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLE9BQU87TUFDUCxVQUFVO01BQ1YsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUIsRUFBRSxDQUM3QjtNQUlFLHlCQUF5QjtNQUN6QixjQUFjO01BQ2QscUJBQXFCO01BQ3JCLHNCQUFzQjtNQUN0Qix3QkFBd0IsRUFBRSxDQUM1QjtNQUNFLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLE9BQU87TUFDUCxXQUFXO01BQ1gsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixlQUFlLEVBQUUsQ0FFdkI7O0VBRUUsQ0FDRjtFQUNFO0lBQ0UsVUFBVTtJQUNWLHdDQUF3QyxFQUFFO0VBQzVDO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QyxFQUFFLEVBQUUsQ0Y5Uy9DO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUFnQztFQUNoQzs0RkFDc0c7RUFDdEcsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQixDQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBOztFQUVFLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZCxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDR3hHQSxpREFBaUQsZUFBZSxDQUFDLGlDQUFpQyxDQUFDLHVEQUF1RCxlQUFlLENBQUMsMkRBQTJELFFBQVEsQ0FBQyx5Q0FBeUMsQ0FBQyxzQkFBc0IsQ0FBQyxpRUFBaUUseUNBQXlDLENBQUMsK0RBQStELHlCQUF5QixDQUFDLHdCQUF3QixDQUFDLGlFQUFpRSx5QkFBeUIsQ0FBQyw0QkFBNEIsQ0FBQyxrRUFBa0UsNEJBQTRCLENBQUMsMkJBQTJCLENBQUMsZ0VBQWdFLHdCQUF3QixDQUFDLDJCQUEyQixDQUFDLHlFQUF5RSxvQkFBb0IsQ0FBQywwRUFBMEUsQ0FBQyxtREFBbUQsd0JBQXdCLENBQUMseUNBQXlDLFlBQVksQ0FBQyxnQ0FBZ0MsVUFBVSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxzQ0FBc0MsbUNBQW1DLENBQUMsb0RBQW9ELGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLGdFQUFnRSxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsb0VBQW9FLFVBQVUsQ0FBQyxpREFBaUQsV0FBVyxDQUFDLCtFQUErRSxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLDJGQUEyRixrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxvR0FBb0csd0JBQXdCLENBQUMsd0JBQXdCLENBQUMsb0hBQW9ILGFBQWEsQ0FBQyx1RUFBdUUsZUFBZSxDQUFDLGdCQUFnQixDQUFDLG1GQUFtRixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsaUZBQWlGLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsNkZBQTZGLGNBQWMsQ0FBQyxlQUFlLENBQUMsbUdBQW1HLHdCQUF3QixDQUFDLG1IQUFtSCxnQkFBZ0IsQ0FBQywrSEFBK0gsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGlHQUFpRyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsZ0dBQWdHLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxzR0FBc0csd0JBQXdCLENBQUMscUdBQXFHLDhCQUE4QixDQUFDLGlIQUFpSCw2QkFBNkIsQ0FBQyxpQkFBaUIsQ0FBQyxzR0FBc0csNkJBQTZCLENBQUMsa0hBQWtILGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxpRkFBaUYsbUJBQW1CLENBQUMsNkZBQTZGLG1CQUFtQixDQUFDLHVGQUF1RixVQUFVLENBQUMsdUZBQXVGLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxtR0FBbUcsaUJBQWlCLENBQUMsY0FBYyxDQUFDLDZCQUE2QixVQUFVLENBQUMsNkNBQTZDLGFBQWEsQ0FBQyw0QkFBNEIsbUJBQW1CLENBQUMsd0NBQXdDLG1CQUFtQixDQUFDLDZCQUE2QixVQUFVLENBQUMsaUJBQWlCLENBQUMseUNBQXlDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyw2Q0FBNkMscUJBQXFCLENBQUMsdUNBQXVDLHlDQUF5QyxDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixDQUFDLG1CQUFtQixxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxtQ0FBbUMsQ0FBQyxNQUFNLENBQUMsaUNBQWlDLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQywwQkFBMEIsQ0FBQywyQkFBMkIsQ0FBQyxrQkFBa0IsQ0FBQyxpRkFBaUYsMkJBQTJCLENBQUMsMEJBQTBCLENBQUMsbUNBQW1DLFNBQVMsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsOEJBQThCLENBQUMsNkJBQTZCLENBQUMsMkJBQTJCLENBQUMsa0JBQWtCLENBQUMsbUZBQW1GLDJCQUEyQixDQUFDLG9DQUFvQyxRQUFRLENBQUMsOEJBQThCLENBQUMsNkJBQTZCLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLG1GQUFtRiw4QkFBOEIsQ0FBQyw2QkFBNkIsQ0FBQyxrQ0FBa0MsVUFBVSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyw4QkFBOEIsQ0FBQyw2QkFBNkIsQ0FBQywyQkFBMkIsQ0FBQyxrQkFBa0IsQ0FBQyxrRkFBa0YsMEJBQTBCLENBQUMsdUNBQXVDLDRCQUE0QixDQUFDLGVBQWUsQ0FBQyx1Q0FBdUMseUJBQXlCLENBQUMsZUFBZSxDQUFDLHlEQUF5RCx3QkFBZ0IsQ0FBaEIsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyw0RUFBNEUsY0FBYyxDQUFDLDBFQUEwRSx3QkFBd0IsQ0FBQyx5S0FBeUssc0JBQXNCLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLHVEQUF1RCxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxxS0FBcUssVUFBVSxDQUFDLHdCQUF3QixDQUFDLHVNQUF1TSxlQUFlLENBQUMsd0VBQXdFLHdCQUF3QixDQUFDLFVBQVUsQ0FBQywwRUFBMEUsVUFBVSxDQUFDLHVFQUF1RSxpQkFBaUIsQ0FBQyxtRkFBbUYsa0JBQWtCLENBQUMsY0FBYyxDQUFDLHFFQUFxRSxhQUFhLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGlGQUFpRixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsK0JBQStCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0NBNTBROztFQUVDLGdDQUFBO0FDS0QsQ0RGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNLRCxDREhBOzs7Ozs7Ozs7OztFQVdDLGNBQUE7QUNNRCxDREpBO0VBQ0MsY0FBQTtBQ09ELENETEE7O0VBRUMsZ0JBQUE7QUNRRCxDRE5BOztFQUVDLFlBQUE7QUNTRCxDRFBBOzs7O0VBSUMsV0FBQTtFQUNBLGFBQUE7QUNVRCxDRFJBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBQ1dELENEVEE7O0VBRUMsWUFBQTtBQ1lELENEVkE7RUFDQyxTQUFBO0VBQ0EsaURBQUE7QUNhRCxDRFhBO0VBQ0Msc0JBQUE7QUNjRCxDRFhBO0VBQ0MscUJBQUE7RUFDQSxZQUFBO0FDY0QsQ0RiQztFQUNDLGNBQUE7QUNlRixDRFhBO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDY0QsQ0RYQTtFQUNDLFlBQUE7QUNjRCxDRFhBO0VBQ0Msa0JBQUE7QUNjRCxDRFhBO0VBQ0MsaUJBQUE7QUNjRCxDQ2hMQTtFQUNFLGdCQUFBO0FEbUxGLENDMUtZO0VBQ0Usb0RBQUE7RUFDQSxnQ0FBQTtBRDZLZCxDQ3BLVTtFQUNFLG9EQUFBO0VBQ0EsZ0NBQUE7QURzS1osQ0MxSlk7RUFDRSxvREFBQTtFQUNBLGdDQUFBO0FENEpkLENDbkpVO0VBQ0Usb0RBQUE7RUFDQSxnQ0FBQTtBRHFKWixDQzNJRTs7O0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FEZ0pKLENDN0lFOzs7RUFDRSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBRGlKSixDQzdJSTs7O0VBQ0UsbUJBQUE7QURpSk4sQ0M5SUk7OztFQUNFLG1CQUFBO0FEa0pOLENDN0lROzs7RUFDRSx5QkFBQTtBRGlKVixDQzNJTTs7O0VBQ0UseUNDcEVPO0VEcUVQLHFCQ3RFUTtBRnFOaEIsQ0N6SUk7OztFQUNFLG1CQUFBO0FENklOLENDMUlJOzs7RUFDRSxtQkFBQTtBRDhJTixDQ3pJUTs7O0VBQ0UseUJBQUE7QUQ2SVYsQ0NySU07OztFQUNFLDBCQUFBO0FEeUlSLENDcklJOzs7RUFDRSx1QkFBQTtBRHlJTixDQ3RJUTs7O0VBQ0UsMEJBQUE7QUQwSVYsQ0NySUk7OztFQUNFLHVCQUFBO0FEeUlOLENDcElROzs7RUFDRSw2QkFBQTtBRHdJVixDQzlITTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBRGlJUixDR3JSQTtFQUNFLGlDQUFBO0VBQ0Esc0JBQUE7QUh3UkYsQ0d0Ukk7RUFDRSx5QkROWTtFQ09aLGNESFk7QUYyUmxCLENHdlJNO0VBQ0UseUJEUlU7QUZpU2xCLENHdFJJO0VBQ0UseUJEVFk7RUNVWixjREZXO0VDR1gsK0NBQUE7QUh3Uk4sQ0d2Uk07RUFDRSx5QkRYVTtBRm9TbEIsQ0d0Ukk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBSHdSTixDR3ZSTTtFQUNFLHlCQUFBO0FIeVJSLENHdFJJO0VBQ0UsNkJBQUE7RUFDQSxjRGxCVztBRjBTakIsQ0d2Uk07RUFDRSx5QkQxQlU7QUZtVGxCLENHdFJJO0VBQ0UseUJENUJXO0VDNkJYLGNEakNZO0FGeVRsQixDR3ZSTTtFQUNFLHlCRDlCUztBRnVUakIsQ0d0Ukk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FId1JOLENHdlJNO0VBQ0UseUJEOUNVO0VDK0NWLHFCRC9DVTtFQ2dEVixZQUFBO0FIeVJSLENHcFJJO0VBQ0UscUJEdERZO0FGNFVsQixDR3JSTTtFQUNFLHlCRGxEVTtBRnlVbEIsQ0dwUkk7RUFDRSxxQkR4RFk7QUY4VWxCLENHclJNO0VBQ0UseUJEeERVO0FGK1VsQixDR3BSSTtFQUNFLHFCRDFEVztBRmdWakIsQ0dyUk07RUFDRSx5QkQzRFM7QUZrVmpCLENHcFJJO0VBQ0UscUJBQUE7QUhzUk4sQ0dyUk07RUFDRSx5QkRwRVU7QUYyVmxCLENHbFJFO0VBQ0UscURBQUE7RUFDQSx5QkFBQTtBSG9SSixDR25SSTtFQUNFLHFEQUFBO0FIcVJOLENJdldBO0VBQ0MsZ0JBQUE7RUFDQSw2QkFBQTtBSjBXRCxDSXZXRTtFQUNDLGNGQ2M7QUZ3V2pCLENJdFdFO0VBQ0MsY0ZYZTtBRm1YbEIsQ0lyV0U7RUFDQyxjRlhlO0FGa1hsQixDSXBXRTtFQUNDLGNGTGM7QUYyV2pCLENJbldFO0VBQ0MsMEJBQUE7QUpxV0gsQ0lqV0M7RUFDQyxpQ0FBQTtBSm1XRixDSWpXRTtFQUNDLHlCRjNCZTtFRTRCZixjRmhDZTtBRm1ZbEIsQ0lsV0c7RUFDQyx5QkY3QmM7QUZpWWxCLENJaFdFO0VBQ0MsNkJBQUE7RUFDQSxjRnhDZTtBRjBZbEIsQ0lqV0c7RUFDQyx5QkZwQ2M7QUZ1WWxCLENJL1ZFO0VBQ0MseUJGdkNjO0VFd0NkLGNGNUNlO0FGNllsQixDSTlWRTtFQUNDLHlCRnBEZTtFRXFEZixjRmpEZTtBRmlabEIsQ0kvVkc7RUFDQyx5QkZ0RGM7QUZ1WmxCLENJN1ZFO0VBQ0MseUJGcERjO0VFcURkLGNGekRlO0FGd1psQixDSTlWRztFQUNDLHlCRnREYTtBRnNaakIsQ0k1VkU7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0FKOFZILENJN1ZHO0VBQ0MseUJBQUE7QUorVkosQ0k3Vkc7RUFDQyxtQkFBQTtBSitWSixDSXpWRTtFQUNDLHFCRjdFZTtBRndhbEIsQ0kxVkc7RUFDQyx5QkZsRmM7QUY4YWxCLENLOWFBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUxpYkQsQ0s5YUE7RUFDQyxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUxpYkQsQ0svYUU7RUFDQyxjSEZjO0VHR2QseUJBQUE7QUxpYkgsQ0svYUU7RUFDQyx5QkhqQmU7QUZrY2xCLENLOWFDO0VBQ0MseUNISmE7RUdLYixxQkhOYztBRnNiaEIsQ0t6YUc7RUFDQyx5Q0hiVztFR2NYLHFCSGZZO0FGMmJoQixDS3RhQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FMeWFELENNcGRDO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkphZTtFSVpmLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QU51ZEYsQ08vZEE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBUGtlRCxDT2hlQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNDLGlEQUFBO0VBQ0QsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBUG1lRCxDT2xlQztFQUNDLHlDTEVhO0VLRGIscUJBQUE7QVBvZUYsQ09qZUk7RUFDRSxjTFRXO0VLVVgseUJMUFc7QUYwZWpCLENPamVJO0VBQ0UseUJMeEJZO0FGMmZsQixDTzVkRTtFQUNDLHlDTGZZO0VLZ0JaLHFCTGpCYTtBRmdmaEIsQ08xZEE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBUDZkRCxDUWxmQztFQUNDLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FScWZGLENRbmZFO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FScWZILENRbmZHO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FScWZKLENTcGdCQztFRFdFO0lBTUUsZUFBQTtFUnVmSDtBQUNGLENRcmZJO0VBQ0MsY0FBQTtBUnVmTCxDUW5mRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FScWZKLENRbmZJO0VBQ0MseUJBQUE7QVJxZkwsQ1FsZkk7RUFDQyxhQUFBO0FSb2ZMLENRaGZHO0VBQ0MsdUJBQUE7QVJrZkosQ1EvZUc7RUFDQyxxQkFBQTtBUmlmSixDUTdlRTtFQUNDLHlCQUFBO0FSK2VILENRN2VHO0VBQ0Msb0JBQUE7RUFoRUgsc0VBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QVJnakJELENRaGZHO0VBQ0Msb0JBQUE7QVJrZkosQ1E3ZUM7RUFDQyxVQUFBO0VBQ0EsaUJBQUE7QVIrZUYsQ1E1ZUM7RUFDQyx1QkFBQTtBUjhlRixDUTFrQkU7RUFDQyx5QkFBQTtFQUNBLHlCQUFBO0FSNmtCSCxDUTFrQkU7RUFPRCxzRUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBUnNrQkQsQ1F0bEJFO0VBQ0MseUJBQUE7RUFDQSx5QkFBQTtBUnlsQkgsQ1F0bEJFO0VBT0Qsc0VBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QVJrbEJELENRbG1CRTtFQUNDLHlCQUFBO0VBQ0EseUJBQUE7QVJvbUJILENRam1CRTtFQU9ELHNFQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FSNmxCRCxDQWhuQkE7RUFDQyx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQW1uQkQsQ1M1bEJDO0VUMUJEO0lBS0UsYUFBQTtFQXFuQkE7QUFDRixDQXBuQkM7RUFDQyxVQUFBO0VBQ0EsY0FBQTtBQXNuQkYsQ1NybUJDO0VUbkJBO0lBS0UsV0FBQTtFQXVuQkQ7QUFDRixDQXJuQkU7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUF1bkJILENBcm5CRztFQUNDLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBdW5CSixDU3ZuQkM7RVRHRTtJQUVFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxnQkFBQTtFQXNuQkg7QUFDRixDQXBuQkk7O0VBRUMsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQXNuQkwsQ0EvbUJFO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFpbkJILENBL21CRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBaW5CSCxDQS9tQkU7RUFDQyxnQkFBQTtBQWluQkgiLCJmaWxlIjoiY2xpZW50LWNvb2tpZS1wb2xpY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3QnKTtcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuc3ZnI2RhdGEtdGFibGUnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbltkYXRhLWljb25dOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1pY29uKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzXj0nZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSxcbltjbGFzcyo9JyBkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZmlsdGVyOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Mic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jb2xsYXBzZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZXhwYW5kOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jbG9zZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tdXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY1Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvd246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY2Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQtdW5zZXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjcnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjgnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZS1hbGw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY5Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNlYXJjaDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcGluOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Yic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1hZGQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZkJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWxlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZmJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXJpZ2h0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1za2lwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1wcmV2OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3Mic7XG59XG4iLCIubmd4LWRhdGF0YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAvKipcbiAgICogVmVydGljYWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogSG9yaXpvbnRhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCBIZWFkZXIgSGVpZ2h0IEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgcm93IGhlaWdodCBhZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIFNoYXJlZCBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBIZWFkZXIgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogQm9keSBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBGb290ZXIgU3R5bGVzXG4gICAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLm5neC1kYXRhdGFibGUgKixcbiAgLm5neC1kYXRhdGFibGUgKjpiZWZvcmUsXG4gIC5uZ3gtZGF0YXRhYmxlICo6YWZ0ZXIge1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbC52aXJ0dWFsaXplZCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC1ob3J6IC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1yb3csXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdztcbiAgICAtbW96LWZsZXgtZmxvdzogcm93O1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdztcbiAgICAtby1mbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LWZsb3c6IHJvdzsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzLFxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgei1pbmRleDogOTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWdyb3VwLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuc29ydGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IG1vdmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnNvcnQtYnRuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5yZXNpemVhYmxlOmhvdmVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpob3ZlciAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tTGVmdCB7XG4gICAgICAgICAgcmlnaHQ6IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tUmlnaHQge1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93ID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDQwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA2MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgMjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgODAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGksXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuIiwiLypcbiAgVGhpcyBzdHlsZXNoZWV0IHVzZXMgc2NzcyB2YWxpYWJsZXMgZm9yIG1vc3Qgb2YgdGhlIGNvbG9ycyAvIGJhY2tncm91bmQtY29sb3JzIG9mIHRoZSB0YWJsZVxuICB0byBlbmFibGUgdGhlIGN1c3RvbWl6YXRpb24gb2YgdGhlIGRpc3BsYXllZCB0YWJsZSB3aXRob3V0IGNsb25pbmcgdGhlIHN0eWxlc2hlZXQgaW50byB0aGVcbiAgb3duIGFwcGxpY2F0aW9uLlxuXG4gIFRvIG1vZGlmeSB0YWJsZSBjb2xvcnMsIGFkZCB0aGUgZm9sbG93aW5nIGxpbmVzIHRvIHRoZSBzY3NzIGZpbGUgb2YgeW91ciBhcHBsaWNhdGlvblxuICAodGhpcyBleGFtcGxlIG1vZGlmaWVzIHRoZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgcm93IC0gc2VsZWN0aW9uVHlwZSA9IHNpbmdsZSwgbXVsdGkgb3IgbXVsdGlDbGljayk6XG5cbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ6IHllbGxvdztcbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoeWVsbG93LCAwLjIpO1xuXG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL21hdGVyaWFsLnNjc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cblRoYXQncyBhbGwuXG4qL1xuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC8qKlxuXHQgKiBTaGFyZWQgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogR2xvYmFsIFJvdyBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBIZWFkZXIgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogQm9keSBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBGb290ZXIgU3R5bGVzXG5cdCAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnN0cmlwZWQgLmRhdGF0YWJsZS1yb3ctb2RkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGZmZTtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTNhZTQ7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0ZmZlO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkzYWU0O1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5lbXB0eS1yb3cge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5sb2FkaW5nLXJvdyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctbGVmdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUlIV1BTa05lU0JtSmhUUVZ0YmlETkNnQVNhZ0lJdUpYOE9nQUFBQUJKUlU1RXJrSmdnZz09KTsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1yaWdodCxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSTEyUFFrTmRpMVZUUTVnYlN3a0FzRFFBUkxBSUd0T1NGVUFBQUFBQkpSVTVFcmtKZ2dnPT0pOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLCBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5kcmFnZ2luZyAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNlZWU7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBwYWRkaW5nOiAxMHB4OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtZ3JvdXAtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2Q5ZDhkOTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZDlkOGQ5OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRvcDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWQxZjk7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciAuYmFyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuICAgICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA2Y2M4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNikgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuYWN0aXZlIGEge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDZweCAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4vKipcbiAqIENoZWNrYm94ZXNcbioqL1xuLmRhdGF0YWJsZS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDsgfVxuICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjJmMmYyOyB9XG4gICAgLmRhdGF0YWJsZS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTsgfVxuICAgIC5kYXRhdGFibGUtY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyoqXG4gKiBQcm9ncmVzcyBiYXIgYW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHF1ZXJ5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSkgc2NhbGUoMC4zLCAxKTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLCAxKTsgfSB9XG4iLCIubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjojYjNiM2IzICNjY2MgI2Q5ZDlkOX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzpub25lfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3d7dG9wOi0ycHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5OTk7Ym9yZGVyLXdpZHRoOjAgNXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWFycm93OmhvdmVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMzMzfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtdG9wPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtcmlnaHQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtYm90dG9tPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtbGVmdD4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQ6bm90KC5uZy1zZWxlY3Qtb3BlbmVkKT4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItY29sb3I6IzAwN2VmZjtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KSwwIDAgMCAzcHggcmdiYSgwLDEyNiwyNTUsMC4xKX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9Lm5nLXNlbGVjdCAubmctaGFzLXZhbHVlIC5uZy1wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmV9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcntjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7bWluLWhlaWdodDozNnB4O2FsaWduLWl0ZW1zOmNlbnRlcn0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyOmhvdmVye2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLDAuMDYpfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1sZWZ0OjEwcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7Y29sb3I6Izk5OX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXJ7aGVpZ2h0OjM2cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3RvcDo1cHg7bGVmdDowO3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6NTBweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1sZWZ0OjUwcHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTtib3JkZXI6MXB4IHNvbGlkICNlNmU2ZTZ9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nOjAgNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctbGVmdDo3cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6N3B4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2ZvbnQtc2l6ZTouOWVtO21hcmdpbi1ib3R0b206NXB4O2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmO2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDo1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVkIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nLWxlZnQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWQgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6NXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjFweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxcHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2QxZThmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0e2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmY7Ym9yZGVyLXJpZ2h0Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmZ9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodHtib3JkZXItbGVmdDowO2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nOjAgMCAzcHggM3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZzowIDNweCAzcHggMH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dD5pbnB1dHtjb2xvcjojMDAwfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVye3RvcDo1cHg7cGFkZGluZy1ib3R0b206NXB4O3BhZGRpbmctbGVmdDozcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcntwYWRkaW5nLXJpZ2h0OjNweDtwYWRkaW5nLWxlZnQ6MH0ubmctc2VsZWN0IC5uZy1jbGVhci13cmFwcGVye2NvbG9yOiM5OTl9Lm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlcjpob3ZlciAubmctY2xlYXJ7Y29sb3I6I0QwMDIxQn0ubmctc2VsZWN0IC5uZy1zcGlubmVyLXpvbmV7cGFkZGluZzo1cHggNXB4IDAgMH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLXNwaW5uZXItem9uZXtwYWRkaW5nOjVweCAwIDAgNXB4fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7d2lkdGg6MjVweDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7cGFkZGluZy1sZWZ0OjVweDtwYWRkaW5nLXJpZ2h0OjB9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcjpob3ZlciAubmctYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjojNjY2fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXIgLm5nLWFycm93e2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDVweCAyLjVweH0ubmctZHJvcGRvd24tcGFuZWx7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2NjYztib3gtc2hhZG93OjAgMXB4IDAgcmdiYSgwLDAsMCwwLjA2KTtsZWZ0OjB9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3B7Ym90dG9tOjEwMCU7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tY29sb3I6I2U2ZTZlNjttYXJnaW4tYm90dG9tOi0xcHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3AgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtcmlnaHR7bGVmdDoxMDAlO3RvcDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXJpZ2h0IC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmZpcnN0LWNoaWxke2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbXt0b3A6MTAwJTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1jb2xvcjojZTZlNmU2O21hcmdpbi10b3A6LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbSAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpsYXN0LWNoaWxke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnR7bGVmdDotMTAwJTt0b3A6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnQgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1oZWFkZXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1mb290ZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXB7dXNlci1zZWxlY3Q6bm9uZTtwYWRkaW5nOjhweCAxMHB4O2ZvbnQtd2VpZ2h0OjUwMDtjb2xvcjpyZ2JhKDAsMCwwLDAuNTQpO2N1cnNvcjpwb2ludGVyfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tbWFya2Vke2JhY2tncm91bmQtY29sb3I6I2Y1ZmFmZn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWR7Y29sb3I6cmdiYSgwLDAsMCwwLjU0KTtiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmY7Zm9udC13ZWlnaHQ6NjAwfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwwLjg3KTtwYWRkaW5nOjhweCAxMHB4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2Vke2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQgLm5nLW9wdGlvbi1sYWJlbCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWQgLm5nLW9wdGlvbi1sYWJlbHtmb250LXdlaWdodDo2MDB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmYWZmO2NvbG9yOiMzMzN9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1kaXNhYmxlZHtjb2xvcjojY2NjfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tY2hpbGR7cGFkZGluZy1sZWZ0OjIycHh9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWNoaWxke3BhZGRpbmctcmlnaHQ6MjJweDtwYWRkaW5nLWxlZnQ6MH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLXRhZy1sYWJlbHtmb250LXNpemU6ODAlO2ZvbnQtd2VpZ2h0OjQwMDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctdGFnLWxhYmVse3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDowfVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVse2RpcmVjdGlvbjpydGw7dGV4dC1hbGlnbjpyaWdodH1cbiIsImh0bWwsXG5ib2R5IHtcblx0c2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cbmh0bWwsXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDAlO1xufVxuYm9keSB7XG5cdG1hcmdpbjogMDtcblx0Zm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuKiB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiBibGFjaztcblx0Jjp2aXNpdGVkIHtcblx0XHRjb2xvcjogIzAwMDAwMDtcblx0fVxufVxuXG5idXR0b24ge1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRleHRhcmVhIHtcblx0Ym9yZGVyOiBub25lO1xufVxuXG5pIHtcblx0Zm9udC1zdHlsZTogSXRhbGljO1xufVxuXG5iIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXNcIjtcblxuLmNvb2tpZXMtcG9saWN5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTNlYWYxO1xuXHRwYWRkaW5nOiA2MHB4IDA7XG5cdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRwYWRkaW5nOiAxNXB4O1xuXHR9XG5cdC5jb250YWluZXIge1xuXHRcdHdpZHRoOiA2MCU7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cblx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cblx0XHQudGl0bGUtd3JhcHBlciB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblxuXHRcdFx0LnRpdGxlIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMzJweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDM2cHg7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0fVxuXG5cdFx0XHQuZGF0ZXMge1xuXHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTVweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5tb2RpZmVkLWRhdGUsXG5cdFx0XHRcdC5lZmZlY3RpdmUtZGF0ZSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEzNiU7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdGNvbG9yOiAjNTU2Mjc0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LnNlY3Rpb24ge1xuXHRcdC5zZWN0aW9uLXRpdGxlIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDEzNCU7XG5cdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdG1hcmdpbi10b3A6IDYwcHg7XG5cdFx0fVxuXHRcdC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyMDAlO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblx0XHRcdGNvbG9yOiAjNTU2Mjc0O1xuXHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHR9XG5cdFx0LnNlY3Rpb24tdGFibGUge1xuXHRcdFx0bWFyZ2luLXRvcDogMzBweDtcblx0XHR9XG5cdH1cbn1cbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnNcIjtcblxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtZm9jdXNlZDpub3QoLm5nLXNlbGVjdC1vcGVuZWQpID4gLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46Om5nLWRlZXAge1xuICBmb3JtIHtcbiAgICBiMmItbmd4LXNlbGVjdCB7XG4gICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICBuZy1zZWxlY3Qge1xuICAgICAgICAgICYubmctdG91Y2hlZCB7XG4gICAgICAgICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmZvcm0tc3VibWl0dGVkIHtcbiAgICAgIGIyYi1uZ3gtc2VsZWN0IHtcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcbiAgICAgICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9ybSB7XG4gICAgYjJiLW5neC1jb3VudHJ5LXNlbGVjdCB7XG4gICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICBuZy1zZWxlY3Qge1xuICAgICAgICAgICYubmctdG91Y2hlZCB7XG4gICAgICAgICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmZvcm0tc3VibWl0dGVkIHtcbiAgICAgIGIyYi1uZ3gtY291bnRyeS1zZWxlY3Qge1xuICAgICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSxcbi5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlLFxuLm5nLXNlbGVjdC1vcGVuZWQge1xuICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICB9XG5cbiAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMTUsIDE1LCAxNywgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICAmLmJhY2tncm91bmQtZ3JheSB7XG4gICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuICAgICAgLm5nLW9wdGlvbiB7XG4gICAgICAgIC5uZy1vcHRpb24tbWFya2VkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkNWRiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwO1xuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuICAgICAgLm5nLW9wdGlvbiB7XG4gICAgICAgIC5uZy1vcHRpb24tbWFya2VkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IHtcbiAgICAubmctdmFsdWUge1xuICAgICAgLm5nLXZhbHVlLWxhYmVsIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIC5uZy12YWx1ZS1jb250YWluZXIge1xuICAgICAgICAubmctcGxhY2Vob2xkZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIHtcbiAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgIC5uZy12YWx1ZS1jb250YWluZXIge1xuICAgICAgLm5nLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkY29sb3ItYmxhY2stOTAwOiAjMDAwMDAwO1xuJGNvbG9yLWJsYWNrLTgwMDogIzBmMGYxMTtcbiRjb2xvci1ibGFjay0xMDA6ICMyZTJlMzQ7XG4kY29sb3ItYmxhY2stNTA6IHJnYmEoMTc3LCAxNzcsIDE3NywgMC42KTtcblxuJGNvbG9yLXdoaXRlLTkwMDogI2ZmZmZmZjtcbiRjb2xvci13aGl0ZS0yMDA6ICNlM2VhZjE7XG4kY29sb3Itd2hpdGUtMTAwOiAjZjNmNmY4O1xuXG4kY29sb3ItYmx1ZS01MDA6ICMwMDVkZmY7XG4kY29sb3ItYmx1ZS0xMDA6ICM1OTk1ZmU7XG4kY29sb3ItYmx1ZS01MDogI2QyZGVmZjtcblxuJGNvbG9yLWdyYXktOTAwOiAjMGYwZjExO1xuJGNvbG9yLWdyYXktNjAwOiAjMjIyMjI0O1xuJGNvbG9yLWdyYXktNTAwOiAjNTU2Mjc0O1xuJGNvbG9yLWdyYXktNDAwOiAjNmM3MDc3O1xuJGNvbG9yLWdyYXktMzAwOiAjYTdhOGFkO1xuJGNvbG9yLWdyYXktMjAwOiAjOWZhNGJiO1xuJGNvbG9yLWdyYXktMTAwOiAjZjNmNmY4O1xuXG4kY29sb3ItcmVkLTUwMDogI2U2M2QzZDtcbiRjb2xvci1yZWQtNTA6IHJnYmEoMjMwLCA2MSwgNjEsIDAuMDUpO1xuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC1idXR0b24ge1xuICBib3JkZXI6IDAuMTZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICYuYmFja2dyb3VuZCB7XG4gICAgJi5iYWNrZ3JvdW5kLWJsYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG4gICAgICBjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtd2hpdGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS05MDA7XG4gICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMXJlbSByZ2JhKDEwLCA4LCA1OCwgMC4xKTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtcmVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjNkM2Q7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMXJlbSByZ2JhKDEwLCA4LCA1OCwgMC4xKTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzZDNkO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtdHJhbnNwYXJlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogJGNvbG9yLWdyYXktOTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC1ibHVlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTUwMDtcbiAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLWhvdmVyLWJsYWNrIHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2RmZThmNTtcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYub3V0bGluZSB7XG4gICAgJi5vdXRsaW5lLWJsYWNrIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm91dGxpbmUtd2hpdGUge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYub3V0bGluZS1ibHVlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5vdXRsaW5lLWdyYXkge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGZlOGY1O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTUwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICRjb2xvci13aGl0ZS05MDAgIWltcG9ydGFudDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay01MCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC1saW5rIHtcblx0dHJhbnNpdGlvbjogMC41cztcblx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cblx0Ji50ZXh0IHtcblx0XHQmLnRleHQtYmx1ZSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuXHRcdH1cblxuXHRcdCYudGV4dC1ibGFjayB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHR9XG5cblx0XHQmLnRleHQtd2hpdGUge1xuXHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0fVxuXG5cdFx0Ji50ZXh0LWdyYXkge1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ncmF5LTUwMDtcblx0XHR9XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdH1cblx0fVxuXG5cdCYuYmFja2dyb3VuZCB7XG5cdFx0Ym9yZGVyOiAwLjE2cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuXG5cdFx0Ji5iYWNrZ3JvdW5kLXdoaXRlIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMjAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC10cmFuc3BhcmVudCB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLWdyYXkge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuXHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLWJsYWNrIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC1ibHVlIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTUwMDtcblx0XHRcdGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtbGlnaHQtYmx1ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZWZmNGZhO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdGNvbG9yOiAjMDA1ZGZmICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2U2ZWRmYTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQmLm91dGxpbmUge1xuXHRcdCYub3V0bGluZS13aGl0ZSB7XG5cdFx0XHRib3JkZXItY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnNcIjtcblxuLmIyYi1uZ3gtaW5wdXQtbGFiZWwge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogIzlmYTRiYjtcblx0bWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uYjJiLW5neC1pbnB1dCB7XG5cdGJvcmRlcjogMC4xNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcblx0cGFkZGluZzogMTRweCAxNnB4O1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogIzU1NjI3NDtcblx0Ji5iYWNrZ3JvdW5kIHtcblx0XHQmLmJhY2tncm91bmQtZ3JheSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWdyYXktNDAwO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXktMTAwO1xuXHRcdH1cblx0XHQmLmJhY2tncm91bmQtd2hpdGUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cdH1cblx0Ji5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0fVxufVxuXG4uZm9ybS1zdWJtaXR0ZWQge1xuXHQuYjJiLW5neC1pbnB1dCB7XG5cdFx0Ji5iYWNrZ3JvdW5kIHtcblx0XHRcdCYubmctaW52YWxpZCB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi5jb250cm9sLWVycm9yIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6IHJnYmEoMTA4LCAxMTIsIDExOSwgMC42KTtcblx0bWFyZ2luLXRvcDogNHB4O1xufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC1pY29uIHtcblx0Ji5jaXJjbGUge1xuXHRcdGhlaWdodDogM3JlbTtcblx0XHR3aWR0aDogM3JlbTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cbn1cbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnNcIjtcblxuLmIyYi1uZ3gtdGV4dGFyZWEtbGFiZWwge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogIzlmYTRiYjtcblx0bWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLmIyYi1uZ3gtdGV4dGFyZWEge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQ6ICNmM2Y2Zjg7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjNTU2Mjc0O1xuXHRwYWRkaW5nOiAxNHB4IDE2cHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRyZXNpemU6IG5vbmU7XG5cdCYubmctaW52YWxpZC5uZy10b3VjaGVkIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwO1xuXHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG5cdH1cbiAgJi5iYWNrZ3JvdW5kIHtcbiAgICAmLmJhY2tncm91bmQtZ3JheSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWdyYXktNDAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXktMTAwO1xuICAgIH1cbiAgICAmLmJhY2tncm91bmQtd2hpdGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tc3VibWl0dGVkIHtcblx0LmIyYi1uZ3gtdGV4dGFyZWEge1xuXHRcdCYubmctaW52YWxpZCB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwO1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0XHR9XG5cdH1cbn1cblxuLmNvbnRyb2wtZXJyb3Ige1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogcmdiYSgxMDgsIDExMiwgMTE5LCAwLjYpO1xuXHRtYXJnaW4tdG9wOiA0cHg7XG59XG4iLCJAaW1wb3J0IFwiL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzXCI7XG5cbi8vIHN0ZXBwZXJcbkBtaXhpbiBzdHlsZVN0ZXBMaW5lKCRpbmRleCkge1xuXHQubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuXHRcdCYgKyAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lOm50aC1jaGlsZCgjeyRpbmRleH0pIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDVERkY7XG5cdFx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdH1cblxuXHRcdCYgKyAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lOm50aC1jaGlsZCgjeyRpbmRleCArIDJ9KSB7XG5cdFx0XHRAaW5jbHVkZSBzdGVwTmV4dExpbmU7XG5cdFx0fVxuXHR9XG59XG5cbkBtaXhpbiBzdGVwTmV4dExpbmUoKSB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwNWRmZiwgcmdiYSgwLCA5MywgMjU1LCAwKSk7XG5cdGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDk7XG5cdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuXHRoZWlnaHQ6IDRweDtcblx0Ym9yZGVyOiBub25lO1xufVxuXG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG5cblx0Lm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XG5cdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG5cdFx0Lm1hdC1zdGVwLWhlYWRlciB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRnYXA6IDdweDtcblx0XHRcdHBhZGRpbmc6IDA7XG5cblx0XHRcdC5tYXQtc3RlcC1sYWJlbCB7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdFx0XHRcdGNvbG9yOiAjQzRDNEM0O1xuXHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KCcxJykge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYtc2VsZWN0ZWQge1xuXHRcdFx0XHRcdGNvbG9yOiAjMDAwMDAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5tYXQtc3RlcC1pY29uIHtcblx0XHRcdFx0d2lkdGg6IDEwcHg7XG5cdFx0XHRcdGhlaWdodDogMTBweDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXG5cdFx0XHRcdCYtc2VsZWN0ZWQsICYtc3RhdGUtZWRpdCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNURGRjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xuXHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0fVxuXG5cdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Lm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjRDlEOUQ5O1xuXG5cdFx0XHQmOmZpcnN0LW9mLXR5cGUge1xuXHRcdFx0XHRtYXJnaW46IDAgLTclIDAgLTEwJTtcblx0XHRcdFx0QGluY2x1ZGUgc3RlcE5leHRMaW5lO1xuXHRcdFx0fVxuXG5cdFx0XHQmOmxhc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdG1hcmdpbjogMCAtMjMlIDAgLTclO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XG5cdFx0cGFkZGluZzogMDtcblx0XHRvdmVyZmxvdzogaW5pdGlhbDtcblx0fVxuXG5cdC5jZGstcHJvZ3JhbS1mb2N1c2VkLCAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0fVxufVxuXG4ubGFzdC1lZGl0ZWQtc3RlcC0xIHtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSgyKTtcbn1cblxuLmxhc3QtZWRpdGVkLXN0ZXAtMiB7XG5cdEBpbmNsdWRlIHN0eWxlU3RlcExpbmUoMik7XG5cdEBpbmNsdWRlIHN0eWxlU3RlcExpbmUoNCk7XG59XG4iLCIkYnJlYWtwb2ludC0xOiAzNmVtO1xuJGJyZWFrcG9pbnQtMjogNDhlbTtcbiRicmVha3BvaW50LTM6IDU1LjVlbTtcbiRicmVha3BvaW50LTQ6IDc1ZW07XG4kYnJlYWtwb2ludC01OiA4Ny41ZW07XG5cbiRicmVha3BvaW50czogKFxuXHRcIjFcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtMSxcblx0KSxcblx0XCIyXCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTIsXG5cdCksXG5cdFwiM1wiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC0zLFxuXHQpLFxuXHRcIjRcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtNCxcblx0KSxcblx0XCI1XCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTUsXG5cdCksXG5cdFwiNlwiOiAoXG5cdFx0bWluLXdpZHRoOiAkYnJlYWtwb2ludC01LFxuXHQpLFxuKSAhZGVmYXVsdDtcblxuQG1peGluIGJyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcblx0QG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpKX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 61965:
/*!**********************************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickType": () => (/* binding */ ClickType),
/* harmony export */   "ColumnChangesService": () => (/* binding */ ColumnChangesService),
/* harmony export */   "ColumnMode": () => (/* binding */ ColumnMode),
/* harmony export */   "ContextmenuType": () => (/* binding */ ContextmenuType),
/* harmony export */   "DataTableBodyCellComponent": () => (/* binding */ DataTableBodyCellComponent),
/* harmony export */   "DataTableBodyComponent": () => (/* binding */ DataTableBodyComponent),
/* harmony export */   "DataTableBodyRowComponent": () => (/* binding */ DataTableBodyRowComponent),
/* harmony export */   "DataTableColumnCellDirective": () => (/* binding */ DataTableColumnCellDirective),
/* harmony export */   "DataTableColumnCellTreeToggle": () => (/* binding */ DataTableColumnCellTreeToggle),
/* harmony export */   "DataTableColumnDirective": () => (/* binding */ DataTableColumnDirective),
/* harmony export */   "DataTableColumnHeaderDirective": () => (/* binding */ DataTableColumnHeaderDirective),
/* harmony export */   "DataTableFooterComponent": () => (/* binding */ DataTableFooterComponent),
/* harmony export */   "DataTableFooterTemplateDirective": () => (/* binding */ DataTableFooterTemplateDirective),
/* harmony export */   "DataTableHeaderCellComponent": () => (/* binding */ DataTableHeaderCellComponent),
/* harmony export */   "DataTableHeaderComponent": () => (/* binding */ DataTableHeaderComponent),
/* harmony export */   "DataTablePagerComponent": () => (/* binding */ DataTablePagerComponent),
/* harmony export */   "DataTableRowWrapperComponent": () => (/* binding */ DataTableRowWrapperComponent),
/* harmony export */   "DataTableSelectionComponent": () => (/* binding */ DataTableSelectionComponent),
/* harmony export */   "DataTableSummaryRowComponent": () => (/* binding */ DataTableSummaryRowComponent),
/* harmony export */   "DatatableComponent": () => (/* binding */ DatatableComponent),
/* harmony export */   "DatatableFooterDirective": () => (/* binding */ DatatableFooterDirective),
/* harmony export */   "DatatableGroupHeaderDirective": () => (/* binding */ DatatableGroupHeaderDirective),
/* harmony export */   "DatatableGroupHeaderTemplateDirective": () => (/* binding */ DatatableGroupHeaderTemplateDirective),
/* harmony export */   "DatatableRowDetailDirective": () => (/* binding */ DatatableRowDetailDirective),
/* harmony export */   "DatatableRowDetailTemplateDirective": () => (/* binding */ DatatableRowDetailTemplateDirective),
/* harmony export */   "DimensionsHelper": () => (/* binding */ DimensionsHelper),
/* harmony export */   "DraggableDirective": () => (/* binding */ DraggableDirective),
/* harmony export */   "Keys": () => (/* binding */ Keys),
/* harmony export */   "LongPressDirective": () => (/* binding */ LongPressDirective),
/* harmony export */   "NgxDatatableModule": () => (/* binding */ NgxDatatableModule),
/* harmony export */   "OrderableDirective": () => (/* binding */ OrderableDirective),
/* harmony export */   "ProgressBarComponent": () => (/* binding */ ProgressBarComponent),
/* harmony export */   "ResizeableDirective": () => (/* binding */ ResizeableDirective),
/* harmony export */   "RowHeightCache": () => (/* binding */ RowHeightCache),
/* harmony export */   "ScrollbarHelper": () => (/* binding */ ScrollbarHelper),
/* harmony export */   "ScrollerComponent": () => (/* binding */ ScrollerComponent),
/* harmony export */   "SelectionType": () => (/* binding */ SelectionType),
/* harmony export */   "SortDirection": () => (/* binding */ SortDirection),
/* harmony export */   "SortType": () => (/* binding */ SortType),
/* harmony export */   "VisibilityDirective": () => (/* binding */ VisibilityDirective),
/* harmony export */   "adjustColumnWidths": () => (/* binding */ adjustColumnWidths),
/* harmony export */   "camelCase": () => (/* binding */ camelCase),
/* harmony export */   "columnGroupWidths": () => (/* binding */ columnGroupWidths),
/* harmony export */   "columnTotalWidth": () => (/* binding */ columnTotalWidth),
/* harmony export */   "columnsByPin": () => (/* binding */ columnsByPin),
/* harmony export */   "columnsByPinArr": () => (/* binding */ columnsByPinArr),
/* harmony export */   "columnsTotalWidth": () => (/* binding */ columnsTotalWidth),
/* harmony export */   "deCamelCase": () => (/* binding */ deCamelCase),
/* harmony export */   "deepValueGetter": () => (/* binding */ deepValueGetter),
/* harmony export */   "elementsFromPoint": () => (/* binding */ elementsFromPoint),
/* harmony export */   "emptyStringGetter": () => (/* binding */ emptyStringGetter),
/* harmony export */   "forceFillColumnWidths": () => (/* binding */ forceFillColumnWidths),
/* harmony export */   "getTotalFlexGrow": () => (/* binding */ getTotalFlexGrow),
/* harmony export */   "getVendorPrefixedName": () => (/* binding */ getVendorPrefixedName),
/* harmony export */   "getterForProp": () => (/* binding */ getterForProp),
/* harmony export */   "groupRowsByParents": () => (/* binding */ groupRowsByParents),
/* harmony export */   "id": () => (/* binding */ id),
/* harmony export */   "isNullOrUndefined": () => (/* binding */ isNullOrUndefined),
/* harmony export */   "nextSortDir": () => (/* binding */ nextSortDir),
/* harmony export */   "numericIndexGetter": () => (/* binding */ numericIndexGetter),
/* harmony export */   "optionalGetterForProp": () => (/* binding */ optionalGetterForProp),
/* harmony export */   "orderByComparator": () => (/* binding */ orderByComparator),
/* harmony export */   "selectRows": () => (/* binding */ selectRows),
/* harmony export */   "selectRowsBetween": () => (/* binding */ selectRowsBetween),
/* harmony export */   "setColumnDefaults": () => (/* binding */ setColumnDefaults),
/* harmony export */   "shallowValueGetter": () => (/* binding */ shallowValueGetter),
/* harmony export */   "sortRows": () => (/* binding */ sortRows),
/* harmony export */   "throttle": () => (/* binding */ throttle),
/* harmony export */   "throttleable": () => (/* binding */ throttleable),
/* harmony export */   "translateTemplates": () => (/* binding */ translateTemplates),
/* harmony export */   "translateXY": () => (/* binding */ translateXY)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26469);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 61755);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);







/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */

const _c0 = ["*"];
const _c1 = ["cellTemplate"];

function DataTableBodyCellComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4)(1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onCheckboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.isSelected);
  }
}

function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
  }
}

function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
  }
}

function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
  }
}

function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.onTreeAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.treeStatus === "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
  }
}

function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}

const _c2 = function (a0) {
  return {
    cellContext: a0
  };
};

function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r7.cellContext));
  }
}

function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.column.treeToggleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.column.treeToggleTemplate);
  }
}

function DataTableBodyCellComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}

function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) {}

function DataTableBodyCellComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
  }
}

function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ii_r5 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onActivate($event, ii_r5));
    })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onTreeAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
  }
}

function DataTableBodyRowComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r1.type, " datatable-row-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
  }
}

function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-body-row", 1);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", -1);
  }
}

function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) {}

function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
  }
}

function DataTableRowWrapperComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.getGroupHeaderStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
  }
}

function DataTableRowWrapperComponent_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
  }
}

function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) {}

function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
  }
}

function DataTableRowWrapperComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r2.detailRowHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
  }
}

function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-progress");
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 9);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onTreeAction(group_r7));
    })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r1.onActivate($event, ctx_r15.indexes.first + i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7 && group_r7.treeStatus);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const i_r20 = restoredCtx.index;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r1.onActivate($event, i_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
  }

  if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r7.value)("ngForTrackBy", ctx_r11.rowTrackingFn);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.rowContextmenu.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const i_r8 = ctx.index;

    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7 && group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7 && group_r7[i_r8]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r10);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 16);
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
  }
}

function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-scroller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.onBodyScroll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
  }
}

function DataTableBodyComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}

function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) {}

function DataTableHeaderCellComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
  }
}

function DataTableHeaderCellComponent_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6)(1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.select.emit(!ctx_r5.allRowsSelected));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.allRowsSelected);
  }
}

function DataTableHeaderCellComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onSort());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}

function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) {}

function DataTableHeaderCellComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
  }
}

function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const column_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onColumnResized($event, column_r3));
    })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onLongPressStart($event));
    })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onLongPressEnd($event));
    })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onSort($event));
    })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.select.emit($event));
    })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.columnContextmenu.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("sortUnsetIcon", ctx_r2.sortUnsetIcon)("allRowsSelected", ctx_r2.allRowsSelected);
  }
}

function DataTableHeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 19, "datatable-header-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("datatable-row-" + colGroup_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
  }
}

function DataTablePagerComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const pg_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.selectPage(pg_r1.number));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const pg_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r1.number === ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "page " + pg_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pg_r1.text, " ");
  }
}

function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) {}

const _c3 = function (a0, a1, a2, a3, a4) {
  return {
    rowCount: a0,
    pageSize: a1,
    selectedCount: a2,
    curPage: a3,
    offset: a4
  };
};

function DataTableFooterComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c3, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
  }
}

function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
  }
}

function DataTableFooterComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
  }
}

function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-pager", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.page.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
  }
}

const _c4 = function (a0) {
  return {
    "selected-count": a0
  };
};

function DatatableComponent_datatable_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onColumnSort($event));
    })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onColumnResize($event));
    })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onColumnReorder($event));
    })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onHeaderSelect($event));
    })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onColumnContextmenu($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 15, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("sortUnsetIcon", ctx_r0.cssClasses.sortUnset)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
  }
}

function DatatableComponent_datatable_footer_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-footer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onFooterPage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
  }
}

class ScrollbarHelper {
  constructor(document) {
    this.document = document;
    this.width = this.getWidth();
  }

  getWidth() {
    const outer = this.document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar';
    this.document.body.appendChild(outer);
    const widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';
    const inner = this.document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);
    const widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    return widthNoScroll - widthWithScroll;
  }

}

ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) {
  return new (t || ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

ScrollbarHelper.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ScrollbarHelper,
  factory: ScrollbarHelper.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollbarHelper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */


class DimensionsHelper {
  getDimensions(element) {
    return element.getBoundingClientRect();
  }

}

DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) {
  return new (t || DimensionsHelper)();
};

DimensionsHelper.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: DimensionsHelper,
  factory: DimensionsHelper.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DimensionsHelper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */


class ColumnChangesService {
  constructor() {
    this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }

  get columnInputChanges$() {
    return this.columnInputChanges.asObservable();
  }

  onInputChange() {
    this.columnInputChanges.next();
  }

}

ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) {
  return new (t || ColumnChangesService)();
};

ColumnChangesService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ColumnChangesService,
  factory: ColumnChangesService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnChangesService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class DataTableFooterTemplateDirective {
  constructor(template) {
    this.template = template;
  }

}

DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) {
  return new (t || DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

DataTableFooterTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableFooterTemplateDirective,
  selectors: [["", "ngx-datatable-footer-template", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableFooterTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-footer-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */


class VisibilityDirective {
  constructor(element, zone) {
    this.element = element;
    this.zone = zone;
    this.isVisible = false;
    this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  ngOnInit() {
    this.runCheck();
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }

  onVisibilityChange() {
    // trigger zone recalc for columns
    this.zone.run(() => {
      this.isVisible = true;
      this.visible.emit(true);
    });
  }

  runCheck() {
    const check = () => {
      // https://davidwalsh.name/offsetheight-visibility
      const {
        offsetHeight,
        offsetWidth
      } = this.element.nativeElement;

      if (offsetHeight && offsetWidth) {
        clearTimeout(this.timeout);
        this.onVisibilityChange();
      } else {
        clearTimeout(this.timeout);
        this.zone.runOutsideAngular(() => {
          this.timeout = setTimeout(() => check(), 50);
        });
      }
    };

    this.timeout = setTimeout(() => check());
  }

}

VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) {
  return new (t || VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

VisibilityDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: VisibilityDirective,
  selectors: [["", "visibilityObserver", ""]],
  hostVars: 2,
  hostBindings: function VisibilityDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isVisible);
    }
  },
  outputs: {
    visible: "visible"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisibilityDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[visibilityObserver]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    isVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.visible']
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */


class DraggableDirective {
  constructor(element) {
    this.dragX = true;
    this.dragY = true;
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isDragging = false;
    this.element = element.nativeElement;
  }

  ngOnChanges(changes) {
    if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
      this.onMousedown(changes['dragEventTarget'].currentValue);
    }
  }

  ngOnDestroy() {
    this._destroySubscription();
  }

  onMouseup(event) {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.element.classList.remove('dragging');

    if (this.subscription) {
      this._destroySubscription();

      this.dragEnd.emit({
        event,
        element: this.element,
        model: this.dragModel
      });
    }
  }

  onMousedown(event) {
    // we only want to drag the inner header text
    const isDragElm = event.target.classList.contains('draggable');

    if (isDragElm && (this.dragX || this.dragY)) {
      event.preventDefault();
      this.isDragging = true;
      const mouseDownPos = {
        x: event.clientX,
        y: event.clientY
      };
      const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'mouseup');
      this.subscription = mouseup.subscribe(ev => this.onMouseup(ev));
      const mouseMoveSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'mousemove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(mouseup)).subscribe(ev => this.move(ev, mouseDownPos));
      this.subscription.add(mouseMoveSub);
      this.dragStart.emit({
        event,
        element: this.element,
        model: this.dragModel
      });
    }
  }

  move(event, mouseDownPos) {
    if (!this.isDragging) return;
    const x = event.clientX - mouseDownPos.x;
    const y = event.clientY - mouseDownPos.y;
    if (this.dragX) this.element.style.left = `${x}px`;
    if (this.dragY) this.element.style.top = `${y}px`;
    this.element.classList.add('dragging');
    this.dragging.emit({
      event,
      element: this.element,
      model: this.dragModel
    });
  }

  _destroySubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }

}

DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
  return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

DraggableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DraggableDirective,
  selectors: [["", "draggable", ""]],
  inputs: {
    dragEventTarget: "dragEventTarget",
    dragModel: "dragModel",
    dragX: "dragX",
    dragY: "dragY"
  },
  outputs: {
    dragStart: "dragStart",
    dragging: "dragging",
    dragEnd: "dragEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DraggableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[draggable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    dragEventTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class ResizeableDirective {
  constructor(element, renderer) {
    this.renderer = renderer;
    this.resizeEnabled = true;
    this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.resizing = false;
    this.element = element.nativeElement;
  }

  ngAfterViewInit() {
    const renderer2 = this.renderer;
    this.resizeHandle = renderer2.createElement('span');

    if (this.resizeEnabled) {
      renderer2.addClass(this.resizeHandle, 'resize-handle');
    } else {
      renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
    }

    renderer2.appendChild(this.element, this.resizeHandle);
  }

  ngOnDestroy() {
    this._destroySubscription();

    if (this.renderer.destroyNode) {
      this.renderer.destroyNode(this.resizeHandle);
    } else if (this.resizeHandle) {
      this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
    }
  }

  onMouseup() {
    this.resizing = false;

    if (this.subscription && !this.subscription.closed) {
      this._destroySubscription();

      this.resize.emit(this.element.clientWidth);
    }
  }

  onMousedown(event) {
    const isHandle = event.target.classList.contains('resize-handle');
    const initialWidth = this.element.clientWidth;
    const mouseDownScreenX = event.screenX;

    if (isHandle) {
      event.stopPropagation();
      this.resizing = true;
      const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'mouseup');
      this.subscription = mouseup.subscribe(ev => this.onMouseup());
      const mouseMoveSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'mousemove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(mouseup)).subscribe(e => this.move(e, initialWidth, mouseDownScreenX));
      this.subscription.add(mouseMoveSub);
    }
  }

  move(event, initialWidth, mouseDownScreenX) {
    const movementX = event.screenX - mouseDownScreenX;
    const newWidth = initialWidth + movementX;
    const overMinWidth = !this.minWidth || newWidth >= this.minWidth;
    const underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;

    if (overMinWidth && underMaxWidth) {
      this.element.style.width = `${newWidth}px`;
    }
  }

  _destroySubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }

}

ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) {
  return new (t || ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};

ResizeableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ResizeableDirective,
  selectors: [["", "resizeable", ""]],
  hostVars: 2,
  hostBindings: function ResizeableDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) {
        return ctx.onMousedown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
    }
  },
  inputs: {
    resizeEnabled: "resizeEnabled",
    minWidth: "minWidth",
    maxWidth: "maxWidth"
  },
  outputs: {
    resize: "resize"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[resizeable]',
      host: {
        '[class.resizeable]': 'resizeEnabled'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    resizeEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mousedown', ['$event']]
    }]
  });
})();

class OrderableDirective {
  constructor(differs, document) {
    this.document = document;
    this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.differ = differs.find({}).create();
  }

  ngAfterContentInit() {
    // HACK: Investigate Better Way
    this.updateSubscriptions();
    this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
  }

  ngOnDestroy() {
    this.draggables.forEach(d => {
      d.dragStart.unsubscribe();
      d.dragging.unsubscribe();
      d.dragEnd.unsubscribe();
    });
  }

  updateSubscriptions() {
    const diffs = this.differ.diff(this.createMapDiffs());

    if (diffs) {
      const subscribe = ({
        currentValue,
        previousValue
      }) => {
        unsubscribe({
          previousValue
        });

        if (currentValue) {
          currentValue.dragStart.subscribe(this.onDragStart.bind(this));
          currentValue.dragging.subscribe(this.onDragging.bind(this));
          currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
        }
      };

      const unsubscribe = ({
        previousValue
      }) => {
        if (previousValue) {
          previousValue.dragStart.unsubscribe();
          previousValue.dragging.unsubscribe();
          previousValue.dragEnd.unsubscribe();
        }
      };

      diffs.forEachAddedItem(subscribe); // diffs.forEachChangedItem(subscribe.bind(this));

      diffs.forEachRemovedItem(unsubscribe);
    }
  }

  onDragStart() {
    this.positions = {};
    let i = 0;

    for (const dragger of this.draggables.toArray()) {
      const elm = dragger.element;
      const left = parseInt(elm.offsetLeft.toString(), 0);
      this.positions[dragger.dragModel.prop] = {
        left,
        right: left + parseInt(elm.offsetWidth.toString(), 0),
        index: i++,
        element: elm
      };
    }
  }

  onDragging({
    element,
    model,
    event
  }) {
    const prevPos = this.positions[model.prop];
    const target = this.isTarget(model, event);

    if (target) {
      if (this.lastDraggingIndex !== target.i) {
        this.targetChanged.emit({
          prevIndex: this.lastDraggingIndex,
          newIndex: target.i,
          initialIndex: prevPos.index
        });
        this.lastDraggingIndex = target.i;
      }
    } else if (this.lastDraggingIndex !== prevPos.index) {
      this.targetChanged.emit({
        prevIndex: this.lastDraggingIndex,
        initialIndex: prevPos.index
      });
      this.lastDraggingIndex = prevPos.index;
    }
  }

  onDragEnd({
    element,
    model,
    event
  }) {
    const prevPos = this.positions[model.prop];
    const target = this.isTarget(model, event);

    if (target) {
      this.reorder.emit({
        prevIndex: prevPos.index,
        newIndex: target.i,
        model
      });
    }

    this.lastDraggingIndex = undefined;
    element.style.left = 'auto';
  }

  isTarget(model, event) {
    let i = 0;
    const x = event.x || event.clientX;
    const y = event.y || event.clientY;
    const targets = this.document.elementsFromPoint(x, y);

    for (const prop in this.positions) {
      // current column position which throws event.
      const pos = this.positions[prop]; // since we drag the inner span, we need to find it in the elements at the cursor

      if (model.prop !== prop && targets.find(el => el === pos.element)) {
        return {
          pos,
          i
        };
      }

      i++;
    }
  }

  createMapDiffs() {
    return this.draggables.toArray().reduce((acc, curr) => {
      acc[curr.dragModel.$$id] = curr;
      return acc;
    }, {});
  }

}

OrderableDirective.ɵfac = function OrderableDirective_Factory(t) {
  return new (t || OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

OrderableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: OrderableDirective,
  selectors: [["", "orderable", ""]],
  contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DraggableDirective, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
    }
  },
  outputs: {
    reorder: "reorder",
    targetChanged: "targetChanged"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[orderable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, {
    reorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    targetChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    draggables: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [DraggableDirective, {
        descendants: true
      }]
    }]
  });
})();

class LongPressDirective {
  constructor() {
    this.pressEnabled = true;
    this.duration = 500;
    this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.mouseX = 0;
    this.mouseY = 0;
  }

  get press() {
    return this.pressing;
  }

  get isLongPress() {
    return this.isLongPressing;
  }

  onMouseDown(event) {
    // don't do right/middle clicks
    if (event.which !== 1 || !this.pressEnabled) return; // don't start drag if its on resize handle

    const target = event.target;
    if (target.classList.contains('resize-handle')) return;
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    this.pressing = true;
    this.isLongPressing = false;
    const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'mouseup');
    this.subscription = mouseup.subscribe(ev => this.onMouseup());
    this.timeout = setTimeout(() => {
      this.isLongPressing = true;
      this.longPressStart.emit({
        event,
        model: this.pressModel
      });
      this.subscription.add((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'mousemove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(mouseup)).subscribe(mouseEvent => this.onMouseMove(mouseEvent)));
      this.loop(event);
    }, this.duration);
    this.loop(event);
  }

  onMouseMove(event) {
    if (this.pressing && !this.isLongPressing) {
      const xThres = Math.abs(event.clientX - this.mouseX) > 10;
      const yThres = Math.abs(event.clientY - this.mouseY) > 10;

      if (xThres || yThres) {
        this.endPress();
      }
    }
  }

  loop(event) {
    if (this.isLongPressing) {
      this.timeout = setTimeout(() => {
        this.longPressing.emit({
          event,
          model: this.pressModel
        });
        this.loop(event);
      }, 50);
    }
  }

  endPress() {
    clearTimeout(this.timeout);
    this.isLongPressing = false;
    this.pressing = false;

    this._destroySubscription();

    this.longPressEnd.emit({
      model: this.pressModel
    });
  }

  onMouseup() {
    this.endPress();
  }

  ngOnDestroy() {
    this._destroySubscription();
  }

  _destroySubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }

}

LongPressDirective.ɵfac = function LongPressDirective_Factory(t) {
  return new (t || LongPressDirective)();
};

LongPressDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: LongPressDirective,
  selectors: [["", "long-press", ""]],
  hostVars: 4,
  hostBindings: function LongPressDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) {
        return ctx.onMouseDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
    }
  },
  inputs: {
    pressEnabled: "pressEnabled",
    pressModel: "pressModel",
    duration: "duration"
  },
  outputs: {
    longPressStart: "longPressStart",
    longPressing: "longPressing",
    longPressEnd: "longPressEnd"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LongPressDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[long-press]'
    }]
  }], null, {
    pressEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pressModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    longPressStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    longPressing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    longPressEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    press: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.press']
    }],
    isLongPress: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.longpress']
    }],
    onMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mousedown', ['$event']]
    }]
  });
})();

class ScrollerComponent {
  constructor(ngZone, element, renderer) {
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.scrollbarV = false;
    this.scrollbarH = false;
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollYPos = 0;
    this.scrollXPos = 0;
    this.prevScrollYPos = 0;
    this.prevScrollXPos = 0;
    this._scrollEventListener = null;
    this.element = element.nativeElement;
  }

  ngOnInit() {
    // manual bind so we don't always listen
    if (this.scrollbarV || this.scrollbarH) {
      const renderer = this.renderer;
      this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
      this._scrollEventListener = this.onScrolled.bind(this);
      this.parentElement.addEventListener('scroll', this._scrollEventListener);
    }
  }

  ngOnDestroy() {
    if (this._scrollEventListener) {
      this.parentElement.removeEventListener('scroll', this._scrollEventListener);
      this._scrollEventListener = null;
    }
  }

  setOffset(offsetY) {
    if (this.parentElement) {
      this.parentElement.scrollTop = offsetY;
    }
  }

  onScrolled(event) {
    const dom = event.currentTarget;
    requestAnimationFrame(() => {
      this.scrollYPos = dom.scrollTop;
      this.scrollXPos = dom.scrollLeft;
      this.updateOffset();
    });
  }

  updateOffset() {
    let direction;

    if (this.scrollYPos < this.prevScrollYPos) {
      direction = 'down';
    } else if (this.scrollYPos > this.prevScrollYPos) {
      direction = 'up';
    }

    this.scroll.emit({
      direction,
      scrollYPos: this.scrollYPos,
      scrollXPos: this.scrollXPos
    });
    this.prevScrollYPos = this.scrollYPos;
    this.prevScrollXPos = this.scrollXPos;
  }

}

ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) {
  return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};

ScrollerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ScrollerComponent,
  selectors: [["datatable-scroller"]],
  hostAttrs: [1, "datatable-scroll"],
  hostVars: 4,
  hostBindings: function ScrollerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
    }
  },
  inputs: {
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    scrollHeight: "scrollHeight",
    scrollWidth: "scrollWidth"
  },
  outputs: {
    scroll: "scroll"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ScrollerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-scroller',
      template: ` <ng-content></ng-content> `,
      host: {
        class: 'datatable-scroll'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    scrollbarV: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class DatatableGroupHeaderTemplateDirective {
  constructor(template) {
    this.template = template;
  }

}

DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) {
  return new (t || DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

DatatableGroupHeaderTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableGroupHeaderTemplateDirective,
  selectors: [["", "ngx-datatable-group-header-template", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableGroupHeaderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-group-header-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

class DatatableGroupHeaderDirective {
  constructor() {
    /**
     * Row height is required when virtual scroll is enabled.
     */
    this.rowHeight = 0;
    /**
     * Track toggling of group visibility
     */

    this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  get template() {
    return this._templateInput || this._templateQuery;
  }
  /**
   * Toggle the expansion of a group
   */


  toggleExpandGroup(group) {
    this.toggle.emit({
      type: 'group',
      value: group
    });
  }
  /**
   * Expand all groups
   */


  expandAllGroups() {
    this.toggle.emit({
      type: 'all',
      value: true
    });
  }
  /**
   * Collapse all groups
   */


  collapseAllGroups() {
    this.toggle.emit({
      type: 'all',
      value: false
    });
  }

}

DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) {
  return new (t || DatatableGroupHeaderDirective)();
};

DatatableGroupHeaderDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableGroupHeaderDirective,
  selectors: [["ngx-datatable-group-header"]],
  contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderTemplateDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    rowHeight: "rowHeight",
    _templateInput: ["template", "_templateInput"]
  },
  outputs: {
    toggle: "toggle"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableGroupHeaderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngx-datatable-group-header'
    }]
  }], null, {
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _templateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['template']
    }],
    _templateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableGroupHeaderTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    toggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Always returns the empty string ''
 */


function emptyStringGetter() {
  return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 */


function getterForProp(prop) {
  if (prop == null) {
    return emptyStringGetter;
  }

  if (typeof prop === 'number') {
    return numericIndexGetter;
  } else {
    // deep or simple
    if (prop.indexOf('.') !== -1) {
      return deepValueGetter;
    } else {
      return shallowValueGetter;
    }
  }
}
/**
 * Returns the value at this numeric index.
 * @param row array of values
 * @param index numeric index
 * @returns any or '' if invalid index
 */


function numericIndexGetter(row, index) {
  if (row == null) {
    return '';
  } // mimic behavior of deepValueGetter


  if (!row || index == null) {
    return row;
  }

  const value = row[index];

  if (value == null) {
    return '';
  }

  return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param obj object containing the field
 * @param fieldName field name string
 */


function shallowValueGetter(obj, fieldName) {
  if (obj == null) {
    return '';
  }

  if (!obj || !fieldName) {
    return obj;
  }

  const value = obj[fieldName];

  if (value == null) {
    return '';
  }

  return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 */


function deepValueGetter(obj, path) {
  if (obj == null) {
    return '';
  }

  if (!obj || !path) {
    return obj;
  } // check if path matches a root-level field
  // { "a.b.c": 123 }


  let current = obj[path];

  if (current !== undefined) {
    return current;
  }

  current = obj;
  const split = path.split('.');

  if (split.length) {
    for (let i = 0; i < split.length; i++) {
      current = current[split[i]]; // if found undefined, return empty string

      if (current === undefined || current === null) {
        return '';
      }
    }
  }

  return current;
}

function optionalGetterForProp(prop) {
  return prop && (row => getterForProp(prop)(row, prop));
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param rows
 *
 */


function groupRowsByParents(rows, from, to) {
  if (from && to) {
    const nodeById = {};
    const l = rows.length;
    let node = null;
    nodeById[0] = new TreeNode(); // that's the root node

    const uniqIDs = rows.reduce((arr, item) => {
      const toValue = to(item);

      if (arr.indexOf(toValue) === -1) {
        arr.push(toValue);
      }

      return arr;
    }, []);

    for (let i = 0; i < l; i++) {
      // make TreeNode objects for each item
      nodeById[to(rows[i])] = new TreeNode(rows[i]);
    }

    for (let i = 0; i < l; i++) {
      // link all TreeNode objects
      node = nodeById[to(rows[i])];
      let parent = 0;
      const fromValue = from(node.row);

      if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
        parent = fromValue;
      }

      node.parent = nodeById[parent];
      node.row['level'] = node.parent.row['level'] + 1;
      node.parent.children.push(node);
    }

    let resolvedRows = [];
    nodeById[0].flatten(function () {
      resolvedRows = [...resolvedRows, this.row];
    }, true);
    return resolvedRows;
  } else {
    return rows;
  }
}

class TreeNode {
  constructor(row = null) {
    if (!row) {
      row = {
        level: -1,
        treeStatus: 'expanded'
      };
    }

    this.row = row;
    this.parent = null;
    this.children = [];
  }

  flatten(f, recursive) {
    if (this.row['treeStatus'] === 'expanded') {
      for (let i = 0, l = this.children.length; i < l; i++) {
        const child = this.children[i];
        f.apply(child, Array.prototype.slice.call(arguments, 2));
        if (recursive) child.flatten.apply(child, arguments);
      }
    }
  }

}
/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 */


function camelCase(str) {
  // Replace special characters with a space
  str = str.replace(/[^a-zA-Z0-9 ]/g, ' '); // put a space before an uppercase letter

  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 '); // Lower case first character and some other stuff

  str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase(); // uppercase characters preceded by a space or number

  str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
    return b.trim() + c.toUpperCase();
  });
  return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 */


function deCamelCase(str) {
  return str.replace(/([A-Z])/g, match => ` ${match}`).replace(/^./, match => match.toUpperCase());
}
/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 */


function id() {
  return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
}
/**
 * Sets the column defaults
 */


function setColumnDefaults(columns) {
  if (!columns) return; // Only one column should hold the tree view
  // Thus if multiple columns are provided with
  // isTreeColumn as true we take only the first one

  let treeColumnFound = false;

  for (const column of columns) {
    if (!column.$$id) {
      column.$$id = id();
    } // prop can be numeric; zero is valid not a missing prop
    // translate name => prop


    if (isNullOrUndefined(column.prop) && column.name) {
      column.prop = camelCase(column.name);
    }

    if (!column.$$valueGetter) {
      column.$$valueGetter = getterForProp(column.prop);
    } // format props if no name passed


    if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
      column.name = deCamelCase(String(column.prop));
    }

    if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
      column.name = ''; // Fixes IE and Edge displaying `null`
    }

    if (!column.hasOwnProperty('resizeable')) {
      column.resizeable = true;
    }

    if (!column.hasOwnProperty('sortable')) {
      column.sortable = true;
    }

    if (!column.hasOwnProperty('draggable')) {
      column.draggable = true;
    }

    if (!column.hasOwnProperty('canAutoResize')) {
      column.canAutoResize = true;
    }

    if (!column.hasOwnProperty('width')) {
      column.width = 150;
    }

    if (!column.hasOwnProperty('isTreeColumn')) {
      column.isTreeColumn = false;
    } else {
      if (column.isTreeColumn && !treeColumnFound) {
        // If the first column with isTreeColumn is true found
        // we mark that treeCoulmn is found
        treeColumnFound = true;
      } else {
        // After that isTreeColumn property for any other column
        // will be set as false
        column.isTreeColumn = false;
      }
    }
  }
}

function isNullOrUndefined(value) {
  return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 */


function translateTemplates(templates) {
  const result = [];

  for (const temp of templates) {
    const col = {};
    const props = Object.getOwnPropertyNames(temp);

    for (const prop of props) {
      col[prop] = temp[prop];
    }

    if (temp.headerTemplate) {
      col.headerTemplate = temp.headerTemplate;
    }

    if (temp.cellTemplate) {
      col.cellTemplate = temp.cellTemplate;
    }

    if (temp.summaryFunc) {
      col.summaryFunc = temp.summaryFunc;
    }

    if (temp.summaryTemplate) {
      col.summaryTemplate = temp.summaryTemplate;
    }

    result.push(col);
  }

  return result;
}

var ColumnMode;

(function (ColumnMode) {
  ColumnMode["standard"] = "standard";
  ColumnMode["flex"] = "flex";
  ColumnMode["force"] = "force";
})(ColumnMode || (ColumnMode = {}));

var SelectionType;

(function (SelectionType) {
  SelectionType["single"] = "single";
  SelectionType["multi"] = "multi";
  SelectionType["multiClick"] = "multiClick";
  SelectionType["cell"] = "cell";
  SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));

var SortType;

(function (SortType) {
  SortType["single"] = "single";
  SortType["multi"] = "multi";
})(SortType || (SortType = {}));

var ContextmenuType;

(function (ContextmenuType) {
  ContextmenuType["header"] = "header";
  ContextmenuType["body"] = "body";
})(ContextmenuType || (ContextmenuType = {}));

class DataTableColumnHeaderDirective {
  constructor(template) {
    this.template = template;
  }

}

DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) {
  return new (t || DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

DataTableColumnHeaderDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableColumnHeaderDirective,
  selectors: [["", "ngx-datatable-header-template", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnHeaderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-header-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

class DataTableColumnCellDirective {
  constructor(template) {
    this.template = template;
  }

}

DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) {
  return new (t || DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

DataTableColumnCellDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableColumnCellDirective,
  selectors: [["", "ngx-datatable-cell-template", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnCellDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-cell-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

class DataTableColumnCellTreeToggle {
  constructor(template) {
    this.template = template;
  }

}

DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) {
  return new (t || DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

DataTableColumnCellTreeToggle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableColumnCellTreeToggle,
  selectors: [["", "ngx-datatable-tree-toggle", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnCellTreeToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-tree-toggle]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

class DataTableColumnDirective {
  constructor(columnChangesService) {
    this.columnChangesService = columnChangesService;
    this.isFirstChange = true;
  }

  get cellTemplate() {
    return this._cellTemplateInput || this._cellTemplateQuery;
  }

  get headerTemplate() {
    return this._headerTemplateInput || this._headerTemplateQuery;
  }

  get treeToggleTemplate() {
    return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
  }

  ngOnChanges() {
    if (this.isFirstChange) {
      this.isFirstChange = false;
    } else {
      this.columnChangesService.onInputChange();
    }
  }

}

DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) {
  return new (t || DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnChangesService));
};

DataTableColumnDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableColumnDirective,
  selectors: [["ngx-datatable-column"]],
  contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnCellDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnHeaderDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnCellTreeToggle, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
    }
  },
  inputs: {
    name: "name",
    prop: "prop",
    frozenLeft: "frozenLeft",
    frozenRight: "frozenRight",
    flexGrow: "flexGrow",
    resizeable: "resizeable",
    comparator: "comparator",
    pipe: "pipe",
    sortable: "sortable",
    draggable: "draggable",
    canAutoResize: "canAutoResize",
    minWidth: "minWidth",
    width: "width",
    maxWidth: "maxWidth",
    checkboxable: "checkboxable",
    headerCheckboxable: "headerCheckboxable",
    headerClass: "headerClass",
    cellClass: "cellClass",
    isTreeColumn: "isTreeColumn",
    treeLevelIndent: "treeLevelIndent",
    summaryFunc: "summaryFunc",
    summaryTemplate: "summaryTemplate",
    _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"],
    _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"],
    _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngx-datatable-column'
    }]
  }], function () {
    return [{
      type: ColumnChangesService
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozenLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozenRight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    flexGrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pipe: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    canAutoResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checkboxable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerCheckboxable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cellClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isTreeColumn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeLevelIndent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryFunc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _cellTemplateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cellTemplate']
    }],
    _cellTemplateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DataTableColumnCellDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    _headerTemplateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['headerTemplate']
    }],
    _headerTemplateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DataTableColumnHeaderDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    _treeToggleTemplateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['treeToggleTemplate']
    }],
    _treeToggleTemplateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DataTableColumnCellTreeToggle, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }]
  });
})();

class DatatableRowDetailTemplateDirective {
  constructor(template) {
    this.template = template;
  }

}

DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) {
  return new (t || DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

DatatableRowDetailTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableRowDetailTemplateDirective,
  selectors: [["", "ngx-datatable-row-detail-template", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableRowDetailTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-row-detail-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

class DatatableRowDetailDirective {
  constructor() {
    /**
     * The detail row height is required especially
     * when virtual scroll is enabled.
     */
    this.rowHeight = 0;
    /**
     * Row detail row visbility was toggled.
     */

    this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  get template() {
    return this._templateInput || this._templateQuery;
  }
  /**
   * Toggle the expansion of the row
   */


  toggleExpandRow(row) {
    this.toggle.emit({
      type: 'row',
      value: row
    });
  }
  /**
   * API method to expand all the rows.
   */


  expandAllRows() {
    this.toggle.emit({
      type: 'all',
      value: true
    });
  }
  /**
   * API method to collapse all the rows.
   */


  collapseAllRows() {
    this.toggle.emit({
      type: 'all',
      value: false
    });
  }

}

DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) {
  return new (t || DatatableRowDetailDirective)();
};

DatatableRowDetailDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableRowDetailDirective,
  selectors: [["ngx-datatable-row-detail"]],
  contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailTemplateDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    rowHeight: "rowHeight",
    _templateInput: ["template", "_templateInput"]
  },
  outputs: {
    toggle: "toggle"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableRowDetailDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngx-datatable-row-detail'
    }]
  }], null, {
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _templateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['template']
    }],
    _templateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableRowDetailTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    toggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class DatatableFooterDirective {
  get template() {
    return this._templateInput || this._templateQuery;
  }

}

DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) {
  return new (t || DatatableFooterDirective)();
};

DatatableFooterDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableFooterDirective,
  selectors: [["ngx-datatable-footer"]],
  contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    footerHeight: "footerHeight",
    totalMessage: "totalMessage",
    selectedMessage: "selectedMessage",
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    _templateInput: ["template", "_templateInput"]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableFooterDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngx-datatable-footer'
    }]
  }], null, {
    footerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    totalMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _templateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['template']
    }],
    _templateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DataTableFooterTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }]
  });
})();
/**
 * Returns the columns by pin.
 */


function columnsByPin(cols) {
  const ret = {
    left: [],
    center: [],
    right: []
  };

  if (cols) {
    for (const col of cols) {
      if (col.frozenLeft) {
        ret.left.push(col);
      } else if (col.frozenRight) {
        ret.right.push(col);
      } else {
        ret.center.push(col);
      }
    }
  }

  return ret;
}
/**
 * Returns the widths of all group sets of a column
 */


function columnGroupWidths(groups, all) {
  return {
    left: columnTotalWidth(groups.left),
    center: columnTotalWidth(groups.center),
    right: columnTotalWidth(groups.right),
    total: Math.floor(columnTotalWidth(all))
  };
}
/**
 * Calculates the total width of all columns and their groups
 */


function columnTotalWidth(columns, prop) {
  let totalWidth = 0;

  if (columns) {
    for (const c of columns) {
      const has = prop && c[prop];
      const width = has ? c[prop] : c.width;
      totalWidth = totalWidth + parseFloat(width);
    }
  }

  return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 */


function columnsTotalWidth(columns, prop) {
  let totalWidth = 0;

  for (const column of columns) {
    const has = prop && column[prop];
    totalWidth = totalWidth + (has ? column[prop] : column.width);
  }

  return totalWidth;
}

function columnsByPinArr(val) {
  const colsByPinArr = [];
  const colsByPin = columnsByPin(val);
  colsByPinArr.push({
    type: 'left',
    columns: colsByPin['left']
  });
  colsByPinArr.push({
    type: 'center',
    columns: colsByPin['center']
  });
  colsByPinArr.push({
    type: 'right',
    columns: colsByPin['right']
  });
  return colsByPinArr;
}
/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */


class RowHeightCache {
  constructor() {
    /**
     * Tree Array stores the cumulative information of the row heights to perform efficient
     * range queries and updates.  Currently the tree is initialized to the base row
     * height instead of the detail row height.
     */
    this.treeArray = [];
  }
  /**
   * Clear the Tree array.
   */


  clearCache() {
    this.treeArray = [];
  }
  /**
   * Initialize the Fenwick tree with row Heights.
   *
   * @param rows The array of rows which contain the expanded status.
   * @param rowHeight The row height.
   * @param detailRowHeight The detail row height.
   */


  initCache(details) {
    const {
      rows,
      rowHeight,
      detailRowHeight,
      externalVirtual,
      rowCount,
      rowIndexes,
      rowExpansions
    } = details;
    const isFn = typeof rowHeight === 'function';
    const isDetailFn = typeof detailRowHeight === 'function';

    if (!isFn && isNaN(rowHeight)) {
      throw new Error(`Row Height cache initialization failed. Please ensure that 'rowHeight' is a
        valid number or function value: (${rowHeight}) when 'scrollbarV' is enabled.`);
    } // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.


    if (!isDetailFn && isNaN(detailRowHeight)) {
      throw new Error(`Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a
        valid number or function value: (${detailRowHeight}) when 'scrollbarV' is enabled.`);
    }

    const n = externalVirtual ? rowCount : rows.length;
    this.treeArray = new Array(n);

    for (let i = 0; i < n; ++i) {
      this.treeArray[i] = 0;
    }

    for (let i = 0; i < n; ++i) {
      const row = rows[i];
      let currentRowHeight = rowHeight;

      if (isFn) {
        currentRowHeight = rowHeight(row);
      } // Add the detail row height to the already expanded rows.
      // This is useful for the table that goes through a filter or sort.


      const expanded = rowExpansions.has(row);

      if (row && expanded) {
        if (isDetailFn) {
          const index = rowIndexes.get(row);
          currentRowHeight += detailRowHeight(row, index);
        } else {
          currentRowHeight += detailRowHeight;
        }
      }

      this.update(i, currentRowHeight);
    }
  }
  /**
   * Given the ScrollY position i.e. sum, provide the rowIndex
   * that is present in the current view port.  Below handles edge cases.
   */


  getRowIndex(scrollY) {
    if (scrollY === 0) return 0;
    return this.calcRowIndex(scrollY);
  }
  /**
   * When a row is expanded or rowHeight is changed, update the height.  This can
   * be utilized in future when Angular Data table supports dynamic row heights.
   */


  update(atRowIndex, byRowHeight) {
    if (!this.treeArray.length) {
      throw new Error(`Update at index ${atRowIndex} with value ${byRowHeight} failed:
        Row Height cache not initialized.`);
    }

    const n = this.treeArray.length;
    atRowIndex |= 0;

    while (atRowIndex < n) {
      this.treeArray[atRowIndex] += byRowHeight;
      atRowIndex |= atRowIndex + 1;
    }
  }
  /**
   * Range Sum query from 1 to the rowIndex
   */


  query(atIndex) {
    if (!this.treeArray.length) {
      throw new Error(`query at index ${atIndex} failed: Fenwick tree array not initialized.`);
    }

    let sum = 0;
    atIndex |= 0;

    while (atIndex >= 0) {
      sum += this.treeArray[atIndex];
      atIndex = (atIndex & atIndex + 1) - 1;
    }

    return sum;
  }
  /**
   * Find the total height between 2 row indexes
   */


  queryBetween(atIndexA, atIndexB) {
    return this.query(atIndexB) - this.query(atIndexA - 1);
  }
  /**
   * Given the ScrollY position i.e. sum, provide the rowIndex
   * that is present in the current view port.
   */


  calcRowIndex(sum) {
    if (!this.treeArray.length) return 0;
    let pos = -1;
    const dataLength = this.treeArray.length; // Get the highest bit for the block size.

    const highestBit = Math.pow(2, dataLength.toString(2).length - 1);

    for (let blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
      const nextPos = pos + blockSize;

      if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
        sum -= this.treeArray[nextPos];
        pos = nextPos;
      }
    }

    return pos + 1;
  }

}

const cache = {};
const testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined; // Get Prefix
// http://davidwalsh.name/vendor-prefix

const prefix = function () {
  const styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
  const match = typeof styles !== 'undefined' ? Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) : null;
  const pre = match !== null ? match[1] : undefined; // tslint:disable-next-line: tsr-detect-non-literal-regexp

  const dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
  return dom ? {
    dom,
    lowercase: pre,
    css: `-${pre}-`,
    js: pre[0].toUpperCase() + pre.substr(1)
  } : undefined;
}();

function getVendorPrefixedName(property) {
  const name = camelCase(property);

  if (!cache[name]) {
    if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
      cache[name] = prefix.css + property;
    } else if (testStyle[property] !== undefined) {
      cache[name] = property;
    }
  }

  return cache[name];
} // browser detection and prefixing tools


const transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
const backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
const hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
const hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
const ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
const isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);

function translateXY(styles, x, y) {
  if (typeof transform !== 'undefined' && hasCSSTransforms) {
    if (!isSafari && hasCSS3DTransforms) {
      styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
      styles[backfaceVisibility] = 'hidden';
    } else {
      styles[camelCase(transform)] = `translate(${x}px, ${y}px)`;
    }
  } else {
    styles.top = `${y}px`;
    styles.left = `${x}px`;
  }
}

class ProgressBarComponent {}

ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
  return new (t || ProgressBarComponent)();
};

ProgressBarComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProgressBarComponent,
  selectors: [["datatable-progress"]],
  decls: 3,
  vars: 0,
  consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]],
  template: function ProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-progress',
      template: `
    <div class="progress-linear" role="progressbar">
      <div class="container">
        <div class="bar"></div>
      </div>
    </div>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

function selectRows(selected, row, comparefn) {
  const selectedIndex = comparefn(row, selected);

  if (selectedIndex > -1) {
    selected.splice(selectedIndex, 1);
  } else {
    selected.push(row);
  }

  return selected;
}

function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
  const reverse = index < prevIndex;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const greater = i >= prevIndex && i <= index;
    const lesser = i <= prevIndex && i >= index;
    let range = {
      start: 0,
      end: 0
    };

    if (reverse) {
      range = {
        start: index,
        end: prevIndex
      };
    } else {
      range = {
        start: prevIndex,
        end: index + 1
      };
    }

    if (reverse && lesser || !reverse && greater) {
      // if in the positive range to be added to `selected`, and
      // not already in the selected array, add it
      if (i >= range.start && i <= range.end) {
        selected.push(row);
      }
    }
  }

  return selected;
}

var Keys;

(function (Keys) {
  Keys[Keys["up"] = 38] = "up";
  Keys[Keys["down"] = 40] = "down";
  Keys[Keys["return"] = 13] = "return";
  Keys[Keys["escape"] = 27] = "escape";
  Keys[Keys["left"] = 37] = "left";
  Keys[Keys["right"] = 39] = "right";
})(Keys || (Keys = {}));

class DataTableSelectionComponent {
  constructor() {
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  selectRow(event, index, row) {
    if (!this.selectEnabled) return;
    const chkbox = this.selectionType === SelectionType.checkbox;
    const multi = this.selectionType === SelectionType.multi;
    const multiClick = this.selectionType === SelectionType.multiClick;
    let selected = [];

    if (multi || chkbox || multiClick) {
      if (event.shiftKey) {
        selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
      } else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
        selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
      } else {
        selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
      }
    } else {
      selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
    }

    if (typeof this.selectCheck === 'function') {
      selected = selected.filter(this.selectCheck.bind(this));
    }

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.prevIndex = index;
    this.select.emit({
      selected
    });
  }

  onActivate(model, index) {
    const {
      type,
      event,
      row
    } = model;
    const chkbox = this.selectionType === SelectionType.checkbox;
    const select = !chkbox && (type === 'click' || type === 'dblclick') || chkbox && type === 'checkbox';

    if (select) {
      this.selectRow(event, index, row);
    } else if (type === 'keydown') {
      if (event.keyCode === Keys.return) {
        this.selectRow(event, index, row);
      } else {
        this.onKeyboardFocus(model);
      }
    }

    this.activate.emit(model);
  }

  onKeyboardFocus(model) {
    const {
      keyCode
    } = model.event;
    const shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;

    if (shouldFocus) {
      const isCellSelection = this.selectionType === SelectionType.cell;

      if (!model.cellElement || !isCellSelection) {
        this.focusRow(model.rowElement, keyCode);
      } else if (isCellSelection) {
        this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
      }
    }
  }

  focusRow(rowElement, keyCode) {
    const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
    if (nextRowElement) nextRowElement.focus();
  }

  getPrevNextRow(rowElement, keyCode) {
    const parentElement = rowElement.parentElement;

    if (parentElement) {
      let focusElement;

      if (keyCode === Keys.up) {
        focusElement = parentElement.previousElementSibling;
      } else if (keyCode === Keys.down) {
        focusElement = parentElement.nextElementSibling;
      }

      if (focusElement && focusElement.children.length) {
        return focusElement.children[0];
      }
    }
  }

  focusCell(cellElement, rowElement, keyCode, cellIndex) {
    let nextCellElement;

    if (keyCode === Keys.left) {
      nextCellElement = cellElement.previousElementSibling;
    } else if (keyCode === Keys.right) {
      nextCellElement = cellElement.nextElementSibling;
    } else if (keyCode === Keys.up || keyCode === Keys.down) {
      const nextRowElement = this.getPrevNextRow(rowElement, keyCode);

      if (nextRowElement) {
        const children = nextRowElement.getElementsByClassName('datatable-body-cell');
        if (children.length) nextCellElement = children[cellIndex];
      }
    }

    if (nextCellElement) nextCellElement.focus();
  }

  getRowSelected(row) {
    return this.getRowSelectedIdx(row, this.selected) > -1;
  }

  getRowSelectedIdx(row, selected) {
    if (!selected || !selected.length) return -1;
    const rowId = this.rowIdentity(row);
    return selected.findIndex(r => {
      const id = this.rowIdentity(r);
      return id === rowId;
    });
  }

}

DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) {
  return new (t || DataTableSelectionComponent)();
};

DataTableSelectionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableSelectionComponent,
  selectors: [["datatable-selection"]],
  inputs: {
    rows: "rows",
    selected: "selected",
    selectEnabled: "selectEnabled",
    selectionType: "selectionType",
    rowIdentity: "rowIdentity",
    selectCheck: "selectCheck"
  },
  outputs: {
    activate: "activate",
    select: "select"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function DataTableSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableSelectionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-selection',
      template: ` <ng-content></ng-content> `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowIdentity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

var SortDirection;

(function (SortDirection) {
  SortDirection["asc"] = "asc";
  SortDirection["desc"] = "desc";
})(SortDirection || (SortDirection = {}));

class DataTableBodyCellComponent {
  constructor(element, cd) {
    this.cd = cd;
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isFocused = false;
    this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
    this.activateFn = this.activate.emit.bind(this.activate);
    this.cellContext = {
      onCheckboxChangeFn: this.onCheckboxChangeFn,
      activateFn: this.activateFn,
      row: this.row,
      group: this.group,
      value: this.value,
      column: this.column,
      rowHeight: this.rowHeight,
      isSelected: this.isSelected,
      rowIndex: this.rowIndex,
      treeStatus: this.treeStatus,
      onTreeAction: this.onTreeAction.bind(this)
    };
    this._element = element.nativeElement;
  }

  set group(group) {
    this._group = group;
    this.cellContext.group = group;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get group() {
    return this._group;
  }

  set rowHeight(val) {
    this._rowHeight = val;
    this.cellContext.rowHeight = val;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get rowHeight() {
    return this._rowHeight;
  }

  set isSelected(val) {
    this._isSelected = val;
    this.cellContext.isSelected = val;
    this.cd.markForCheck();
  }

  get isSelected() {
    return this._isSelected;
  }

  set expanded(val) {
    this._expanded = val;
    this.cellContext.expanded = val;
    this.cd.markForCheck();
  }

  get expanded() {
    return this._expanded;
  }

  set rowIndex(val) {
    this._rowIndex = val;
    this.cellContext.rowIndex = val;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get rowIndex() {
    return this._rowIndex;
  }

  set column(column) {
    this._column = column;
    this.cellContext.column = column;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get column() {
    return this._column;
  }

  set row(row) {
    this._row = row;
    this.cellContext.row = row;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get row() {
    return this._row;
  }

  set sorts(val) {
    this._sorts = val;
    this.calcSortDir = this.calcSortDir(val);
  }

  get sorts() {
    return this._sorts;
  }

  set treeStatus(status) {
    if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
      this._treeStatus = 'collapsed';
    } else {
      this._treeStatus = status;
    }

    this.cellContext.treeStatus = this._treeStatus;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get treeStatus() {
    return this._treeStatus;
  }

  get columnCssClasses() {
    let cls = 'datatable-body-cell';

    if (this.column.cellClass) {
      if (typeof this.column.cellClass === 'string') {
        cls += ' ' + this.column.cellClass;
      } else if (typeof this.column.cellClass === 'function') {
        const res = this.column.cellClass({
          row: this.row,
          group: this.group,
          column: this.column,
          value: this.value,
          rowHeight: this.rowHeight
        });

        if (typeof res === 'string') {
          cls += ' ' + res;
        } else if (typeof res === 'object') {
          const keys = Object.keys(res);

          for (const k of keys) {
            if (res[k] === true) {
              cls += ` ${k}`;
            }
          }
        }
      }
    }

    if (!this.sortDir) {
      cls += ' sort-active';
    }

    if (this.isFocused) {
      cls += ' active';
    }

    if (this.sortDir === SortDirection.asc) {
      cls += ' sort-asc';
    }

    if (this.sortDir === SortDirection.desc) {
      cls += ' sort-desc';
    }

    return cls;
  }

  get width() {
    return this.column.width;
  }

  get minWidth() {
    return this.column.minWidth;
  }

  get maxWidth() {
    return this.column.maxWidth;
  }

  get height() {
    const height = this.rowHeight;

    if (isNaN(height)) {
      return height;
    }

    return height + 'px';
  }

  ngDoCheck() {
    this.checkValueUpdates();
  }

  ngOnDestroy() {
    if (this.cellTemplate) {
      this.cellTemplate.clear();
    }
  }

  checkValueUpdates() {
    let value = '';

    if (!this.row || !this.column) {
      value = '';
    } else {
      const val = this.column.$$valueGetter(this.row, this.column.prop);
      const userPipe = this.column.pipe;

      if (userPipe) {
        value = userPipe.transform(val);
      } else if (value !== undefined) {
        value = val;
      }
    }

    if (this.value !== value) {
      this.value = value;
      this.cellContext.value = value;
      this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
      this.cd.markForCheck();
    }
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }

  onClick(event) {
    this.activate.emit({
      type: 'click',
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element
    });
  }

  onDblClick(event) {
    this.activate.emit({
      type: 'dblclick',
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element
    });
  }

  onKeyDown(event) {
    const keyCode = event.keyCode;
    const isTargetCell = event.target === this._element;
    const isAction = keyCode === Keys.return || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;

    if (isAction && isTargetCell) {
      event.preventDefault();
      event.stopPropagation();
      this.activate.emit({
        type: 'keydown',
        event,
        row: this.row,
        group: this.group,
        rowHeight: this.rowHeight,
        column: this.column,
        value: this.value,
        cellElement: this._element
      });
    }
  }

  onCheckboxChange(event) {
    this.activate.emit({
      type: 'checkbox',
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element,
      treeStatus: 'collapsed'
    });
  }

  calcSortDir(sorts) {
    if (!sorts) {
      return;
    }

    const sort = sorts.find(s => {
      return s.prop === this.column.prop;
    });

    if (sort) {
      return sort.dir;
    }
  }

  stripHtml(html) {
    if (!html.replace) {
      return html;
    }

    return html.replace(/<\/?[^>]+(>|$)/g, '');
  }

  onTreeAction() {
    this.treeAction.emit(this.row);
  }

  calcLeftMargin(column, row) {
    const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
    return column.isTreeColumn ? row.level * levelIndent : 0;
  }

}

DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) {
  return new (t || DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

DataTableBodyCellComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableBodyCellComponent,
  selectors: [["datatable-body-cell"]],
  viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
    }
  },
  hostVars: 10,
  hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) {
        return ctx.onDblClick($event);
      })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
    }
  },
  inputs: {
    displayCheck: "displayCheck",
    group: "group",
    rowHeight: "rowHeight",
    isSelected: "isSelected",
    expanded: "expanded",
    rowIndex: "rowIndex",
    column: "column",
    row: "row",
    sorts: "sorts",
    treeStatus: "treeStatus"
  },
  outputs: {
    activate: "activate",
    treeAction: "treeAction"
  },
  decls: 5,
  vars: 6,
  consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]],
  template: function DataTableBodyCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyCellComponent_4_Template, 2, 2, null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyCellComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-body-cell',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <div class="datatable-body-cell-label" [style.margin-left.px]="calcLeftMargin(column, row)">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox"
      >
        <input type="checkbox" [checked]="isSelected" (click)="onCheckboxChange($event)" />
      </label>
      <ng-container *ngIf="column.isTreeColumn">
        <button
          *ngIf="!column.treeToggleTemplate"
          class="datatable-tree-button"
          [disabled]="treeStatus === 'disabled'"
          (click)="onTreeAction()"
        >
          <span>
            <i *ngIf="treeStatus === 'loading'" class="icon datatable-icon-collapse"></i>
            <i *ngIf="treeStatus === 'collapsed'" class="icon datatable-icon-up"></i>
            <i *ngIf="treeStatus === 'expanded' || treeStatus === 'disabled'" class="icon datatable-icon-down"></i>
          </span>
        </button>
        <ng-template
          *ngIf="column.treeToggleTemplate"
          [ngTemplateOutlet]="column.treeToggleTemplate"
          [ngTemplateOutletContext]="{ cellContext: cellContext }"
        >
        </ng-template>
      </ng-container>

      <span *ngIf="!column.cellTemplate" [title]="sanitizedValue" [innerHTML]="value"> </span>
      <ng-template
        #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
    </div>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    column: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    row: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeStatus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cellTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['cellTemplate', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
        static: true
      }]
    }],
    columnCssClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class']
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width.px']
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.minWidth.px']
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.maxWidth.px']
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height']
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['focus']
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['blur']
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }],
    onDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['dblclick', ['$event']]
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();

class DataTableBodyRowComponent {
  constructor(differs, scrollbarHelper, cd, element) {
    this.differs = differs;
    this.scrollbarHelper = scrollbarHelper;
    this.cd = cd;
    this.treeStatus = 'collapsed';
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._groupStyles = {
      left: {},
      center: {},
      right: {}
    };
    this._element = element.nativeElement;
    this._rowDiffer = differs.find({}).create();
  }

  set columns(val) {
    this._columns = val;
    this.recalculateColumns(val);
    this.buildStylesByGroup();
  }

  get columns() {
    return this._columns;
  }

  set innerWidth(val) {
    if (this._columns) {
      const colByPin = columnsByPin(this._columns);
      this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
    }

    this._innerWidth = val;
    this.recalculateColumns();
    this.buildStylesByGroup();
  }

  get innerWidth() {
    return this._innerWidth;
  }

  set offsetX(val) {
    this._offsetX = val;
    this.buildStylesByGroup();
  }

  get offsetX() {
    return this._offsetX;
  }

  get cssClass() {
    let cls = 'datatable-body-row';

    if (this.isSelected) {
      cls += ' active';
    }

    if (this.rowIndex % 2 !== 0) {
      cls += ' datatable-row-odd';
    }

    if (this.rowIndex % 2 === 0) {
      cls += ' datatable-row-even';
    }

    if (this.rowClass) {
      const res = this.rowClass(this.row);

      if (typeof res === 'string') {
        cls += ` ${res}`;
      } else if (typeof res === 'object') {
        const keys = Object.keys(res);

        for (const k of keys) {
          if (res[k] === true) {
            cls += ` ${k}`;
          }
        }
      }
    }

    return cls;
  }

  get columnsTotalWidths() {
    return this._columnGroupWidths.total;
  }

  ngDoCheck() {
    if (this._rowDiffer.diff(this.row)) {
      this.cd.markForCheck();
    }
  }

  trackByGroups(index, colGroup) {
    return colGroup.type;
  }

  columnTrackingFn(index, column) {
    return column.$$id;
  }

  buildStylesByGroup() {
    this._groupStyles.left = this.calcStylesByGroup('left');
    this._groupStyles.center = this.calcStylesByGroup('center');
    this._groupStyles.right = this.calcStylesByGroup('right');
    this.cd.markForCheck();
  }

  calcStylesByGroup(group) {
    const widths = this._columnGroupWidths;
    const offsetX = this.offsetX;
    const styles = {
      width: `${widths[group]}px`
    };

    if (group === 'left') {
      translateXY(styles, offsetX, 0);
    } else if (group === 'right') {
      const bodyWidth = parseInt(this.innerWidth + '', 0);
      const totalDiff = widths.total - bodyWidth;
      const offsetDiff = totalDiff - offsetX;
      const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
      translateXY(styles, offset, 0);
    }

    return styles;
  }

  onActivate(event, index) {
    event.cellIndex = index;
    event.rowElement = this._element;
    this.activate.emit(event);
  }

  onKeyDown(event) {
    const keyCode = event.keyCode;
    const isTargetRow = event.target === this._element;
    const isAction = keyCode === Keys.return || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;

    if (isAction && isTargetRow) {
      event.preventDefault();
      event.stopPropagation();
      this.activate.emit({
        type: 'keydown',
        event,
        row: this.row,
        rowElement: this._element
      });
    }
  }

  onMouseenter(event) {
    this.activate.emit({
      type: 'mouseenter',
      event,
      row: this.row,
      rowElement: this._element
    });
  }

  recalculateColumns(val = this.columns) {
    this._columns = val;
    const colsByPin = columnsByPin(this._columns);
    this._columnsByPin = columnsByPinArr(this._columns);
    this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
  }

  onTreeAction() {
    this.treeAction.emit();
  }

}

DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) {
  return new (t || DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

DataTableBodyRowComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableBodyRowComponent,
  selectors: [["datatable-body-row"]],
  hostVars: 6,
  hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) {
        return ctx.onMouseenter($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cssClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.rowHeight, "px")("width", ctx.columnsTotalWidths, "px");
    }
  },
  inputs: {
    columns: "columns",
    innerWidth: "innerWidth",
    expanded: "expanded",
    rowClass: "rowClass",
    row: "row",
    group: "group",
    isSelected: "isSelected",
    rowIndex: "rowIndex",
    displayCheck: "displayCheck",
    treeStatus: "treeStatus",
    offsetX: "offsetX",
    rowHeight: "rowHeight"
  },
  outputs: {
    activate: "activate",
    treeAction: "treeAction"
  },
  decls: 1,
  vars: 2,
  consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]],
  template: function DataTableBodyRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    }
  },
  dependencies: [DataTableBodyCellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyRowComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-body-row',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <div
      *ngFor="let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{ colGroup.type }} datatable-row-group"
      [ngStyle]="_groupStyles[colGroup.type]"
    >
      <datatable-body-cell
        role="cell"
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
        [group]="group"
        [expanded]="expanded"
        [isSelected]="isSelected"
        [rowIndex]="rowIndex"
        [column]="column"
        [rowHeight]="rowHeight"
        [displayCheck]="displayCheck"
        [treeStatus]="treeStatus"
        (activate)="onActivate($event, ii)"
        (treeAction)="onTreeAction()"
      >
      </datatable-body-cell>
    </div>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
    }, {
      type: ScrollbarHelper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    row: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeStatus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cssClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class']
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columnsTotalWidths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width.px']
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }],
    onMouseenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseenter', ['$event']]
    }]
  });
})();

function defaultSumFunc(cells) {
  const cellsWithValues = cells.filter(cell => !!cell);

  if (!cellsWithValues.length) {
    return null;
  }

  if (cellsWithValues.some(cell => typeof cell !== 'number')) {
    return null;
  }

  return cellsWithValues.reduce((res, cell) => res + cell);
}

function noopSumFunc(cells) {
  return null;
}

class DataTableSummaryRowComponent {
  constructor() {
    this.summaryRow = {};
  }

  ngOnChanges() {
    if (!this.columns || !this.rows) {
      return;
    }

    this.updateInternalColumns();
    this.updateValues();
  }

  updateInternalColumns() {
    this._internalColumns = this.columns.map(col => Object.assign(Object.assign({}, col), {
      cellTemplate: col.summaryTemplate
    }));
  }

  updateValues() {
    this.summaryRow = {};
    this.columns.filter(col => !col.summaryTemplate).forEach(col => {
      const cellsFromSingleColumn = this.rows.map(row => row[col.prop]);
      const sumFunc = this.getSummaryFunction(col);
      this.summaryRow[col.prop] = col.pipe ? col.pipe.transform(sumFunc(cellsFromSingleColumn)) : sumFunc(cellsFromSingleColumn);
    });
  }

  getSummaryFunction(column) {
    if (column.summaryFunc === undefined) {
      return defaultSumFunc;
    } else if (column.summaryFunc === null) {
      return noopSumFunc;
    } else {
      return column.summaryFunc;
    }
  }

}

DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) {
  return new (t || DataTableSummaryRowComponent)();
};

DataTableSummaryRowComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableSummaryRowComponent,
  selectors: [["datatable-summary-row"]],
  hostAttrs: [1, "datatable-summary-row"],
  inputs: {
    rows: "rows",
    columns: "columns",
    rowHeight: "rowHeight",
    offsetX: "offsetX",
    innerWidth: "innerWidth"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]],
  template: function DataTableSummaryRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
    }
  },
  dependencies: [DataTableBodyRowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableSummaryRowComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-summary-row',
      template: `
    <datatable-body-row
      *ngIf="summaryRow && _internalColumns"
      tabindex="-1"
      [innerWidth]="innerWidth"
      [offsetX]="offsetX"
      [columns]="_internalColumns"
      [rowHeight]="rowHeight"
      [row]="summaryRow"
      [rowIndex]="-1"
    >
    </datatable-body-row>
  `,
      host: {
        class: 'datatable-summary-row'
      }
    }]
  }], null, {
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class DataTableRowWrapperComponent {
  constructor(cd, differs) {
    this.cd = cd;
    this.differs = differs;
    this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this._expanded = false;
    this.groupContext = {
      group: this.row,
      expanded: this.expanded,
      rowIndex: this.rowIndex
    };
    this.rowContext = {
      row: this.row,
      expanded: this.expanded,
      rowIndex: this.rowIndex
    };
    this.rowDiffer = differs.find({}).create();
  }

  set rowIndex(val) {
    this._rowIndex = val;
    this.rowContext.rowIndex = val;
    this.groupContext.rowIndex = val;
    this.cd.markForCheck();
  }

  get rowIndex() {
    return this._rowIndex;
  }

  set expanded(val) {
    this._expanded = val;
    this.groupContext.expanded = val;
    this.rowContext.expanded = val;
    this.cd.markForCheck();
  }

  get expanded() {
    return this._expanded;
  }

  ngDoCheck() {
    if (this.rowDiffer.diff(this.row)) {
      this.rowContext.row = this.row;
      this.groupContext.group = this.row;
      this.cd.markForCheck();
    }
  }

  onContextmenu($event) {
    this.rowContextmenu.emit({
      event: $event,
      row: this.row
    });
  }

  getGroupHeaderStyle() {
    const styles = {};
    styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
    styles['backface-visibility'] = 'hidden';
    styles['width'] = this.innerWidth;
    return styles;
  }

}

DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) {
  return new (t || DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers));
};

DataTableRowWrapperComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableRowWrapperComponent,
  selectors: [["datatable-row-wrapper"]],
  hostAttrs: [1, "datatable-row-wrapper"],
  hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) {
        return ctx.onContextmenu($event);
      });
    }
  },
  inputs: {
    innerWidth: "innerWidth",
    rowDetail: "rowDetail",
    groupHeader: "groupHeader",
    offsetX: "offsetX",
    detailRowHeight: "detailRowHeight",
    row: "row",
    groupedRows: "groupedRows",
    rowIndex: "rowIndex",
    expanded: "expanded"
  },
  outputs: {
    rowContextmenu: "rowContextmenu"
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 3,
  consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]],
  template: function DataTableRowWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_ng_content_1_Template, 1, 0, "ng-content", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableRowWrapperComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-row-wrapper',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <div *ngIf="groupHeader && groupHeader.template" class="datatable-group-header" [ngStyle]="getGroupHeaderStyle()">
      <ng-template
        *ngIf="groupHeader && groupHeader.template"
        [ngTemplateOutlet]="groupHeader.template"
        [ngTemplateOutletContext]="groupContext"
      >
      </ng-template>
    </div>
    <ng-content *ngIf="(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template">
    </ng-content>
    <div
      *ngIf="rowDetail && rowDetail.template && expanded"
      [style.height.px]="detailRowHeight"
      class="datatable-row-detail"
    >
      <ng-template
        *ngIf="rowDetail && rowDetail.template"
        [ngTemplateOutlet]="rowDetail.template"
        [ngTemplateOutletContext]="rowContext"
      >
      </ng-template>
    </div>
  `,
      host: {
        class: 'datatable-row-wrapper'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
    }];
  }, {
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowDetail: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    detailRowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    row: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['contextmenu', ['$event']]
    }]
  });
})();

class DataTableBodyComponent {
  /**
   * Creates an instance of DataTableBodyComponent.
   */
  constructor(cd) {
    this.cd = cd;
    this.selected = [];
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.rowHeightsCache = new RowHeightCache();
    this.temp = [];
    this.offsetY = 0;
    this.indexes = {};
    this.rowIndexes = new WeakMap();
    this.rowExpansions = [];
    /**
     * Get the height of the detail row.
     */

    this.getDetailRowHeight = (row, index) => {
      if (!this.rowDetail) {
        return 0;
      }

      const rowHeight = this.rowDetail.rowHeight;
      return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
    }; // declare fn here so we can get access to the `this` property


    this.rowTrackingFn = (index, row) => {
      const idx = this.getRowIndex(row);

      if (this.trackByProp) {
        return row[this.trackByProp];
      } else {
        return idx;
      }
    };
  }

  set pageSize(val) {
    this._pageSize = val;
    this.recalcLayout();
  }

  get pageSize() {
    return this._pageSize;
  }

  set rows(val) {
    this._rows = val;
    this.recalcLayout();
  }

  get rows() {
    return this._rows;
  }

  set columns(val) {
    this._columns = val;
    const colsByPin = columnsByPin(val);
    this.columnGroupWidths = columnGroupWidths(colsByPin, val);
  }

  get columns() {
    return this._columns;
  }

  set offset(val) {
    this._offset = val;
    if (!this.scrollbarV || this.scrollbarV && !this.virtualization) this.recalcLayout();
  }

  get offset() {
    return this._offset;
  }

  set rowCount(val) {
    this._rowCount = val;
    this.recalcLayout();
  }

  get rowCount() {
    return this._rowCount;
  }

  get bodyWidth() {
    if (this.scrollbarH) {
      return this.innerWidth + 'px';
    } else {
      return '100%';
    }
  }

  set bodyHeight(val) {
    if (this.scrollbarV) {
      this._bodyHeight = val + 'px';
    } else {
      this._bodyHeight = 'auto';
    }

    this.recalcLayout();
  }

  get bodyHeight() {
    return this._bodyHeight;
  }
  /**
   * Returns if selection is enabled.
   */


  get selectEnabled() {
    return !!this.selectionType;
  }
  /**
   * Property that would calculate the height of scroll bar
   * based on the row heights cache for virtual scroll and virtualization. Other scenarios
   * calculate scroll height automatically (as height will be undefined).
   */


  get scrollHeight() {
    if (this.scrollbarV && this.virtualization && this.rowCount) {
      return this.rowHeightsCache.query(this.rowCount - 1);
    } // avoid TS7030: Not all code paths return a value.


    return undefined;
  }
  /**
   * Called after the constructor, initializing input properties
   */


  ngOnInit() {
    if (this.rowDetail) {
      this.listener = this.rowDetail.toggle.subscribe(({
        type,
        value
      }) => {
        if (type === 'row') {
          this.toggleRowExpansion(value);
        }

        if (type === 'all') {
          this.toggleAllRows(value);
        } // Refresh rows after toggle
        // Fixes #883


        this.updateIndexes();
        this.updateRows();
        this.cd.markForCheck();
      });
    }

    if (this.groupHeader) {
      this.listener = this.groupHeader.toggle.subscribe(({
        type,
        value
      }) => {
        if (type === 'group') {
          this.toggleRowExpansion(value);
        }

        if (type === 'all') {
          this.toggleAllRows(value);
        } // Refresh rows after toggle
        // Fixes #883


        this.updateIndexes();
        this.updateRows();
        this.cd.markForCheck();
      });
    }
  }
  /**
   * Called once, before the instance is destroyed.
   */


  ngOnDestroy() {
    if (this.rowDetail || this.groupHeader) {
      this.listener.unsubscribe();
    }
  }
  /**
   * Updates the Y offset given a new offset.
   */


  updateOffsetY(offset) {
    // scroller is missing on empty table
    if (!this.scroller) {
      return;
    }

    if (this.scrollbarV && this.virtualization && offset) {
      // First get the row Index that we need to move to.
      const rowIndex = this.pageSize * offset;
      offset = this.rowHeightsCache.query(rowIndex - 1);
    } else if (this.scrollbarV && !this.virtualization) {
      offset = 0;
    }

    this.scroller.setOffset(offset || 0);
  }
  /**
   * Body was scrolled, this is mainly useful for
   * when a user is server-side pagination via virtual scroll.
   */


  onBodyScroll(event) {
    const scrollYPos = event.scrollYPos;
    const scrollXPos = event.scrollXPos; // if scroll change, trigger update
    // this is mainly used for header cell positions

    if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
      this.scroll.emit({
        offsetY: scrollYPos,
        offsetX: scrollXPos
      });
    }

    this.offsetY = scrollYPos;
    this.offsetX = scrollXPos;
    this.updateIndexes();
    this.updatePage(event.direction);
    this.updateRows();
  }
  /**
   * Updates the page given a direction.
   */


  updatePage(direction) {
    let offset = this.indexes.first / this.pageSize;

    if (direction === 'up') {
      offset = Math.ceil(offset);
    } else if (direction === 'down') {
      offset = Math.floor(offset);
    }

    if (direction !== undefined && !isNaN(offset)) {
      this.page.emit({
        offset
      });
    }
  }
  /**
   * Updates the rows in the view port
   */


  updateRows() {
    const {
      first,
      last
    } = this.indexes;
    let rowIndex = first;
    let idx = 0;
    const temp = []; // if grouprowsby has been specified treat row paging
    // parameters as group paging parameters ie if limit 10 has been
    // specified treat it as 10 groups rather than 10 rows

    if (this.groupedRows) {
      let maxRowsPerGroup = 3; // if there is only one group set the maximum number of
      // rows per group the same as the total number of rows

      if (this.groupedRows.length === 1) {
        maxRowsPerGroup = this.groupedRows[0].value.length;
      }

      while (rowIndex < last && rowIndex < this.groupedRows.length) {
        // Add the groups into this page
        const group = this.groupedRows[rowIndex];
        this.rowIndexes.set(group, rowIndex);

        if (group.value) {
          // add indexes for each group item
          group.value.forEach((g, i) => {
            const _idx = `${rowIndex}-${i}`;
            this.rowIndexes.set(g, _idx);
          });
        }

        temp[idx] = group;
        idx++; // Group index in this context

        rowIndex++;
      }
    } else {
      while (rowIndex < last && rowIndex < this.rowCount) {
        const row = this.rows[rowIndex];

        if (row) {
          // add indexes for each row
          this.rowIndexes.set(row, rowIndex);
          temp[idx] = row;
        }

        idx++;
        rowIndex++;
      }
    }

    this.temp = temp;
  }
  /**
   * Get the row height
   */


  getRowHeight(row) {
    // if its a function return it
    if (typeof this.rowHeight === 'function') {
      return this.rowHeight(row);
    }

    return this.rowHeight;
  }
  /**
   * @param group the group with all rows
   */


  getGroupHeight(group) {
    let rowHeight = 0;

    if (group.value) {
      for (let index = 0; index < group.value.length; index++) {
        rowHeight += this.getRowAndDetailHeight(group.value[index]);
      }
    }

    return rowHeight;
  }
  /**
   * Calculate row height based on the expanded state of the row.
   */


  getRowAndDetailHeight(row) {
    let rowHeight = this.getRowHeight(row);
    const expanded = this.getRowExpanded(row); // Adding detail row height if its expanded.

    if (expanded) {
      rowHeight += this.getDetailRowHeight(row);
    }

    return rowHeight;
  }
  /**
   * Calculates the styles for the row so that the rows can be moved in 2D space
   * during virtual scroll inside the DOM.   In the below case the Y position is
   * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
   * 100 px then following styles are generated:
   *
   * transform: translate3d(0px, 0px, 0px);    ->  row0
   * transform: translate3d(0px, 30px, 0px);   ->  row1
   * transform: translate3d(0px, 130px, 0px);  ->  row2
   *
   * Row heights have to be calculated based on the row heights cache as we wont
   * be able to determine which row is of what height before hand.  In the above
   * case the positionY of the translate3d for row2 would be the sum of all the
   * heights of the rows before it (i.e. row0 and row1).
   *
   * @param rows the row that needs to be placed in the 2D space.
   * @returns the CSS3 style to be applied
   *
   * @memberOf DataTableBodyComponent
   */


  getRowsStyles(rows) {
    const styles = {}; // only add styles for the group if there is a group

    if (this.groupedRows) {
      styles.width = this.columnGroupWidths.total;
    }

    if (this.scrollbarV && this.virtualization) {
      let idx = 0;

      if (this.groupedRows) {
        // Get the latest row rowindex in a group
        const row = rows[rows.length - 1];
        idx = row ? this.getRowIndex(row) : 0;
      } else {
        idx = this.getRowIndex(rows);
      } // const pos = idx * rowHeight;
      // The position of this row would be the sum of all row heights
      // until the previous row position.


      const pos = this.rowHeightsCache.query(idx - 1);
      translateXY(styles, 0, pos);
    }

    return styles;
  }
  /**
   * Calculate bottom summary row offset for scrollbar mode.
   * For more information about cache and offset calculation
   * see description for `getRowsStyles` method
   *
   * @returns the CSS3 style to be applied
   *
   * @memberOf DataTableBodyComponent
   */


  getBottomSummaryRowStyles() {
    if (!this.scrollbarV || !this.rows || !this.rows.length) {
      return null;
    }

    const styles = {
      position: 'absolute'
    };
    const pos = this.rowHeightsCache.query(this.rows.length - 1);
    translateXY(styles, 0, pos);
    return styles;
  }
  /**
   * Hides the loading indicator
   */


  hideIndicator() {
    setTimeout(() => this.loadingIndicator = false, 500);
  }
  /**
   * Updates the index of the rows in the viewport
   */


  updateIndexes() {
    let first = 0;
    let last = 0;

    if (this.scrollbarV) {
      if (this.virtualization) {
        // Calculation of the first and last indexes will be based on where the
        // scrollY position would be at.  The last index would be the one
        // that shows up inside the view port the last.
        const height = parseInt(this.bodyHeight, 0);
        first = this.rowHeightsCache.getRowIndex(this.offsetY);
        last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
      } else {
        // If virtual rows are not needed
        // We render all in one go
        first = 0;
        last = this.rowCount;
      }
    } else {
      // The server is handling paging and will pass an array that begins with the
      // element at a specified offset.  first should always be 0 with external paging.
      if (!this.externalPaging) {
        first = Math.max(this.offset * this.pageSize, 0);
      }

      last = Math.min(first + this.pageSize, this.rowCount);
    }

    this.indexes = {
      first,
      last
    };
  }
  /**
   * Refreshes the full Row Height cache.  Should be used
   * when the entire row array state has changed.
   */


  refreshRowHeightCache() {
    if (!this.scrollbarV || this.scrollbarV && !this.virtualization) {
      return;
    } // clear the previous row height cache if already present.
    // this is useful during sorts, filters where the state of the
    // rows array is changed.


    this.rowHeightsCache.clearCache(); // Initialize the tree only if there are rows inside the tree.

    if (this.rows && this.rows.length) {
      const rowExpansions = new Set();

      for (const row of this.rows) {
        if (this.getRowExpanded(row)) {
          rowExpansions.add(row);
        }
      }

      this.rowHeightsCache.initCache({
        rows: this.rows,
        rowHeight: this.rowHeight,
        detailRowHeight: this.getDetailRowHeight,
        externalVirtual: this.scrollbarV && this.externalPaging,
        rowCount: this.rowCount,
        rowIndexes: this.rowIndexes,
        rowExpansions
      });
    }
  }
  /**
   * Gets the index for the view port
   */


  getAdjustedViewPortIndex() {
    // Capture the row index of the first row that is visible on the viewport.
    // If the scroll bar is just below the row which is highlighted then make that as the
    // first index.
    const viewPortFirstRowIndex = this.indexes.first;

    if (this.scrollbarV && this.virtualization) {
      const offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
      return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
    }

    return viewPortFirstRowIndex;
  }
  /**
   * Toggle the Expansion of the row i.e. if the row is expanded then it will
   * collapse and vice versa.   Note that the expanded status is stored as
   * a part of the row object itself as we have to preserve the expanded row
   * status in case of sorting and filtering of the row set.
   */


  toggleRowExpansion(row) {
    // Capture the row index of the first row that is visible on the viewport.
    const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
    const rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
    const expanded = rowExpandedIdx > -1; // If the detailRowHeight is auto --> only in case of non-virtualized scroll

    if (this.scrollbarV && this.virtualization) {
      const detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1); // const idx = this.rowIndexes.get(row) || 0;

      const idx = this.getRowIndex(row);
      this.rowHeightsCache.update(idx, detailRowHeight);
    } // Update the toggled row and update thive nevere heights in the cache.


    if (expanded) {
      this.rowExpansions.splice(rowExpandedIdx, 1);
    } else {
      this.rowExpansions.push(row);
    }

    this.detailToggle.emit({
      rows: [row],
      currentIndex: viewPortFirstRowIndex
    });
  }
  /**
   * Expand/Collapse all the rows no matter what their state is.
   */


  toggleAllRows(expanded) {
    // clear prev expansions
    this.rowExpansions = []; // Capture the row index of the first row that is visible on the viewport.

    const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();

    if (expanded) {
      for (const row of this.rows) {
        this.rowExpansions.push(row);
      }
    }

    if (this.scrollbarV) {
      // Refresh the full row heights cache since every row was affected.
      this.recalcLayout();
    } // Emit all rows that have been expanded.


    this.detailToggle.emit({
      rows: this.rows,
      currentIndex: viewPortFirstRowIndex
    });
  }
  /**
   * Recalculates the table
   */


  recalcLayout() {
    this.refreshRowHeightCache();
    this.updateIndexes();
    this.updateRows();
  }
  /**
   * Tracks the column
   */


  columnTrackingFn(index, column) {
    return column.$$id;
  }
  /**
   * Gets the row pinning group styles
   */


  stylesByGroup(group) {
    const widths = this.columnGroupWidths;
    const offsetX = this.offsetX;
    const styles = {
      width: `${widths[group]}px`
    };

    if (group === 'left') {
      translateXY(styles, offsetX, 0);
    } else if (group === 'right') {
      const bodyWidth = parseInt(this.innerWidth + '', 0);
      const totalDiff = widths.total - bodyWidth;
      const offsetDiff = totalDiff - offsetX;
      const offset = offsetDiff * -1;
      translateXY(styles, offset, 0);
    }

    return styles;
  }
  /**
   * Returns if the row was expanded and set default row expansion when row expansion is empty
   */


  getRowExpanded(row) {
    if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
      for (const group of this.groupedRows) {
        this.rowExpansions.push(group);
      }
    }

    return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
  }

  getRowExpandedIdx(row, expanded) {
    if (!expanded || !expanded.length) return -1;
    const rowId = this.rowIdentity(row);
    return expanded.findIndex(r => {
      const id = this.rowIdentity(r);
      return id === rowId;
    });
  }
  /**
   * Gets the row index given a row
   */


  getRowIndex(row) {
    return this.rowIndexes.get(row) || 0;
  }

  onTreeAction(row) {
    this.treeAction.emit({
      row
    });
  }

}

DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) {
  return new (t || DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

DataTableBodyComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableBodyComponent,
  selectors: [["datatable-body"]],
  viewQuery: function DataTableBodyComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ScrollerComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    }
  },
  hostAttrs: [1, "datatable-body"],
  hostVars: 4,
  hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
    }
  },
  inputs: {
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    loadingIndicator: "loadingIndicator",
    externalPaging: "externalPaging",
    rowHeight: "rowHeight",
    offsetX: "offsetX",
    emptyMessage: "emptyMessage",
    selectionType: "selectionType",
    selected: "selected",
    rowIdentity: "rowIdentity",
    rowDetail: "rowDetail",
    groupHeader: "groupHeader",
    selectCheck: "selectCheck",
    displayCheck: "displayCheck",
    trackByProp: "trackByProp",
    rowClass: "rowClass",
    groupedRows: "groupedRows",
    groupExpansionDefault: "groupExpansionDefault",
    innerWidth: "innerWidth",
    groupRowsBy: "groupRowsBy",
    virtualization: "virtualization",
    summaryRow: "summaryRow",
    summaryPosition: "summaryPosition",
    summaryHeight: "summaryHeight",
    pageSize: "pageSize",
    rows: "rows",
    columns: "columns",
    offset: "offset",
    rowCount: "rowCount",
    bodyHeight: "bodyHeight"
  },
  outputs: {
    scroll: "scroll",
    page: "page",
    activate: "activate",
    select: "select",
    detailToggle: "detailToggle",
    rowContextmenu: "rowContextmenu",
    treeAction: "treeAction"
  },
  decls: 5,
  vars: 9,
  consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]],
  template: function DataTableBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "datatable-selection", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) {
        return ctx.select.emit($event);
      })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) {
        return ctx.activate.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
    }
  },
  dependencies: [ProgressBarComponent, DataTableSelectionComponent, ScrollerComponent, DataTableSummaryRowComponent, DataTableRowWrapperComponent, DataTableBodyRowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-body',
      template: `
    <datatable-progress *ngIf="loadingIndicator"> </datatable-progress>
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group)"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group && group[i], i)"
          [row]="group"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group && group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            role="row"
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group && group.treeStatus"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              role="row"
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              (activate)="selector.onActivate($event, i)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          role="row"
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <div class="empty-row" *ngIf="!rows?.length && !loadingIndicator" [innerHTML]="emptyMessage"></div>
    </datatable-selection>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'datatable-body'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    scrollbarV: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingIndicator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    externalPaging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowIdentity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowDetail: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackByProp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupExpansionDefault: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupRowsBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualization: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bodyWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width']
    }],
    bodyHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height']
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    detailToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rowContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scroller: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [ScrollerComponent]
    }]
  });
})();
/**
 * Gets the next sort direction
 */


function nextSortDir(sortType, current) {
  if (sortType === SortType.single) {
    if (current === SortDirection.asc) {
      return SortDirection.desc;
    } else {
      return SortDirection.asc;
    }
  } else {
    if (!current) {
      return SortDirection.asc;
    } else if (current === SortDirection.asc) {
      return SortDirection.desc;
    } else if (current === SortDirection.desc) {
      return undefined;
    } // avoid TS7030: Not all code paths return a value.


    return undefined;
  }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 */


function orderByComparator(a, b) {
  if (a === null || typeof a === 'undefined') a = 0;
  if (b === null || typeof b === 'undefined') b = 0;

  if (a instanceof Date && b instanceof Date) {
    if (a < b) return -1;
    if (a > b) return 1;
  } else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
    // Convert to string in case of a=0 or b=0
    a = String(a);
    b = String(b); // Isn't a number so lowercase the string to properly compare

    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
  } else {
    // Parse strings as numbers to compare properly
    if (parseFloat(a) < parseFloat(b)) return -1;
    if (parseFloat(a) > parseFloat(b)) return 1;
  } // equal each other


  return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 */


function sortRows(rows, columns, dirs) {
  if (!rows) return [];
  if (!dirs || !dirs.length || !columns) return [...rows];
  /**
   * record the row ordering of results from prior sort operations (if applicable)
   * this is necessary to guarantee stable sorting behavior
   */

  const rowToIndexMap = new Map();
  rows.forEach((row, index) => rowToIndexMap.set(row, index));
  const temp = [...rows];
  const cols = columns.reduce((obj, col) => {
    if (col.comparator && typeof col.comparator === 'function') {
      obj[col.prop] = col.comparator;
    }

    return obj;
  }, {}); // cache valueGetter and compareFn so that they
  // do not need to be looked-up in the sort function body

  const cachedDirs = dirs.map(dir => {
    const prop = dir.prop;
    return {
      prop,
      dir: dir.dir,
      valueGetter: getterForProp(prop),
      compareFn: cols[prop] || orderByComparator
    };
  });
  return temp.sort(function (rowA, rowB) {
    for (const cachedDir of cachedDirs) {
      // Get property and valuegetters for column to be sorted
      const {
        prop,
        valueGetter
      } = cachedDir; // Get A and B cell values from rows based on properties of the columns

      const propA = valueGetter(rowA, prop);
      const propB = valueGetter(rowB, prop); // Compare function gets five parameters:
      // Two cell values to be compared as propA and propB
      // Two rows corresponding to the cells as rowA and rowB
      // Direction of the sort for this column as SortDirection
      // Compare can be a standard JS comparison function (a,b) => -1|0|1
      // as additional parameters are silently ignored. The whole row and sort
      // direction enable more complex sort logic.

      const comparison = cachedDir.dir !== SortDirection.desc ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir) : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir); // Don't return 0 yet in case of needing to sort by next property

      if (comparison !== 0) return comparison;
    }

    if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB))) return 0;
    /**
     * all else being equal, preserve original order of the rows (stable sort)
     */

    return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
  });
}

class DataTableHeaderCellComponent {
  constructor(cd) {
    this.cd = cd;
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this.sortFn = this.onSort.bind(this);
    this.selectFn = this.select.emit.bind(this.select);
    this.cellContext = {
      column: this.column,
      sortDir: this.sortDir,
      sortFn: this.sortFn,
      allRowsSelected: this.allRowsSelected,
      selectFn: this.selectFn
    };
  }

  set allRowsSelected(value) {
    this._allRowsSelected = value;
    this.cellContext.allRowsSelected = value;
  }

  get allRowsSelected() {
    return this._allRowsSelected;
  }

  set column(column) {
    this._column = column;
    this.cellContext.column = column;
    this.cd.markForCheck();
  }

  get column() {
    return this._column;
  }

  set sorts(val) {
    this._sorts = val;
    this.sortDir = this.calcSortDir(val);
    this.cellContext.sortDir = this.sortDir;
    this.sortClass = this.calcSortClass(this.sortDir);
    this.cd.markForCheck();
  }

  get sorts() {
    return this._sorts;
  }

  get columnCssClasses() {
    let cls = 'datatable-header-cell';
    if (this.column.sortable) cls += ' sortable';
    if (this.column.resizeable) cls += ' resizeable';

    if (this.column.headerClass) {
      if (typeof this.column.headerClass === 'string') {
        cls += ' ' + this.column.headerClass;
      } else if (typeof this.column.headerClass === 'function') {
        const res = this.column.headerClass({
          column: this.column
        });

        if (typeof res === 'string') {
          cls += res;
        } else if (typeof res === 'object') {
          const keys = Object.keys(res);

          for (const k of keys) {
            if (res[k] === true) cls += ` ${k}`;
          }
        }
      }
    }

    const sortDir = this.sortDir;

    if (sortDir) {
      cls += ` sort-active sort-${sortDir}`;
    }

    return cls;
  }

  get name() {
    // guaranteed to have a value by setColumnDefaults() in column-helper.ts
    return this.column.headerTemplate === undefined ? this.column.name : undefined;
  }

  get minWidth() {
    return this.column.minWidth;
  }

  get maxWidth() {
    return this.column.maxWidth;
  }

  get width() {
    return this.column.width;
  }

  get isCheckboxable() {
    return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
  }

  onContextmenu($event) {
    this.columnContextmenu.emit({
      event: $event,
      column: this.column
    });
  }

  ngOnInit() {
    this.sortClass = this.calcSortClass(this.sortDir);
  }

  calcSortDir(sorts) {
    if (sorts && this.column) {
      const sort = sorts.find(s => {
        return s.prop === this.column.prop;
      });
      if (sort) return sort.dir;
    }
  }

  onSort() {
    if (!this.column.sortable) return;
    const newValue = nextSortDir(this.sortType, this.sortDir);
    this.sort.emit({
      column: this.column,
      prevValue: this.sortDir,
      newValue
    });
  }

  calcSortClass(sortDir) {
    if (!this.cellContext.column.sortable) return;

    if (sortDir === SortDirection.asc) {
      return `sort-btn sort-asc ${this.sortAscendingIcon}`;
    } else if (sortDir === SortDirection.desc) {
      return `sort-btn sort-desc ${this.sortDescendingIcon}`;
    } else {
      return `sort-btn ${this.sortUnsetIcon}`;
    }
  }

}

DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) {
  return new (t || DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

DataTableHeaderCellComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableHeaderCellComponent,
  selectors: [["datatable-header-cell"]],
  hostAttrs: [1, "datatable-header-cell"],
  hostVars: 11,
  hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) {
        return ctx.onContextmenu($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.headerHeight, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px");
    }
  },
  inputs: {
    sortType: "sortType",
    sortAscendingIcon: "sortAscendingIcon",
    sortDescendingIcon: "sortDescendingIcon",
    sortUnsetIcon: "sortUnsetIcon",
    isTarget: "isTarget",
    targetMarkerTemplate: "targetMarkerTemplate",
    targetMarkerContext: "targetMarkerContext",
    allRowsSelected: "allRowsSelected",
    selectionType: "selectionType",
    column: "column",
    headerHeight: "headerHeight",
    sorts: "sorts"
  },
  outputs: {
    sort: "sort",
    select: "select",
    columnContextmenu: "columnContextmenu"
  },
  decls: 6,
  vars: 6,
  consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]],
  template: function DataTableHeaderCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableHeaderCellComponent_4_Template, 1, 2, null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() {
        return ctx.onSort();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTarget);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sortClass);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableHeaderCellComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-header-cell',
      template: `
    <div class="datatable-header-cell-template-wrap">
      <ng-template
        *ngIf="isTarget"
        [ngTemplateOutlet]="targetMarkerTemplate"
        [ngTemplateOutletContext]="targetMarkerContext"
      >
      </ng-template>
      <label *ngIf="isCheckboxable" class="datatable-checkbox">
        <input type="checkbox" [checked]="allRowsSelected" (change)="select.emit(!allRowsSelected)" />
      </label>
      <span *ngIf="!column.headerTemplate" class="datatable-header-cell-wrapper">
        <span class="datatable-header-cell-label draggable" (click)="onSort()" [innerHTML]="name"> </span>
      </span>
      <ng-template
        *ngIf="column.headerTemplate"
        [ngTemplateOutlet]="column.headerTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
      <span (click)="onSort()" [class]="sortClass"> </span>
    </div>
  `,
      host: {
        class: 'datatable-header-cell'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    sortType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortAscendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortDescendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortUnsetIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    targetMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    targetMarkerContext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allRowsSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    column: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    columnContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    columnCssClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class']
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.title']
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.minWidth.px']
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.maxWidth.px']
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width.px']
    }],
    onContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['contextmenu', ['$event']]
    }]
  });
})();

class DataTableHeaderComponent {
  constructor(cd) {
    this.cd = cd;
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this._columnGroupWidths = {
      total: 100
    };
    this._styleByGroup = {
      left: {},
      center: {},
      right: {}
    };
    this.destroyed = false;
  }

  set innerWidth(val) {
    this._innerWidth = val;
    setTimeout(() => {
      if (this._columns) {
        const colByPin = columnsByPin(this._columns);
        this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        this.setStylesByGroup();
      }
    });
  }

  get innerWidth() {
    return this._innerWidth;
  }

  set headerHeight(val) {
    if (val !== 'auto') {
      this._headerHeight = `${val}px`;
    } else {
      this._headerHeight = val;
    }
  }

  get headerHeight() {
    return this._headerHeight;
  }

  set columns(val) {
    this._columns = val;
    const colsByPin = columnsByPin(val);
    this._columnsByPin = columnsByPinArr(val);
    setTimeout(() => {
      this._columnGroupWidths = columnGroupWidths(colsByPin, val);
      this.setStylesByGroup();
    });
  }

  get columns() {
    return this._columns;
  }

  set offsetX(val) {
    this._offsetX = val;
    this.setStylesByGroup();
  }

  get offsetX() {
    return this._offsetX;
  }

  ngOnDestroy() {
    this.destroyed = true;
  }

  onLongPressStart({
    event,
    model
  }) {
    model.dragging = true;
    this.dragEventTarget = event;
  }

  onLongPressEnd({
    event,
    model
  }) {
    this.dragEventTarget = event; // delay resetting so sort can be
    // prevented if we were dragging

    setTimeout(() => {
      // datatable component creates copies from columns on reorder
      // set dragging to false on new objects
      const column = this._columns.find(c => c.$$id === model.$$id);

      if (column) {
        column.dragging = false;
      }
    }, 5);
  }

  get headerWidth() {
    if (this.scrollbarH) {
      return this.innerWidth + 'px';
    }

    return '100%';
  }

  trackByGroups(index, colGroup) {
    return colGroup.type;
  }

  columnTrackingFn(index, column) {
    return column.$$id;
  }

  onColumnResized(width, column) {
    if (width <= column.minWidth) {
      width = column.minWidth;
    } else if (width >= column.maxWidth) {
      width = column.maxWidth;
    }

    this.resize.emit({
      column,
      prevValue: column.width,
      newValue: width
    });
  }

  onColumnReordered({
    prevIndex,
    newIndex,
    model
  }) {
    const column = this.getColumn(newIndex);
    column.isTarget = false;
    column.targetMarkerContext = undefined;
    this.reorder.emit({
      column: model,
      prevValue: prevIndex,
      newValue: newIndex
    });
  }

  onTargetChanged({
    prevIndex,
    newIndex,
    initialIndex
  }) {
    if (prevIndex || prevIndex === 0) {
      const oldColumn = this.getColumn(prevIndex);
      oldColumn.isTarget = false;
      oldColumn.targetMarkerContext = undefined;
    }

    if (newIndex || newIndex === 0) {
      const newColumn = this.getColumn(newIndex);
      newColumn.isTarget = true;

      if (initialIndex !== newIndex) {
        newColumn.targetMarkerContext = {
          class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
        };
      }
    }
  }

  getColumn(index) {
    const leftColumnCount = this._columnsByPin[0].columns.length;

    if (index < leftColumnCount) {
      return this._columnsByPin[0].columns[index];
    }

    const centerColumnCount = this._columnsByPin[1].columns.length;

    if (index < leftColumnCount + centerColumnCount) {
      return this._columnsByPin[1].columns[index - leftColumnCount];
    }

    return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
  }

  onSort({
    column,
    prevValue,
    newValue
  }) {
    // if we are dragging don't sort!
    if (column.dragging) {
      return;
    }

    const sorts = this.calcNewSorts(column, prevValue, newValue);
    this.sort.emit({
      sorts,
      column,
      prevValue,
      newValue
    });
  }

  calcNewSorts(column, prevValue, newValue) {
    let idx = 0;

    if (!this.sorts) {
      this.sorts = [];
    }

    const sorts = this.sorts.map((s, i) => {
      s = Object.assign({}, s);

      if (s.prop === column.prop) {
        idx = i;
      }

      return s;
    });

    if (newValue === undefined) {
      sorts.splice(idx, 1);
    } else if (prevValue) {
      sorts[idx].dir = newValue;
    } else {
      if (this.sortType === SortType.single) {
        sorts.splice(0, this.sorts.length);
      }

      sorts.push({
        dir: newValue,
        prop: column.prop
      });
    }

    return sorts;
  }

  setStylesByGroup() {
    this._styleByGroup.left = this.calcStylesByGroup('left');
    this._styleByGroup.center = this.calcStylesByGroup('center');
    this._styleByGroup.right = this.calcStylesByGroup('right');

    if (!this.destroyed) {
      this.cd.detectChanges();
    }
  }

  calcStylesByGroup(group) {
    const widths = this._columnGroupWidths;
    const offsetX = this.offsetX;
    const styles = {
      width: `${widths[group]}px`
    };

    if (group === 'center') {
      translateXY(styles, offsetX * -1, 0);
    } else if (group === 'right') {
      const totalDiff = widths.total - this.innerWidth;
      const offset = totalDiff * -1;
      translateXY(styles, offset, 0);
    }

    return styles;
  }

}

DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) {
  return new (t || DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

DataTableHeaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableHeaderComponent,
  selectors: [["datatable-header"]],
  hostAttrs: [1, "datatable-header"],
  hostVars: 4,
  hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
    }
  },
  inputs: {
    sortAscendingIcon: "sortAscendingIcon",
    sortDescendingIcon: "sortDescendingIcon",
    sortUnsetIcon: "sortUnsetIcon",
    scrollbarH: "scrollbarH",
    dealsWithGroup: "dealsWithGroup",
    targetMarkerTemplate: "targetMarkerTemplate",
    innerWidth: "innerWidth",
    sorts: "sorts",
    sortType: "sortType",
    allRowsSelected: "allRowsSelected",
    selectionType: "selectionType",
    reorderable: "reorderable",
    headerHeight: "headerHeight",
    columns: "columns",
    offsetX: "offsetX"
  },
  outputs: {
    sort: "sort",
    reorder: "reorder",
    resize: "resize",
    select: "select",
    columnContextmenu: "columnContextmenu"
  },
  decls: 2,
  vars: 4,
  consts: [["role", "row", "orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]],
  template: function DataTableHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) {
        return ctx.onColumnReordered($event);
      })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) {
        return ctx.onTargetChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    }
  },
  dependencies: [DataTableHeaderCellComponent, OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, ResizeableDirective, LongPressDirective, DraggableDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableHeaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-header',
      template: `
    <div
      role="row"
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          role="columnheader"
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [sortUnsetIcon]="sortUnsetIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `,
      host: {
        class: 'datatable-header'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    sortAscendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortDescendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortUnsetIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dealsWithGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    targetMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allRowsSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    reorderable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    reorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    resize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    columnContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    headerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width']
    }]
  });
})();
/**
 * Throttle a function
 */


function throttle(func, wait, options) {
  options = options || {};
  let context;
  let args;
  let result;
  let timeout = null;
  let previous = 0;

  function later() {
    previous = options.leading === false ? 0 : +new Date();
    timeout = null;
    result = func.apply(context, args);
  }

  return function () {
    const now = +new Date();

    if (!previous && options.leading === false) {
      previous = now;
    }

    const remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */


function throttleable(duration, options) {
  return function innerDecorator(target, key, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function getter() {
        Object.defineProperty(this, key, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: throttle(descriptor.value, duration, options)
        });
        return this[key];
      }
    };
  };
}
/**
 * Calculates the Total Flex Grow
 */


function getTotalFlexGrow(columns) {
  let totalFlexGrow = 0;

  for (const c of columns) {
    totalFlexGrow += c.flexGrow || 0;
  }

  return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 */


function adjustColumnWidths(allColumns, expectedWidth) {
  const columnsWidth = columnsTotalWidth(allColumns);
  const totalFlexGrow = getTotalFlexGrow(allColumns);
  const colsByGroup = columnsByPin(allColumns);

  if (columnsWidth !== expectedWidth) {
    scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
  }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 */


function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
  // calculate total width and flexgrow points for coulumns that can be resized
  for (const attr in colsByGroup) {
    for (const column of colsByGroup[attr]) {
      if (!column.canAutoResize) {
        maxWidth -= column.width;
        totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
      } else {
        column.width = 0;
      }
    }
  }

  const hasMinWidth = {};
  let remainingWidth = maxWidth; // resize columns until no width is left to be distributed

  do {
    const widthPerFlexPoint = remainingWidth / totalFlexGrow;
    remainingWidth = 0;

    for (const attr in colsByGroup) {
      for (const column of colsByGroup[attr]) {
        // if the column can be resize and it hasn't reached its minimum width yet
        if (column.canAutoResize && !hasMinWidth[column.prop]) {
          const newWidth = column.width + column.flexGrow * widthPerFlexPoint;

          if (column.minWidth !== undefined && newWidth < column.minWidth) {
            remainingWidth += newWidth - column.minWidth;
            column.width = column.minWidth;
            hasMinWidth[column.prop] = true;
          } else {
            column.width = newWidth;
          }
        }
      }
    }
  } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 */


function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
  const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(c => {
    return c.canAutoResize !== false;
  });

  for (const column of columnsToResize) {
    if (!column.$$oldWidth) {
      column.$$oldWidth = column.width;
    }
  }

  let additionWidthPerColumn = 0;
  let exceedsWindow = false;
  let contentWidth = getContentWidth(allColumns, defaultColWidth);
  let remainingWidth = expectedWidth - contentWidth;
  const columnsProcessed = [];
  const remainingWidthLimit = 1; // when to stop
  // This loop takes care of the

  do {
    additionWidthPerColumn = remainingWidth / columnsToResize.length;
    exceedsWindow = contentWidth >= expectedWidth;

    for (const column of columnsToResize) {
      if (exceedsWindow && allowBleed) {
        column.width = column.$$oldWidth || column.width || defaultColWidth;
      } else {
        const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;

        if (column.minWidth && newSize < column.minWidth) {
          column.width = column.minWidth;
          columnsProcessed.push(column);
        } else if (column.maxWidth && newSize > column.maxWidth) {
          column.width = column.maxWidth;
          columnsProcessed.push(column);
        } else {
          column.width = newSize;
        }
      }

      column.width = Math.max(0, column.width);
    }

    contentWidth = getContentWidth(allColumns);
    remainingWidth = expectedWidth - contentWidth;
    removeProcessedColumns(columnsToResize, columnsProcessed);
  } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 */


function removeProcessedColumns(columnsToResize, columnsProcessed) {
  for (const column of columnsProcessed) {
    const index = columnsToResize.indexOf(column);
    columnsToResize.splice(index, 1);
  }
}
/**
 * Gets the width of the columns
 */


function getContentWidth(allColumns, defaultColWidth = 300) {
  let contentWidth = 0;

  for (const column of allColumns) {
    contentWidth += column.width || defaultColWidth;
  }

  return contentWidth;
}

class DataTablePagerComponent {
  constructor() {
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._count = 0;
    this._page = 1;
    this._size = 0;
  }

  set size(val) {
    this._size = val;
    this.pages = this.calcPages();
  }

  get size() {
    return this._size;
  }

  set count(val) {
    this._count = val;
    this.pages = this.calcPages();
  }

  get count() {
    return this._count;
  }

  set page(val) {
    this._page = val;
    this.pages = this.calcPages();
  }

  get page() {
    return this._page;
  }

  get totalPages() {
    const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
    return Math.max(count || 0, 1);
  }

  canPrevious() {
    return this.page > 1;
  }

  canNext() {
    return this.page < this.totalPages;
  }

  prevPage() {
    this.selectPage(this.page - 1);
  }

  nextPage() {
    this.selectPage(this.page + 1);
  }

  selectPage(page) {
    if (page > 0 && page <= this.totalPages && page !== this.page) {
      this.page = page;
      this.change.emit({
        page
      });
    }
  }

  calcPages(page) {
    const pages = [];
    let startPage = 1;
    let endPage = this.totalPages;
    const maxSize = 5;
    const isMaxSized = maxSize < this.totalPages;
    page = page || this.page;

    if (isMaxSized) {
      startPage = page - Math.floor(maxSize / 2);
      endPage = page + Math.floor(maxSize / 2);

      if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(startPage + maxSize - 1, this.totalPages);
      } else if (endPage > this.totalPages) {
        startPage = Math.max(this.totalPages - maxSize + 1, 1);
        endPage = this.totalPages;
      }
    }

    for (let num = startPage; num <= endPage; num++) {
      pages.push({
        number: num,
        text: num
      });
    }

    return pages;
  }

}

DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) {
  return new (t || DataTablePagerComponent)();
};

DataTablePagerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTablePagerComponent,
  selectors: [["datatable-pager"]],
  hostAttrs: [1, "datatable-pager"],
  inputs: {
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    size: "size",
    count: "count",
    page: "page"
  },
  outputs: {
    change: "change"
  },
  decls: 14,
  vars: 21,
  consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]],
  template: function DataTablePagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li")(2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() {
        return ctx.selectPage(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li")(5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() {
        return ctx.prevPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li")(9, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() {
        return ctx.nextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() {
        return ctx.selectPage(ctx.totalPages);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerPreviousIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerRightArrowIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerNextIcon);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablePagerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-pager',
      template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to first page" href="javascript:void(0)" (click)="selectPage(1)">
          <i class="{{ pagerPreviousIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to previous page" href="javascript:void(0)" (click)="prevPage()">
          <i class="{{ pagerLeftArrowIcon }}"></i>
        </a>
      </li>
      <li
        role="button"
        [attr.aria-label]="'page ' + pg.number"
        class="pages"
        *ngFor="let pg of pages"
        [class.active]="pg.number === page"
      >
        <a href="javascript:void(0)" (click)="selectPage(pg.number)">
          {{ pg.text }}
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to next page" href="javascript:void(0)" (click)="nextPage()">
          <i class="{{ pagerRightArrowIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to last page" href="javascript:void(0)" (click)="selectPage(totalPages)">
          <i class="{{ pagerNextIcon }}"></i>
        </a>
      </li>
    </ul>
  `,
      host: {
        class: 'datatable-pager'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    count: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class DataTableFooterComponent {
  constructor() {
    this.selectedCount = 0;
    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  get isVisible() {
    return this.rowCount / this.pageSize > 1;
  }

  get curPage() {
    return this.offset + 1;
  }

}

DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) {
  return new (t || DataTableFooterComponent)();
};

DataTableFooterComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableFooterComponent,
  selectors: [["datatable-footer"]],
  hostAttrs: [1, "datatable-footer"],
  inputs: {
    footerHeight: "footerHeight",
    rowCount: "rowCount",
    pageSize: "pageSize",
    offset: "offset",
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    totalMessage: "totalMessage",
    footerTemplate: "footerTemplate",
    selectedCount: "selectedCount",
    selectedMessage: "selectedMessage"
  },
  outputs: {
    page: "page"
  },
  decls: 4,
  vars: 8,
  consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]],
  template: function DataTableFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c4, ctx.selectedMessage));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
    }
  },
  dependencies: [DataTablePagerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableFooterComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-footer',
      template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{ 'selected-count': selectedMessage }"
      [style.height.px]="footerHeight"
    >
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{
          rowCount: rowCount,
          pageSize: pageSize,
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }"
      >
      </ng-template>
      <div class="page-count" *ngIf="!footerTemplate">
        <span *ngIf="selectedMessage"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>
        {{ rowCount?.toLocaleString() }} {{ totalMessage }}
      </div>
      <datatable-pager
        *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)"
      >
      </datatable-pager>
    </div>
  `,
      host: {
        class: 'datatable-footer'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    footerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    totalMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class DatatableComponent {
  constructor(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
    this.scrollbarHelper = scrollbarHelper;
    this.dimensionsHelper = dimensionsHelper;
    this.cd = cd;
    this.columnChangesService = columnChangesService;
    this.configuration = configuration;
    /**
     * List of row objects that should be
     * represented as selected in the grid.
     * Default value: `[]`
     */

    this.selected = [];
    /**
     * Enable vertical scrollbars
     */

    this.scrollbarV = false;
    /**
     * Enable horz scrollbars
     */

    this.scrollbarH = false;
    /**
     * The row height; which is necessary
     * to calculate the height for the lazy rendering.
     */

    this.rowHeight = 30;
    /**
     * Type of column width distribution formula.
     * Example: flex, force, standard
     */

    this.columnMode = ColumnMode.standard;
    /**
     * The minimum header height in pixels.
     * Pass a falsey for no header
     */

    this.headerHeight = 30;
    /**
     * The minimum footer height in pixels.
     * Pass falsey for no footer
     */

    this.footerHeight = 0;
    /**
     * If the table should use external paging
     * otherwise its assumed that all data is preloaded.
     */

    this.externalPaging = false;
    /**
     * If the table should use external sorting or
     * the built-in basic sorting.
     */

    this.externalSorting = false;
    /**
     * Show the linear loading bar.
     * Default value: `false`
     */

    this.loadingIndicator = false;
    /**
     * Enable/Disable ability to re-order columns
     * by dragging them.
     */

    this.reorderable = true;
    /**
     * Swap columns on re-order columns or
     * move them.
     */

    this.swapColumns = true;
    /**
     * The type of sorting
     */

    this.sortType = SortType.single;
    /**
     * Array of sorted columns by property and type.
     * Default value: `[]`
     */

    this.sorts = [];
    /**
     * Css class overrides
     */

    this.cssClasses = {
      sortAscending: 'datatable-icon-up',
      sortDescending: 'datatable-icon-down',
      sortUnset: 'datatable-icon-sort-unset',
      pagerLeftArrow: 'datatable-icon-left',
      pagerRightArrow: 'datatable-icon-right',
      pagerPrevious: 'datatable-icon-prev',
      pagerNext: 'datatable-icon-skip'
    };
    /**
     * Message overrides for localization
     *
     * emptyMessage     [default] = 'No data to display'
     * totalMessage     [default] = 'total'
     * selectedMessage  [default] = 'selected'
     */

    this.messages = {
      // Message to show when array is presented
      // but contains no values
      emptyMessage: 'No data to display',
      // Footer total message
      totalMessage: 'total',
      // Footer selected message
      selectedMessage: 'selected'
    };
    /**
     * A boolean you can use to set the detault behaviour of rows and groups
     * whether they will start expanded or not. If ommited the default is NOT expanded.
     *
     */

    this.groupExpansionDefault = false;
    /**
     * Property to which you can use for determining select all
     * rows on current page or not.
     *
     * @memberOf DatatableComponent
     */

    this.selectAllRowsOnPage = false;
    /**
     * A flag for row virtualization on / off
     */

    this.virtualization = true;
    /**
     * A flag for switching summary row on / off
     */

    this.summaryRow = false;
    /**
     * A height of summary row
     */

    this.summaryHeight = 30;
    /**
     * A property holds a summary row position: top/bottom
     */

    this.summaryPosition = 'top';
    /**
     * Body was scrolled typically in a `scrollbarV:true` scenario.
     */

    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * A cell or row was focused via keyboard or mouse click.
     */

    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * A cell or row was selected.
     */

    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Column sort was invoked.
     */

    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * The table was paged either triggered by the pager or the body scroll.
     */

    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Columns were re-ordered.
     */

    this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Column was resized.
     */

    this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * The context menu was invoked on the table.
     * type indicates whether the header or the body was clicked.
     * content contains either the column or the row that was clicked.
     */

    this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    /**
     * A row was expanded ot collapsed for tree
     */

    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.rowCount = 0;
    this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
    this._count = 0;
    this._offset = 0;
    this._subscriptions = [];
    /**
     * This will be used when displaying or selecting rows.
     * when tracking/comparing them, we'll use the value of this fn,
     *
     * (`fn(x) === fn(y)` instead of `x === y`)
     */

    this.rowIdentity = x => {
      if (this._groupRowsBy) {
        // each group in groupedRows are stored as {key, value: [rows]},
        // where key is the groupRowsBy index
        return x.key;
      } else {
        return x;
      }
    }; // get ref to elm for measuring


    this.element = element.nativeElement;
    this.rowDiffer = differs.find({}).create(); // apply global settings from Module.forRoot

    if (this.configuration && this.configuration.messages) {
      this.messages = Object.assign({}, this.configuration.messages);
    }
  }
  /**
   * Rows that are displayed in the table.
   */


  set rows(val) {
    this._rows = val;

    if (val) {
      this._internalRows = [...val];
    } // auto sort on new updates


    if (!this.externalSorting) {
      this.sortInternalRows();
    } // auto group by parent on new update


    this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation)); // recalculate sizes/etc

    this.recalculate();

    if (this._rows && this._groupRowsBy) {
      // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
      this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
    }

    this.cd.markForCheck();
  }
  /**
   * Gets the rows.
   */


  get rows() {
    return this._rows;
  }
  /**
   * This attribute allows the user to set the name of the column to group the data with
   */


  set groupRowsBy(val) {
    if (val) {
      this._groupRowsBy = val;

      if (this._rows && this._groupRowsBy) {
        // cretes a new array with the data grouped
        this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
      }
    }
  }

  get groupRowsBy() {
    return this._groupRowsBy;
  }
  /**
   * Columns to be displayed.
   */


  set columns(val) {
    if (val) {
      this._internalColumns = [...val];
      setColumnDefaults(this._internalColumns);
      this.recalculateColumns();
    }

    this._columns = val;
  }
  /**
   * Get the columns.
   */


  get columns() {
    return this._columns;
  }
  /**
   * The page size to be shown.
   * Default value: `undefined`
   */


  set limit(val) {
    this._limit = val; // recalculate sizes/etc

    this.recalculate();
  }
  /**
   * Gets the limit.
   */


  get limit() {
    return this._limit;
  }
  /**
   * The total count of all rows.
   * Default value: `0`
   */


  set count(val) {
    this._count = val; // recalculate sizes/etc

    this.recalculate();
  }
  /**
   * Gets the count.
   */


  get count() {
    return this._count;
  }
  /**
   * The current offset ( page - 1 ) shown.
   * Default value: `0`
   */


  set offset(val) {
    this._offset = val;
  }

  get offset() {
    return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
  }
  /**
   * CSS class applied if the header height if fixed height.
   */


  get isFixedHeader() {
    const headerHeight = this.headerHeight;
    return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
  }
  /**
   * CSS class applied to the root element if
   * the row heights are fixed heights.
   */


  get isFixedRow() {
    return this.rowHeight !== 'auto';
  }
  /**
   * CSS class applied to root element if
   * vertical scrolling is enabled.
   */


  get isVertScroll() {
    return this.scrollbarV;
  }
  /**
   * CSS class applied to root element if
   * virtualization is enabled.
   */


  get isVirtualized() {
    return this.virtualization;
  }
  /**
   * CSS class applied to the root element
   * if the horziontal scrolling is enabled.
   */


  get isHorScroll() {
    return this.scrollbarH;
  }
  /**
   * CSS class applied to root element is selectable.
   */


  get isSelectable() {
    return this.selectionType !== undefined;
  }
  /**
   * CSS class applied to root is checkbox selection.
   */


  get isCheckboxSelection() {
    return this.selectionType === SelectionType.checkbox;
  }
  /**
   * CSS class applied to root if cell selection.
   */


  get isCellSelection() {
    return this.selectionType === SelectionType.cell;
  }
  /**
   * CSS class applied to root if single select.
   */


  get isSingleSelection() {
    return this.selectionType === SelectionType.single;
  }
  /**
   * CSS class added to root element if mulit select
   */


  get isMultiSelection() {
    return this.selectionType === SelectionType.multi;
  }
  /**
   * CSS class added to root element if mulit click select
   */


  get isMultiClickSelection() {
    return this.selectionType === SelectionType.multiClick;
  }
  /**
   * Column templates gathered from `ContentChildren`
   * if described in your markup.
   */


  set columnTemplates(val) {
    this._columnTemplates = val;
    this.translateColumns(val);
  }
  /**
   * Returns the column templates.
   */


  get columnTemplates() {
    return this._columnTemplates;
  }
  /**
   * Returns if all rows are selected.
   */


  get allRowsSelected() {
    let allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;

    if (this.bodyComponent && this.selectAllRowsOnPage) {
      const indexes = this.bodyComponent.indexes;
      const rowsOnPage = indexes.last - indexes.first;
      allRowsSelected = this.selected.length === rowsOnPage;
    }

    return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
  }
  /**
   * Lifecycle hook that is called after data-bound
   * properties of a directive are initialized.
   */


  ngOnInit() {
    // need to call this immediatly to size
    // if the table is hidden the visibility
    // listener will invoke this itself upon show
    this.recalculate();
  }
  /**
   * Lifecycle hook that is called after a component's
   * view has been fully initialized.
   */


  ngAfterViewInit() {
    if (!this.externalSorting) {
      this.sortInternalRows();
    } // this has to be done to prevent the change detection
    // tree from freaking out because we are readjusting


    if (typeof requestAnimationFrame === 'undefined') {
      return;
    }

    requestAnimationFrame(() => {
      this.recalculate(); // emit page for virtual server-side kickoff

      if (this.externalPaging && this.scrollbarV) {
        this.page.emit({
          count: this.count,
          pageSize: this.pageSize,
          limit: this.limit,
          offset: 0
        });
      }
    });
  }
  /**
   * Lifecycle hook that is called after a component's
   * content has been fully initialized.
   */


  ngAfterContentInit() {
    this.columnTemplates.changes.subscribe(v => this.translateColumns(v));
    this.listenForColumnInputChanges();
  }
  /**
   * Translates the templates to the column objects
   */


  translateColumns(val) {
    if (val) {
      const arr = val.toArray();

      if (arr.length) {
        this._internalColumns = translateTemplates(arr);
        setColumnDefaults(this._internalColumns);
        this.recalculateColumns();
        this.sortInternalRows();
        this.cd.markForCheck();
      }
    }
  }
  /**
   * Creates a map with the data grouped by the user choice of grouping index
   *
   * @param originalArray the original array passed via parameter
   * @param groupByIndex  the index of the column to group the data by
   */


  groupArrayBy(originalArray, groupBy) {
    // create a map to hold groups with their corresponding results
    const map = new Map();
    let i = 0;
    originalArray.forEach(item => {
      const key = item[groupBy];

      if (!map.has(key)) {
        map.set(key, [item]);
      } else {
        map.get(key).push(item);
      }

      i++;
    });

    const addGroup = (key, value) => {
      return {
        key,
        value
      };
    }; // convert map back to a simple array of objects


    return Array.from(map, x => addGroup(x[0], x[1]));
  }
  /*
   * Lifecycle hook that is called when Angular dirty checks a directive.
   */


  ngDoCheck() {
    if (this.rowDiffer.diff(this.rows)) {
      if (!this.externalSorting) {
        this.sortInternalRows();
      } else {
        this._internalRows = [...this.rows];
      } // auto group by parent on new update


      this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
      this.recalculatePages();
      this.cd.markForCheck();
    }
  }
  /**
   * Recalc's the sizes of the grid.
   *
   * Updated automatically on changes to:
   *
   *  - Columns
   *  - Rows
   *  - Paging related
   *
   * Also can be manually invoked or upon window resize.
   */


  recalculate() {
    this.recalculateDims();
    this.recalculateColumns();
    this.cd.markForCheck();
  }
  /**
   * Window resize handler to update sizes.
   */


  onWindowResize() {
    this.recalculate();
  }
  /**
   * Recalulcates the column widths based on column width
   * distribution mode and scrollbar offsets.
   */


  recalculateColumns(columns = this._internalColumns, forceIdx = -1, allowBleed = this.scrollbarH) {
    if (!columns) return undefined;
    let width = this._innerWidth;

    if (this.scrollbarV) {
      width = width - this.scrollbarHelper.width;
    }

    if (this.columnMode === ColumnMode.force) {
      forceFillColumnWidths(columns, width, forceIdx, allowBleed);
    } else if (this.columnMode === ColumnMode.flex) {
      adjustColumnWidths(columns, width);
    }

    return columns;
  }
  /**
   * Recalculates the dimensions of the table size.
   * Internally calls the page size and row count calcs too.
   *
   */


  recalculateDims() {
    const dims = this.dimensionsHelper.getDimensions(this.element);
    this._innerWidth = Math.floor(dims.width);

    if (this.scrollbarV) {
      let height = dims.height;
      if (this.headerHeight) height = height - this.headerHeight;
      if (this.footerHeight) height = height - this.footerHeight;
      this.bodyHeight = height;
    }

    this.recalculatePages();
  }
  /**
   * Recalculates the pages after a update.
   */


  recalculatePages() {
    this.pageSize = this.calcPageSize();
    this.rowCount = this.calcRowCount();
  }
  /**
   * Body triggered a page event.
   */


  onBodyPage({
    offset
  }) {
    // Avoid pagination caming from body events like scroll when the table
    // has no virtualization and the external paging is enable.
    // This means, let's the developer handle pagination by my him(her) self
    if (this.externalPaging && !this.virtualization) {
      return;
    }

    this.offset = offset;
    this.page.emit({
      count: this.count,
      pageSize: this.pageSize,
      limit: this.limit,
      offset: this.offset
    });
  }
  /**
   * The body triggered a scroll event.
   */


  onBodyScroll(event) {
    this._offsetX.next(event.offsetX);

    this.scroll.emit(event);
    this.cd.detectChanges();
  }
  /**
   * The footer triggered a page event.
   */


  onFooterPage(event) {
    this.offset = event.page - 1;
    this.bodyComponent.updateOffsetY(this.offset);
    this.page.emit({
      count: this.count,
      pageSize: this.pageSize,
      limit: this.limit,
      offset: this.offset
    });

    if (this.selectAllRowsOnPage) {
      this.selected = [];
      this.select.emit({
        selected: this.selected
      });
    }
  }
  /**
   * Recalculates the sizes of the page
   */


  calcPageSize(val = this.rows) {
    // Keep the page size constant even if the row has been expanded.
    // This is because an expanded row is still considered to be a child of
    // the original row.  Hence calculation would use rowHeight only.
    if (this.scrollbarV && this.virtualization) {
      const size = Math.ceil(this.bodyHeight / this.rowHeight);
      return Math.max(size, 0);
    } // if limit is passed, we are paging


    if (this.limit !== undefined) {
      return this.limit;
    } // otherwise use row length


    if (val) {
      return val.length;
    } // other empty :(


    return 0;
  }
  /**
   * Calculates the row count.
   */


  calcRowCount(val = this.rows) {
    if (!this.externalPaging) {
      if (!val) return 0;

      if (this.groupedRows) {
        return this.groupedRows.length;
      } else if (this.treeFromRelation != null && this.treeToRelation != null) {
        return this._internalRows.length;
      } else {
        return val.length;
      }
    }

    return this.count;
  }
  /**
   * The header triggered a contextmenu event.
   */


  onColumnContextmenu({
    event,
    column
  }) {
    this.tableContextmenu.emit({
      event,
      type: ContextmenuType.header,
      content: column
    });
  }
  /**
   * The body triggered a contextmenu event.
   */


  onRowContextmenu({
    event,
    row
  }) {
    this.tableContextmenu.emit({
      event,
      type: ContextmenuType.body,
      content: row
    });
  }
  /**
   * The header triggered a column resize event.
   */


  onColumnResize({
    column,
    newValue
  }) {
    /* Safari/iOS 10.2 workaround */
    if (column === undefined) {
      return;
    }

    let idx;

    const cols = this._internalColumns.map((c, i) => {
      c = Object.assign({}, c);

      if (c.$$id === column.$$id) {
        idx = i;
        c.width = newValue; // set this so we can force the column
        // width distribution to be to this value

        c.$$oldWidth = newValue;
      }

      return c;
    });

    this.recalculateColumns(cols, idx);
    this._internalColumns = cols;
    this.resize.emit({
      column,
      newValue
    });
  }
  /**
   * The header triggered a column re-order event.
   */


  onColumnReorder({
    column,
    newValue,
    prevValue
  }) {
    const cols = this._internalColumns.map(c => {
      return Object.assign({}, c);
    });

    if (this.swapColumns) {
      const prevCol = cols[newValue];
      cols[newValue] = column;
      cols[prevValue] = prevCol;
    } else {
      if (newValue > prevValue) {
        const movedCol = cols[prevValue];

        for (let i = prevValue; i < newValue; i++) {
          cols[i] = cols[i + 1];
        }

        cols[newValue] = movedCol;
      } else {
        const movedCol = cols[prevValue];

        for (let i = prevValue; i > newValue; i--) {
          cols[i] = cols[i - 1];
        }

        cols[newValue] = movedCol;
      }
    }

    this._internalColumns = cols;
    this.reorder.emit({
      column,
      newValue,
      prevValue
    });
  }
  /**
   * The header triggered a column sort event.
   */


  onColumnSort(event) {
    // clean selected rows
    if (this.selectAllRowsOnPage) {
      this.selected = [];
      this.select.emit({
        selected: this.selected
      });
    }

    this.sorts = event.sorts; // this could be optimized better since it will resort
    // the rows again on the 'push' detection...

    if (this.externalSorting === false) {
      // don't use normal setter so we don't resort
      this.sortInternalRows();
    } // auto group by parent on new update


    this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation)); // Always go to first page when sorting to see the newly sorted data

    this.offset = 0;
    this.bodyComponent.updateOffsetY(this.offset);
    this.sort.emit(event);
  }
  /**
   * Toggle all row selection
   */


  onHeaderSelect(event) {
    if (this.bodyComponent && this.selectAllRowsOnPage) {
      // before we splice, chk if we currently have all selected
      const first = this.bodyComponent.indexes.first;
      const last = this.bodyComponent.indexes.last;
      const allSelected = this.selected.length === last - first; // remove all existing either way

      this.selected = []; // do the opposite here

      if (!allSelected) {
        this.selected.push(...this._internalRows.slice(first, last));
      }
    } else {
      // before we splice, chk if we currently have all selected
      const allSelected = this.selected.length === this.rows.length; // remove all existing either way

      this.selected = []; // do the opposite here

      if (!allSelected) {
        this.selected.push(...this.rows);
      }
    }

    this.select.emit({
      selected: this.selected
    });
  }
  /**
   * A row was selected from body
   */


  onBodySelect(event) {
    this.select.emit(event);
  }
  /**
   * A row was expanded or collapsed for tree
   */


  onTreeAction(event) {
    const row = event.row; // TODO: For duplicated items this will not work

    const rowIndex = this._rows.findIndex(r => r[this.treeToRelation] === event.row[this.treeToRelation]);

    this.treeAction.emit({
      row,
      rowIndex
    });
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  /**
   * listen for changes to input bindings of all DataTableColumnDirective and
   * trigger the columnTemplates.changes observable to emit
   */


  listenForColumnInputChanges() {
    this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(() => {
      if (this.columnTemplates) {
        this.columnTemplates.notifyOnChanges();
      }
    }));
  }

  sortInternalRows() {
    this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
  }

}

DatatableComponent.ɵfac = function DatatableComponent_Factory(t) {
  return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('configuration', 8));
};

DatatableComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DatatableComponent,
  selectors: [["ngx-datatable"]],
  contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableFooterDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnDirective, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
    }
  },
  viewQuery: function DatatableComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DataTableBodyComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DataTableHeaderComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
    }
  },
  hostAttrs: [1, "ngx-datatable"],
  hostVars: 22,
  hostBindings: function DatatableComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
    }
  },
  inputs: {
    targetMarkerTemplate: "targetMarkerTemplate",
    rows: "rows",
    groupRowsBy: "groupRowsBy",
    groupedRows: "groupedRows",
    columns: "columns",
    selected: "selected",
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    rowHeight: "rowHeight",
    columnMode: "columnMode",
    headerHeight: "headerHeight",
    footerHeight: "footerHeight",
    externalPaging: "externalPaging",
    externalSorting: "externalSorting",
    limit: "limit",
    count: "count",
    offset: "offset",
    loadingIndicator: "loadingIndicator",
    selectionType: "selectionType",
    reorderable: "reorderable",
    swapColumns: "swapColumns",
    sortType: "sortType",
    sorts: "sorts",
    cssClasses: "cssClasses",
    messages: "messages",
    rowClass: "rowClass",
    selectCheck: "selectCheck",
    displayCheck: "displayCheck",
    groupExpansionDefault: "groupExpansionDefault",
    trackByProp: "trackByProp",
    selectAllRowsOnPage: "selectAllRowsOnPage",
    virtualization: "virtualization",
    treeFromRelation: "treeFromRelation",
    treeToRelation: "treeToRelation",
    summaryRow: "summaryRow",
    summaryHeight: "summaryHeight",
    summaryPosition: "summaryPosition",
    rowIdentity: "rowIdentity"
  },
  outputs: {
    scroll: "scroll",
    activate: "activate",
    select: "select",
    sort: "sort",
    page: "page",
    reorder: "reorder",
    resize: "resize",
    tableContextmenu: "tableContextmenu",
    treeAction: "treeAction"
  },
  decls: 5,
  vars: 34,
  consts: [["role", "table", "visibilityObserver", "", 3, "visible"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], ["role", "rowgroup", 3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]],
  template: function DatatableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() {
        return ctx.recalculate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 17, "datatable-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "datatable-body", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) {
        return ctx.onBodyPage($event);
      })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) {
        return ctx.activate.emit($event);
      })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) {
        return ctx.onRowContextmenu($event);
      })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) {
        return ctx.onBodySelect($event);
      })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) {
        return ctx.onBodyScroll($event);
      })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) {
        return ctx.onTreeAction($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerHeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerHeight);
    }
  },
  dependencies: [DataTableHeaderComponent, DataTableBodyComponent, DataTableFooterComponent, VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe],
  styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable *:before,.ngx-datatable *:after{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-header-inner{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([throttleable(5)], DatatableComponent.prototype, "onWindowResize", null);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-datatable',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'ngx-datatable'
      },
      template: "<div role=\"table\" visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    role=\"rowgroup\"\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [sortUnsetIcon]=\"cssClasses.sortUnset\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    role=\"rowgroup\"\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
      styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable *:before,.ngx-datatable *:after{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-header-inner{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}\n"]
    }]
  }], function () {
    return [{
      type: ScrollbarHelper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: DimensionsHelper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
    }, {
      type: ColumnChangesService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: ['configuration']
      }]
    }];
  }, {
    targetMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupRowsBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarV: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columnMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    externalPaging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    externalSorting: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    limit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    count: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingIndicator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    reorderable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    swapColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cssClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    messages: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupExpansionDefault: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackByProp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectAllRowsOnPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualization: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeFromRelation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeToRelation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    reorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    resize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    tableContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    isFixedHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.fixed-header']
    }],
    isFixedRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.fixed-row']
    }],
    isVertScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.scroll-vertical']
    }],
    isVirtualized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.virtualized']
    }],
    isHorScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.scroll-horz']
    }],
    isSelectable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.selectable']
    }],
    isCheckboxSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.checkbox-selection']
    }],
    isCellSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.cell-selection']
    }],
    isSingleSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.single-selection']
    }],
    isMultiSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.multi-selection']
    }],
    isMultiClickSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.multi-click-selection']
    }],
    columnTemplates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [DataTableColumnDirective]
    }],
    rowDetail: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableRowDetailDirective]
    }],
    groupHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableGroupHeaderDirective]
    }],
    footer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableFooterDirective]
    }],
    bodyComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [DataTableBodyComponent]
    }],
    headerComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [DataTableHeaderComponent]
    }],
    rowIdentity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onWindowResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['window:resize']
    }]
  });
})();

class NgxDatatableModule {
  /**
   * Configure global configuration via INgxDatatableConfig
   * @param configuration
   */
  static forRoot(configuration) {
    return {
      ngModule: NgxDatatableModule,
      providers: [{
        provide: 'configuration',
        useValue: configuration
      }]
    };
  }

}

NgxDatatableModule.ɵfac = function NgxDatatableModule_Factory(t) {
  return new (t || NgxDatatableModule)();
};

NgxDatatableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxDatatableModule
});
NgxDatatableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDatatableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
      declarations: [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent],
      exports: [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective]
    }]
  }], null, null);
})();

var ClickType;

(function (ClickType) {
  ClickType["single"] = "single";
  ClickType["double"] = "double";
})(ClickType || (ClickType = {}));

if (typeof document !== 'undefined' && !document.elementsFromPoint) {
  document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/

/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 */


function elementsFromPoint(x, y) {
  const elements = [];
  const previousPointerEvents = [];
  let current; // TODO: window.getComputedStyle should be used with inferred type (Element)

  let i;
  let d; //if (document === undefined) return elements;
  // get all elements via elementFromPoint, and remove them from hit-testing in order

  while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
    // push the element and its current style
    elements.push(current);
    previousPointerEvents.push({
      value: current.style.getPropertyValue('pointer-events'),
      priority: current.style.getPropertyPriority('pointer-events')
    }); // add "pointer-events: none", to get to the underlying element

    current.style.setProperty('pointer-events', 'none', 'important');
  } // restore the previous pointer-events values


  for (i = previousPointerEvents.length; d = previousPointerEvents[--i];) {
    elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
  } // return our results


  return elements;
}
/*tslint:enable*/

/*
 * Public API Surface of ngx-datatable
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

};
;
//# sourceMappingURL=7143.js.map