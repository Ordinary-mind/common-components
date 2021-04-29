module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a6306270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classA1/index.vue?vue&type=template&id=33bc3f3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("组件A1")])])}]


// CONCATENATED MODULE: ./packages/classA1/index.vue?vue&type=template&id=33bc3f3e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classA1/index.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var classA1vue_type_script_lang_js_ = ({
    name: "classA1",
    props: ['index']
});

// CONCATENATED MODULE: ./packages/classA1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_classA1vue_type_script_lang_js_ = (classA1vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/classA1/index.vue





/* normalize component */

var component = normalizeComponent(
  packages_classA1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var classA1 = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a6306270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classA2/index.vue?vue&type=template&id=45b427c2&
var classA2vue_type_template_id_45b427c2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var classA2vue_type_template_id_45b427c2_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("组件A2")])])}]


// CONCATENATED MODULE: ./packages/classA2/index.vue?vue&type=template&id=45b427c2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classA2/index.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var classA2vue_type_script_lang_js_ = ({
    name: "classA2",
    props: ['index']
});

// CONCATENATED MODULE: ./packages/classA2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_classA2vue_type_script_lang_js_ = (classA2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/classA2/index.vue





/* normalize component */

var classA2_component = normalizeComponent(
  packages_classA2vue_type_script_lang_js_,
  classA2vue_type_template_id_45b427c2_render,
  classA2vue_type_template_id_45b427c2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var classA2 = (classA2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a6306270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classA3/index.vue?vue&type=template&id=b57321ba&
var classA3vue_type_template_id_b57321ba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var classA3vue_type_template_id_b57321ba_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("组件A3")])])}]


// CONCATENATED MODULE: ./packages/classA3/index.vue?vue&type=template&id=b57321ba&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classA3/index.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var classA3vue_type_script_lang_js_ = ({
    name: "classA3",
    props: ['index']
});

// CONCATENATED MODULE: ./packages/classA3/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_classA3vue_type_script_lang_js_ = (classA3vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/classA3/index.vue





/* normalize component */

var classA3_component = normalizeComponent(
  packages_classA3vue_type_script_lang_js_,
  classA3vue_type_template_id_b57321ba_render,
  classA3vue_type_template_id_b57321ba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var classA3 = (classA3_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a6306270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classA4/index.vue?vue&type=template&id=04d8b684&
var classA4vue_type_template_id_04d8b684_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var classA4vue_type_template_id_04d8b684_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("组件A4")])])}]


// CONCATENATED MODULE: ./packages/classA4/index.vue?vue&type=template&id=04d8b684&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classA4/index.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var classA4vue_type_script_lang_js_ = ({
    name: "classA4",
    props: ['index']
});

// CONCATENATED MODULE: ./packages/classA4/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_classA4vue_type_script_lang_js_ = (classA4vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/classA4/index.vue





/* normalize component */

var classA4_component = normalizeComponent(
  packages_classA4vue_type_script_lang_js_,
  classA4vue_type_template_id_04d8b684_render,
  classA4vue_type_template_id_04d8b684_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var classA4 = (classA4_component.exports);
// CONCATENATED MODULE: ./packages/classA.js





const classA = [
    classA1,
    classA2,
    classA3,
    classA4
]

/* harmony default export */ var packages_classA = (classA);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a6306270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classB1/index.vue?vue&type=template&id=78d88520&
var classB1vue_type_template_id_78d88520_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var classB1vue_type_template_id_78d88520_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("组件B1")])])}]


// CONCATENATED MODULE: ./packages/classB1/index.vue?vue&type=template&id=78d88520&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classB1/index.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var classB1vue_type_script_lang_js_ = ({
    name: "classB1",
    props: ['index']
});

// CONCATENATED MODULE: ./packages/classB1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_classB1vue_type_script_lang_js_ = (classB1vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/classB1/index.vue





/* normalize component */

var classB1_component = normalizeComponent(
  packages_classB1vue_type_script_lang_js_,
  classB1vue_type_template_id_78d88520_render,
  classB1vue_type_template_id_78d88520_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var classB1 = (classB1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a6306270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classB2/index.vue?vue&type=template&id=4f2a66fe&
var classB2vue_type_template_id_4f2a66fe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var classB2vue_type_template_id_4f2a66fe_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("组件B2")])])}]


// CONCATENATED MODULE: ./packages/classB2/index.vue?vue&type=template&id=4f2a66fe&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classB2/index.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var classB2vue_type_script_lang_js_ = ({
    name: "classB2",
    props: ['index']
});

// CONCATENATED MODULE: ./packages/classB2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_classB2vue_type_script_lang_js_ = (classB2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/classB2/index.vue





/* normalize component */

var classB2_component = normalizeComponent(
  packages_classB2vue_type_script_lang_js_,
  classB2vue_type_template_id_4f2a66fe_render,
  classB2vue_type_template_id_4f2a66fe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var classB2 = (classB2_component.exports);
// CONCATENATED MODULE: ./packages/classB.js



const classB = [
    classB1,
    classB2
]

/* harmony default export */ var packages_classB = (classB);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a6306270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classC1/index.vue?vue&type=template&id=0b8f29df&
var classC1vue_type_template_id_0b8f29df_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var classC1vue_type_template_id_0b8f29df_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("组件C1")])])}]


// CONCATENATED MODULE: ./packages/classC1/index.vue?vue&type=template&id=0b8f29df&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classC1/index.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var classC1vue_type_script_lang_js_ = ({
    name: "classC1",
    props: ['index']
});

// CONCATENATED MODULE: ./packages/classC1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_classC1vue_type_script_lang_js_ = (classC1vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/classC1/index.vue





/* normalize component */

var classC1_component = normalizeComponent(
  packages_classC1vue_type_script_lang_js_,
  classC1vue_type_template_id_0b8f29df_render,
  classC1vue_type_template_id_0b8f29df_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var classC1 = (classC1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a6306270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classC2/index.vue?vue&type=template&id=6b217140&
var classC2vue_type_template_id_6b217140_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var classC2vue_type_template_id_6b217140_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("组件C2")])])}]


// CONCATENATED MODULE: ./packages/classC2/index.vue?vue&type=template&id=6b217140&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classC2/index.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var classC2vue_type_script_lang_js_ = ({
    name: "classC2",
    props: ['index']
});

// CONCATENATED MODULE: ./packages/classC2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_classC2vue_type_script_lang_js_ = (classC2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/classC2/index.vue





/* normalize component */

var classC2_component = normalizeComponent(
  packages_classC2vue_type_script_lang_js_,
  classC2vue_type_template_id_6b217140_render,
  classC2vue_type_template_id_6b217140_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var classC2 = (classC2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a6306270-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classC3/index.vue?vue&type=template&id=6a988ebe&
var classC3vue_type_template_id_6a988ebe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var classC3vue_type_template_id_6a988ebe_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("组件C3")])])}]


// CONCATENATED MODULE: ./packages/classC3/index.vue?vue&type=template&id=6a988ebe&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/classC3/index.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var classC3vue_type_script_lang_js_ = ({
    name: "classC3",
    props: ['index']
});

// CONCATENATED MODULE: ./packages/classC3/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_classC3vue_type_script_lang_js_ = (classC3vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/classC3/index.vue





/* normalize component */

var classC3_component = normalizeComponent(
  packages_classC3vue_type_script_lang_js_,
  classC3vue_type_template_id_6a988ebe_render,
  classC3vue_type_template_id_6a988ebe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var classC3 = (classC3_component.exports);
// CONCATENATED MODULE: ./packages/classC.js




const classC = [
    classC1,
    classC2,
    classC3
]

/* harmony default export */ var packages_classC = (classC);
// CONCATENATED MODULE: ./packages/index.js




const components = [
    ...packages_classA, 
    ...packages_classB,
    ...packages_classC
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
    install,
    // 以下是具体的组件列表
    ...components
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });