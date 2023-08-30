"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_client_pages_client-chat_client-chat_module_ts"],{

/***/ 58292:
/*!************************************************************************!*\
  !*** ./src/app/client/pages/client-chat/client-chat-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientChatRoutingModule": () => (/* binding */ ClientChatRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_client_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/client-chat.component */ 68410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_client_chat_component__WEBPACK_IMPORTED_MODULE_0__.ClientChatComponent,
    },
];
class ClientChatRoutingModule {
}
ClientChatRoutingModule.ɵfac = function ClientChatRoutingModule_Factory(t) { return new (t || ClientChatRoutingModule)(); };
ClientChatRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClientChatRoutingModule });
ClientChatRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClientChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 65599:
/*!****************************************************************!*\
  !*** ./src/app/client/pages/client-chat/client-chat.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientChatModule": () => (/* binding */ ClientChatModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _b2b_ngx_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-textarea */ 31060);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-image */ 87343);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _layout_client_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/client-chat.component */ 68410);
/* harmony import */ var _client_chat_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-chat-routing.module */ 58292);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);










class ClientChatModule {
}
ClientChatModule.ɵfac = function ClientChatModule_Factory(t) { return new (t || ClientChatModule)(); };
ClientChatModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ClientChatModule });
ClientChatModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _client_chat_routing_module__WEBPACK_IMPORTED_MODULE_1__.ClientChatRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _b2b_ngx_textarea__WEBPACK_IMPORTED_MODULE_5__.B2bNgxTextareaModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_6__.B2bNgxButtonModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_7__.B2bNgxImageModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_8__.B2bNgxIconModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClientChatModule, { declarations: [_layout_client_chat_component__WEBPACK_IMPORTED_MODULE_0__.ClientChatComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _client_chat_routing_module__WEBPACK_IMPORTED_MODULE_1__.ClientChatRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _b2b_ngx_textarea__WEBPACK_IMPORTED_MODULE_5__.B2bNgxTextareaModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_6__.B2bNgxButtonModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_7__.B2bNgxImageModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_8__.B2bNgxIconModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule] }); })();


/***/ }),

/***/ 68410:
/*!**************************************************************************!*\
  !*** ./src/app/client/pages/client-chat/layout/client-chat.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientChatComponent": () => (/* binding */ ClientChatComponent)
/* harmony export */ });
/* harmony import */ var _Users_denissuhomlin_Desktop_repos_fe_b2bdiscount_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ 34769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/chat/chat.service */ 71220);
/* harmony import */ var _services_chats_chats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/chats/chats.service */ 12382);
/* harmony import */ var _client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client-profile/services/user/user.service */ 82021);
/* harmony import */ var _services_offers_offers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/offers/offers.service */ 36521);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../auth/services/auth/auth.service */ 24159);
/* harmony import */ var _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/socket/socket.service */ 42823);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @b2b/ngx-link */ 23214);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/mixpanel/mixpanel.service */ 56838);
/* harmony import */ var _services_categories_categories_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/categories/categories.service */ 57454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);


























const _c0 = ["chatContainer"];

function ClientChatComponent_div_1_li_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 26)(1, "p", 27)(2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const message_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](message_r12.contact.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 3, message_r12.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", message_r12.body, " ");
  }
}

function ClientChatComponent_div_1_li_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "CHAT.NO_MESSAGES"), " ");
  }
}

function ClientChatComponent_div_1_div_40_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const chatInfo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "LABELS.FROM"), " ", chatInfo_r3.displayInfo.country, " ");
  }
}

function ClientChatComponent_div_1_div_40_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "LABELS.EMAIL"), " ");
  }
}

function ClientChatComponent_div_1_div_40_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "LABELS.PHONE"), " ");
  }
}

function ClientChatComponent_div_1_div_40_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "LABELS.WEB"), " ");
  }
}

function ClientChatComponent_div_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 32)(1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "p", 34)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ClientChatComponent_div_1_div_40_p_6_Template, 3, 4, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ClientChatComponent_div_1_div_40_p_7_Template, 3, 3, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, ClientChatComponent_div_1_div_40_p_10_Template, 3, 3, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, ClientChatComponent_div_1_div_40_p_13_Template, 3, 3, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const chatInfo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", chatInfo_r3.displayInfo.role, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", chatInfo_r3.displayInfo.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", chatInfo_r3.displayInfo.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", chatInfo_r3.displayInfo.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", chatInfo_r3.displayInfo.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", chatInfo_r3.displayInfo.phone == null ? null : chatInfo_r3.displayInfo.phone.e164Number);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", chatInfo_r3.displayInfo.phone == null ? null : chatInfo_r3.displayInfo.phone.e164Number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", chatInfo_r3.displayInfo.site);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", chatInfo_r3.displayInfo.site, " ");
  }
}

function ClientChatComponent_div_1_button_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "CHAT.CONTACTS_OPENED"), " ");
  }
}

function ClientChatComponent_div_1_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientChatComponent_div_1_button_43_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r19.requestContacts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "CHAT.REQUEST_CONTACTS"), " ");
  }
}

function ClientChatComponent_div_1_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientChatComponent_div_1_button_44_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r21.openContacts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "CHAT.OPEN_CONTACTS"), " ");
  }
}

function ClientChatComponent_div_1_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClientChatComponent_div_1_button_45_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r23.closeContacts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "CHAT.CLOSE_CONTACTS"), " ");
  }
}

function ClientChatComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 3)(1, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keydown.enter", function ClientChatComponent_div_1_Template_form_keydown_enter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r25.enterPressed($event));
    })("ngSubmit", function ClientChatComponent_div_1_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r27.sendMessage(ctx_r27.formGroup.get("message").value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "p", 5)(3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 9)(21, "ul", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, ClientChatComponent_div_1_li_23_Template, 9, 5, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, ClientChatComponent_div_1_li_25_Template, 3, 3, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 15)(30, "button", 16)(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 18)(36, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "Go back");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, ClientChatComponent_div_1_div_40_Template, 16, 9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, ClientChatComponent_div_1_button_42_Template, 3, 3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, ClientChatComponent_div_1_button_43_Template, 3, 3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, ClientChatComponent_div_1_button_44_Template, 3, 3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, ClientChatComponent_div_1_button_45_Template, 3, 3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const chatInfo_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](4);

    let tmp_10_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 21, ctx_r0.b2bNgxLinkService.getLink("/profile")));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 23, "PAGES.PROFILE") + " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 25, ctx_r0.b2bNgxLinkService.getLink("/profile/my-offers")));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 27, "PAGES.MY_CHATS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 29, ctx_r0.b2bNgxLinkService.getLink("/profile/my-offers" + chatInfo_r3.offer._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", chatInfo_r3.offer.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](chatInfo_r3.offer.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 31, "CHAT.CHAT_STARTED"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](19, 33, chatInfo_r3.createdAt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 35, ctx_r0.messages$));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](26, 37, ctx_r0.messages$)) == null ? null : tmp_10_0.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](28, 39, "PLACEHOLDERS.ENTER_TO_SEND"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("theme", ctx_r0.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](33, 41, "BUTTONS.SEND"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", chatInfo_r3.displayInfo)("ngIfElse", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.displayContactsOpened);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.displayRequestContacts);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.displayOpenContacts);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.displayCloseContacts);
  }
}

function ClientChatComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "CHAT.USER_DELETED"), " ");
  }
}

let ClientChatComponent = class ClientChatComponent {
  constructor(_activatedRoute, _router, _chatService, _chatsService, _usersService, _offersService, _formBuilder, _authService, _socketService, _hotToastService, changeDetectorRef, b2bNgxLinkService, translateService, mixpanelService, categoriesService) {
    this._activatedRoute = _activatedRoute;
    this._router = _router;
    this._chatService = _chatService;
    this._chatsService = _chatsService;
    this._usersService = _usersService;
    this._offersService = _offersService;
    this._formBuilder = _formBuilder;
    this._authService = _authService;
    this._socketService = _socketService;
    this._hotToastService = _hotToastService;
    this.changeDetectorRef = changeDetectorRef;
    this.b2bNgxLinkService = b2bNgxLinkService;
    this.translateService = translateService;
    this.mixpanelService = mixpanelService;
    this.categoriesService = categoriesService;
    this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_12__.B2bNgxButtonThemeEnum;
    this.formGroup = this._formBuilder.group({
      message: ""
    });
    this._messagesHistoryBehaviourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject([]);
    this._messagesHistory$ = this._messagesHistoryBehaviourSubject.asObservable();
    this._messageBehaviourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject([]);
    this._message$ = this._messageBehaviourSubject.asObservable();
    this._chatInfoBehaviourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(null);
    this._chatInfo$ = this._chatInfoBehaviourSubject.asObservable();
    this.chatInfo$ = this.getChatInfo();
    this.messages$ = this.getMessages();
  }

  getChatInfo() {
    return this._authService.getUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(user => {
      return this._chatInfo$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(chatInfo => !!chatInfo), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(chatInfo => {
        var _a, _b, _c;

        const dispayInfoOf = ((_a = chatInfo.buyer) === null || _a === void 0 ? void 0 : _a._id) === (user === null || user === void 0 ? void 0 : user._id) ? this.translateService.instant("CHAT.SELLER") : this.translateService.instant("CHAT.BUYER");
        const displayInfo = dispayInfoOf === this.translateService.instant("CHAT.SELLER") ? (_b = chatInfo.offer) === null || _b === void 0 ? void 0 : _b.contact : chatInfo.buyer;
        const author = (displayInfo === null || displayInfo === void 0 ? void 0 : displayInfo.fullName) || (displayInfo === null || displayInfo === void 0 ? void 0 : displayInfo.personName) || `${this.translateService.instant("CHAT.SELLER")} of ${(_c = chatInfo.offer) === null || _c === void 0 ? void 0 : _c.title}`;
        return { ...chatInfo,
          displayInfo: { ...displayInfo,
            role: dispayInfoOf,
            author
          }
        };
      }));
    }));
  }

  getMessages() {
    const user$ = this._authService.getUser();

    const chat$ = this._activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(paramMap => paramMap.get("id")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(id => this._chatService.getChatById(id)));

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)([user$, chat$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(([user, chat]) => !!user && !!chat), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(([user, chat]) => this._messagesHistory$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)(() => {
      setTimeout(() => {
        var _a;

        this.chatContainer.nativeElement.scrollTop = (_a = this.chatContainer.nativeElement) === null || _a === void 0 ? void 0 : _a.scrollHeight;
      }, 0);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(messages => messages.map(message => {
      var _a, _b, _c;

      const dispayInfoOf = ((_a = chat.seller) === null || _a === void 0 ? void 0 : _a._id) === (message === null || message === void 0 ? void 0 : message.author) ? this.translateService.instant("CHAT.SELLER") : this.translateService.instant("CHAT.BUYER");
      const displayInfo = dispayInfoOf === this.translateService.instant("CHAT.SELLER") ? (_b = chat.offer) === null || _b === void 0 ? void 0 : _b.contact : chat.buyer;
      const author = (displayInfo === null || displayInfo === void 0 ? void 0 : displayInfo.fullName) || (displayInfo === null || displayInfo === void 0 ? void 0 : displayInfo.personName) || `${this.translateService.instant("CHAT.SELLER")} of ${(_c = chat.offer) === null || _c === void 0 ? void 0 : _c.title}`;
      return { ...message,
        contact: { ...displayInfo,
          author,
          role: displayInfo
        }
      };
    })))));
  }

  enterPressed(event) {
    this.sendMessage(this.formGroup.get("message").value);
    event.preventDefault();
  }

  sendMessage(body) {
    var _this = this;

    return (0,_Users_denissuhomlin_Desktop_repos_fe_b2bdiscount_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!body) {
        return;
      }

      _this.chatInfo$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(_this)).subscribe(chatInfo => {
        var _a, _b;

        const user = _this._usersService.getUser();

        _this._socket.emit("message", {
          type: "text",
          body,
          userId: user._id === ((_a = chatInfo.buyer) === null || _a === void 0 ? void 0 : _a._id) ? chatInfo.seller._id : (_b = chatInfo.buyer) === null || _b === void 0 ? void 0 : _b._id,
          offerId: chatInfo.offer._id
        });
      });

      _this.formGroup.get("message").reset();
    })();
  }

  subscribeOnMessage() {
    return this._socket.on("message", message => {
      const history = this._messagesHistoryBehaviourSubject.getValue();

      this._messagesHistoryBehaviourSubject.next([...history, message]);
    });
  }

  subscribeOnChatInfo() {
    return this._socket.on("chat_info", chatInfo => {
      this._socketService.readMessages(chatInfo.unreadMessagesCount);

      this._chatInfoBehaviourSubject.next(chatInfo);
    });
  }

  subscribeOnMessageHistory() {
    return this._socket.on("message_history", message_history => {
      this._messagesHistoryBehaviourSubject.next(message_history);
    });
  }

  openConnection(token) {
    if (this._socket) {
      this._socket.disconnect();
    }

    this._socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, {
      path: "/chat",
      auth: {
        token
      }
    });
  }

  ngOnInit() {
    const id = this._activatedRoute.snapshot.params['id']; // this._router.navigate(['/profile/your-workspace/b2bmarket/chat', id]);

    const token$ = this._usersService.getToken$();

    const user$ = this._usersService.getUser$();

    const chat$ = this._activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(paramMap => paramMap.get("id")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(id => this._chatService.getChatById(id)));

    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)([chat$, token$, user$]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(this)).subscribe(([chat, token, user]) => {
      var _a, _b, _c, _d;

      const buyer = Array.isArray(chat.buyer) ? chat.buyer[0] : chat.buyer;
      const seller = Array.isArray(chat.seller) ? chat.seller[0] : chat.seller; // if (!buyer || !seller) {
      // }

      this.openConnection(token);
      this.subscribeOnMessageHistory();
      this.subscribeOnChatInfo();
      this.subscribeOnMessage();
      const role = user._id === (buyer === null || buyer === void 0 ? void 0 : buyer._id) ? "buyer" : "seller";
      const contactTo = role === "seller" ? buyer : seller;
      this.displayContactsOpened = (_a = chat.offer) === null || _a === void 0 ? void 0 : _a.openedFor.includes(buyer._id);
      this.displayContactsRequested = chat.contactsRequested && !this.displayContactsOpened;
      this.displayRequestContacts = role === "buyer" && !this.displayContactsOpened && !this.displayContactsRequested && (!((_b = chat.offer) === null || _b === void 0 ? void 0 : _b.visibility.email) || !((_c = chat.offer) === null || _c === void 0 ? void 0 : _c.visibility.phone)); // Object.values(chat.offer.visibility).some((visibility) => !visibility);

      this.displayOpenContacts = role === "seller" && !this.displayContactsOpened && chat.contactsRequested;
      this.displayCloseContacts = role === "seller" && !this.displayContactsOpened && chat.contactsRequested;
      this.chat = chat;

      this._socket.emit("start_chat", {
        userId: contactTo === null || contactTo === void 0 ? void 0 : contactTo._id,
        offerId: (_d = chat.offer) === null || _d === void 0 ? void 0 : _d._id
      });
    });
  }

  requestContacts() {
    this._chatsService.requestContacts(this.chat).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(this), this._hotToastService.observe({
      loading: "Contacts requesting...",
      success: "Contacts requested successfully!",
      error: "Contacts requesting failed!"
    })).subscribe(() => {
      this.displayContactsRequested = false;
      this.displayRequestContacts = false;
      this.changeDetectorRef.detectChanges();
    });
  }

  openContacts() {
    this._chatsService.sendContacts(this.chat.offer, this.chat.buyer._id); // this._hotToastService.success("Contacts sent successfully!");


    this._chatsService.openContacts(this.chat.offer, this.chat.buyer._id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(this), this._hotToastService.observe({
      loading: "Contacts opening...",
      success: "Contacts opened successfully!",
      error: "Contacts opening failed!"
    })).subscribe(() => {
      this.displayOpenContacts = false;
      this.displayCloseContacts = true;
      this.displayContactsOpened = true;
      this.displayContactsRequested = false;
      this.changeDetectorRef.detectChanges();
    });
  }

  closeContacts() {
    this._chatsService.closeContacts(this.chat.offer._id, this.chat.buyer._id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(this), this._hotToastService.observe({
      loading: "Contacts closing...",
      success: "Contacts closed successfully!",
      error: "Contacts closing failed!"
    })).subscribe(() => {
      this.displayOpenContacts = false;
      this.displayCloseContacts = false;
      this.displayContactsOpened = false;
      this.displayContactsRequested = false;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this._socket) {
      this._socket.disconnect();
    }
  }

};

ClientChatComponent.ɵfac = function ClientChatComponent_Factory(t) {
  return new (t || ClientChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_chats_chats_service__WEBPACK_IMPORTED_MODULE_4__.ChatsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_offers_offers_service__WEBPACK_IMPORTED_MODULE_6__.OffersService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_8__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_22__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_b2b_ngx_link__WEBPACK_IMPORTED_MODULE_23__.B2bNgxLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_9__.MixpanelService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_10__.CategoriesService));
};

ClientChatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: ClientChatComponent,
  selectors: [["b2b-client-chat"]],
  viewQuery: function ClientChatComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.chatContainer = _t.first);
    }
  },
  decls: 5,
  vars: 3,
  consts: [[1, "client-profile-chat-wrapper"], ["class", "client-profile-chat", 4, "ngIf"], ["userDeleted", ""], [1, "client-profile-chat"], [1, "client-profile-chat-container", 3, "formGroup", "keydown.enter", "ngSubmit"], [1, "client-profile-chat-breadcrumbs"], [3, "routerLink"], [1, "client-profile-chat-title"], [1, "client-profile-chat-started"], [1, "client-profile-chat-messages"], [1, "client-profile-chat-messages-list"], ["chatContainer", ""], ["class", "client-profile-chat-messages-list-item", 4, "ngFor", "ngForOf"], ["class", "client-profile-chat-no-messages", 4, "ngIf"], ["formControlName", "message", "rows", "5", 1, "client-profile-chat-textarea", 3, "placeholder"], [1, "client-profile-chat-actions"], ["b2bNgxButton", "", "type", "submit", 1, "client-profile-chat-actions-send-button", 3, "theme"], ["b2bNgxIcon", "", "name", "chat", 1, "client-profile-chat-actions-send-button-icon"], ["routerLink", "/profile/your-workspace/unclaimed-cargo", 1, "client-profile-chat-buyer-info"], [1, "go-back"], ["b2bNgxIcon", "", "name", "arrow-l", "alt", "icon"], [1, "label"], ["class", "client-profile-chat-buyer-info-container", 4, "ngIf", "ngIfElse"], [1, "client-profile-chat-buyer-info-media"], ["class", "my-btn requested", 4, "ngIf"], ["class", "my-btn", 3, "click", 4, "ngIf"], [1, "client-profile-chat-messages-list-item"], [1, "client-profile-chat-messages-list-item-info"], [1, "client-profile-chat-messages-list-item-from"], [1, "client-profile-chat-messages-list-item-date"], [1, "client-profile-chat-messages-list-item-message"], [1, "client-profile-chat-no-messages"], [1, "client-profile-chat-buyer-info-container"], [1, "client-profile-chat-buyer-info-text"], [1, "client-profile-chat-buyer-info-title"], ["class", "client-profile-chat-buyer-info-from", 4, "ngIf"], ["class", "client-profile-chat-buyer-email-title", 4, "ngIf"], [1, "client-profile-chat-buyer-email"], ["class", "client-profile-chat-buyer-phone-title", 4, "ngIf"], [1, "client-profile-chat-buyer-phone"], ["class", "client-profile-chat-buyer-web-title", 4, "ngIf"], [1, "client-profile-chat-buyer-web"], [1, "client-profile-chat-buyer-info-from"], [1, "client-profile-chat-buyer-email-title"], [1, "client-profile-chat-buyer-phone-title"], [1, "client-profile-chat-buyer-web-title"], [1, "my-btn", "requested"], [1, "my-btn", 3, "click"], [1, "user-deleted"]],
  template: function ClientChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ClientChatComponent_div_1_Template, 46, 43, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ClientChatComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, ctx.chatInfo$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormControlName, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_26__.B2bNgxButtonDirective, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_27__.B2bNgxIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_25__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe],
  styles: ["@charset \"UTF-8\";.ngx-datatable[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  \n  \n  \n  \n  \n  \n  \n   }.ngx-datatable[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%] {\n    display: none !important; }.ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n    position: absolute; }.ngx-datatable.scroll-horz[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:focus {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    z-index: 9; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.sortable[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: move; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%] {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        cursor: ew-resize; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.resizeable[_ngcontent-%COMP%]:hover   .resize-handle[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:hover   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromLeft[_ngcontent-%COMP%] {\n          right: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromRight[_ngcontent-%COMP%] {\n          left: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-template-wrap[_ngcontent-%COMP%] {\n        height: inherit; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      overflow-y: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: flex; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-footer-inner[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 40%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 60%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 20%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: not-allowed; }.ngx-datatable.material[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  \n  \n  \n  \n   }.ngx-datatable.material.striped[_ngcontent-%COMP%]   .datatable-row-odd[_ngcontent-%COMP%] {\n    background: #eee; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%], .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n    height: 50px;\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .loading-row[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%] {\n    background-color: #fff;\n    background-position: 100% 0;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    background-position: 0 0;\n    background-color: #fff;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      font-weight: 400;\n      background-color: #fff;\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: bottom;\n      font-size: 12px;\n      font-weight: 500; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        transition: transform 400ms ease, opacity 400ms ease;\n        opacity: 0.5;\n        transform: scale(1); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        content: ' ';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -30px 0 0 -30px;\n        height: 60px;\n        width: 60px;\n        background: #eee;\n        border-radius: 100%;\n        opacity: 1;\n        filter: none;\n        transform: scale(0);\n        z-index: 9999;\n        pointer-events: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.dragging[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        border-right: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n      border-right: solid 1px #eee; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      padding: 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-group-header[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      border-bottom: solid 1px #d9d8d9;\n      border-top: solid 1px #d9d8d9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%] {\n      display: block;\n      position: sticky;\n      width: 100%;\n      height: 5px;\n      padding: 0;\n      margin: 0;\n      top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 5px;\n        transform: translate(0, 0) scale(1, 1);\n        background-color: #aad1f9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n          transition: all 0.2s linear;\n          animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n          transition: transform 0.2s linear;\n          background-color: #106cc8;\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          width: 100%;\n          height: 5px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 12px;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.54); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      line-height: 50px;\n      height: 50px;\n      padding: 0 1.2rem; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      margin: 0 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        vertical-align: middle; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          color: rgba(0, 0, 0, 0.26) !important;\n          background-color: transparent !important; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          background-color: rgba(158, 158, 158, 0.2);\n          font-weight: bold; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        height: 22px;\n        min-width: 24px;\n        line-height: 22px;\n        padding: 0 6px;\n        border-radius: 3px;\n        margin: 6px 3px;\n        text-align: center;\n        vertical-align: top;\n        color: rgba(0, 0, 0, 0.54);\n        text-decoration: none;\n        vertical-align: bottom; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n          color: rgba(0, 0, 0, 0.75);\n          background-color: rgba(158, 158, 158, 0.2); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-skip[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 20px;\n        padding: 0 3px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]:hover {\n      background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      font-weight: bold; }.datatable-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0 1rem 0 0;\n    cursor: pointer;\n    outline: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:before {\n      transition: all 0.3s ease-in-out;\n      content: '';\n      position: absolute;\n      left: 0;\n      z-index: 1;\n      width: 1rem;\n      height: 1rem;\n      border: 2px solid #f2f2f2; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:checked:before {\n      transform: rotate(-45deg);\n      height: 0.5rem;\n      border-color: #009688;\n      border-top-style: none;\n      border-right-style: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1rem;\n      height: 1rem;\n      background: #fff;\n      cursor: pointer; }@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1); } }@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-'][_ngcontent-%COMP%]::before, [class*=' datatable-icon-'][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter[_ngcontent-%COMP%]::before {\n  content: '\\62';\n}.datatable-icon-collapse[_ngcontent-%COMP%]::before {\n  content: '\\61';\n}.datatable-icon-expand[_ngcontent-%COMP%]::before {\n  content: '\\63';\n}.datatable-icon-close[_ngcontent-%COMP%]::before {\n  content: '\\64';\n}.datatable-icon-up[_ngcontent-%COMP%]::before {\n  content: '\\65';\n}.datatable-icon-down[_ngcontent-%COMP%]::before {\n  content: '\\66';\n}.datatable-icon-sort-unset[_ngcontent-%COMP%]::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort[_ngcontent-%COMP%]::before {\n  content: '\\67';\n}.datatable-icon-done[_ngcontent-%COMP%]::before {\n  content: '\\68';\n}.datatable-icon-done-all[_ngcontent-%COMP%]::before {\n  content: '\\69';\n}.datatable-icon-search[_ngcontent-%COMP%]::before {\n  content: '\\6a';\n}.datatable-icon-pin[_ngcontent-%COMP%]::before {\n  content: '\\6b';\n}.datatable-icon-add[_ngcontent-%COMP%]::before {\n  content: '\\6d';\n}.datatable-icon-left[_ngcontent-%COMP%]::before {\n  content: '\\6f';\n}.datatable-icon-right[_ngcontent-%COMP%]::before {\n  content: '\\70';\n}.datatable-icon-skip[_ngcontent-%COMP%]::before {\n  content: '\\71';\n}.datatable-icon-prev[_ngcontent-%COMP%]::before {\n  content: '\\72';\n}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-opened.ng-select-right[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-left[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{align-items:center;padding-left:10px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;color:#333;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{color:#000}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#D0021B}.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:rgba(0,0,0,0.54);background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  scroll-behavior: auto !important;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}body[_ngcontent-%COMP%] {\n  line-height: 1;\n}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}a[_ngcontent-%COMP%]:visited {\n  color: #000000;\n}button[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}textarea[_ngcontent-%COMP%] {\n  border: none;\n}i[_ngcontent-%COMP%] {\n  font-style: Italic;\n}b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened)    > .ng-select-container[_ngcontent-%COMP%] {\n  box-shadow: none;\n}  form b2b-ngx-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form b2b-ngx-country-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-country-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  height: 49px;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(15, 15, 17, 0.1);\n  border-radius: 4px;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n}.ng-select.ng-select-single.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: transparent;\n}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  top: 15px;\n}.b2b-ngx-button[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%] {\n  background-color: #e63d3d;\n  color: white;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%]:hover {\n  background-color: #e63d3d;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n  transition: 0.2s;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%]:hover {\n  background-color: #0f0f11;\n  border-color: #0f0f11;\n  color: white;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%] {\n  border-color: #0f0f11;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%] {\n  border-color: #005dff;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n  color: #ffffff !important;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled:hover {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n}.b2b-ngx-link[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border: 1px solid transparent;\n}.b2b-ngx-link.text.text-blue[_ngcontent-%COMP%] {\n  color: #005dff;\n}.b2b-ngx-link.text.text-black[_ngcontent-%COMP%] {\n  color: #0f0f11;\n}.b2b-ngx-link.text.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}.b2b-ngx-link.text.text-gray[_ngcontent-%COMP%] {\n  color: #556274;\n}.b2b-ngx-link.text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}.b2b-ngx-link.background[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #e3eaf1;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-link.background.background-gray[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%] {\n  background: #eff4fa;\n  border-radius: 4px;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #005dff !important;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]:hover {\n  background: #e6edfa;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-input[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n  padding: 14px 16px;\n  width: 100%;\n  font-size: 14px;\n  color: #556274;\n}.b2b-ngx-input.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-input.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.b2b-ngx-input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-input.background.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.b2b-ngx-icon.circle[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  background-color: #f3f6f8;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}.b2b-ngx-textarea-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background: #f3f6f8;\n  border-radius: 4px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: #556274;\n  padding: 14px 16px;\n  border: 2px solid transparent;\n  resize: none;\n}.b2b-ngx-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.b2b-ngx-textarea.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-textarea.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-textarea.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  width: 100%;\n  justify-content: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  padding: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: #C4C4C4;\n}@media (max-width: 36em) {\n  .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label-selected[_ngcontent-%COMP%] {\n  color: #000000;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #D9D9D9;\n  margin: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #005DFF;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]   .mat-step-icon-content[_ngcontent-%COMP%] {\n  display: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:first-child {\n  align-items: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:last-child {\n  align-items: flex-end;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border: 2px solid #D9D9D9;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:first-of-type {\n  margin: 0 -7% 0 -10%;\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:last-of-type {\n  margin: 0 -23% 0 -7%;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-content-container[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: initial;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%] {\n  padding: 30px 100px;\n}@media (max-width: 55.5em) {\n  .client-profile-chat-wrapper[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: white;\n  padding-bottom: 32px;\n}@media (max-width: 55.5em) {\n  .client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 0 24px 0 76px;\n}@media (max-width: 55.5em) {\n  .client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n  }\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-breadcrumbs[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #9fa4bb;\n  margin-top: 40px;\n}@media (max-width: 55.5em) {\n  .client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-breadcrumbs[_ngcontent-%COMP%] {\n    display: none;\n  }\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #9fa4bb;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  color: #0f0f11;\n  margin-top: 32px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-started[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 140%;\n  color: #9fa4bb;\n  margin-top: 11px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-messages[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-messages[_ngcontent-%COMP%]   .client-profile-chat-messages-list[_ngcontent-%COMP%] {\n  position: relative;\n  height: 300px;\n  overflow: auto;\n  box-shadow: 0 20px 10px -25px rgb(0, 0, 0) inset, 0 -20px 10px -25px rgb(0, 0, 0) inset;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-messages[_ngcontent-%COMP%]   .client-profile-chat-messages-list[_ngcontent-%COMP%]   .client-profile-chat-messages-list-item[_ngcontent-%COMP%] {\n  padding: 17px 16px;\n  border-bottom: 1px solid #dfe8f5;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-messages[_ngcontent-%COMP%]   .client-profile-chat-messages-list[_ngcontent-%COMP%]   .client-profile-chat-messages-list-item[_ngcontent-%COMP%]   .client-profile-chat-messages-list-item-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-messages[_ngcontent-%COMP%]   .client-profile-chat-messages-list[_ngcontent-%COMP%]   .client-profile-chat-messages-list-item[_ngcontent-%COMP%]   .client-profile-chat-messages-list-item-info[_ngcontent-%COMP%]   .client-profile-chat-messages-list-item-from[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  color: #0f0f11;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-messages[_ngcontent-%COMP%]   .client-profile-chat-messages-list[_ngcontent-%COMP%]   .client-profile-chat-messages-list-item[_ngcontent-%COMP%]   .client-profile-chat-messages-list-item-info[_ngcontent-%COMP%]   .client-profile-chat-messages-list-item-date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-left: 8px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-messages[_ngcontent-%COMP%]   .client-profile-chat-messages-list[_ngcontent-%COMP%]   .client-profile-chat-messages-list-item[_ngcontent-%COMP%]   .client-profile-chat-messages-list-item-message[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #556274;\n  margin-top: 4px;\n  line-height: 148%;\n  min-height: 24px;\n  white-space: break-spaces;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-messages[_ngcontent-%COMP%]   .client-profile-chat-messages-list[_ngcontent-%COMP%]   .client-profile-chat-no-messages[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 16px;\n  color: #0f0f11;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f3f6f8;\n  border-radius: 8px;\n  border: none;\n  margin-top: 32px;\n  padding: 16px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 11px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-actions[_ngcontent-%COMP%]   .client-profile-chat-actions-send-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 11px 24px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-container[_ngcontent-%COMP%]   .client-profile-chat-actions[_ngcontent-%COMP%]   .client-profile-chat-actions-send-button[_ngcontent-%COMP%]   .client-profile-chat-actions-send-button-icon[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%] {\n  width: 30%;\n  border-left: 1px solid #dfe8f5;\n  padding: 0 25px;\n}@media (max-width: 55.5em) {\n  .client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%] {\n    padding: 0;\n    width: 100%;\n  }\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%] {\n  display: none;\n  gap: 10px;\n  cursor: pointer;\n  margin-top: 40px;\n  align-items: center;\n}@media (max-width: 55.5em) {\n  .client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #828bb4;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%]   .client-profile-chat-buyer-info-container[_ngcontent-%COMP%]   .client-profile-chat-buyer-info-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #828bb4;\n  margin-top: 15px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%]   .client-profile-chat-buyer-info-container[_ngcontent-%COMP%]   .client-profile-chat-buyer-info-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  color: #0f0f11;\n  margin-top: 28px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%]   .client-profile-chat-buyer-info-container[_ngcontent-%COMP%]   .client-profile-chat-buyer-info-from[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n  color: #556274;\n  margin-top: 8px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%]   .client-profile-chat-buyer-info-container[_ngcontent-%COMP%]   .client-profile-chat-buyer-email-title[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-weight: normal;\n  font-size: 14px;\n  color: #9fa4bb;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%]   .client-profile-chat-buyer-info-container[_ngcontent-%COMP%]   .client-profile-chat-buyer-email[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 14px;\n  color: #0f0f11;\n  margin-top: 5px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%]   .client-profile-chat-buyer-info-container[_ngcontent-%COMP%]   .client-profile-chat-buyer-phone-title[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-weight: normal;\n  font-size: 14px;\n  color: #9fa4bb;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%]   .client-profile-chat-buyer-info-container[_ngcontent-%COMP%]   .client-profile-chat-buyer-phone[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 14px;\n  color: #0f0f11;\n  margin-top: 5px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%]   .client-profile-chat-buyer-info-container[_ngcontent-%COMP%]   .client-profile-chat-buyer-web-title[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-weight: normal;\n  font-size: 14px;\n  color: #9fa4bb;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%]   .client-profile-chat-buyer-info-container[_ngcontent-%COMP%]   .client-profile-chat-buyer-web[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 14px;\n  color: #0f0f11;\n  margin-top: 5px;\n}.client-profile-chat-wrapper[_ngcontent-%COMP%]   .client-profile-chat[_ngcontent-%COMP%]   .client-profile-chat-buyer-info[_ngcontent-%COMP%]   .client-profile-chat-buyer-info-media[_ngcontent-%COMP%] {\n  border-top: 1px solid #dfe8f5;\n  margin-top: 56px;\n}.user-deleted[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #556274;\n  margin-top: 35px;\n  text-align: center;\n}.my-btn[_ngcontent-%COMP%] {\n  margin: 15px auto 0;\n  font-family: Helvetica Neue;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: 0.02em;\n  text-align: center;\n  background-color: #005dff;\n  color: #ffffff;\n  border-radius: 4px;\n  width: 100%;\n  padding: 15px 0;\n}.my-btn.requested[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZy1zZWxlY3Qvbmctc2VsZWN0L3RoZW1lcy9kZWZhdWx0LnRoZW1lLmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCJjbGllbnQtY2hhdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zZWxlY3Qvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWJ1dHRvbi9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpbmsvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnB1dC9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWljb24vc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZXh0YXJlYS9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvbWF0ZXJpYWwtb3ZlcnJpZGUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLENDQWhCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFLEVBQUUsQ0FDSjtJQUNFLHdCQUF3QixFQUFFLENBQzVCOzs7SUFLRSxzQkFBc0IsRUFBRSxDQUMxQjtJQUNFLGdCQUFnQixFQUFFLENBQ3BCO0lBQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxnQkFBZ0I7SUFDaEIsaUNBQWlDLEVBQUUsQ0FDckM7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUUsQ0FDN0I7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQixFQUFFLENBQ3JCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRSxDQUMzQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDL0I7OztJQU9FLGFBQWE7SUFDYixtQkFBbUI7SUFJbkIsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBRSxDQUNsQjs7SUFFRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBRSxDQUNwQjs7TUFFRSxhQUFhLEVBQUUsQ0FDbkI7O0lBRUUsVUFBVSxFQUFFLENBQ2Q7Ozs7SUFJRSxrQkFBa0IsRUFBRSxDQUN0QjtJQUNFLGNBQWM7SUFDZCxnQkFBZ0IsRUFBRSxDQUNsQjtNQUNFLG9CQUFvQjtNQUNwQiw0QkFBNEIsRUFBRSxDQUNo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SHdSTixDR3ZSTTtFQUNFLHlCQUFBO0FIeVJSLENHdFJJO0VBQ0UsNkJBQUE7RUFDQSxjRGxCVztBRjBTakIsQ0d2Uk07RUFDRSx5QkQxQlU7QUZtVGxCLENHdFJJO0VBQ0UseUJENUJXO0VDNkJYLGNEakNZO0FGeVRsQixDR3ZSTTtFQUNFLHlCRDlCUztBRnVUakIsQ0d0Ukk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FId1JOLENHdlJNO0VBQ0UseUJEOUNVO0VDK0NWLHFCRC9DVTtFQ2dEVixZQUFBO0FIeVJSLENHcFJJO0VBQ0UscUJEdERZO0FGNFVsQixDR3JSTTtFQUNFLHlCRGxEVTtBRnlVbEIsQ0dwUkk7RUFDRSxxQkR4RFk7QUY4VWxCLENHclJNO0VBQ0UseUJEeERVO0FGK1VsQixDR3BSSTtFQUNFLHFCRDFEVztBRmdWakIsQ0dyUk07RUFDRSx5QkQzRFM7QUZrVmpCLENHcFJJO0VBQ0UscUJBQUE7QUhzUk4sQ0dyUk07RUFDRSx5QkRwRVU7QUYyVmxCLENHbFJFO0VBQ0UscURBQUE7RUFDQSx5QkFBQTtBSG9SSixDR25SSTtFQUNFLHFEQUFBO0FIcVJOLENJdldBO0VBQ0MsZ0JBQUE7RUFDQSw2QkFBQTtBSjBXRCxDSXZXRTtFQUNDLGNGQ2M7QUZ3V2pCLENJdFdFO0VBQ0MsY0ZYZTtBRm1YbEIsQ0lyV0U7RUFDQyxjRlhlO0FGa1hsQixDSXBXRTtFQUNDLGNGTGM7QUYyV2pCLENJbldFO0VBQ0MsMEJBQUE7QUpxV0gsQ0lqV0M7RUFDQyxpQ0FBQTtBSm1XRixDSWpXRTtFQUNDLHlCRjNCZTtFRTRCZixjRmhDZTtBRm1ZbEIsQ0lsV0c7RUFDQyx5QkY3QmM7QUZpWWxCLENJaFdFO0VBQ0MsNkJBQUE7RUFDQSxjRnhDZTtBRjBZbEIsQ0lqV0c7RUFDQyx5QkZwQ2M7QUZ1WWxCLENJL1ZFO0VBQ0MseUJGdkNjO0VFd0NkLGNGNUNlO0FGNllsQixDSTlWRTtFQUNDLHlCRnBEZTtFRXFEZixjRmpEZTtBRmlabEIsQ0kvVkc7RUFDQyx5QkZ0RGM7QUZ1WmxCLENJN1ZFO0VBQ0MseUJGcERjO0VF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O0VBQ0MsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUE4bEJMLENBMWxCRztFQUNDLDZCQUFBO0VBQ0EsZ0JBQUE7QUE0bEJKLENBdGxCQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNFdE9nQjtFRnVPaEIsZ0JBQUE7RUFDQSxrQkFBQTtBQXlsQkQsQ0F0bEJBO0VBQ0MsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXlsQkQsQ0F2bEJDO0VBQ0MsV0FBQTtBQXlsQkYiLCJmaWxlIjoiY2xpZW50LWNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3QnKTtcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuc3ZnI2RhdGEtdGFibGUnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbltkYXRhLWljb25dOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1pY29uKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzXj0nZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSxcbltjbGFzcyo9JyBkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZmlsdGVyOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Mic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jb2xsYXBzZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZXhwYW5kOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jbG9zZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tdXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY1Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvd246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY2Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQtdW5zZXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjcnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjgnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZS1hbGw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY5Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNlYXJjaDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcGluOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Yic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1hZGQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZkJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWxlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZmJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXJpZ2h0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1za2lwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1wcmV2OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3Mic7XG59XG4iLCIubmd4LWRhdGF0YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAvKipcbiAgICogVmVydGljYWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogSG9yaXpvbnRhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCBIZWFkZXIgSGVpZ2h0IEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgcm93IGhlaWdodCBhZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIFNoYXJlZCBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBIZWFkZXIgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogQm9keSBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBGb290ZXIgU3R5bGVzXG4gICAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLm5neC1kYXRhdGFibGUgKixcbiAgLm5neC1kYXRhdGFibGUgKjpiZWZvcmUsXG4gIC5uZ3gtZGF0YXRhYmxlICo6YWZ0ZXIge1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbC52aXJ0dWFsaXplZCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC1ob3J6IC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1yb3csXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdztcbiAgICAtbW96LWZsZXgtZmxvdzogcm93O1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdztcbiAgICAtby1mbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LWZsb3c6IHJvdzsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzLFxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgei1pbmRleDogOTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWdyb3VwLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuc29ydGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IG1vdmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnNvcnQtYnRuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5yZXNpemVhYmxlOmhvdmVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpob3ZlciAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tTGVmdCB7XG4gICAgICAgICAgcmlnaHQ6IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tUmlnaHQge1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93ID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDQwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA2MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgMjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgODAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGksXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuIiwiLypcbiAgVGhpcyBzdHlsZXNoZWV0IHVzZXMgc2NzcyB2YWxpYWJsZXMgZm9yIG1vc3Qgb2YgdGhlIGNvbG9ycyAvIGJhY2tncm91bmQtY29sb3JzIG9mIHRoZSB0YWJsZVxuICB0byBlbmFibGUgdGhlIGN1c3RvbWl6YXRpb24gb2YgdGhlIGRpc3BsYXllZCB0YWJsZSB3aXRob3V0IGNsb25pbmcgdGhlIHN0eWxlc2hlZXQgaW50byB0aGVcbiAgb3duIGFwcGxpY2F0aW9uLlxuXG4gIFRvIG1vZGlmeSB0YWJsZSBjb2xvcnMsIGFkZCB0aGUgZm9sbG93aW5nIGxpbmVzIHRvIHRoZSBzY3NzIGZpbGUgb2YgeW91ciBhcHBsaWNhdGlvblxuICAodGhpcyBleGFtcGxlIG1vZGlmaWVzIHRoZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgcm93IC0gc2VsZWN0aW9uVHlwZSA9IHNpbmdsZSwgbXVsdGkgb3IgbXVsdGlDbGljayk6XG5cbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ6IHllbGxvdztcbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoeWVsbG93LCAwLjIpO1xuXG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL21hdGVyaWFsLnNjc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cblRoYXQncyBhbGwuXG4qL1xuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC8qKlxuXHQgKiBTaGFyZWQgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogR2xvYmFsIFJvdyBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBIZWFkZXIgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogQm9keSBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBGb290ZXIgU3R5bGVzXG5cdCAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnN0cmlwZWQgLmRhdGF0YWJsZS1yb3ctb2RkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGZmZTtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTNhZTQ7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0ZmZlO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkzYWU0O1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5lbXB0eS1yb3cge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5sb2FkaW5nLXJvdyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctbGVmdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUlIV1BTa05lU0JtSmhUUVZ0YmlETkNnQVNhZ0lJdUpYOE9nQUFBQUJKUlU1RXJrSmdnZz09KTsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1yaWdodCxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSTEyUFFrTmRpMVZUUTVnYlN3a0FzRFFBUkxBSUd0T1NGVUFBQUFBQkpSVTVFcmtKZ2dnPT0pOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLCBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5kcmFnZ2luZyAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNlZWU7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBwYWRkaW5nOiAxMHB4OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtZ3JvdXAtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2Q5ZDhkOTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZDlkOGQ5OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRvcDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWQxZjk7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciAuYmFyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuICAgICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA2Y2M4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNikgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuYWN0aXZlIGEge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDZweCAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4vKipcbiAqIENoZWNrYm94ZXNcbioqL1xuLmRhdGF0YWJsZS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDsgfVxuICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjJmMmYyOyB9XG4gICAgLmRhdGF0YWJsZS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTsgfVxuICAgIC5kYXRhdGFibGUtY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyoqXG4gKiBQcm9ncmVzcyBiYXIgYW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHF1ZXJ5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSkgc2NhbGUoMC4zLCAxKTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLCAxKTsgfSB9XG4iLCIubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjojYjNiM2IzICNjY2MgI2Q5ZDlkOX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzpub25lfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3d7dG9wOi0ycHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5OTk7Ym9yZGVyLXdpZHRoOjAgNXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWFycm93OmhvdmVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMzMzfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtdG9wPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtcmlnaHQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtYm90dG9tPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtbGVmdD4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQ6bm90KC5uZy1zZWxlY3Qtb3BlbmVkKT4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItY29sb3I6IzAwN2VmZjtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KSwwIDAgMCAzcHggcmdiYSgwLDEyNiwyNTUsMC4xKX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9Lm5nLXNlbGVjdCAubmctaGFzLXZhbHVlIC5uZy1wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmV9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcntjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7bWluLWhlaWdodDozNnB4O2FsaWduLWl0ZW1zOmNlbnRlcn0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyOmhvdmVye2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLDAuMDYpfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1sZWZ0OjEwcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7Y29sb3I6Izk5OX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXJ7aGVpZ2h0OjM2cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3RvcDo1cHg7bGVmdDowO3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6NTBweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1sZWZ0OjUwcHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTtib3JkZXI6MXB4IHNvbGlkICNlNmU2ZTZ9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nOjAgNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctbGVmdDo3cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6N3B4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2ZvbnQtc2l6ZTouOWVtO21hcmdpbi1ib3R0b206NXB4O2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmO2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDo1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVkIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nLWxlZnQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWQgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6NXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjFweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxcHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2QxZThmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0e2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmY7Ym9yZGVyLXJpZ2h0Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmZ9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodHtib3JkZXItbGVmdDowO2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nOjAgMCAzcHggM3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZzowIDNweCAzcHggMH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dD5pbnB1dHtjb2xvcjojMDAwfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVye3RvcDo1cHg7cGFkZGluZy1ib3R0b206NXB4O3BhZGRpbmctbGVmdDozcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcntwYWRkaW5nLXJpZ2h0OjNweDtwYWRkaW5nLWxlZnQ6MH0ubmctc2VsZWN0IC5uZy1jbGVhci13cmFwcGVye2NvbG9yOiM5OTl9Lm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlcjpob3ZlciAubmctY2xlYXJ7Y29sb3I6I0QwMDIxQn0ubmctc2VsZWN0IC5uZy1zcGlubmVyLXpvbmV7cGFkZGluZzo1cHggNXB4IDAgMH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLXNwaW5uZXItem9uZXtwYWRkaW5nOjVweCAwIDAgNXB4fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7d2lkdGg6MjVweDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7cGFkZGluZy1sZWZ0OjVweDtwYWRkaW5nLXJpZ2h0OjB9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcjpob3ZlciAubmctYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjojNjY2fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXIgLm5nLWFycm93e2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDVweCAyLjVweH0ubmctZHJvcGRvd24tcGFuZWx7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2NjYztib3gtc2hhZG93OjAgMXB4IDAgcmdiYSgwLDAsMCwwLjA2KTtsZWZ0OjB9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3B7Ym90dG9tOjEwMCU7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tY29sb3I6I2U2ZTZlNjttYXJnaW4tYm90dG9tOi0xcHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3AgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtcmlnaHR7bGVmdDoxMDAlO3RvcDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXJpZ2h0IC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmZpcnN0LWNoaWxke2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbXt0b3A6MTAwJTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1jb2xvcjojZTZlNmU2O21hcmdpbi10b3A6LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbSAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpsYXN0LWNoaWxke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnR7bGVmdDotMTAwJTt0b3A6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnQgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1oZWFkZXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1mb290ZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXB7dXNlci1zZWxlY3Q6bm9uZTtwYWRkaW5nOjhweCAxMHB4O2ZvbnQtd2VpZ2h0OjUwMDtjb2xvcjpyZ2JhKDAsMCwwLDAuNTQpO2N1cnNvcjpwb2ludGVyfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tbWFya2Vke2JhY2tncm91bmQtY29sb3I6I2Y1ZmFmZn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWR7Y29sb3I6cmdiYSgwLDAsMCwwLjU0KTtiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmY7Zm9udC13ZWlnaHQ6NjAwfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwwLjg3KTtwYWRkaW5nOjhweCAxMHB4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2Vke2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQgLm5nLW9wdGlvbi1sYWJlbCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWQgLm5nLW9wdGlvbi1sYWJlbHtmb250LXdlaWdodDo2MDB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmYWZmO2NvbG9yOiMzMzN9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1kaXNhYmxlZHtjb2xvcjojY2NjfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tY2hpbGR7cGFkZGluZy1sZWZ0OjIycHh9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWNoaWxke3BhZGRpbmctcmlnaHQ6MjJweDtwYWRkaW5nLWxlZnQ6MH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLXRhZy1sYWJlbHtmb250LXNpemU6ODAlO2ZvbnQtd2VpZ2h0OjQwMDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctdGFnLWxhYmVse3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDowfVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVse2RpcmVjdGlvbjpydGw7dGV4dC1hbGlnbjpyaWdodH1cbiIsImh0bWwsXG5ib2R5IHtcblx0c2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cbmh0bWwsXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDAlO1xufVxuYm9keSB7XG5cdG1hcmdpbjogMDtcblx0Zm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuKiB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiBibGFjaztcblx0Jjp2aXNpdGVkIHtcblx0XHRjb2xvcjogIzAwMDAwMDtcblx0fVxufVxuXG5idXR0b24ge1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRleHRhcmVhIHtcblx0Ym9yZGVyOiBub25lO1xufVxuXG5pIHtcblx0Zm9udC1zdHlsZTogSXRhbGljO1xufVxuXG5iIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXNcIjtcblxuLmNsaWVudC1wcm9maWxlLWNoYXQtd3JhcHBlciB7XG5cdHBhZGRpbmc6IDMwcHggMTAwcHg7XG5cdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cdC5jbGllbnQtcHJvZmlsZS1jaGF0IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdHBhZGRpbmctYm90dG9tOiAzMnB4O1xuXHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0XHR9XG5cblx0XHQuY2xpZW50LXByb2ZpbGUtY2hhdC1jb250YWluZXIge1xuXHRcdFx0d2lkdGg6IDcwJTtcblx0XHRcdHBhZGRpbmc6IDAgMjRweCAwIDc2cHg7XG5cblx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHR9XG5cblx0XHRcdC5jbGllbnQtcHJvZmlsZS1jaGF0LWJyZWFkY3J1bWJzIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRjb2xvcjogIzlmYTRiYjtcblx0XHRcdFx0bWFyZ2luLXRvcDogNDBweDtcblxuXHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGEge1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0Y29sb3I6ICM5ZmE0YmI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmNsaWVudC1wcm9maWxlLWNoYXQtdGl0bGUge1xuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0bWFyZ2luLXRvcDogMzJweDtcblx0XHRcdH1cblxuXHRcdFx0LmNsaWVudC1wcm9maWxlLWNoYXQtc3RhcnRlZCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE0MCU7XG5cdFx0XHRcdGNvbG9yOiAjOWZhNGJiO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAxMXB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuY2xpZW50LXByb2ZpbGUtY2hhdC1tZXNzYWdlcyB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDI0cHg7XG5cblx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWNoYXQtbWVzc2FnZXMtbGlzdCB7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdGhlaWdodDogMzAwcHg7XG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGF1dG87XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAyMHB4IDEwcHggLTI1cHggcmdiKDAgMCAwKSBpbnNldCwgMCAtMjBweCAxMHB4IC0yNXB4IHJnYigwIDAgMCkgaW5zZXQ7XG5cblx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtY2hhdC1tZXNzYWdlcy1saXN0LWl0ZW0ge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTdweCAxNnB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmU4ZjU7XG5cblx0XHRcdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1jaGF0LW1lc3NhZ2VzLWxpc3QtaXRlbS1pbmZvIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdFx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtY2hhdC1tZXNzYWdlcy1saXN0LWl0ZW0tZnJvbSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWNoYXQtbWVzc2FnZXMtbGlzdC1pdGVtLWRhdGUge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzlmYTRiYjtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1jaGF0LW1lc3NhZ2VzLWxpc3QtaXRlbS1tZXNzYWdlIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzU1NjI3NDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNHB4O1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTQ4JTtcblx0XHRcdFx0XHRcdFx0bWluLWhlaWdodDogMjRweDtcblx0XHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtY2hhdC1uby1tZXNzYWdlcyB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuY2xpZW50LXByb2ZpbGUtY2hhdC10ZXh0YXJlYSB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjNmNmY4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0bWFyZ2luLXRvcDogMzJweDtcblx0XHRcdFx0cGFkZGluZzogMTZweDtcblx0XHRcdH1cblxuXHRcdFx0LmNsaWVudC1wcm9maWxlLWNoYXQtYWN0aW9ucyB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDExcHg7XG5cblx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWNoYXQtYWN0aW9ucy1zZW5kLWJ1dHRvbiB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDExcHggMjRweDtcblxuXHRcdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1jaGF0LWFjdGlvbnMtc2VuZC1idXR0b24taWNvbiB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5jbGllbnQtcHJvZmlsZS1jaGF0LWJ1eWVyLWluZm8ge1xuXHRcdFx0d2lkdGg6IDMwJTtcblx0XHRcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RmZThmNTtcblx0XHRcdHBhZGRpbmc6IDAgMjVweDtcblxuXHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjNcIikge1xuXHRcdFx0XHQvLyBkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdH1cblxuXHRcdFx0LmdvLWJhY2sge1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRnYXA6IDEwcHg7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0bWFyZ2luLXRvcDogNDBweDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5sYWJlbCB7XG5cdFx0XHRcdFx0Y29sb3I6ICM4MjhiYjQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmNsaWVudC1wcm9maWxlLWNoYXQtYnV5ZXItaW5mby1jb250YWluZXIge1xuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtY2hhdC1idXllci1pbmZvLXRleHQge1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0Y29sb3I6ICM4MjhiYjQ7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTVweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1jaGF0LWJ1eWVyLWluZm8tdGl0bGUge1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyOHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWNoYXQtYnV5ZXItaW5mby1mcm9tIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTZweDtcblx0XHRcdFx0XHRjb2xvcjogIzU1NjI3NDtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiA4cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtY2hhdC1idXllci1lbWFpbC10aXRsZSB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMjRweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRjb2xvcjogIzlmYTRiYjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1jaGF0LWJ1eWVyLWVtYWlsIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtY2hhdC1idXllci1waG9uZS10aXRsZSB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTJweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRjb2xvcjogIzlmYTRiYjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1jaGF0LWJ1eWVyLXBob25lIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtY2hhdC1idXllci13ZWItdGl0bGUge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDEycHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM5ZmE0YmI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtY2hhdC1idXllci13ZWIge1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuY2xpZW50LXByb2ZpbGUtY2hhdC1idXllci1pbmZvLW1lZGlhIHtcblx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZmU4ZjU7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDU2cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi51c2VyLWRlbGV0ZWQge1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRjb2xvcjogJGNvbG9yLWdyYXktNTAwO1xuXHRtYXJnaW4tdG9wOiAzNXB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5teS1idG4ge1xuXHRtYXJnaW46IDE1cHggYXV0byAwO1xuXHRmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRsaW5lLWhlaWdodDogMThweDtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGZmO1xuXHRjb2xvcjogI2ZmZmZmZjtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMTVweCAwO1xuXG5cdCYucmVxdWVzdGVkIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1mb2N1c2VkOm5vdCgubmctc2VsZWN0LW9wZW5lZCkgPiAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6bmctZGVlcCB7XG4gIGZvcm0ge1xuICAgIGIyYi1uZ3gtc2VsZWN0IHtcbiAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9ybS1zdWJtaXR0ZWQge1xuICAgICAgYjJiLW5neC1zZWxlY3Qge1xuICAgICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JtIHtcbiAgICBiMmItbmd4LWNvdW50cnktc2VsZWN0IHtcbiAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9ybS1zdWJtaXR0ZWQge1xuICAgICAgYjJiLW5neC1jb3VudHJ5LXNlbGVjdCB7XG4gICAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUsXG4ubmctc2VsZWN0LW9wZW5lZCB7XG4gIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gIH1cblxuICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxNSwgMTUsIDE3LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gICYuYmFja2dyb3VuZC1ncmF5IHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5iYWNrZ3JvdW5kLXdoaXRlIHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmJhY2tncm91bmQtdHJhbnNwYXJlbnQge1xuICAgIC5uZy12YWx1ZSB7XG4gICAgICAubmctdmFsdWUtbGFiZWwge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICAgIC5uZy1vcHRpb24ge1xuICAgICAgICAubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUge1xuICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAubmctcGxhY2Vob2xkZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xvci1ibGFjay05MDA6ICMwMDAwMDA7XG4kY29sb3ItYmxhY2stODAwOiAjMGYwZjExO1xuJGNvbG9yLWJsYWNrLTEwMDogIzJlMmUzNDtcbiRjb2xvci1ibGFjay01MDogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjYpO1xuXG4kY29sb3Itd2hpdGUtOTAwOiAjZmZmZmZmO1xuJGNvbG9yLXdoaXRlLTIwMDogI2UzZWFmMTtcbiRjb2xvci13aGl0ZS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1ibHVlLTUwMDogIzAwNWRmZjtcbiRjb2xvci1ibHVlLTEwMDogIzU5OTVmZTtcbiRjb2xvci1ibHVlLTUwOiAjZDJkZWZmO1xuXG4kY29sb3ItZ3JheS05MDA6ICMwZjBmMTE7XG4kY29sb3ItZ3JheS02MDA6ICMyMjIyMjQ7XG4kY29sb3ItZ3JheS01MDA6ICM1NTYyNzQ7XG4kY29sb3ItZ3JheS00MDA6ICM2YzcwNzc7XG4kY29sb3ItZ3JheS0zMDA6ICNhN2E4YWQ7XG4kY29sb3ItZ3JheS0yMDA6ICM5ZmE0YmI7XG4kY29sb3ItZ3JheS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1yZWQtNTAwOiAjZTYzZDNkO1xuJGNvbG9yLXJlZC01MDogcmdiYSgyMzAsIDYxLCA2MSwgMC4wNSk7XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWJ1dHRvbiB7XG4gIGJvcmRlcjogMC4xNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgJi5iYWNrZ3JvdW5kIHtcbiAgICAmLmJhY2tncm91bmQtYmxhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcbiAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgY29sb3I6ICRjb2xvci1ncmF5LTkwMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMTAsIDgsIDU4LCAwLjEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC1yZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2M2QzZDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMTAsIDgsIDU4LCAwLjEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjNkM2Q7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC10cmFuc3BhcmVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLWJsdWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtaG92ZXItYmxhY2sge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGZlOGY1O1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5vdXRsaW5lIHtcbiAgICAmLm91dGxpbmUtYmxhY2sge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYub3V0bGluZS13aGl0ZSB7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5vdXRsaW5lLWJsdWUge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm91dGxpbmUtZ3JheSB7XG4gICAgICBib3JkZXItY29sb3I6ICNkZmU4ZjU7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stNTAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlLTkwMCAhaW1wb3J0YW50O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTUwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWxpbmsge1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuXHQmLnRleHQge1xuXHRcdCYudGV4dC1ibHVlIHtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0fVxuXG5cdFx0Ji50ZXh0LWJsYWNrIHtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdH1cblxuXHRcdCYudGV4dC13aGl0ZSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cblx0XHQmLnRleHQtZ3JheSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWdyYXktNTAwO1xuXHRcdH1cblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0fVxuXHR9XG5cblx0Ji5iYWNrZ3JvdW5kIHtcblx0XHRib3JkZXI6IDAuMTZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG5cblx0XHQmLmJhY2tncm91bmQtd2hpdGUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0yMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtZ3JheSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtYmxhY2sge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHRcdGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLWJsdWUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuXHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC1saWdodC1ibHVlIHtcblx0XHRcdGJhY2tncm91bmQ6ICNlZmY0ZmE7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0Y29sb3I6ICMwMDVkZmYgIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTZlZGZhO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCYub3V0bGluZSB7XG5cdFx0Ji5vdXRsaW5lLXdoaXRlIHtcblx0XHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stMTAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC1pbnB1dC1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5iMmItbmd4LWlucHV0IHtcblx0Ym9yZGVyOiAwLjE2cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRwYWRkaW5nOiAxNHB4IDE2cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjNTU2Mjc0O1xuXHQmLmJhY2tncm91bmQge1xuXHRcdCYuYmFja2dyb3VuZC1ncmF5IHtcblx0XHRcdGNvbG9yOiAkY29sb3ItZ3JheS00MDA7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG5cdFx0fVxuXHRcdCYuYmFja2dyb3VuZC13aGl0ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdH1cblx0fVxuXHQmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHR9XG59XG5cbi5mb3JtLXN1Ym1pdHRlZCB7XG5cdC5iMmItbmd4LWlucHV0IHtcblx0XHQmLmJhY2tncm91bmQge1xuXHRcdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLmNvbnRyb2wtZXJyb3Ige1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogcmdiYSgxMDgsIDExMiwgMTE5LCAwLjYpO1xuXHRtYXJnaW4tdG9wOiA0cHg7XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWljb24ge1xuXHQmLmNpcmNsZSB7XG5cdFx0aGVpZ2h0OiAzcmVtO1xuXHRcdHdpZHRoOiAzcmVtO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LTEwMDtcblx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC10ZXh0YXJlYS1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uYjJiLW5neC10ZXh0YXJlYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZDogI2YzZjZmODtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM1NTYyNzQ7XG5cdHBhZGRpbmc6IDE0cHggMTZweDtcblx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdHJlc2l6ZTogbm9uZTtcblx0Ji5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0fVxuICAmLmJhY2tncm91bmQge1xuICAgICYuYmFja2dyb3VuZC1ncmF5IHtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS00MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1zdWJtaXR0ZWQge1xuXHQuYjJiLW5neC10ZXh0YXJlYSB7XG5cdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHRcdH1cblx0fVxufVxuXG4uY29udHJvbC1lcnJvciB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiByZ2JhKDEwOCwgMTEyLCAxMTksIDAuNik7XG5cdG1hcmdpbi10b3A6IDRweDtcbn1cbiIsIkBpbXBvcnQgXCIvcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvYnJlYWtwb2ludHNcIjtcblxuLy8gc3RlcHBlclxuQG1peGluIHN0eWxlU3RlcExpbmUoJGluZGV4KSB7XG5cdC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG5cdFx0JiArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKCN7JGluZGV4fSkge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNURGRjtcblx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXG5cdFx0JiArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKCN7JGluZGV4ICsgMn0pIHtcblx0XHRcdEBpbmNsdWRlIHN0ZXBOZXh0TGluZTtcblx0XHR9XG5cdH1cbn1cblxuQG1peGluIHN0ZXBOZXh0TGluZSgpIHtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDA1ZGZmLCByZ2JhKDAsIDkzLCAyNTUsIDApKTtcblx0YmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcblx0Ym94LXNpemluZzogY29udGVudC1ib3g7XG5cdGhlaWdodDogNHB4O1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcblxuXHQubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cblx0XHQubWF0LXN0ZXAtaGVhZGVyIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdGdhcDogN3B4O1xuXHRcdFx0cGFkZGluZzogMDtcblxuXHRcdFx0Lm1hdC1zdGVwLWxhYmVsIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMjRweDtcblx0XHRcdFx0Y29sb3I6ICNDNEM0QzQ7XG5cdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoJzEnKSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji1zZWxlY3RlZCB7XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDAwMDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Lm1hdC1zdGVwLWljb24ge1xuXHRcdFx0XHR3aWR0aDogMTBweDtcblx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cblx0XHRcdFx0Ji1zZWxlY3RlZCwgJi1zdGF0ZS1lZGl0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1REZGO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm1hdC1zdGVwLWljb24tY29udGVudCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHR9XG5cblx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNEOUQ5RDk7XG5cblx0XHRcdCY6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdG1hcmdpbjogMCAtNyUgMCAtMTAlO1xuXHRcdFx0XHRAaW5jbHVkZSBzdGVwTmV4dExpbmU7XG5cdFx0XHR9XG5cblx0XHRcdCY6bGFzdC1vZi10eXBlIHtcblx0XHRcdFx0bWFyZ2luOiAwIC0yMyUgMCAtNyU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG92ZXJmbG93OiBpbml0aWFsO1xuXHR9XG5cblx0LmNkay1wcm9ncmFtLWZvY3VzZWQsIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR9XG59XG5cbi5sYXN0LWVkaXRlZC1zdGVwLTEge1xuXHRAaW5jbHVkZSBzdHlsZVN0ZXBMaW5lKDIpO1xufVxuXG4ubGFzdC1lZGl0ZWQtc3RlcC0yIHtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSgyKTtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSg0KTtcbn1cbiIsIiRicmVha3BvaW50LTE6IDM2ZW07XG4kYnJlYWtwb2ludC0yOiA0OGVtO1xuJGJyZWFrcG9pbnQtMzogNTUuNWVtO1xuJGJyZWFrcG9pbnQtNDogNzVlbTtcbiRicmVha3BvaW50LTU6IDg3LjVlbTtcblxuJGJyZWFrcG9pbnRzOiAoXG5cdFwiMVwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC0xLFxuXHQpLFxuXHRcIjJcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtMixcblx0KSxcblx0XCIzXCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTMsXG5cdCksXG5cdFwiNFwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC00LFxuXHQpLFxuXHRcIjVcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtNSxcblx0KSxcblx0XCI2XCI6IChcblx0XHRtaW4td2lkdGg6ICRicmVha3BvaW50LTUsXG5cdCksXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xuXHRAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cbiJdfQ== */"],
  changeDetection: 0
});
ClientChatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_28__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.UntilDestroy)()], ClientChatComponent);


/***/ }),

/***/ 57454:
/*!******************************************************************!*\
  !*** ./src/app/client/services/categories/categories.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesService": () => (/* binding */ CategoriesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/api.service */ 96931);
/* harmony import */ var _state_categories_categories_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/categories/categories.store */ 95535);
/* harmony import */ var _state_categories_categories_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/categories/categories.query */ 53915);






class CategoriesService {
    constructor(_apiService, _categoriesStore, _categoriesQuery) {
        this._apiService = _apiService;
        this._categoriesStore = _categoriesStore;
        this._categoriesQuery = _categoriesQuery;
        this.endpoint = "categories/";
        this.getCategories$();
    }
    getCategories$() {
        var _a;
        const { categories } = this._categoriesQuery.getValue();
        if (!((_a = categories === null || categories === void 0 ? void 0 : categories.categories) === null || _a === void 0 ? void 0 : _a.length) || !(categories === null || categories === void 0 ? void 0 : categories.totalCount)) {
            this._apiService
                .get(this.endpoint)
                .subscribe((categories) => {
                this._categoriesStore.update({
                    categories
                });
            });
        }
        return this._categoriesQuery.selectCategories$;
    }
    getCategories() {
        const { categories } = this._categoriesQuery.getValue();
        if (!categories) {
            return [];
        }
        return this._categoriesQuery.getValue();
    }
    updateCategory(id, name, hide) {
        return this._apiService.put(`category/${id}/update`, {
            ...(name ? { name } : {}),
            hide,
        });
    }
    createCategory(level1Category, level2Category, level3Category) {
        return this._apiService.post(`category/create`, {
            category: {
                ...level1Category,
                category: {
                    ...level2Category,
                    category: level3Category,
                },
            },
        });
    }
    updateWikiCategory(id, name, hide) {
        return this._apiService.put(`categoryPost/${id}/update`, {
            ...(name ? { name } : {}),
            hide: !hide,
        });
    }
    createWikiCategory(level1Category, level2Category) {
        return this._apiService.post(`categoryPost/create`, {
            category: {
                ...level1Category,
                category: level2Category,
            },
        });
    }
    getWikiCategories() {
        const { wikiCategories } = this._categoriesQuery.getValue();
        if (!wikiCategories.length) {
            this._apiService
                .get("categoryPosts")
                .subscribe((response) => {
                this._categoriesStore.update({
                    wikiCategories: response,
                });
            });
        }
        return this._categoriesQuery.selectWikiCategories$;
    }
    getCategoryNameById(categoryId) {
        return this.getCategories$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeWhile)(({ categories }) => !categories.length, true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({ categories }) => {
            for (const parentCategory of categories) {
                if (parentCategory._id === categoryId) {
                    return parentCategory.name;
                }
                for (const childCategory of parentCategory.children) {
                    if (childCategory._id === categoryId) {
                        return childCategory.name;
                    }
                }
            }
        }));
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_state_categories_categories_store__WEBPACK_IMPORTED_MODULE_1__.CategoriesStore), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_state_categories_categories_query__WEBPACK_IMPORTED_MODULE_2__.CategoriesQuery)); };
CategoriesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 36521:
/*!**********************************************************!*\
  !*** ./src/app/client/services/offers/offers.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersService": () => (/* binding */ OffersService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/api.service */ 96931);
/* harmony import */ var _state_offers_offers_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/offers/offers.query */ 35237);
/* harmony import */ var _state_offers_offers_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/offers/offers.store */ 14835);






function getPreviewPhoto(offer) {
    return offer.photos && offer.photos.length ? offer.photos[0].lg : null;
}
// @UntilDestroy()
class OffersService {
    constructor(_apiService, _offersQuery, _offersStore) {
        this._apiService = _apiService;
        this._offersQuery = _offersQuery;
        this._offersStore = _offersStore;
        this.offersSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.savedOffersSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.offersLength = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(0);
        this.savedOffersLength = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(0);
        this._endpoint = "offers/";
    }
    get offers$() {
        return this.offersSource.asObservable();
    }
    get savedOffers$() {
        return this.savedOffersSource.asObservable();
    }
    get offersLength$() {
        return this.offersLength.asObservable();
    }
    get savedOffersLength$() {
        return this.savedOffersLength.asObservable();
    }
    removeAllOffers() {
        return this._apiService.delete("offers/delete");
    }
    getContainerLocation(query) {
        return this._apiService.get(`container/location?${query}`);
    }
    getAllOffersCount() {
        return this._offersQuery.selectAllOffersCount$;
    }
    getSeaLines() {
        const { seaLines } = this._offersQuery.getValue();
        if (!seaLines.length) {
            this._apiService
                .get("seaLines")
                // .pipe(untilDestroyed(this))
                .subscribe((response) => {
                this._offersStore.update({
                    seaLines: response,
                });
            });
        }
        return this._offersQuery.selectSeaLines$;
    }
    markAsSold(id) {
        this._apiService
            .post(`offer/${id}/status/update`, { status: "sold" })
            .pipe(
        // untilDestroyed(this),
        // this._hotToastService.observe({
        // 	loading: "Offer status updating...",
        // 	success: "Offer status updated successfully!",
        // 	error: "Offer status updating failed!",
        // })
        )
            .subscribe();
    }
    hideOffer(id) {
        return this._apiService.post(`offer/${id}/hide`, {});
    }
    unHideOffer(id) {
        return this._apiService.post(`offer/${id}/unHide`, {});
    }
    adminHideOffer(id) {
        return this._apiService.post(`offer/${id}/adminHide`, {});
    }
    adminUnHideOffer(id) {
        return this._apiService.post(`offer/${id}/adminUnHide`, {});
    }
    deleteOfferSub(id) {
        return this._apiService.delete(`offer/${id}/delete`);
    }
    deleteRfq(id) {
        return this._apiService.delete(`tradeBid/delete-rfq-admin`, { body: { rfqId: id } });
    }
    deleteOfferById(id, body) {
        return this._apiService.delete(`offer/${id}/delete`, body);
        // .pipe(untilDestroyed(this))
        // .subscribe(() => {
        // 	this._offersStore.update({
        // 		myOffers: this._offersQuery.getValue().myOffers.filter((myOffer) => myOffer._id !== id),
        // 	});
        // });
    }
    getOfferById(id) {
        return this._apiService.get(`offer/${id}/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((response) => {
            this._offersStore.update({
                offer: response,
            });
        }));
    }
    getMyOffers() {
        this._apiService
            .get("my/offers?limit=1")
            .subscribe((myOffers) => {
            this._offersStore.update({
                myOffers: myOffers.map((myOffer) => ({
                    ...myOffer,
                    previewPhoto: getPreviewPhoto(myOffer),
                })),
            });
        });
        return this._offersQuery.selectMyOffers$;
    }
    getOffers(queryString = "") {
        return this._apiService.get("offers/" + queryString).pipe(
        // untilDestroyed(this),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => {
            const { offers, totalCount } = response;
            const allOffers = offers.map((offer) => {
                return {
                    ...offer,
                    previewPhoto: getPreviewPhoto(offer),
                };
            });
            this._offersStore.update({
                allOffers,
                allOffersCount: totalCount,
            });
            return [...allOffers];
        }));
    }
    getActiveOffers() {
        return this._apiService.get("offers?hideSold=true").pipe(
        // untilDestroyed(this),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => {
            const { offers, totalCount } = response;
            const allOffers = offers.map((offer) => {
                return {
                    ...offer,
                    previewPhoto: getPreviewPhoto(offer),
                };
            });
            this._offersStore.update({
                allOffers,
                allOffersCount: totalCount,
            });
            return [...allOffers];
        }));
    }
    getSavedOffers() {
        const url = "my/offers/favourites";
        this._apiService.get(url).subscribe((savedOffers) => {
            this._offersStore.update({
                savedOffers: savedOffers.map((savedOffer) => ({
                    ...savedOffer,
                    previewPhoto: getPreviewPhoto(savedOffer),
                })),
            });
        });
        return this._offersQuery.selectSavedOffers$;
    }
    createOffer(offerToCreate) {
        return this._apiService.post("offer/create", offerToCreate);
    }
    updateOffer(offerToUpdate, id) {
        return this._apiService.put(`offer/${id}/update`, offerToUpdate);
    }
    addFavoriteOffer(id) {
        return this._apiService.post(`user/favourites/${id}/add`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
            this._offersStore.update({
                allOffers: this._offersStore.getValue().allOffers.map((offer) => ({
                    ...offer,
                    isSaved: offer._id === id ? true : offer.isSaved,
                })),
            });
        }));
    }
    removeFavoriteOffer(id) {
        return this._apiService.delete(`user/favourites/${id}/remove`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
            const { savedOffers, allOffers } = this._offersQuery.getValue();
            this._offersStore.update({
                savedOffers: savedOffers.filter((savedOffer) => savedOffer._id !== id),
                allOffers: allOffers.map((offer) => ({
                    ...offer,
                    isSaved: offer._id === id ? false : offer.isSaved,
                })),
            });
        }));
    }
    approveOffer(id) {
        return this._apiService.post(`offer/${id}/adminApprovalOffer`, {});
    }
    declineOffer(id) {
        return this._apiService.post(`offer/${id}/adminRejectionOffer`, {});
    }
    updateOffersList(queryString) {
        this.getOffers(queryString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)())
            .subscribe((data) => {
            this.offersSource.next(data.rfqList);
            // this.rfqManageLength.next(data.totalCount);
        });
    }
}
OffersService.ɵfac = function OffersService_Factory(t) { return new (t || OffersService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_state_offers_offers_query__WEBPACK_IMPORTED_MODULE_1__.OffersQuery), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_state_offers_offers_store__WEBPACK_IMPORTED_MODULE_2__.OffersStore)); };
OffersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: OffersService, factory: OffersService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 53915:
/*!*************************************************************!*\
  !*** ./src/app/client/state/categories/categories.query.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesQuery": () => (/* binding */ CategoriesQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _categories_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.store */ 95535);



class CategoriesQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.selectCategories$ = this.select("categories");
        this.selectWikiCategories$ = this.select("wikiCategories");
    }
}
CategoriesQuery.ɵfac = function CategoriesQuery_Factory(t) { return new (t || CategoriesQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_categories_store__WEBPACK_IMPORTED_MODULE_1__.CategoriesStore)); };
CategoriesQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CategoriesQuery, factory: CategoriesQuery.ɵfac, providedIn: "root" });


/***/ }),

/***/ 95535:
/*!*************************************************************!*\
  !*** ./src/app/client/state/categories/categories.store.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesStore": () => (/* binding */ CategoriesStore),
/* harmony export */   "createInitialState": () => (/* binding */ createInitialState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



function createInitialState() {
    return {
        categories: {
            categories: [],
            totalCount: 0,
        },
        wikiCategories: [],
    };
}
let CategoriesStore = class CategoriesStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super(createInitialState());
    }
};
CategoriesStore.ɵfac = function CategoriesStore_Factory(t) { return new (t || CategoriesStore)(); };
CategoriesStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoriesStore, factory: CategoriesStore.ɵfac, providedIn: "root" });
CategoriesStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: "categories" })
], CategoriesStore);



/***/ }),

/***/ 35237:
/*!*****************************************************!*\
  !*** ./src/app/client/state/offers/offers.query.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersQuery": () => (/* binding */ OffersQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _offers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers.store */ 14835);



class OffersQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.selectAllOffers$ = this.select("allOffers");
        this.selectMyOffers$ = this.select("myOffers");
        this.selectOffer$ = this.select("offer");
        this.selectSavedOffers$ = this.select("savedOffers");
        this.selectAllOffersCount$ = this.select("allOffersCount");
        this.selectSeaLines$ = this.select("seaLines");
    }
}
OffersQuery.ɵfac = function OffersQuery_Factory(t) { return new (t || OffersQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_offers_store__WEBPACK_IMPORTED_MODULE_1__.OffersStore)); };
OffersQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OffersQuery, factory: OffersQuery.ɵfac, providedIn: "root" });


/***/ }),

/***/ 14835:
/*!*****************************************************!*\
  !*** ./src/app/client/state/offers/offers.store.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersStore": () => (/* binding */ OffersStore),
/* harmony export */   "createInitialState": () => (/* binding */ createInitialState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



function createInitialState() {
    return {
        allOffers: [],
        myOffers: [],
        offer: null,
        savedOffers: [],
        allOffersCount: 0,
        seaLines: [],
    };
}
let OffersStore = class OffersStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super(createInitialState());
    }
};
OffersStore.ɵfac = function OffersStore_Factory(t) { return new (t || OffersStore)(); };
OffersStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OffersStore, factory: OffersStore.ɵfac, providedIn: "root" });
OffersStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: "offers" })
], OffersStore);



/***/ })

}]);
//# sourceMappingURL=src_app_client_pages_client-chat_client-chat_module_ts.js.map