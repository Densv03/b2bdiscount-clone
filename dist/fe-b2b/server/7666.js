"use strict";
exports.id = 7666;
exports.ids = [7666];
exports.modules = {

/***/ 83328:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/client/pages/client-marketplace/components/product-posting-complete/product-posting-complete.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPostingCompleteComponent": () => (/* binding */ ProductPostingCompleteComponent)
/* harmony export */ });
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../projects/ngx-image/src/lib/directive/ngx-image.directive */ 70239);





class ProductPostingCompleteComponent {
    constructor() {
        this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_0__.B2bNgxButtonThemeEnum;
    }
}
ProductPostingCompleteComponent.ɵfac = function ProductPostingCompleteComponent_Factory(t) { return new (t || ProductPostingCompleteComponent)(); };
ProductPostingCompleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductPostingCompleteComponent, selectors: [["b2b-product-posting-complete"]], decls: 13, vars: 2, consts: [[1, "component-wrapper"], ["b2bNgxImage", "", "name", "success", "alt", "icon"], [1, "title"], [1, "subtitle"], [1, "buttons"], ["routerLink", "/profile/your-workspace/b2bmarket", "b2bNgxButton", "", 3, "theme"], ["routerLink", "/b2bmarket/product", "b2bNgxButton", "", 3, "theme"]], template: function ProductPostingCompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Thank you for posting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " your product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "The product will be listed shortly after moderator review.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Back to my products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Add another product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.OUTLINE_BLACK);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_3__.B2bNgxButtonDirective, _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxImageDirective], styles: ["[_nghost-%COMP%]   .component-wrapper[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 100px 0 150px;\n}\n[_nghost-%COMP%]   .component-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n[_nghost-%COMP%]   .component-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 36px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #0F0F11;\n  margin-top: 15px;\n}\n[_nghost-%COMP%]   .component-wrapper[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 148%;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #556274;\n}\n[_nghost-%COMP%]   .component-wrapper[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  display: flex;\n  gap: 8px;\n}\n[_nghost-%COMP%]   .component-wrapper[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 165px;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: 0.02em;\n  font-weight: 500;\n  padding: 15px 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtcG9zdGluZy1jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQUY7QUFDRTtFQUNDLGFBQUE7QUFDSDtBQUNFO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0g7QUFDRTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFDSDtBQUNFO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtBQUNIO0FBQUc7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoicHJvZHVjdC1wb3N0aW5nLWNvbXBsZXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHQuY29tcG9uZW50LXdyYXBwZXIge1xuXHRcdHdpZHRoOiA1MCU7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDEwMHB4IDAgMTUwcHg7XG5cdFx0aW1nIHtcblx0XHRcdGhlaWdodDogMTAwcHg7XG5cdFx0fVxuXHRcdC50aXRsZSB7XG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDM2cHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXHRcdFx0Y29sb3I6ICMwRjBGMTE7XG5cdFx0XHRtYXJnaW4tdG9wOiAxNXB4O1xuXHRcdH1cblx0XHQuc3VidGl0bGUge1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxNDglO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblx0XHRcdGNvbG9yOiAjNTU2Mjc0O1xuXHRcdH1cblx0XHQuYnV0dG9ucyB7XG5cdFx0XHRtYXJnaW4tdG9wOiAyNXB4O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGdhcDogOHB4O1xuXHRcdFx0YnV0dG9uIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRtaW4td2lkdGg6IDE2NXB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRwYWRkaW5nOiAxNXB4IDE4cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */"] });


/***/ }),

/***/ 37666:
/*!************************************************************************************************************************!*\
  !*** ./src/app/client/pages/client-marketplace/components/product-posting-complete/product-posting-complete.module.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPostingCompleteModule": () => (/* binding */ ProductPostingCompleteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _product_posting_complete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-posting-complete.component */ 83328);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @b2b/ngx-image */ 87343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [{ path: '', component: _product_posting_complete_component__WEBPACK_IMPORTED_MODULE_0__.ProductPostingCompleteComponent }];
class ProductPostingCompleteModule {
}
ProductPostingCompleteModule.ɵfac = function ProductPostingCompleteModule_Factory(t) { return new (t || ProductPostingCompleteModule)(); };
ProductPostingCompleteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProductPostingCompleteModule });
ProductPostingCompleteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes),
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_4__.B2bNgxButtonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_5__.B2bNgxIconModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_6__.B2bNgxImageModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductPostingCompleteModule, { declarations: [_product_posting_complete_component__WEBPACK_IMPORTED_MODULE_0__.ProductPostingCompleteComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_4__.B2bNgxButtonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_5__.B2bNgxIconModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_6__.B2bNgxImageModule] }); })();


/***/ })

};
;
//# sourceMappingURL=7666.js.map