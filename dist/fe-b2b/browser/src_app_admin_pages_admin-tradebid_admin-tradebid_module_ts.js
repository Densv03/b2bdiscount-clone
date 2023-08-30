"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_admin_pages_admin-tradebid_admin-tradebid_module_ts"],{

/***/ 57765:
/*!******************************************!*\
  !*** ./src/app/admin/admin-list-type.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminListType": () => (/* binding */ AdminListType)
/* harmony export */ });
var AdminListType;
(function (AdminListType) {
    AdminListType["tradebid"] = "tradebid";
    AdminListType["offers"] = "offers";
    AdminListType["market"] = "market";
})(AdminListType || (AdminListType = {}));


/***/ }),

/***/ 49446:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/pages/admin-tradebid/admin-tradebid-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTradebidRoutingModule": () => (/* binding */ AdminTradebidRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_admin_tradebid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/admin-tradebid.component */ 42639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_admin_tradebid_component__WEBPACK_IMPORTED_MODULE_0__.AdminTradebidComponent,
    },
];
class AdminTradebidRoutingModule {
}
AdminTradebidRoutingModule.ɵfac = function AdminTradebidRoutingModule_Factory(t) { return new (t || AdminTradebidRoutingModule)(); };
AdminTradebidRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminTradebidRoutingModule });
AdminTradebidRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminTradebidRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 91922:
/*!*********************************************************************!*\
  !*** ./src/app/admin/pages/admin-tradebid/admin-tradebid.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTradebidModule": () => (/* binding */ AdminTradebidModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _admin_tradebid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-tradebid-routing.module */ 49446);
/* harmony import */ var _layout_admin_tradebid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/admin-tradebid.component */ 42639);
/* harmony import */ var _admin_offers_components_admin_offers_list_admin_offers_list_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-offers/components/admin-offers-list/admin-offers-list.module */ 1975);
/* harmony import */ var _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-pagination */ 19963);
/* harmony import */ var _admin_offers_components_admin_offer_decline_dialog_admin_offer_decline_dialog_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-offers/components/admin-offer-decline-dialog/admin-offer-decline-dialog.module */ 98611);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








class AdminTradebidModule {
}
AdminTradebidModule.ɵfac = function AdminTradebidModule_Factory(t) { return new (t || AdminTradebidModule)(); };
AdminTradebidModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AdminTradebidModule });
AdminTradebidModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _admin_tradebid_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminTradebidRoutingModule,
        _admin_offers_components_admin_offers_list_admin_offers_list_module__WEBPACK_IMPORTED_MODULE_2__.AdminOffersListModule,
        _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.B2bNgxPaginationModule,
        _admin_offers_components_admin_offer_decline_dialog_admin_offer_decline_dialog_module__WEBPACK_IMPORTED_MODULE_4__.AdminOfferDeclineDialogModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdminTradebidModule, { declarations: [_layout_admin_tradebid_component__WEBPACK_IMPORTED_MODULE_1__.AdminTradebidComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _admin_tradebid_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminTradebidRoutingModule,
        _admin_offers_components_admin_offers_list_admin_offers_list_module__WEBPACK_IMPORTED_MODULE_2__.AdminOffersListModule,
        _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.B2bNgxPaginationModule,
        _admin_offers_components_admin_offer_decline_dialog_admin_offer_decline_dialog_module__WEBPACK_IMPORTED_MODULE_4__.AdminOfferDeclineDialogModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule] }); })();


/***/ }),

/***/ 42639:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/pages/admin-tradebid/layout/admin-tradebid.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTradebidComponent": () => (/* binding */ AdminTradebidComponent)
/* harmony export */ });
/* harmony import */ var _Users_denissuhomlin_Desktop_repos_fe_b2bdiscount_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @b2b/ngx-link */ 49388);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _admin_offers_components_admin_offer_decline_dialog_layout_admin_offer_decline_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin-offers/components/admin-offer-decline-dialog/layout/admin-offer-decline-dialog.component */ 31598);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ 34769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _client_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../client/shared/components/confirmation-dialog/confirmation-dialog.component */ 4265);
/* harmony import */ var _admin_list_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin-list-type */ 57765);
/* harmony import */ var country_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! country-list */ 1188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _admin_tradebid_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-tradebid.service */ 47769);
/* harmony import */ var _client_services_offers_offers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../client/services/offers/offers.service */ 36521);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/api/api.service */ 96931);
/* harmony import */ var _client_pages_client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../client/pages/client-profile/services/user/user.service */ 82021);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/mixpanel/mixpanel.service */ 56838);
/* harmony import */ var _admin_offers_components_admin_offers_list_layout_admin_offers_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../admin-offers/components/admin-offers-list/layout/admin-offers-list.component */ 55454);
/* harmony import */ var _projects_ngx_pagination_src_lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../projects/ngx-pagination/src/lib/layout/ngx-pagination.component */ 93637);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 36362);
























let AdminTradebidComponent = class AdminTradebidComponent {
  constructor(adminTradeBidService, _offersService, _hotToastrService, _apiService, _usersService, dialog, mixpanelService) {
    this.adminTradeBidService = adminTradeBidService;
    this._offersService = _offersService;
    this._hotToastrService = _hotToastrService;
    this._apiService = _apiService;
    this._usersService = _usersService;
    this.dialog = dialog;
    this.mixpanelService = mixpanelService;
    this.listType = _admin_list_type__WEBPACK_IMPORTED_MODULE_5__.AdminListType;
    this.pageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
    this.forceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
    this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_15__.B2bNgxButtonThemeEnum;
    this.b2bNgxLinkThemeEnum = _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_16__.B2bNgxLinkThemeEnum;
    this.offers$ = this._getOffers$();
    this.menuOptions = this._getMenuOptions();
    this.totalCount$ = this._offersService.getAllOffersCount();

    this._usersService.getToken$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.first)()).subscribe(token => {
      this.token = token;
      this.openConnection();
    });
  }

  ngOnInit() {}

  export() {
    this._apiService.get("get-user-report").pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__.untilDestroyed)(this)).subscribe();
  }

  removeAllOffers() {
    this._offersService.removeAllOffers().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__.untilDestroyed)(this), this._hotToastrService.observe({
      loading: "Offers is deleting...",
      success: "Offers successfully deleted",
      error: "Offers deleting failed"
    })).subscribe();
  }

  _getOffers$() {
    const page$ = this.pageSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.startWith)(1));
    const force$ = this.forceSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.startWith)(true));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.combineLatest)([page$, force$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(([page]) => this.adminTradeBidService.getOffers(`?offset=${(page - 1) * 10}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(data => data));
  }

  setPage(event) {
    this.pageSubject.next(event);
  }

  _getMenuOptions() {
    var _this = this;

    return [{
      label: "Delete",
      icon: "delete-red",
      onClick: offer => {
        this.dialog.open(_client_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogComponent, {
          data: {
            title: "Delete product",
            message: "Are you sure you want to delete this product?",
            confirmButtonText: "Delete",
            confirmButtonTheme: _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_15__.B2bNgxButtonThemeEnum.BACKGROUND_RED,
            cancelButtonText: "Cancel",
            cancelButtonTheme: _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_15__.B2bNgxButtonThemeEnum.OUTLINE_BLACK
          }
        }).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.filter)(data => !!data), (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.mergeMap)(() => {
          return this._offersService.deleteRfq(offer._id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__.untilDestroyed)(this), this._hotToastrService.observe({
            loading: "Offer deleting",
            success: "Offer deleted",
            error: "Offer deleting failed"
          }));
        })).subscribe(() => {
          this.forceSubject.next(true);
        });
      }
    }, {
      label: "approve by admin",
      icon: "check",
      onClick: offer => {
        console.log('click');
        this.adminTradeBidService.approveOffer(offer._id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__.untilDestroyed)(this)).subscribe(() => {
          this.forceSubject.next(true);

          this._hotToastrService.success("approved");

          this.mixpanelService.track('New RFQ posted', {
            'Product Sector': offer.category[0].name,
            'Destination': (0,country_list__WEBPACK_IMPORTED_MODULE_6__.getName)(offer.destination.to)
          });
        });
      }
    }, {
      label: "decline by admin",
      icon: "cross",
      onClick: offer => {
        this.startChat(offer.user, offer._id);
        this.dialog.open(_admin_offers_components_admin_offer_decline_dialog_layout_admin_offer_decline_dialog_component__WEBPACK_IMPORTED_MODULE_1__.AdminOfferDeclineDialogComponent, {
          data: {
            chatUsers: offer.chatStarted
          },
          width: "40vw",
          height: "auto",
          minHeight: "0"
        }).afterClosed().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__.untilDestroyed)(this)).subscribe( /*#__PURE__*/function () {
          var _ref = (0,_Users_denissuhomlin_Desktop_repos_fe_b2bdiscount_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message) {
            if (message) {
              yield _this.openConnection();

              _this.adminTradeBidService.declineOffer(offer._id, message).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__.untilDestroyed)(_this)).subscribe(() => {
                _this.sendMessage(offer.user, offer._id, message);

                _this.closeConnection();

                _this.forceSubject.next(true);

                _this._hotToastrService.success("declined");

                _this.mixpanelService.track('Product declined', {
                  'Product Category': offer.category.name,
                  'Supplier\'s Country': (0,country_list__WEBPACK_IMPORTED_MODULE_6__.getName)(offer.destination.to),
                  'Product Count': offer.amount.count,
                  'Deletion Date': new Date().toISOString()
                });
              });
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    }];
  }

  openConnection() {
    this._socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl, {
      path: "/chat",
      auth: {
        token: this.token
      }
    });
  }

  startChat(userId, offerId) {
    this._socket.emit("start_chat", {
      userId,
      offerId
    });
  }

  sendMessage(userId, offerId, body) {
    if (!body) {
      return;
    }

    this._socket.emit("message", {
      type: "text",
      body,
      userId,
      offerId
    });
  }

  closeConnection() {
    if (this._socket) {
      this._socket.disconnect();
    }
  }

};

AdminTradebidComponent.ɵfac = function AdminTradebidComponent_Factory(t) {
  return new (t || AdminTradebidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_admin_tradebid_service__WEBPACK_IMPORTED_MODULE_7__.AdminTradeBidService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_client_services_offers_offers_service__WEBPACK_IMPORTED_MODULE_8__.OffersService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_26__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_9__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_client_pages_client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_11__.MixpanelService));
};

AdminTradebidComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({
  type: AdminTradebidComponent,
  selectors: [["b2b-admin-tradebid"]],
  decls: 5,
  vars: 9,
  consts: [[1, "admin-offers"], [3, "offers", "menuOptions", "listType"], [3, "length", "perPage", "togglePageNumber"]],
  template: function AdminTradebidComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "app-admin-offers-list", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "b2b-ngx-pagination", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("togglePageNumber", function AdminTradebidComponent_Template_b2b_ngx_pagination_togglePageNumber_3_listener($event) {
        return ctx.setPage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("offers", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](2, 5, ctx.offers$))("menuOptions", ctx.menuOptions)("listType", ctx.listType.tradebid);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](4, 7, ctx.totalCount$))("perPage", 10);
    }
  },
  dependencies: [_admin_offers_components_admin_offers_list_layout_admin_offers_list_component__WEBPACK_IMPORTED_MODULE_12__.AdminOffersListComponent, _projects_ngx_pagination_src_lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_13__.B2bNgxPaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_28__.AsyncPipe],
  styles: [".admin-offers[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXRyYWRlYmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtBQUNEIiwiZmlsZSI6ImFkbWluLXRyYWRlYmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLW9mZmVycyB7XG5cdHBhZGRpbmc6IDIwcHg7XG59XG4iXX0= */"]
});
AdminTradebidComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__.UntilDestroy)()], AdminTradebidComponent);


/***/ }),

/***/ 47769:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/pages/admin-tradebid/layout/admin-tradebid.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTradeBidService": () => (/* binding */ AdminTradeBidService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/api/api.service */ 96931);
/* harmony import */ var _client_state_offers_offers_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../client/state/offers/offers.query */ 35237);
/* harmony import */ var _client_state_offers_offers_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../client/state/offers/offers.store */ 14835);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);








function getPreviewPhoto(offer) {
    return offer.photos && offer.photos.length ? offer.photos[0].lg : null;
}
let AdminTradeBidService = class AdminTradeBidService {
    constructor(_apiService, _offersQuery, _offersStore, _hotToastService) {
        this._apiService = _apiService;
        this._offersQuery = _offersQuery;
        this._offersStore = _offersStore;
        this._hotToastService = _hotToastService;
        this._endpoint = "offers/";
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
                .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this))
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
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this), this._hotToastService.observe({
            loading: "Offer status updating...",
            success: "Offer status updated successfully!",
            error: "Offer status updating failed!",
        }))
            .subscribe();
    }
    // public hideOffer(id: string) {
    // 	return this._apiService.post(`offer/${id}/hide`, {}).pipe(untilDestroyed(this));
    // }
    //
    // public unHideOffer(id: string) {
    // 	return this._apiService.post(`offer/${id}/unHide`, {}).pipe(untilDestroyed(this));
    // }
    //
    // public adminHideOffer(id: string) {
    // 	return this._apiService.post(`offer/${id}/adminHide`, {}).pipe(untilDestroyed(this));
    // }
    //
    // public adminUnHideOffer(id: string) {
    // 	return this._apiService.post(`offer/${id}/adminUnHide`, {}).pipe(untilDestroyed(this));
    // }
    deleteOfferSub(id) {
        return this._apiService.delete(`offer/${id}/delete`).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this));
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
            .get("my/offers/")
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this))
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
        return this._apiService.get("tradeBid/get-rfq-admin" + queryString + "&hideCompleted=true").pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => {
            const { rfqList, totalCount } = response;
            const allOffers = rfqList.map((offer) => {
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
        return this._apiService.get("offers?hideSold=true").pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => {
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
        return this._apiService.post(`tradeBid/rfq-approval`, { id });
    }
    declineOffer(id, message) {
        return this._apiService.post(`tradebid/rfq-rejection`, { id: id, reasonForReject: message });
    }
};
AdminTradeBidService.ɵfac = function AdminTradeBidService_Factory(t) { return new (t || AdminTradeBidService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_client_state_offers_offers_query__WEBPACK_IMPORTED_MODULE_1__.OffersQuery), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_client_state_offers_offers_store__WEBPACK_IMPORTED_MODULE_2__.OffersStore), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_7__.HotToastService)); };
AdminTradeBidService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AdminTradeBidService, factory: AdminTradeBidService.ɵfac, providedIn: "root" });
AdminTradeBidService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.UntilDestroy)()
], AdminTradeBidService);



/***/ })

}]);
//# sourceMappingURL=src_app_admin_pages_admin-tradebid_admin-tradebid_module_ts.js.map