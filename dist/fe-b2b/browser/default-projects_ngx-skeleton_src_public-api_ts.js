"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["default-projects_ngx-skeleton_src_public-api_ts"],{

/***/ 21038:
/*!************************************************************************!*\
  !*** ./projects/ngx-skeleton/src/lib/layout/ngx-skeleton.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxSkeletonComponent": () => (/* binding */ B2bNgxSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-skeleton-loader */ 91391);


class B2bNgxSkeletonComponent {
}
B2bNgxSkeletonComponent.ɵfac = function B2bNgxSkeletonComponent_Factory(t) { return new (t || B2bNgxSkeletonComponent)(); };
B2bNgxSkeletonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: B2bNgxSkeletonComponent, selectors: [["b2b-ngx-skeleton"]], inputs: { option: "option" }, decls: 1, vars: 4, consts: [[3, "count", "appearance", "theme", "animation"]], template: function B2bNgxSkeletonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-skeleton-loader", 0);
    } if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count", ctx.option.count)("appearance", (tmp_1_0 = ctx.option.appearance) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "")("theme", ctx.option.theme)("animation", ctx.option.animation);
    } }, dependencies: [ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_1__.NgxSkeletonLoaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3gtc2tlbGV0b24uY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 45586:
/*!**************************************************************!*\
  !*** ./projects/ngx-skeleton/src/lib/ngx-skeleton.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxSkeletonModule": () => (/* binding */ B2bNgxSkeletonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_ngx_skeleton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/ngx-skeleton.component */ 21038);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-skeleton-loader */ 91391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class B2bNgxSkeletonModule {
}
B2bNgxSkeletonModule.ɵfac = function B2bNgxSkeletonModule_Factory(t) { return new (t || B2bNgxSkeletonModule)(); };
B2bNgxSkeletonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: B2bNgxSkeletonModule });
B2bNgxSkeletonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__.NgxSkeletonLoaderModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](B2bNgxSkeletonModule, { declarations: [_layout_ngx_skeleton_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxSkeletonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__.NgxSkeletonLoaderModule], exports: [_layout_ngx_skeleton_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxSkeletonComponent] }); })();


/***/ }),

/***/ 55849:
/*!*************************************************!*\
  !*** ./projects/ngx-skeleton/src/public-api.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxSkeletonComponent": () => (/* reexport safe */ _lib_layout_ngx_skeleton_component__WEBPACK_IMPORTED_MODULE_1__.B2bNgxSkeletonComponent),
/* harmony export */   "B2bNgxSkeletonModule": () => (/* reexport safe */ _lib_ngx_skeleton_module__WEBPACK_IMPORTED_MODULE_0__.B2bNgxSkeletonModule)
/* harmony export */ });
/* harmony import */ var _lib_ngx_skeleton_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-skeleton.module */ 45586);
/* harmony import */ var _lib_layout_ngx_skeleton_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/layout/ngx-skeleton.component */ 21038);
/*
 * Public API Surface of ngx-skeleton
 */




/***/ }),

/***/ 53668:
/*!**************************************************************!*\
  !*** ./node_modules/perf-marks/dist/es2015/is-nodejs-env.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNodeJSEnv": () => (/* binding */ isNodeJSEnv)
/* harmony export */ });
/**
 * Boolean with the result of the check if package
 * is running on the browser or in a NodeJS environment
 *
 * @returns boolean
 *
 */
const isNodeJSEnv = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]'; // Interesting fact:
// Some bundlers are resolving `process`, so it needs to check for process.release.name
// since it's a NodeJS only environment value.
// More details in https://nodejs.org/api/process.html#process_process_release



/***/ }),

/***/ 24432:
/*!************************************************************************************!*\
  !*** ./node_modules/perf-marks/dist/es2015/is-performance-observable-supported.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPerformanceObservableSupported": () => (/* binding */ isPerformanceObservableSupported)
/* harmony export */ });
/**
 * Boolean with the result of the check if PerformanceObservable
 * is supported for the current browser/NodeJS version
 *
 * @returns boolean
 *
 */
const isPerformanceObservableSupported = typeof PerformanceObserver !== 'undefined' && // eslint-disable-next-line compat/compat
typeof PerformanceObserver.prototype !== 'undefined' && // eslint-disable-next-line compat/compat
typeof PerformanceObserver.prototype.constructor === 'function';


/***/ }),

/***/ 59640:
/*!*****************************************************************************!*\
  !*** ./node_modules/perf-marks/dist/es2015/is-user-timing-api-supported.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUserTimingAPISupported": () => (/* binding */ isUserTimingAPISupported)
/* harmony export */ });
/**
 * Boolean with the result of the check if User Timing API
 * is supported for the current browser/NodeJS version
 *
 * @returns boolean
 *
 */
const isUserTimingAPISupported = typeof performance !== 'undefined' && typeof performance.now !== 'undefined' && typeof performance.mark === 'function' && typeof performance.measure === 'function' && (typeof performance.clearMarks === 'function' || typeof performance.clearMeasures === 'function');


/***/ }),

/***/ 54204:
/*!******************************************************!*\
  !*** ./node_modules/perf-marks/dist/es2015/marks.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "clearAll": () => (/* binding */ clearAll),
/* harmony export */   "end": () => (/* binding */ end),
/* harmony export */   "isPerformanceObservableSupported": () => (/* reexport safe */ _is_performance_observable_supported__WEBPACK_IMPORTED_MODULE_2__.isPerformanceObservableSupported),
/* harmony export */   "isUserTimingAPISupported": () => (/* reexport safe */ _is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__.isUserTimingAPISupported),
/* harmony export */   "start": () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-user-timing-api-supported */ 59640);
/* harmony import */ var _is_performance_observable_supported__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-performance-observable-supported */ 24432);
/* harmony import */ var _is_nodejs_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-nodejs-env */ 53668);


 // Map() is not used in order to decrease the bundle

let marksMap = {};
let marksObserver = {};
/**
 * Get the current time based on User Timing API or Date
 *
 * @returns number
 *
 */

const getTimeNow = () => _is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__.isUserTimingAPISupported ? performance.now() : Date.now();
/**
 * Clear marks and measure of performance event
 *
 * @param markName - Performance marker to be checked
 *
 * @returns void
 *
 */


const clear = markName => {
  marksMap[markName] = undefined; // Removes PerformanceObserver references from memory

  if (!!marksObserver[markName]) {
    marksObserver[markName] = undefined;
  }

  if (!_is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__.isUserTimingAPISupported) {
    return;
  } // Some versions of NodeJS doesn't support this method


  if (!_is_nodejs_env__WEBPACK_IMPORTED_MODULE_1__.isNodeJSEnv) {
    performance.clearMeasures(markName);
  }

  performance.clearMarks(markName);
};
/**
 * Start performance measure of event
 *
 * @param markName - Performance marker to be started
 *
 * @returns number
 *
 */


const start = markName => {
  if (_is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__.isUserTimingAPISupported) {
    if (_is_nodejs_env__WEBPACK_IMPORTED_MODULE_1__.isNodeJSEnv && _is_performance_observable_supported__WEBPACK_IMPORTED_MODULE_2__.isPerformanceObservableSupported) {
      // eslint-disable-next-line compat/compat
      const obs = new PerformanceObserver(list => {
        marksObserver[markName] = list.getEntries().find(f => f.name === markName);
        obs.disconnect();
      });
      obs.observe({
        entryTypes: ['measure']
      });
    }

    performance.mark(markName);
  }

  marksMap[markName] = getTimeNow();
};
/**
 * Finishes performance measure of event and
 * clear marks and measure if applicable
 *
 * @param markName - Performance marker to be checked
 * @param markNameToCompare - Optional mark to compare to
 *
 * @returns PerfMarksPerformanceEntry
 *
 */


const end = (markName, markNameToCompare) => {
  try {
    const startTime = marksMap[markName];

    if (!_is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__.isUserTimingAPISupported) {
      return startTime ? {
        duration: getTimeNow() - startTime,
        startTime,
        entryType: 'measure',
        name: markName
      } : {};
    } // If there's no User Timing mark to be compared with,
    // the package will create one to be used for better comparison


    if (!markNameToCompare) {
      performance.mark(`${markName}-end`);
    }

    performance.measure(markName, markName, markNameToCompare || `${markName}-end`);

    if (_is_nodejs_env__WEBPACK_IMPORTED_MODULE_1__.isNodeJSEnv) {
      if (!!marksObserver[markName]) {
        return marksObserver[markName];
      }

      return startTime ? {
        duration: getTimeNow() - startTime,
        startTime,
        entryType: 'measure',
        name: markName
      } : {};
    }

    const entry = performance.getEntriesByName(markName).pop();
    return entry || {};
  } catch (e) {
    // If previous mark was missing for some reason, this will throw.
    // This could only happen if something in event loop crashed
    // in an unexpected place earlier.
    // Don't pile on with more errors.
    return {};
  } finally {
    // Clear marks immediately to avoid growing buffer.
    clear(markName); // Clear marks used for comparison in case of it's value was passed
    // If the mark to compare is not passed, it should remove the one we create with `-end` suffix

    clear(markNameToCompare || `${markName}-end`);
  }
};
/**
 * Clear all marks and measures of performance event
 *
 * @returns void
 *
 */


const clearAll = () => {
  marksMap = {};
  marksObserver = {};

  if (!_is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__.isUserTimingAPISupported) {
    return;
  } // Some versions of NodeJS doesn't support this method


  if (!_is_nodejs_env__WEBPACK_IMPORTED_MODULE_1__.isNodeJSEnv) {
    performance.clearMeasures();
  }

  performance.clearMarks();
};



/***/ }),

/***/ 91391:
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NGX_SKELETON_LOADER_CONFIG": () => (/* binding */ NGX_SKELETON_LOADER_CONFIG),
/* harmony export */   "NgxSkeletonLoaderComponent": () => (/* binding */ NgxSkeletonLoaderComponent),
/* harmony export */   "NgxSkeletonLoaderModule": () => (/* binding */ NgxSkeletonLoaderModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var perf_marks_marks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perf-marks/marks */ 54204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);






function NgxSkeletonLoaderComponent_div_0_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "appearance  === 'custom-content'"]);
  }
}

const _c0 = function (a0, a1, a2, a3, a4) {
  return {
    "custom-content": a0,
    circle: a1,
    progress: a2,
    "progress-dark": a3,
    pulse: a4
  };
};

function NgxSkeletonLoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxSkeletonLoaderComponent_div_0_ng_content_1_Template, 1, 0, "ng-content", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](5, _c0, ctx_r0.appearance === "custom-content", ctx_r0.appearance === "circle", ctx_r0.animation === "progress", ctx_r0.animation === "progress-dark", ctx_r0.animation === "pulse"))("ngStyle", ctx_r0.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel)("aria-valuetext", ctx_r0.loadingText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.appearance === "custom-content");
  }
}

const _c1 = ["*"];
const NGX_SKELETON_LOADER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ngx-skeleton-loader.config');

class NgxSkeletonLoaderComponent {
  constructor(config) {
    this.config = config;
    const {
      appearance = 'line',
      animation = 'progress',
      theme = null,
      loadingText = 'Loading...',
      count = 1,
      ariaLabel = 'loading'
    } = config || {};
    this.appearance = appearance;
    this.animation = animation;
    this.theme = theme;
    this.loadingText = loadingText;
    this.count = count;
    this.items = [];
    this.ariaLabel = ariaLabel;
  }

  ngOnInit() {
    (0,perf_marks_marks__WEBPACK_IMPORTED_MODULE_1__.start)('NgxSkeletonLoader:Rendered');
    (0,perf_marks_marks__WEBPACK_IMPORTED_MODULE_1__.start)('NgxSkeletonLoader:Loaded');
    this.validateInputValues();
  }

  validateInputValues() {
    var _a, _b; // Checking if it's receiving a numeric value (string having ONLY numbers or if it's a number)


    if (!/^\d+$/.test(`${this.count}`)) {
      // Shows error message only in Development
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()) {
        console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'count' a numeric value. Forcing default to "1".`);
      }

      this.count = 1;
    } //Force count to 1 when custom-content is used


    if (this.appearance === 'custom-content') {
      // Shows error message only in Development
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() && this.count !== 1) {
        console.error(`\`NgxSkeletonLoaderComponent\` enforces elements with "custom-content" appearance as DOM nodes. Forcing "count" to "1".`);
        this.count = 1;
      }
    }

    this.items.length = this.count;
    const allowedAnimations = ['progress', 'progress-dark', 'pulse', 'false'];

    if (allowedAnimations.indexOf(String(this.animation)) === -1) {
      // Shows error message only in Development
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()) {
        console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'animation' as: ${allowedAnimations.join(', ')}. Forcing default to "progress".`);
      }

      this.animation = 'progress';
    }

    if (['circle', 'line', 'custom-content', ''].indexOf(String(this.appearance)) === -1) {
      // Shows error message only in Development
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()) {
        console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'appearance' as: circle or line or custom-content or empty string. Forcing default to "''".`);
      }

      this.appearance = '';
    }

    if (Boolean((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.theme) === null || _b === void 0 ? void 0 : _b.extendsFromRoot) && this.theme !== null) {
      // Shows error message only in Development
      this.theme = Object.assign(Object.assign({}, this.config.theme), this.theme);
    }
  }

  ngOnChanges(changes) {
    // Avoiding multiple calls for the same input in case there's no changes in the fields
    // Checking if the fields that require validation are available and if they were changed
    // In case were not changed, we stop the function. Otherwise, `validateInputValues` will be called.
    if (['count', 'animation', 'appearance'].find(key => changes[key] && (changes[key].isFirstChange() || changes[key].previousValue === changes[key].currentValue))) {
      return;
    }

    this.validateInputValues();
  }

  ngAfterViewInit() {
    (0,perf_marks_marks__WEBPACK_IMPORTED_MODULE_1__.end)('NgxSkeletonLoader:Rendered');
  }

  ngOnDestroy() {
    (0,perf_marks_marks__WEBPACK_IMPORTED_MODULE_1__.end)('NgxSkeletonLoader:Loaded');
  }

}
/** @nocollapse */


NgxSkeletonLoaderComponent.ɵfac = function NgxSkeletonLoaderComponent_Factory(t) {
  return new (t || NgxSkeletonLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NGX_SKELETON_LOADER_CONFIG, 8));
};
/** @nocollapse */


NgxSkeletonLoaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxSkeletonLoaderComponent,
  selectors: [["ngx-skeleton-loader"]],
  inputs: {
    count: "count",
    loadingText: "loadingText",
    appearance: "appearance",
    animation: "animation",
    ariaLabel: "ariaLabel",
    theme: "theme"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 1,
  consts: [["class", "skeleton-loader", "aria-busy", "true", "aria-valuemin", "0", "aria-valuemax", "100", "role", "progressbar", "tabindex", "0", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], ["aria-busy", "true", "aria-valuemin", "0", "aria-valuemax", "100", "role", "progressbar", "tabindex", "0", 1, "skeleton-loader", 3, "ngClass", "ngStyle"], [4, "ngIf"]],
  template: function NgxSkeletonLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxSkeletonLoaderComponent_div_0_Template, 2, 11, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
  styles: [".skeleton-loader[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;position:relative;background:rgb(239,241,246) no-repeat;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.skeleton-loader[_ngcontent-%COMP%]:after, .skeleton-loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%]{transform:translateZ(0)}.skeleton-loader.progress[_ngcontent-%COMP%]:after, .skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:after, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{animation:progress 2s ease-in-out infinite;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:\"\"}.skeleton-loader.progress[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0))}.skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.skeleton-loader.pulse[_ngcontent-%COMP%]{animation:pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}.skeleton-loader.custom-content[_ngcontent-%COMP%]{height:100%;background:none}@media (prefers-reduced-motion: reduce){.skeleton-loader.pulse[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%], .skeleton-loader.progress[_ngcontent-%COMP%]{animation:none}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%]{background-image:none}}@keyframes progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}"],
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSkeletonLoaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-skeleton-loader',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div\n  *ngFor=\"let item of items\"\n  class=\"skeleton-loader\"\n  [attr.aria-label]=\"ariaLabel\"\n  aria-busy=\"true\"\n  aria-valuemin=\"0\"\n  aria-valuemax=\"100\"\n  [attr.aria-valuetext]=\"loadingText\"\n  role=\"progressbar\"\n  tabindex=\"0\"\n  [ngClass]=\"{\n  'custom-content': appearance === 'custom-content',\n  circle: appearance === 'circle',\n    progress: animation === 'progress',\n    'progress-dark': animation === 'progress-dark',\n    pulse: animation === 'pulse'\n  }\"\n  [ngStyle]=\"theme\"\n>\n  <ng-content *ngIf=\"appearance  === 'custom-content'\"></ng-content>\n</div>\n\n\n\n\n",
      styles: [".skeleton-loader{box-sizing:border-box;overflow:hidden;position:relative;background:rgb(239,241,246) no-repeat;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.skeleton-loader:after,.skeleton-loader:before{box-sizing:border-box}.skeleton-loader.circle{width:40px;height:40px;margin:5px;border-radius:50%}.skeleton-loader.progress,.skeleton-loader.progress-dark{transform:translateZ(0)}.skeleton-loader.progress:after,.skeleton-loader.progress:before,.skeleton-loader.progress-dark:after,.skeleton-loader.progress-dark:before{box-sizing:border-box}.skeleton-loader.progress:before,.skeleton-loader.progress-dark:before{animation:progress 2s ease-in-out infinite;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:\"\"}.skeleton-loader.progress:before{background-image:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0))}.skeleton-loader.progress-dark:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.skeleton-loader.pulse{animation:pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}.skeleton-loader.custom-content{height:100%;background:none}@media (prefers-reduced-motion: reduce){.skeleton-loader.pulse,.skeleton-loader.progress-dark,.skeleton-loader.custom-content,.skeleton-loader.progress{animation:none}.skeleton-loader.progress,.skeleton-loader.progress-dark,.skeleton-loader.custom-content{background-image:none}}@keyframes progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [NGX_SKELETON_LOADER_CONFIG]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    count: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NgxSkeletonLoaderModule {
  static forRoot(config) {
    return {
      ngModule: NgxSkeletonLoaderModule,
      providers: [{
        provide: NGX_SKELETON_LOADER_CONFIG,
        useValue: config
      }]
    };
  }

}
/** @nocollapse */


NgxSkeletonLoaderModule.ɵfac = function NgxSkeletonLoaderModule_Factory(t) {
  return new (t || NgxSkeletonLoaderModule)();
};
/** @nocollapse */


NgxSkeletonLoaderModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxSkeletonLoaderModule
});
/** @nocollapse */

NgxSkeletonLoaderModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSkeletonLoaderModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgxSkeletonLoaderComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [NgxSkeletonLoaderComponent]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-skeleton-loader
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=ngx-skeleton-loader.mjs.map

/***/ })

}]);
//# sourceMappingURL=default-projects_ngx-skeleton_src_public-api_ts.js.map