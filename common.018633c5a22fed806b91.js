"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[592],{

/***/ 113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ RemoteEntryComponent)
});

// EXTERNAL MODULE: consume shared module (default) @angular/core@=12.2.11 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2015/core.js)
var core_js_ = __webpack_require__(426);
;// CONCATENATED MODULE: ./libs/ui/src/lib/paper/paper.component.ts

const _c0 = ["*"];
/**
 * A Card to group other components together. This is an atom, a UI component. Presentational, without state.
 *
 * Usage: `<star-paper><h1>Card Title</h1><p>card content</p></star-paper>`
 *
 * @example `<star-paper><h1>Card Title</h1><p>card content</p></star-paper>`
 */

let PaperComponent = /*#__PURE__*/(() => {
  class PaperComponent {}

  PaperComponent.ɵfac = function PaperComponent_Factory(t) {
    return new (t || PaperComponent)();
  };

  PaperComponent.ɵcmp = /*@__PURE__*/core_js_["ɵɵdefineComponent"]({
    type: PaperComponent,
    selectors: [["star-paper"]],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    template: function PaperComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_js_["ɵɵprojectionDef"]();
        core_js_["ɵɵelementStart"](0, "section");
        core_js_["ɵɵprojection"](1);
        core_js_["ɵɵelementEnd"]();
      }
    },
    styles: ["[_nghost-%COMP%] {\n  --star-paper-bg: #001329;\n}\n\nsection[_ngcontent-%COMP%] {\n  background-color: var(--star-paper-bg);\n  color: white;\n  margin: 1rem;\n  padding: 1rem;\n  border-radius: 8px;\n}\n\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\nsection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}"]
  });
  return PaperComponent;
})();
;// CONCATENATED MODULE: ./apps/portfolio/src/app/remote-entry/entry.component.ts


let RemoteEntryComponent = /*#__PURE__*/(() => {
  class RemoteEntryComponent {}

  RemoteEntryComponent.ɵfac = function RemoteEntryComponent_Factory(t) {
    return new (t || RemoteEntryComponent)();
  };

  RemoteEntryComponent.ɵcmp = /*@__PURE__*/core_js_["ɵɵdefineComponent"]({
    type: RemoteEntryComponent,
    selectors: [["star-portfolio-entry"]],
    decls: 37,
    vars: 0,
    consts: [[1, "remote-entry"]],
    template: function RemoteEntryComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_js_["ɵɵelementStart"](0, "div", 0);
        core_js_["ɵɵelementStart"](1, "star-paper");
        core_js_["ɵɵelementStart"](2, "h2");
        core_js_["ɵɵtext"](3, "PORTFOLIO");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](4, "p");
        core_js_["ɵɵtext"](5, "This is a remote micro app loaded with Module Federation.");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](6, "table");
        core_js_["ɵɵelementStart"](7, "thead");
        core_js_["ɵɵelementStart"](8, "tr");
        core_js_["ɵɵelementStart"](9, "th");
        core_js_["ɵɵtext"](10, "Date");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](11, "th");
        core_js_["ɵɵtext"](12, "Balance");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](13, "th");
        core_js_["ɵɵtext"](14, "Value");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](15, "tbody");
        core_js_["ɵɵelementStart"](16, "tr");
        core_js_["ɵɵelementStart"](17, "td");
        core_js_["ɵɵtext"](18, "1-1-2020");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](19, "td");
        core_js_["ɵɵtext"](20, "0.12345 BTC");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](21, "td");
        core_js_["ɵɵtext"](22, "\u20AC20000,00");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](23, "tr");
        core_js_["ɵɵelementStart"](24, "td");
        core_js_["ɵɵtext"](25, "1-1-2015");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](26, "td");
        core_js_["ɵɵtext"](27, "0.12345 BTC");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](28, "td");
        core_js_["ɵɵtext"](29, "\u20AC200,00");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](30, "tr");
        core_js_["ɵɵelementStart"](31, "td");
        core_js_["ɵɵtext"](32, "1-1-2012");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](33, "td");
        core_js_["ɵɵtext"](34, "0.12345 BTC");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](35, "td");
        core_js_["ɵɵtext"](36, "\u20AC2,00");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
      }
    },
    directives: [PaperComponent],
    styles: [""]
  });
  return RemoteEntryComponent;
})();

/***/ }),

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* reexport */ UiModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/common@=12.2.11 (strict) (singleton) (fallback: ./node_modules/@angular/common/fesm2015/common.js)
var common_js_ = __webpack_require__(289);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=12.2.11 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2015/core.js)
var core_js_ = __webpack_require__(426);
;// CONCATENATED MODULE: ./libs/ui/src/lib/ui.module.ts


let UiModule = /*#__PURE__*/(() => {
  class UiModule {}

  UiModule.ɵfac = function UiModule_Factory(t) {
    return new (t || UiModule)();
  };

  UiModule.ɵmod = /*@__PURE__*/core_js_["ɵɵdefineNgModule"]({
    type: UiModule
  });
  UiModule.ɵinj = /*@__PURE__*/core_js_["ɵɵdefineInjector"]({
    imports: [[common_js_.CommonModule]]
  });
  return UiModule;
})();
;// CONCATENATED MODULE: ./libs/ui/src/index.ts


/***/ })

}]);