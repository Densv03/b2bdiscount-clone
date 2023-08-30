"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_admin_pages_admin-article_admin-article_module_ts"],{

/***/ 53024:
/*!***************************************************************************!*\
  !*** ./src/app/admin/pages/admin-article/admin-article-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminArticleRoutingModule": () => (/* binding */ AdminArticleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_admin_article_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/admin-article.component */ 79102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_admin_article_component__WEBPACK_IMPORTED_MODULE_0__.AdminArticleComponent,
    },
];
class AdminArticleRoutingModule {
}
AdminArticleRoutingModule.ɵfac = function AdminArticleRoutingModule_Factory(t) { return new (t || AdminArticleRoutingModule)(); };
AdminArticleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminArticleRoutingModule });
AdminArticleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminArticleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 97702:
/*!*******************************************************************!*\
  !*** ./src/app/admin/pages/admin-article/admin-article.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminArticleModule": () => (/* binding */ AdminArticleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _admin_article_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-article-routing.module */ 53024);
/* harmony import */ var _layout_admin_article_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/admin-article.component */ 79102);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _b2b_ngx_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-file */ 5173);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @kolkov/angular-editor */ 88888);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-select */ 97631);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @b2b/ngx-country-select */ 17354);
/* harmony import */ var _b2b_ngx_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-chips */ 27584);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);













class AdminArticleModule {
}
AdminArticleModule.ɵfac = function AdminArticleModule_Factory(t) { return new (t || AdminArticleModule)(); };
AdminArticleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AdminArticleModule });
AdminArticleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _admin_article_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminArticleRoutingModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_6__.B2bNgxInputModule,
        _b2b_ngx_file__WEBPACK_IMPORTED_MODULE_2__.B2bNgxFileModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_7__.B2bNgxSelectModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_8__.B2bNgxButtonModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_9__.B2bNgxCountrySelectModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__.AngularEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _b2b_ngx_chips__WEBPACK_IMPORTED_MODULE_3__.B2bNgxChipsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminArticleModule, { declarations: [_layout_admin_article_component__WEBPACK_IMPORTED_MODULE_1__.AdminArticleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _admin_article_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminArticleRoutingModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_6__.B2bNgxInputModule,
        _b2b_ngx_file__WEBPACK_IMPORTED_MODULE_2__.B2bNgxFileModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_7__.B2bNgxSelectModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_8__.B2bNgxButtonModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_9__.B2bNgxCountrySelectModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__.AngularEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _b2b_ngx_chips__WEBPACK_IMPORTED_MODULE_3__.B2bNgxChipsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule] }); })();


/***/ }),

/***/ 79102:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/pages/admin-article/layout/admin-article.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminArticleComponent": () => (/* binding */ AdminArticleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-select */ 20592);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var _core_helpers_function_capitalize_first_letter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/helpers/function/capitalize-first-letter */ 2613);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _client_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../client/services/categories/categories.service */ 57454);
/* harmony import */ var _client_services_wiki_wiki_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../client/services/wiki/wiki.service */ 35551);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_input_src_lib_layout_ngx_input_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../projects/ngx-input/src/lib/layout/ngx-input.component */ 21729);
/* harmony import */ var _projects_ngx_file_src_lib_layout_ngx_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../projects/ngx-file/src/lib/layout/ngx-file.component */ 97567);
/* harmony import */ var _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../projects/ngx-select/src/lib/layout/ngx-select.component */ 13114);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../projects/ngx-country-select/src/lib/layout/ngx-country-select.component */ 11070);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @kolkov/angular-editor */ 88888);
/* harmony import */ var _projects_ngx_chips_src_lib_layout_ngx_chips_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../projects/ngx-chips/src/lib/layout/ngx-chips.component */ 19207);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 1468);

























function AdminArticleComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}

const EDITOR_CONFIG = {
  editable: true,
  spellcheck: true,
  height: "auto",
  minHeight: "200px",
  translate: "yes",
  enableToolbar: true,
  showToolbar: true,
  placeholder: "Enter text here...",
  fonts: [{
    class: "arial",
    name: "Arial"
  }, {
    class: "times-new-roman",
    name: "Times New Roman"
  }, {
    class: "calibri",
    name: "Calibri"
  }, {
    class: "comic-sans-ms",
    name: "Comic Sans MS"
  }],
  sanitize: true,
  toolbarPosition: "top"
};

function setValuesToFormData(formData, values, prefix) {
  Object.entries(values).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.filter(arrayItem => !!arrayItem).forEach(arrayItem => {
        formData.append(key, arrayItem);
      });
    } else if (key === "image") {
      Array.from(value).forEach(file => {
        formData.append(key, file);
      });
    } else if (typeof value === "object" && value !== null) {
      setValuesToFormData(formData, value, key);
    } else {
      const displayKey = prefix ? `${prefix}${(0,_core_helpers_function_capitalize_first_letter__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(key)}` : key;
      formData.append(displayKey, value);
    }
  });
}

let AdminArticleComponent = class AdminArticleComponent {
  constructor(_formBuilder, _categoriesService, _wikiService, _hotToastService, _activatedRoute) {
    this._formBuilder = _formBuilder;
    this._categoriesService = _categoriesService;
    this._wikiService = _wikiService;
    this._hotToastService = _hotToastService;
    this._activatedRoute = _activatedRoute;
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
    this.b2bNgxSelectThemeEnum = _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_7__.B2bNgxSelectThemeEnum;
    this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_8__.B2bNgxButtonThemeEnum;
    this.editorConfig = EDITOR_CONFIG;
    this.formGroup = this.getFormGroup();
    this.level1Categories = [];
    this.level2Categories = [];
    this.searchedOptions$ = this.getSearchedOptions();
  }

  getSearchedOptions() {
    return this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(""), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(search => this._wikiService.getTags(search)));
  }

  setSearch(search) {
    this.searchControl.setValue(search);
  }

  setLevel1Categories() {
    this._categoriesService.getWikiCategories().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe(categories => {
      this.level1Categories = categories;
    });
  }

  setLevel2Categories() {
    this.formGroup.get("level1Category").valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(level1CategoryId => !!level1CategoryId)).subscribe(level1CategoryId => {
      var _a;

      this.level2Categories = (_a = this.level1Categories.find(level1Category => level1Category._id === level1CategoryId)) === null || _a === void 0 ? void 0 : _a.children;
    });
  }

  updateArticle() {
    const articleById$ = this._activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(paramMap => paramMap.get("id")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(id => !!id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(id => this._wikiService.getArticleById(id)));

    const categories$ = this._categoriesService.getWikiCategories();

    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([articleById$, categories$]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe(([article, categories]) => {
      var _a, _b;

      const level2CategoryId = (_a = article.category) === null || _a === void 0 ? void 0 : _a._id;
      const level1CategoryId = (_b = categories.find(level1Category => level1Category === null || level1Category === void 0 ? void 0 : level1Category.children.find(level2Category => level2Category._id === level2CategoryId))) === null || _b === void 0 ? void 0 : _b._id;
      this.formGroup.patchValue({ ...article,
        image: [article.image],
        level1Category: level1CategoryId,
        level2Category: level2CategoryId
      });
    });
  }

  ngOnInit() {
    this.updateArticle();
    this.setLevel1Categories();
    this.setLevel2Categories();
  }

  getFormGroup() {
    return this._formBuilder.group({
      _id: null,
      title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      description: "",
      author: "",
      image: "",
      country: [null],
      tags: [[]],
      level1Category: [null],
      level2Category: [null]
    });
  }

  onSubmit(values) {
    if (this.formGroup.status === "INVALID") {
      return;
    }

    const formData = new FormData(); //

    const {
      _id,
      level1Category,
      level2Category,
      tags,
      ...rest
    } = values;
    const formValues = { ...rest,
      category: level2Category !== null && level2Category !== void 0 ? level2Category : level1Category,
      tags: tags.map(tag => tag._id || tag.name)
    };

    for (const key in formValues) {
      if (!formValues[key] || Array.isArray(formValues[key]) && !formValues[key].length) {
        delete formValues[key];
      }
    }

    formValues.image = formValues.image[0];

    if (_id) {
      // Array.isArray(formValues.image) ? delete formValues.image : null
      // setValuesToFormData(formData, formValues);
      this._wikiService.updateArticle(_id, formValues).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this), this._hotToastService.observe({
        loading: "Article updating...",
        success: "Article updated successfully!",
        error: "Article updating failed!"
      })).subscribe(() => {});
    } else {
      setValuesToFormData(formData, formValues);

      this._wikiService.createArticle(formData).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this), this._hotToastService.observe({
        loading: "Article creating...",
        success: "Article created successfully!",
        error: "Article creation failed!"
      })).subscribe(() => {});
    }
  }

};

AdminArticleComponent.ɵfac = function AdminArticleComponent_Factory(t) {
  return new (t || AdminArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_client_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_client_services_wiki_wiki_service__WEBPACK_IMPORTED_MODULE_2__.WikiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_17__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute));
};

AdminArticleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AdminArticleComponent,
  selectors: [["b2b-admin-article"]],
  decls: 26,
  vars: 20,
  consts: [[1, "admin-article", 3, "formGroup", "ngSubmit"], [1, "admin-article__label"], ["formControlName", "image", 1, "admin-article__image"], [1, "admin-article__main"], ["formControlName", "title", "placeholder", "Enter article label", 1, "admin-article__input", 3, "label"], ["class", "error", 4, "ngIf"], ["formControlName", "author", "placeholder", "Enter article author", 1, "admin-article__input", 3, "label"], [1, "admin-article__categories"], [1, "admin-article__category"], ["formControlName", "level1Category", "placeholder", "Select category", "bindValue", "_id", "bindLabel", "name", 3, "options", "theme"], [1, "admin-article__sub-category"], ["formControlName", "level2Category", "placeholder", "Select subcategory", "bindValue", "_id", "bindLabel", "name", 3, "options", "theme"], [1, "admin-article__additional"], ["formControlName", "country", "placeholder", "Select Country", 1, "admin-article__country", 3, "theme"], [1, "admin-article__tags"], ["formControlName", "tags", 3, "searchedOptions", "searched"], ["formControlName", "description", 1, "admin-article__description", 3, "config"], ["b2bNgxButton", "", 1, "admin-article__button", 3, "theme"], [1, "error"]],
  template: function AdminArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AdminArticleComponent_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmit(ctx.formGroup.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b2b-ngx-file", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3)(6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "b2b-ngx-input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AdminArticleComponent_p_9_Template, 2, 1, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "b2b-ngx-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7)(14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "b2b-ngx-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "b2b-ngx-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "b2b-ngx-country-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 14)(21, "b2b-ngx-chips", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("searched", function AdminArticleComponent_Template_b2b_ngx_chips_searched_21_listener($event) {
        return ctx.setSearch($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "angular-editor", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.formGroup.get("_id").value ? "Edit an article" : "Add an article");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 14, "LABELS.ARTICLE_LABEL"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("title").errors == null ? null : ctx.formGroup.get("title").errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 16, "LABELS.ARTICLE_AUTHOR"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.level1Categories)("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.level2Categories)("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("searchedOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 18, ctx.searchedOptions$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.editorConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.formGroup.get("_id").value ? "Update an article" : "Create an article", " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _projects_ngx_input_src_lib_layout_ngx_input_component__WEBPACK_IMPORTED_MODULE_20__.B2bNgxInputComponent, _projects_ngx_file_src_lib_layout_ngx_file_component__WEBPACK_IMPORTED_MODULE_3__.B2bNgxFileComponent, _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_21__.B2bNgxSelectComponent, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_22__.B2bNgxButtonDirective, _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_23__.B2bNgxCountrySelectComponent, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_24__.AngularEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _projects_ngx_chips_src_lib_layout_ngx_chips_component__WEBPACK_IMPORTED_MODULE_4__.B2bNgxChipsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe],
  styles: [".admin-article[_ngcontent-%COMP%] {\n  display: block;\n  margin: 30px;\n  background-color: white;\n  padding: 60px;\n}\n.admin-article[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #e63d3d;\n  margin-top: 7px;\n  margin-bottom: 0;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__image[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 30px;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  color: #0f0f11;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__input[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 30px;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .admin-article__input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__additional[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__additional[_ngcontent-%COMP%]   .admin-article__country[_ngcontent-%COMP%], .admin-article[_ngcontent-%COMP%]   .admin-article__additional[_ngcontent-%COMP%]   .admin-article__tags[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__categories[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__categories[_ngcontent-%COMP%]   .admin-article__category[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__categories[_ngcontent-%COMP%]   .admin-article__sub-category[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__button[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 15px 40px;\n}\n  .angular-editor-textarea img {\n  max-width: 100%;\n}\n  .angular-editor-textarea p {\n  line-height: 24px;\n}\n  .admin-article__description {\n  display: block;\n  margin-top: 30px;\n  overflow: hidden;\n  line-height: 24px;\n}\n  .admin-article__description span,   .admin-article__description p {\n  line-height: 24px;\n}\n  .admin-article__description ul,   .admin-article__description li {\n  list-style: disc !important;\n}\n  .admin-article__description ul {\n  padding-left: 30px;\n}\n  .admin-article__description strong,   .admin-article__description b {\n  font-weight: bold !important;\n}\n  .admin-article__description img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWFydGljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNEO0FBQUM7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQUM7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNDO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNGO0FBRUM7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdDO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBREY7QUFHRTtFQUNDLFVBQUE7QUFESDtBQUVHO0VBQ0MsV0FBQTtBQUFKO0FBS0M7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUhGO0FBS0U7O0VBRUMsVUFBQTtBQUhIO0FBT0M7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUxGO0FBTUU7RUFDQyxVQUFBO0FBSkg7QUFNRTtFQUNDLFVBQUE7QUFKSDtBQVFDO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtBQU5GO0FBWUU7RUFDQyxlQUFBO0FBVEg7QUFXRTtFQUNDLGlCQUFBO0FBVEg7QUFlQztFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7QUFiRjtBQWVFOztFQUVDLGlCQUFBO0FBYkg7QUFnQkU7O0VBRUMsMkJBQUE7QUFkSDtBQWlCRTtFQUNDLGtCQUFBO0FBZkg7QUFrQkU7O0VBRUMsNEJBQUE7QUFoQkg7QUFtQkU7RUFDQyxXQUFBO0FBakJIIiwiZmlsZSI6ImFkbWluLWFydGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tYXJ0aWNsZSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW46IDMwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiA2MHB4O1xuXHQuZXJyb3Ige1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRjb2xvcjogI2U2M2QzZDtcblx0XHRtYXJnaW4tdG9wOiA3cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHQuYWRtaW4tYXJ0aWNsZV9faW1hZ2Uge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdH1cblxuXHQuYWRtaW4tYXJ0aWNsZV9fbGFiZWwge1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGZvbnQtc2l6ZTogMzJweDtcblx0XHRjb2xvcjogIzBmMGYxMTtcblx0fVxuXG5cdC5hZG1pbi1hcnRpY2xlX19pbnB1dCB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0bWFyZ2luLXRvcDogMzBweDtcblx0fVxuXG5cdC5hZG1pbi1hcnRpY2xlX19tYWluIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRcdGRpdiB7XG5cdFx0XHR3aWR0aDogNDklO1xuXHRcdFx0LmFkbWluLWFydGljbGVfX2lucHV0IHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmFkbWluLWFydGljbGVfX2FkZGl0aW9uYWwge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cblx0XHQuYWRtaW4tYXJ0aWNsZV9fY291bnRyeSxcblx0XHQuYWRtaW4tYXJ0aWNsZV9fdGFncyB7XG5cdFx0XHR3aWR0aDogNDklO1xuXHRcdH1cblx0fVxuXG5cdC5hZG1pbi1hcnRpY2xlX19jYXRlZ29yaWVzIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuXHRcdC5hZG1pbi1hcnRpY2xlX19jYXRlZ29yeSB7XG5cdFx0XHR3aWR0aDogNDklO1xuXHRcdH1cblx0XHQuYWRtaW4tYXJ0aWNsZV9fc3ViLWNhdGVnb3J5IHtcblx0XHRcdHdpZHRoOiA0OSU7XG5cdFx0fVxuXHR9XG5cblx0LmFkbWluLWFydGljbGVfX2J1dHRvbiB7XG5cdFx0bWFyZ2luLXRvcDogMzBweDtcblx0XHRwYWRkaW5nOiAxNXB4IDQwcHg7XG5cdH1cbn1cblxuOjpuZy1kZWVwIHtcblx0LmFuZ3VsYXItZWRpdG9yLXRleHRhcmVhIHtcblx0XHRpbWcge1xuXHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdH1cblx0XHRwIHtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRcdH1cblx0fVxufVxuXG46Om5nLWRlZXAge1xuXHQuYWRtaW4tYXJ0aWNsZV9fZGVzY3JpcHRpb24ge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXG5cdFx0c3Bhbixcblx0XHRwIHtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRcdH1cblxuXHRcdHVsLFxuXHRcdGxpIHtcblx0XHRcdGxpc3Qtc3R5bGU6IGRpc2MgIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHR1bCB7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cdFx0fVxuXG5cdFx0c3Ryb25nLFxuXHRcdGIge1xuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHRpbWcge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXHR9XG59XG4iXX0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.trigger)("fadeInOut", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.transition)(":enter", [// :enter is alias to 'void => *'
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
      opacity: 1
    }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.transition)(":leave", [// :leave is alias to '* => void'
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
AdminArticleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.UntilDestroy)()], AdminArticleComponent);


/***/ })

}]);
//# sourceMappingURL=src_app_admin_pages_admin-article_admin-article_module_ts.js.map