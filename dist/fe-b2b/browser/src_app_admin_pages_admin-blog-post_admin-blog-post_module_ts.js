"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_admin_pages_admin-blog-post_admin-blog-post_module_ts"],{

/***/ 13916:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/pages/admin-blog-post/admin-blog-post-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminBlogPostRoutingModule": () => (/* binding */ AdminBlogPostRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_admin_blog_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/admin-blog-post.component */ 81187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_admin_blog_post_component__WEBPACK_IMPORTED_MODULE_0__.AdminBlogPostComponent,
    },
];
class AdminBlogPostRoutingModule {
}
AdminBlogPostRoutingModule.ɵfac = function AdminBlogPostRoutingModule_Factory(t) { return new (t || AdminBlogPostRoutingModule)(); };
AdminBlogPostRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminBlogPostRoutingModule });
AdminBlogPostRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminBlogPostRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 33582:
/*!***********************************************************************!*\
  !*** ./src/app/admin/pages/admin-blog-post/admin-blog-post.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminBlogPostModule": () => (/* binding */ AdminBlogPostModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_chips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @b2b/ngx-chips */ 27584);
/* harmony import */ var _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @b2b/ngx-country-select */ 17354);
/* harmony import */ var _b2b_ngx_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b2b/ngx-file */ 5173);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-select */ 97631);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @kolkov/angular-editor */ 88888);
/* harmony import */ var _admin_blog_post_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-blog-post-routing.module */ 13916);
/* harmony import */ var _layout_admin_blog_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/admin-blog-post.component */ 81187);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);













class AdminBlogPostModule {
}
AdminBlogPostModule.ɵfac = function AdminBlogPostModule_Factory(t) { return new (t || AdminBlogPostModule)(); };
AdminBlogPostModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AdminBlogPostModule });
AdminBlogPostModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _admin_blog_post_routing_module__WEBPACK_IMPORTED_MODULE_2__.AdminBlogPostRoutingModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_6__.B2bNgxInputModule,
        _b2b_ngx_file__WEBPACK_IMPORTED_MODULE_1__.B2bNgxFileModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_7__.B2bNgxSelectModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_8__.B2bNgxButtonModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_9__.B2bNgxCountrySelectModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__.AngularEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _b2b_ngx_chips__WEBPACK_IMPORTED_MODULE_0__.B2bNgxChipsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminBlogPostModule, { declarations: [_layout_admin_blog_post_component__WEBPACK_IMPORTED_MODULE_3__.AdminBlogPostComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _admin_blog_post_routing_module__WEBPACK_IMPORTED_MODULE_2__.AdminBlogPostRoutingModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_6__.B2bNgxInputModule,
        _b2b_ngx_file__WEBPACK_IMPORTED_MODULE_1__.B2bNgxFileModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_7__.B2bNgxSelectModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_8__.B2bNgxButtonModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_9__.B2bNgxCountrySelectModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__.AngularEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _b2b_ngx_chips__WEBPACK_IMPORTED_MODULE_0__.B2bNgxChipsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule] }); })();


/***/ }),

/***/ 81187:
/*!*********************************************************************************!*\
  !*** ./src/app/admin/pages/admin-blog-post/layout/admin-blog-post.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminBlogPostComponent": () => (/* binding */ AdminBlogPostComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-select */ 20592);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var _core_helpers_function_capitalize_first_letter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/helpers/function/capitalize-first-letter */ 2613);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _client_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../client/services/categories/categories.service */ 57454);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _client_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../client/services/blog/blog.service */ 38985);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_input_src_lib_layout_ngx_input_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../projects/ngx-input/src/lib/layout/ngx-input.component */ 21729);
/* harmony import */ var _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../projects/ngx-input/src/lib/directive/ngx-input.directive */ 70159);
/* harmony import */ var _projects_ngx_file_src_lib_layout_ngx_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../projects/ngx-file/src/lib/layout/ngx-file.component */ 97567);
/* harmony import */ var _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../projects/ngx-select/src/lib/layout/ngx-select.component */ 13114);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../projects/ngx-country-select/src/lib/layout/ngx-country-select.component */ 11070);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @kolkov/angular-editor */ 88888);
/* harmony import */ var _projects_ngx_chips_src_lib_layout_ngx_chips_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../projects/ngx-chips/src/lib/layout/ngx-chips.component */ 19207);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 1468);


























function AdminBlogPostComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx_r0.b2bNgxInputThemeEnum.BACKGROUND_GRAY);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx_r0.b2bNgxInputThemeEnum.BACKGROUND_GRAY);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx_r0.b2bNgxInputThemeEnum.BACKGROUND_GRAY);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx_r0.b2bNgxInputThemeEnum.BACKGROUND_GRAY);
  }
}

function AdminBlogPostComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " To change alts for picture, edit this post after creation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

var BLOG_ACTION;

(function (BLOG_ACTION) {
  BLOG_ACTION[BLOG_ACTION["CREATE"] = 0] = "CREATE";
  BLOG_ACTION[BLOG_ACTION["EDIT"] = 1] = "EDIT";
})(BLOG_ACTION || (BLOG_ACTION = {}));

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
let AdminBlogPostComponent = class AdminBlogPostComponent {
  constructor(formBuilder, categoriesService, hotToastService, activatedRoute, blogService, router) {
    this.formBuilder = formBuilder;
    this.categoriesService = categoriesService;
    this.hotToastService = hotToastService;
    this.activatedRoute = activatedRoute;
    this.blogService = blogService;
    this.router = router;
    this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_6__.B2bNgxInputThemeEnum;
    this.blogAction = this.activatedRoute.snapshot.params["id"] === "create" ? BLOG_ACTION.CREATE : BLOG_ACTION.EDIT;
    this.blogActionEnum = BLOG_ACTION;
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl();
    this.b2bNgxSelectThemeEnum = _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_8__.B2bNgxSelectThemeEnum;
    this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_9__.B2bNgxButtonThemeEnum;
    this.editorConfig = EDITOR_CONFIG;
    this.formGroup = this.getFormGroup();
    this.level1Categories = [];
    this.level2Categories = [];
    this.searchedOptions$ = this.getSearchedOptions();
  }

  getSearchedOptions() {
    return this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(""), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(search => this.blogService.getTags(search)));
  }

  setSearch(search) {
    this.searchControl.setValue(search);
  }

  setLevel1Categories() {
    this.categoriesService.getWikiCategories().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(categories => {
      this.level1Categories = categories;
    });
  }

  setLevel2Categories() {
    this.formGroup.get("level1Category").valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(level1CategoryId => !!level1CategoryId)).subscribe(level1CategoryId => {
      var _a;

      this.level2Categories = (_a = this.level1Categories.find(level1Category => level1Category._id === level1CategoryId)) === null || _a === void 0 ? void 0 : _a.children;
    });
  }

  updateArticle() {
    const articleById$ = this.activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(paramMap => paramMap.get("id")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(id => !!id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(id => this.blogService.getArticleById(id)));
    const categories$ = this.categoriesService.getWikiCategories();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)([articleById$, categories$]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(([article, categories]) => {
      var _a;

      const level2CategoryId = article.category;
      const level1CategoryId = (_a = categories.find(level1Category => level1Category === null || level1Category === void 0 ? void 0 : level1Category.children.find(level2Category => level2Category._id === level2CategoryId))) === null || _a === void 0 ? void 0 : _a._id;
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
    return this.formBuilder.group({
      _id: null,
      title: "",
      description: "",
      author: "",
      image: "",
      country: [null],
      tags: [[]],
      level1Category: [null],
      level2Category: [null],
      shortDescription: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(140)],
      alt1: [null],
      alt2: [null],
      alt3: [null],
      alt4: [null]
    });
  }

  onSubmit(data) {
    if (!this.formGroup.valid) {
      return;
    }

    let {
      _id,
      level2Category,
      title,
      country,
      description,
      author,
      image,
      shortDescription,
      alt1,
      alt2,
      alt3,
      alt4
    } = data;
    const postAction = _id ? BLOG_ACTION.EDIT : BLOG_ACTION.CREATE;
    const body = {
      title,
      description,
      author,
      country,
      category: level2Category,
      shortDescription
    };
    description = description.replaceAll("<a", '<a rel="nofollow"');
    description = description.replaceAll("<a", '<a target="_blank""');
    const imageAltsArr = [alt1, alt2, alt3, alt4];
    let imageCounter = 0;
    body.description = description.split("");
    if (imageAltsArr[0]) for (let i = 0; i < description.length - 6; ++i) {
      if (description[i] === "<" && description[i + 1] === "i" && description[i + 2] === "m" && description[i + 3] === "g" && description[i + 4] === " " && description[i + 5] === "a") {
        if (imageAltsArr[imageCounter]) {
          body.description.splice(i, 6, `<img alt="${imageAltsArr[imageCounter]}"`);
          imageCounter++;
          i += 3;
        }
      }
    }
    imageAltsArr.forEach((item, index) => {
      if (item) body[`alt${index + 1}`] = item;
    });
    body.description = body.description.join("");

    if (postAction === BLOG_ACTION.CREATE) {
      const paragraphsToReplaceRegex = /<p class="MsoNormal">&#160;<\/p>|<p class="MsoNormal"><b><span>&#160;<\/span><\/b><\/p>/g;
      body.description = description.replace(paragraphsToReplaceRegex, "<div><br></div>");
      this.blogService.createBlog(body).pipe(this.hotToastService.observe({
        loading: "Post creating...",
        success: "Post created successfully!",
        error: "Post creation failed!"
      })).subscribe(data => {
        this.blogService.uploadImage(this.getFormData({
          image
        }), data._id).pipe(this.hotToastService.observe({
          loading: "Uploading images...",
          success: "Images uploaded successfully!",
          error: "Images uploading failed!"
        })).subscribe(() => this.router.navigate(["/admin/blog"]));
      });
    } else {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.forkJoin)([this.blogService.updateBlog(_id, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.first)()), this.blogService.uploadImage(this.getFormData({
        image
      }), _id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.first)())]).pipe(this.hotToastService.observe({
        loading: "Post updating...",
        success: "Post updated successfully!",
        error: "Post updating failed!"
      })).subscribe(() => this.router.navigate(["/admin/blog"]));
    }
  }

  getFormData(data) {
    const formData = new FormData();
    Object.entries(data).filter(([, value]) => !!value).forEach(([key, value]) => {
      if (key === "image") {
        Array.from(value).forEach(file => {
          formData.append(key, file);
        });
      } else if (Array.isArray(value)) {
        value.filter(arrayItem => !!arrayItem).forEach(arrayItem => {
          formData.append(key, arrayItem);
        });
      } else if (typeof value === "object" && value) {
        for (const childKey in value) {
          const fullKey = `${key}${(0,_core_helpers_function_capitalize_first_letter__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(childKey)}`;
          formData.append(fullKey, value[childKey]);
        }
      } else {
        formData.append(key, value);
      }
    });
    return formData;
  }

};

AdminBlogPostComponent.ɵfac = function AdminBlogPostComponent_Factory(t) {
  return new (t || AdminBlogPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_client_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_20__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_client_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router));
};

AdminBlogPostComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AdminBlogPostComponent,
  selectors: [["b2b-admin-blog-post"]],
  decls: 27,
  vars: 22,
  consts: [[1, "admin-article", 3, "formGroup", "ngSubmit"], [1, "admin-article__label"], ["formControlName", "image", 1, "admin-article__image"], [1, "admin-article__main"], ["formControlName", "title", "placeholder", "Enter post label", 1, "admin-article__input", 3, "label"], ["formControlName", "author", "placeholder", "Enter post author", 1, "admin-article__input", 3, "label"], [1, "admin-article__categories"], [1, "admin-article__category"], ["formControlName", "level1Category", "placeholder", "Select category", "bindValue", "_id", "bindLabel", "name", 3, "options", "theme"], [1, "admin-article__sub-category"], ["formControlName", "level2Category", "placeholder", "Select subcategory", "bindValue", "_id", "bindLabel", "name", 3, "options", "theme"], [1, "admin-article__additional"], ["formControlName", "country", "placeholder", "Select Country", 1, "admin-article__country", 3, "theme"], [1, "admin-article__tags"], ["formControlName", "tags", 3, "searchedOptions", "searched"], ["type", "text", "b2bNgxInput", "", "formControlName", "shortDescription", "placeholder", "Enter short description of this article (up to 140 symbols)", 3, "theme"], ["formControlName", "description", 1, "admin-article__description", 3, "config"], ["class", "image-alts", 4, "ngIf"], ["class", "image-alts__tooltip", 4, "ngIf"], ["b2bNgxButton", "", 1, "admin-article__button", 3, "theme"], [1, "image-alts"], [1, "image-alts__input"], ["type", "text", "b2bNgxInput", "", "placeholder", "Enter alt for picture 1", "label", "Alt for picture 1", "formControlName", "alt1", 3, "theme"], ["type", "text", "b2bNgxInput", "", "placeholder", "Enter alt for picture 2", "label", "Alt for picture 2", "formControlName", "alt2", 3, "theme"], ["type", "text", "b2bNgxInput", "", "placeholder", "Enter alt for picture 3", "label", "Alt for picture 3", "formControlName", "alt3", 3, "theme"], ["type", "text", "b2bNgxInput", "", "placeholder", "Enter alt for picture 4", "label", "Alt for picture 4", "formControlName", "alt4", 3, "theme"], [1, "image-alts__tooltip"]],
  template: function AdminBlogPostComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AdminBlogPostComponent_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmit(ctx.formGroup.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b2b-ngx-file", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "b2b-ngx-input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "b2b-ngx-input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6)(11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "b2b-ngx-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "b2b-ngx-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "b2b-ngx-country-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13)(18, "b2b-ngx-chips", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("searched", function AdminBlogPostComponent_Template_b2b_ngx_chips_searched_18_listener($event) {
        return ctx.setSearch($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "angular-editor", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AdminBlogPostComponent_div_23_Template, 9, 4, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AdminBlogPostComponent_div_24_Template, 2, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.formGroup.get("_id").value ? "Edit an post" : "Add an post");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 16, "LABELS.ARTICLE_LABEL"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 18, "LABELS.ARTICLE_AUTHOR"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.level1Categories)("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.level2Categories)("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("searchedOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 20, ctx.searchedOptions$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.editorConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.blogAction === ctx.blogActionEnum.EDIT);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.blogAction === ctx.blogActionEnum.CREATE);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.formGroup.get("_id").value ? "Update an post" : "Create an post", " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _projects_ngx_input_src_lib_layout_ngx_input_component__WEBPACK_IMPORTED_MODULE_23__.B2bNgxInputComponent, _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_24__.B2bNgxInputDirective, _projects_ngx_file_src_lib_layout_ngx_file_component__WEBPACK_IMPORTED_MODULE_3__.B2bNgxFileComponent, _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_25__.B2bNgxSelectComponent, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_26__.B2bNgxButtonDirective, _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_27__.B2bNgxCountrySelectComponent, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_28__.AngularEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _projects_ngx_chips_src_lib_layout_ngx_chips_component__WEBPACK_IMPORTED_MODULE_4__.B2bNgxChipsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslatePipe],
  styles: [".admin-article[_ngcontent-%COMP%] {\n  display: block;\n  margin: 30px;\n  background-color: white;\n  padding: 60px;\n}\n.admin-article[_ngcontent-%COMP%]   .image-alts__input[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.admin-article[_ngcontent-%COMP%]   .image-alts__tooltip[_ngcontent-%COMP%] {\n  color: #6c7077;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__image[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 30px;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  color: #0f0f11;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__input[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 30px;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__main[_ngcontent-%COMP%]   .admin-article__input[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__additional[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__additional[_ngcontent-%COMP%]   .admin-article__country[_ngcontent-%COMP%], .admin-article[_ngcontent-%COMP%]   .admin-article__additional[_ngcontent-%COMP%]   .admin-article__tags[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__categories[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__categories[_ngcontent-%COMP%]   .admin-article__category[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__categories[_ngcontent-%COMP%]   .admin-article__sub-category[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.admin-article[_ngcontent-%COMP%]   .admin-article__button[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 15px 40px;\n}\n  .angular-editor-textarea img {\n  max-width: 100%;\n}\n  .angular-editor-textarea p {\n  line-height: 24px;\n}\n  .admin-article__description {\n  display: block;\n  margin-top: 30px;\n  overflow: hidden;\n  line-height: 24px;\n}\n  .admin-article__description span,   .admin-article__description p {\n  line-height: 24px;\n}\n  .admin-article__description ul,   .admin-article__description li {\n  list-style: disc !important;\n}\n  .admin-article__description ul {\n  padding-left: 30px;\n}\n  .admin-article__description strong,   .admin-article__description b {\n  font-weight: bold !important;\n}\n  .admin-article__description img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWJsb2ctcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0Q7QUFFRTtFQUNDLGdCQUFBO0FBQUg7QUFHRTtFQUNDLGNBQUE7QUFESDtBQUlDO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0FBRkY7QUFLQztFQUNDLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFIRjtBQU1DO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0FBSkY7QUFPQztFQUNDLGFBQUE7RUFDQSw4QkFBQTtBQUxGO0FBT0U7RUFDQyxVQUFBO0FBTEg7QUFTQztFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBUEY7QUFTRTs7RUFFQyxVQUFBO0FBUEg7QUFXQztFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBVEY7QUFVRTtFQUNDLFVBQUE7QUFSSDtBQVVFO0VBQ0MsVUFBQTtBQVJIO0FBWUM7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FBVkY7QUFnQkU7RUFDQyxlQUFBO0FBYkg7QUFlRTtFQUNDLGlCQUFBO0FBYkg7QUFtQkM7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLGlCQUFBO0FBakJGO0FBbUJFOztFQUVDLGlCQUFBO0FBakJIO0FBb0JFOztFQUVDLDJCQUFBO0FBbEJIO0FBcUJFO0VBQ0Msa0JBQUE7QUFuQkg7QUFzQkU7O0VBRUMsNEJBQUE7QUFwQkg7QUF1QkU7RUFDQyxXQUFBO0FBckJIIiwiZmlsZSI6ImFkbWluLWJsb2ctcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1hcnRpY2xlIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1hcmdpbjogMzBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdHBhZGRpbmc6IDYwcHg7XG5cblx0LmltYWdlLWFsdHMge1xuXHRcdCZfX2lucHV0IHtcblx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0fVxuXG5cdFx0Jl9fdG9vbHRpcCB7XG5cdFx0XHRjb2xvcjogIzZjNzA3Nztcblx0XHR9XG5cdH1cblx0LmFkbWluLWFydGljbGVfX2ltYWdlIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuXHR9XG5cblx0LmFkbWluLWFydGljbGVfX2xhYmVsIHtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0Y29sb3I6ICMwZjBmMTE7XG5cdH1cblxuXHQuYWRtaW4tYXJ0aWNsZV9faW5wdXQge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdH1cblxuXHQuYWRtaW4tYXJ0aWNsZV9fbWFpbiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblx0XHQuYWRtaW4tYXJ0aWNsZV9faW5wdXQge1xuXHRcdFx0d2lkdGg6IDQ5JTtcblx0XHR9XG5cdH1cblxuXHQuYWRtaW4tYXJ0aWNsZV9fYWRkaXRpb25hbCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0bWFyZ2luLXRvcDogMzBweDtcblxuXHRcdC5hZG1pbi1hcnRpY2xlX19jb3VudHJ5LFxuXHRcdC5hZG1pbi1hcnRpY2xlX190YWdzIHtcblx0XHRcdHdpZHRoOiA0OSU7XG5cdFx0fVxuXHR9XG5cblx0LmFkbWluLWFydGljbGVfX2NhdGVnb3JpZXMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdFx0LmFkbWluLWFydGljbGVfX2NhdGVnb3J5IHtcblx0XHRcdHdpZHRoOiA0OSU7XG5cdFx0fVxuXHRcdC5hZG1pbi1hcnRpY2xlX19zdWItY2F0ZWdvcnkge1xuXHRcdFx0d2lkdGg6IDQ5JTtcblx0XHR9XG5cdH1cblxuXHQuYWRtaW4tYXJ0aWNsZV9fYnV0dG9uIHtcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuXHRcdHBhZGRpbmc6IDE1cHggNDBweDtcblx0fVxufVxuXG46Om5nLWRlZXAge1xuXHQuYW5ndWxhci1lZGl0b3ItdGV4dGFyZWEge1xuXHRcdGltZyB7XG5cdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0fVxuXHRcdHAge1xuXHRcdFx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdFx0fVxuXHR9XG59XG5cbjo6bmctZGVlcCB7XG5cdC5hZG1pbi1hcnRpY2xlX19kZXNjcmlwdGlvbiB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0bWFyZ2luLXRvcDogMzBweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cblx0XHRzcGFuLFxuXHRcdHAge1xuXHRcdFx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdFx0fVxuXG5cdFx0dWwsXG5cdFx0bGkge1xuXHRcdFx0bGlzdC1zdHlsZTogZGlzYyAhaW1wb3J0YW50O1xuXHRcdH1cblxuXHRcdHVsIHtcblx0XHRcdHBhZGRpbmctbGVmdDogMzBweDtcblx0XHR9XG5cblx0XHRzdHJvbmcsXG5cdFx0YiB7XG5cdFx0XHRmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuXHRcdH1cblxuXHRcdGltZyB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */"],
  changeDetection: 0
});
AdminBlogPostComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.UntilDestroy)()], AdminBlogPostComponent);


/***/ })

}]);
//# sourceMappingURL=src_app_admin_pages_admin-blog-post_admin-blog-post_module_ts.js.map