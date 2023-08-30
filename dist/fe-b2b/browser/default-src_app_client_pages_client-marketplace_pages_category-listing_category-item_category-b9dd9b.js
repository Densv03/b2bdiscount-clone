"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["default-src_app_client_pages_client-marketplace_pages_category-listing_category-item_category-b9dd9b"],{

/***/ 96177:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/client/pages/client-marketplace/pages/category-listing/category-item/category-item.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryItemComponent": () => (/* binding */ CategoryItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../projects/ngx-image/src/lib/directive/ngx-image.directive */ 70239);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);









const _c0 = function (a1, a2) {
  return ["listing", a1, a2];
};

function CategoryItemComponent_div_0_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const child_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r2.category.path, child_r3.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", child_r3.name, " ", child_r3.productsCount > 0 ? "(" + child_r3.productsCount + ")" : "", " ");
  }
}

const _c1 = function (a0) {
  return {
    "opened-card": a0
  };
};

const _c2 = function (a1) {
  return ["/b2bmarket/listing", a1];
};

function CategoryItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4)(4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6)(7, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CategoryItemComponent_div_0_a_8_Template, 2, 7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryItemComponent_div_0_Template_div_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const childrenCategory_r1 = restoredCtx.ngIf;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](childrenCategory_r1.isSelected === true ? ctx_r4.hideCardCategories(ctx_r4.category) : ctx_r4.showCardCategories(ctx_r4.category));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const childrenCategory_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, childrenCategory_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.category.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx_r0.category.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.category == null ? null : ctx_r0.category.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", childrenCategory_r1.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", childrenCategory_r1.isSelected === true ? "arrow-down-blue" : "arrow-top-blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenCategory_r1.isSelected === true ? "Show less" : "View all");
  }
}

class CategoryItemComponent {
  constructor(route) {
    this.route = route;
    this.categoryItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.childrenCategoriesSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }

  ngOnInit() {
    this.detectChildrenCategories(this.category);
  }

  get childrenCategoryObject$() {
    return this.childrenCategoriesSource.asObservable();
  }

  showCardCategories(category) {
    const childrenCategoriesObj = { ...category,
      isSelected: true,
      children: this.category.children
    };
    this.childrenCategoriesSource.next(childrenCategoriesObj);
  }

  hideCardCategories(category) {
    const childrenCategoriesObj = { ...category,
      isSelected: false,
      children: this.childrenCategoriesSource.getValue().children.slice(0, 5)
    };
    this.childrenCategoriesSource.next(childrenCategoriesObj);
  }

  detectChildrenCategories(category) {
    const obj = { ...category,
      isSelected: false,
      children: category.children.slice(0, 5)
    };
    this.childrenCategoriesSource.next(obj);
  }

}

CategoryItemComponent.ɵfac = function CategoryItemComponent_Factory(t) {
  return new (t || CategoryItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};

CategoryItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CategoryItemComponent,
  selectors: [["b2b-category-item"]],
  inputs: {
    category: "category"
  },
  outputs: {
    categoryItemClicked: "categoryItemClicked"
  },
  decls: 2,
  vars: 3,
  consts: [["class", "category-item", 3, "ngClass", 4, "ngIf"], [1, "category-item", 3, "ngClass"], [1, "category-photo"], ["b2bNgxImage", "", "alt", "category-photo", 3, "name"], [1, "category-content"], ["b2bNgxLink", "", 1, "category-title", 3, "routerLink"], [1, "sub-category-list"], [1, "list-item"], ["b2bNgxLink", "", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "divider"], [1, "view-all-block", 3, "click"], ["b2bNgxIcon", "", "alt", "arrow", 3, "name"], [1, "text"], ["b2bNgxLink", "", 3, "routerLink"]],
  template: function CategoryItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CategoryItemComponent_div_0_Template, 14, 11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.childrenCategoryObject$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxImageDirective, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_5__.B2bNgxIconDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  position: relative;\n  transition: 0.2s all;\n  height: 450px;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-photo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 4px 4px 0 0;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%] {\n  padding: 16px 24px 0;\n  height: 340px;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: 0.01em;\n  color: #0f0f11;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .main-category-list[_ngcontent-%COMP%], [_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .sub-category-list[_ngcontent-%COMP%] {\n  max-height: 135px;\n  overflow: auto;\n  margin-top: 5px;\n  transition: 0.2s all;\n  padding-top: 5px;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .main-category-list-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .sub-category-list-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .main-category-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%], [_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .sub-category-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  max-height: 100%;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .main-category-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], [_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .sub-category-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  transition: 0.3s all;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 0.01em;\n  color: #0f0f11;\n  margin-bottom: 7px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .main-category-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .sub-category-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  font-weight: 700;\n  transform: translateY(-2px);\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .main-category-list[_ngcontent-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .sub-category-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 13px;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .main-category-list[_ngcontent-%COMP%]::-webkit-scrollbar-track, [_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .sub-category-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-sizing: content-box;\n  background: #fff;\n  border-radius: 0 8px 8px 0;\n  padding-top: 10px;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .main-category-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, [_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .sub-category-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e8e8e9;\n  border-radius: 5px;\n  box-shadow: inset 0 0 0 1px #fff;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .main-category-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, [_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .sub-category-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #cccccd;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .main-category-list[_ngcontent-%COMP%]::-webkit-scrollbar-button:single-button, [_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .sub-category-list[_ngcontent-%COMP%]::-webkit-scrollbar-button:single-button {\n  background-color: rgba(0, 0, 0, 0);\n  display: block;\n  height: 8px;\n  width: 18px;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .main-category-list[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 210px;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  background: #dfe8f5;\n  height: 1px;\n  position: absolute;\n  bottom: 45px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .view-all-block[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .view-all-block[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n[_nghost-%COMP%]   .category-item[_ngcontent-%COMP%]   .view-all-block[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  letter-spacing: 0.01em;\n  color: #0f0f11;\n  margin-left: 8px;\n}\n[_nghost-%COMP%]   .opened-card[_ngcontent-%COMP%] {\n  height: 550px !important;\n}\n[_nghost-%COMP%]   .opened-card[_ngcontent-%COMP%]   .sub-category-list[_ngcontent-%COMP%] {\n  max-height: 72% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBQUY7QUFDRTtFQUNDLFdBQUE7QUFDSDtBQUFHO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBRUo7QUFDRTtFQUNDLG9CQUFBO0VBQ0EsYUFBQTtBQUNIO0FBQUc7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRUo7QUFDRzs7RUFFQyxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7O0VBQ0MsZUFBQTtBQUdMO0FBREk7O0VBQ0MsZ0JBQUE7QUFJTDtBQUhLOztFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTU47QUFMTTs7RUFDQyxnQkFBQTtFQUNBLDJCQUFBO0FBUVA7QUFISTs7RUFDQyxXQUFBO0FBTUw7QUFISTs7RUFDQyx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQU1MO0FBSEk7O0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBTUw7QUFISTs7RUFDQyxtQkFBQTtBQU1MO0FBSEk7O0VBQ0Msa0NBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFNTDtBQUhHO0VBQ0MsY0FBQTtFQUNBLGFBQUE7QUFLSjtBQUZFO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUlIO0FBRkU7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUlIO0FBSEc7RUFDQyxZQUFBO0FBS0o7QUFIRztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBS0o7QUFBQztFQUNDLHdCQUFBO0FBRUY7QUFERTtFQUNDLDBCQUFBO0FBR0giLCJmaWxlIjoiY2F0ZWdvcnktaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0LmNhdGVnb3J5LWl0ZW0ge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRyYW5zaXRpb246IDAuMnMgYWxsO1xuXHRcdGhlaWdodDogNDUwcHg7XG5cdFx0LmNhdGVnb3J5LXBob3RvIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMjAwcHg7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0LmNhdGVnb3J5LWNvbnRlbnQge1xuXHRcdFx0cGFkZGluZzogMTZweCAyNHB4IDA7XG5cdFx0XHRoZWlnaHQ6IDM0MHB4O1xuXHRcdFx0LmNhdGVnb3J5LXRpdGxlIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0fVxuXG5cdFx0XHQubWFpbi1jYXRlZ29yeS1saXN0LFxuXHRcdFx0LnN1Yi1jYXRlZ29yeS1saXN0IHtcblx0XHRcdFx0bWF4LWhlaWdodDogMTM1cHg7XG5cdFx0XHRcdG92ZXJmbG93OiBhdXRvO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdHRyYW5zaXRpb246IDAuMnMgYWxsO1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogNXB4O1xuXHRcdFx0XHQmLXRleHQge1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHQubGlzdC1pdGVtIHtcblx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogMC4zcyBhbGw7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogN3B4O1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmOjotd2Via2l0LXNjcm9sbGJhciB7XG5cdFx0XHRcdFx0d2lkdGg6IDEzcHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG5cdFx0XHRcdFx0Ym94LXNpemluZzogY29udGVudC1ib3g7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMDtcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMTBweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZThlOGU5O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2ZmZjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjY2NjY2NkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOnNpbmdsZS1idXR0b24ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdGhlaWdodDogOHB4O1xuXHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQubWFpbi1jYXRlZ29yeS1saXN0IHtcblx0XHRcdFx0b3ZlcmZsb3c6IGF1dG87XG5cdFx0XHRcdGhlaWdodDogMjEwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5kaXZpZGVyIHtcblx0XHRcdGJhY2tncm91bmQ6ICNkZmU4ZjU7XG5cdFx0XHRoZWlnaHQ6IDFweDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGJvdHRvbTogNDVweDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0XHQudmlldy1hbGwtYmxvY2sge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdG9wYWNpdHk6IDAuODtcblx0XHRcdH1cblx0XHRcdC50ZXh0IHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDhweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQub3BlbmVkLWNhcmQge1xuXHRcdGhlaWdodDogNTUwcHggIWltcG9ydGFudDtcblx0XHQuc3ViLWNhdGVnb3J5LWxpc3Qge1xuXHRcdFx0bWF4LWhlaWdodDogNzIlICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHR9XG59XG4iXX0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)("fadeAnimation", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      height: 0,
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)("300ms", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      height: 20,
      opacity: 1
    }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(":leave", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      height: 1,
      opacity: 1
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)("300ms", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      height: 0,
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});

/***/ }),

/***/ 18677:
/*!**************************************************************************************************************!*\
  !*** ./src/app/client/pages/client-marketplace/pages/category-listing/category-item/category-item.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryItemModule": () => (/* binding */ CategoryItemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _category_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-item.component */ 96177);
/* harmony import */ var _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-image */ 87343);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);






class CategoryItemModule {
}
CategoryItemModule.ɵfac = function CategoryItemModule_Factory(t) { return new (t || CategoryItemModule)(); };
CategoryItemModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CategoryItemModule });
CategoryItemModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_3__.B2bNgxImageModule, _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__.B2bNgxIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CategoryItemModule, { declarations: [_category_item_component__WEBPACK_IMPORTED_MODULE_0__.CategoryItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_3__.B2bNgxImageModule, _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__.B2bNgxIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], exports: [_category_item_component__WEBPACK_IMPORTED_MODULE_0__.CategoryItemComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_client_pages_client-marketplace_pages_category-listing_category-item_category-b9dd9b.js.map