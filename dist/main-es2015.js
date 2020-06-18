(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions.ts":
/*!****************************!*\
  !*** ./src/app/actions.ts ***!
  \****************************/
/*! exports provided: ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["CREATE_NOTIFY"] = "[HOME] Create a notification";
    ActionTypes["GET_NOTIFY"] = "[HOME] GET from state";
    ActionTypes["DEL_NOTIFY"] = "[HOME] Delete from state";
})(ActionTypes || (ActionTypes = {}));


/***/ }),

/***/ "./src/app/app-guard.ts":
/*!******************************!*\
  !*** ./src/app/app-guard.ts ***!
  \******************************/
/*! exports provided: AppGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGuard", function() { return AppGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser !== null) {
            return true;
        }
        else {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigateByUrl('/signpage', { replaceUrl: true, queryParams: { messageColor: '#007bff13', message: 'You have to Sign first!' } });
            return false;
        }
    }
}
AppGuard.ɵfac = function AppGuard_Factory(t) { return new (t || AppGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppGuard, factory: AppGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_content_user_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-content/user-content.component */ "./src/app/user-content/user-content.component.ts");
/* harmony import */ var _sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-page/sign-page.component */ "./src/app/sign-page/sign-page.component.ts");
/* harmony import */ var _app_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-guard */ "./src/app/app-guard.ts");







const routes = [
    { path: 'main', component: _user_content_user_content_component__WEBPACK_IMPORTED_MODULE_2__["UserContentComponent"], canActivate: [_app_guard__WEBPACK_IMPORTED_MODULE_4__["AppGuard"]] },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'signpage', component: _sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_3__["SignPageComponent"], data: { sign: 'page' } },
    { path: 'signup', component: _sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_3__["SignPageComponent"], data: { sign: 'up' } },
    { path: 'signin', component: _sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_3__["SignPageComponent"], data: { sign: 'in' } },
    { path: '**', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', redirectTo: '/main', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_app_guard__WEBPACK_IMPORTED_MODULE_4__["AppGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_app_guard__WEBPACK_IMPORTED_MODULE_4__["AppGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notific_wrap_notific_wrap_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notific-wrap/notific-wrap.component */ "./src/app/notific-wrap/notific-wrap.component.ts");
/* harmony import */ var _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-bar/header-bar.component */ "./src/app/header-bar/header-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer-bar/footer-bar.component */ "./src/app/footer-bar/footer-bar.component.ts");






class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-notific-wrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_notific_wrap_notific_wrap_component__WEBPACK_IMPORTED_MODULE_1__["NotificWrapComponent"], _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_2__["HeaderBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_4__["FooterBarComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHNzZC1wcm9qZWN0c1xcd2ViLXByb2plY3RzXFxmaXJlYmFzZS1hdXRoL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLGJvZHl7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxufSIsImh0bWwsIGJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_content_user_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-content/user-content.component */ "./src/app/user-content/user-content.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-page/sign-page.component */ "./src/app/sign-page/sign-page.component.ts");
/* harmony import */ var _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header-bar/header-bar.component */ "./src/app/header-bar/header-bar.component.ts");
/* harmony import */ var _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer-bar/footer-bar.component */ "./src/app/footer-bar/footer-bar.component.ts");
/* harmony import */ var _notific_wrap_notific_wrap_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notific-wrap/notific-wrap.component */ "./src/app/notific-wrap/notific-wrap.component.ts");
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./social-media/social-media.component */ "./src/app/social-media/social-media.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _user_content_user_content_component__WEBPACK_IMPORTED_MODULE_5__["UserContentComponent"],
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"],
        _sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_9__["SignPageComponent"],
        _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_10__["HeaderBarComponent"],
        _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_11__["FooterBarComponent"],
        _notific_wrap_notific_wrap_component__WEBPACK_IMPORTED_MODULE_12__["NotificWrapComponent"],
        _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_13__["SocialMediaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _user_content_user_content_component__WEBPACK_IMPORTED_MODULE_5__["UserContentComponent"],
                    _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
                    _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"],
                    _sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_9__["SignPageComponent"],
                    _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_10__["HeaderBarComponent"],
                    _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_11__["FooterBarComponent"],
                    _notific_wrap_notific_wrap_component__WEBPACK_IMPORTED_MODULE_12__["NotificWrapComponent"],
                    _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_13__["SocialMediaComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.ts ***!
  \****************************************************/
/*! exports provided: FooterBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBarComponent", function() { return FooterBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");



class FooterBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterBarComponent.ɵfac = function FooterBarComponent_Factory(t) { return new (t || FooterBarComponent)(); };
FooterBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterBarComponent, selectors: [["app-footer-bar"]], decls: 5, vars: 0, consts: [[1, "app-footer", "nav", "justify-content-center", "grey", "lighten-4", "py-4"], [1, "nav-item"], ["target", "__blank", "href", "https://github.com/ElusiveWay", 1, "nav-link"], ["fab", "", "icon", "github"]], template: function FooterBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mdb-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " My github profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["FabDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci1iYXIvZm9vdGVyLWJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-bar',
                templateUrl: './footer-bar.component.html',
                styleUrls: ['./footer-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header-bar/header-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function() { return HeaderBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/firebase */ "./src/app/scripts/firebase.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function HeaderBarComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderBarComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderBarComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderBarComponent_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.fb("out"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HeaderBarComponent {
    constructor() {
        this.fb = function (...args) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // @ts-ignore
                if (args[0] === 'out') {
                    Object(_scripts_firebase__WEBPACK_IMPORTED_MODULE_5__["fb"])('out', undefined, undefined);
                }
            });
        };
    }
    ngOnInit() {
        setInterval(() => this.isUser = Object(util__WEBPACK_IMPORTED_MODULE_4__["isNull"])(firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser), 100);
    }
}
HeaderBarComponent.ɵfac = function HeaderBarComponent_Factory(t) { return new (t || HeaderBarComponent)(); };
HeaderBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderBarComponent, selectors: [["app-header-bar"]], decls: 18, vars: 4, consts: [["SideClass", "app-navbar navbar navbar-expand-lg ", 3, "containerInside"], ["routerLink", "/main", "routerLinkActive", "active", 1, "navbar-brand", 2, "vertical-align", "center"], [1, "fab", "fa-foursquare", 2, "margin-left", ".2em", "margin-top", "0.1em", "font-size", "2em"], [2, "display", "inline-block"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "main-btn"], ["routerLink", "/main", "routerLinkActive", "active", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], [1, "fas", "fa-home"], [1, "nav-item", "signin-btn"], ["routerLink", "/signin", "routerLinkActive", "active", "class", "nav-link waves-light", "mdbWavesEffect", "", 4, "ngIf"], [1, "nav-item", "signup-btn"], ["routerLink", "/signup", "routerLinkActive", "active", "class", "nav-link waves-light", "mdbWavesEffect", "", 4, "ngIf"], [1, "nav-item", "logout-btn"], ["routerLink", "/signpage", "routerLinkActive", "active", "class", "nav-link waves-light", "mdbWavesEffect", "", 3, "click", 4, "ngIf"], ["routerLink", "/signin", "routerLinkActive", "active", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], [1, "fas", "fa-sign-in-alt"], ["routerLink", "/signup", "routerLinkActive", "active", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], [1, "fas", "fa-key"], ["routerLink", "/signpage", "routerLinkActive", "active", "mdbWavesEffect", "", 1, "nav-link", "waves-light", 3, "click"], [1, "fas", "fa-sign-out-alt"]], template: function HeaderBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mdb-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mdb-navbar-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "irebase Auth App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "links");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HeaderBarComponent_a_13_Template, 3, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HeaderBarComponent_a_15_Template, 3, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HeaderBarComponent_a_17_Template, 3, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("containerInside", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isUser);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["LinksComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1iYXIvaGVhZGVyLWJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header-bar',
                templateUrl: './header-bar.component.html',
                styleUrls: ['./header-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/notific-wrap/notific-wrap.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notific-wrap/notific-wrap.component.ts ***!
  \********************************************************/
/*! exports provided: NotificWrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificWrapComponent", function() { return NotificWrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_app_notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/app-notify */ "./src/app/services/app-notify.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/actions.ts");




class NotificWrapComponent {
    constructor() {
        //RXJS
        this.notification = {
            message: '',
            color: ''
        };
        _services_app_notify__WEBPACK_IMPORTED_MODULE_1__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].GET_NOTIFY });
        _services_app_notify__WEBPACK_IMPORTED_MODULE_1__["store"].subscribe((state) => {
            const { notification } = state;
            this.notification = notification;
        });
    }
    ngOnInit() {
        setInterval(() => this.show(), 100);
    }
    getTempate() {
        return `<div class="notificator-alert alert alert-${this.notification['color']}" role="alert">${this.notification['message']}</div>`;
    }
    clearNoti() {
        this.notification = {
            message: '',
            color: ''
        };
    }
    create(data) {
        _services_app_notify__WEBPACK_IMPORTED_MODULE_1__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].CREATE_NOTIFY, payload: data });
    }
    show() {
        if (this.notification['message'] !== '') {
            document.querySelector('.notificator').innerHTML = this.getTempate();
            setTimeout(() => {
                document.querySelector('.notificator-alert').classList.add('actived');
            }, 150);
            this.clearNoti();
            _services_app_notify__WEBPACK_IMPORTED_MODULE_1__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DEL_NOTIFY });
        }
    }
}
NotificWrapComponent.ɵfac = function NotificWrapComponent_Factory(t) { return new (t || NotificWrapComponent)(); };
NotificWrapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificWrapComponent, selectors: [["app-notific-wrap"]], decls: 1, vars: 0, consts: [[1, "notificator"]], template: function NotificWrapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWMtd3JhcC9ub3RpZmljLXdyYXAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificWrapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notific-wrap',
                templateUrl: './notific-wrap.component.html',
                styleUrls: ['./notific-wrap.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/scripts/firebase.ts":
/*!*************************************!*\
  !*** ./src/app/scripts/firebase.ts ***!
  \*************************************/
/*! exports provided: fb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return fb; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _services_app_notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app-notify */ "./src/app/services/app-notify.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/app/actions.ts");





function fb(action, email = '', password = '', router = undefined) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        switch (action) {
            case 'in':
                yield firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password).catch(function (error) {
                    // Handle Errors here.
                    _services_app_notify__WEBPACK_IMPORTED_MODULE_3__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].CREATE_NOTIFY, payload: {
                            message: `Oops!\n ${error.message}!`,
                            color: 'danger'
                        } });
                    return error;
                }).then(function (r) {
                    if (r.user !== undefined) {
                        _services_app_notify__WEBPACK_IMPORTED_MODULE_3__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].CREATE_NOTIFY, payload: {
                                message: 'Logged in!\n You have successfully logged in!',
                                color: 'success'
                            } });
                        router.navigateByUrl('/main');
                        return r.user;
                    }
                });
                break;
            case 'up':
                yield firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password).catch(function (error) {
                    // Handle Errors here.
                    _services_app_notify__WEBPACK_IMPORTED_MODULE_3__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].CREATE_NOTIFY, payload: {
                            message: `Oops!\n ${error.message}!`,
                            color: 'danger'
                        } });
                    return error;
                }).then(function (r) {
                    if (r.user !== undefined) {
                        _services_app_notify__WEBPACK_IMPORTED_MODULE_3__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].CREATE_NOTIFY, payload: {
                                message: 'Finally!\n Welcome to community!',
                                color: 'success'
                            } });
                        router.navigateByUrl('/main');
                        return r.user;
                    }
                });
                break;
            default:
                yield firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut().then(function () {
                    _services_app_notify__WEBPACK_IMPORTED_MODULE_3__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].CREATE_NOTIFY, payload: {
                            message: 'Logged out!\n You have successfully logged out!',
                            color: 'info'
                        } });
                }).catch(function (error) {
                    return error;
                });
                router.navigateByUrl('/signpage');
        }
    });
}


/***/ }),

/***/ "./src/app/services/app-notify.ts":
/*!****************************************!*\
  !*** ./src/app/services/app-notify.ts ***!
  \****************************************/
/*! exports provided: store, eventDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventDispatcher", function() { return eventDispatcher; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/actions.ts");


let state = {
    notification: {
        message: '',
        color: ''
    },
};
const store = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
const eventDispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
eventDispatcher.subscribe((data) => {
    switch (data.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_NOTIFY:
            store.next(state);
            break;
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CREATE_NOTIFY:
            state = {
                notification: data.payload
            };
            store.next(state);
            break;
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DEL_NOTIFY:
            state = {
                notification: {
                    message: '',
                    color: ''
                }
            };
            store.next(state);
            break;
        default:
            break;
    }
});


/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scripts_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/firebase */ "./src/app/scripts/firebase.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../social-media/social-media.component */ "./src/app/social-media/social-media.component.ts");








class SignInComponent {
    constructor(router) {
        this.router = router;
        this.fb = function (...args) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // @ts-ignore
                Object(_scripts_firebase__WEBPACK_IMPORTED_MODULE_2__["fb"])(...args, router);
            });
        };
    }
    ngOnInit() {
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 10, vars: 3, consts: [[1, "app-sign-in", "text-center", "border", "border-light", "p-5", 3, "submit"], [1, "h4", "mb-4"], ["required", "", "pattern", "^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$", "type", "email", "name", "email", "placeholder", "Email", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], ["mail", "ngModel"], ["required", "", "name", "pass", "type", "password", "pattern", "^[0-9a-zA-Z]{6,20}$", "placeholder", "Password", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], ["passw", "ngModel"], ["mdbBtn", "", "color", "info", "block", "true", "type", "submit", 1, "sub-btn", "my-4", 3, "disabled"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SignInComponent_Template_form_submit_0_listener() { return ctx.fb("in", ctx.email, ctx.pass); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_3_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_5_listener($event) { return ctx.pass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-social-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.pass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r1.invalid || _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbBtnDirective"], _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_6__["SocialMediaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sign-page/sign-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sign-page/sign-page.component.ts ***!
  \**************************************************/
/*! exports provided: SignPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignPageComponent", function() { return SignPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");






const _c0 = function (a1, a3) { return { "opacity": "1", "padding": a1, "color": "#017cff", "backgroundColor": a3 }; };
function SignPageComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r0.message ? "1rem" : "0", ctx_r0.messageColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
} }
function SignPageComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignPageComponent_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register or Login, dear friend!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignPageComponent_h3_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register, my darling!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignPageComponent_h3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login, my brave warrior!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignPageComponent_app_sign_up_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sign-up");
} }
function SignPageComponent_app_sign_in_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sign-in");
} }
class SignPageComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        //Checking data passing across the Router
        this.isUp = this.route.snapshot.data['sign'] === 'up';
        this.isIn = this.route.snapshot.data['sign'] === 'in';
        this.isPage = this.route.snapshot.data['sign'] === 'page';
        this.isMessage = true;
        const a = this.router.getCurrentNavigation().extras;
        this.message = a.queryParams && a.queryParams.message ? a.queryParams.message : undefined;
        this.messageColor = a.queryParams && a.queryParams.messageColor ? a.queryParams.messageColor : 'transparent';
    }
    ngOnInit() {
        document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
        if (this.route.snapshot.data['sign'] === 'up') {
            document.querySelector('.signup-btn').classList.add('active');
        }
        else if (this.route.snapshot.data['sign'] === 'in') {
            document.querySelector('.signin-btn').classList.add('active');
        }
    }
}
SignPageComponent.ɵfac = function SignPageComponent_Factory(t) { return new (t || SignPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SignPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignPageComponent, selectors: [["app-sign-page"]], decls: 10, vars: 7, consts: [["style", "display:inline-block;margin-top:1em", "class", "left-sp", 3, "ngStyle", 4, "ngIf"], ["style", "display:inline-block;margin-top:1em", "class", "right-sp", 4, "ngIf"], [1, "center-h", 2, "margin-top", "2vw"], ["class", "center-h", 4, "ngIf"], [1, "app-sign-page-wrapper"], [4, "ngIf"], [1, "left-sp", 2, "display", "inline-block", "margin-top", "1em", 3, "ngStyle"], [1, "right-sp", 2, "display", "inline-block", "margin-top", "1em"], [1, "fab", "fa-angular"], [1, "center-h"]], template: function SignPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignPageComponent_h2_0_Template, 2, 5, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignPageComponent_h2_1_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Are you a member?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignPageComponent_h3_4_Template, 2, 0, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SignPageComponent_h3_5_Template, 2, 0, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SignPageComponent_h3_6_Template, 2, 0, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignPageComponent_app_sign_up_8_Template, 1, 0, "app-sign-up", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignPageComponent_app_sign_in_9_Template, 1, 0, "app-sign-in", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUp || ctx.isPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isIn || ctx.isPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tcGFnZS9zaWduLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-page',
                templateUrl: './sign-page.component.html',
                styleUrls: ['./sign-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scripts_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/firebase */ "./src/app/scripts/firebase.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../social-media/social-media.component */ "./src/app/social-media/social-media.component.ts");








class SignUpComponent {
    constructor(router) {
        this.router = router;
        this.fb = function (...args) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // @ts-ignore
                Object(_scripts_firebase__WEBPACK_IMPORTED_MODULE_2__["fb"])(...args, router);
            });
        };
    }
    ngOnInit() {
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 10, vars: 3, consts: [[1, "app-sign-up", "text-center", "border", "border-light", "p-5", 3, "submit"], [1, "h4", "mb-4"], ["required", "", "pattern", "^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$", "type", "email", "name", "email", "placeholder", "Email", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], ["mail", "ngModel"], ["required", "", "pattern", "^[0-9a-zA-Z]{6,20}$", "type", "password", "name", "pass", "placeholder", "Password", "aria-describedby", "defaultRegisterFormPasswordHelpBlock", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passw", "ngModel"], ["mdbBtn", "", "color", "info", "block", "true", "type", "submit", 1, "sub-btn", "my-4", 3, "disabled"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SignUpComponent_Template_form_submit_0_listener() { return ctx.fb("up", ctx.email, ctx.pass); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_3_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_5_listener($event) { return ctx.pass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-social-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.pass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r1.invalid || _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbBtnDirective"], _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_6__["SocialMediaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/social-media/social-media.component.ts":
/*!********************************************************!*\
  !*** ./src/app/social-media/social-media.component.ts ***!
  \********************************************************/
/*! exports provided: SocialMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaComponent", function() { return SocialMediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _services_app_notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app-notify */ "./src/app/services/app-notify.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/app/actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");








class SocialMediaComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider();
        this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        this.gitProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GithubAuthProvider();
        this.faceProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider();
        this.faceProvider.addScope('user_photos');
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().useDeviceLanguage();
    }
    google() {
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithPopup(this.provider).then((result) => {
            _services_app_notify__WEBPACK_IMPORTED_MODULE_3__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].CREATE_NOTIFY, payload: {
                    message: `Logged in!\nGoogle Login Success!`,
                    color: 'success'
                } });
            this.router.navigateByUrl('/main');
        }).catch(function (error) {
            _services_app_notify__WEBPACK_IMPORTED_MODULE_3__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].CREATE_NOTIFY, payload: {
                    message: `Wrong!\n${error.message}!`,
                    color: 'danger'
                } });
        });
    }
    face() {
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithPopup(this.faceProvider).then((result) => {
            _services_app_notify__WEBPACK_IMPORTED_MODULE_3__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].CREATE_NOTIFY, payload: {
                    message: `Logged in!\nFacebook Login Success!`,
                    color: 'success'
                } });
            this.router.navigateByUrl('/main');
        }).catch(function (error) {
            _services_app_notify__WEBPACK_IMPORTED_MODULE_3__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].CREATE_NOTIFY, payload: {
                    message: `Wrong!\n${error.message}!`,
                    color: 'danger'
                } });
        });
    }
    git() {
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithPopup(this.gitProvider).then((result) => {
            _services_app_notify__WEBPACK_IMPORTED_MODULE_3__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].CREATE_NOTIFY, payload: {
                    message: `Logged in!\nGithub Login Success!`,
                    color: 'success'
                } });
            this.router.navigateByUrl('/main');
        }).catch(function (error) {
            _services_app_notify__WEBPACK_IMPORTED_MODULE_3__["eventDispatcher"].next({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].CREATE_NOTIFY, payload: {
                    message: `Wrong!\n${error.message}!`,
                    color: 'danger'
                } });
        });
    }
}
SocialMediaComponent.ɵfac = function SocialMediaComponent_Factory(t) { return new (t || SocialMediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SocialMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialMediaComponent, selectors: [["app-social-media"]], decls: 8, vars: 0, consts: [["type", "button", 1, "light-blue-text", "mx-2", 3, "click"], [1, "fab", "fa-google"], [1, "fab", "fa-facebook-f"], ["fab", "", "icon", "github"]], template: function SocialMediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "or sign in with:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialMediaComponent_Template_a_click_2_listener() { return ctx.google(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialMediaComponent_Template_a_click_4_listener() { return ctx.face(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialMediaComponent_Template_a_click_6_listener() { return ctx.git(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mdb-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["FabDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC1tZWRpYS9zb2NpYWwtbWVkaWEuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-media',
                templateUrl: './social-media.component.html',
                styleUrls: ['./social-media.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-content/user-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-content/user-content.component.ts ***!
  \********************************************************/
/*! exports provided: UserContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContentComponent", function() { return UserContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");




class UserContentComponent {
    constructor() {
        this.user = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.displayName || firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.email;
        this.email = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.email;
        this.photo = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.photoURL || 'https://previews.123rf.com/images/diddleman/diddleman1204/diddleman120400002/13058158-no-user-profile-picture-hand-drawn--Stock-Vector-image.jpg';
        this.defPhoto = 'https://previews.123rf.com/images/diddleman/diddleman1204/diddleman120400002/13058158-no-user-profile-picture-hand-drawn--Stock-Vector-image.jpg';
    }
    ngOnInit() {
        document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
        document.querySelector('.main-btn').classList.add('active');
    }
}
UserContentComponent.ɵfac = function UserContentComponent_Factory(t) { return new (t || UserContentComponent)(); };
UserContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserContentComponent, selectors: [["app-user-content"]], decls: 25, vars: 3, consts: [[1, "content-wrapper"], [2, "text-align", "center", "color", "rgba(0, 0, 0, 0.589)", "margin-bottom", "50px"], [2, "color", "#007bff"], [1, "card"], [1, "column_one"], [1, "text"], [2, "white-space", "pre", "font-size", "1.1rem", "color", "#007bff"], [1, "line"], [1, "fas", "fa-phone", "fa-lg"], [1, "title"], [1, "column_two"], ["onload", "if(event.target.naturalWidth<150)event.target.src='https://previews.123rf.com/images/diddleman/diddleman1204/diddleman120400002/13058158-no-user-profile-picture-hand-drawn--Stock-Vector-image.jpg'", 3, "src"]], template: function UserContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ", dear user!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "You are awesome.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ab, aperiam excepturi! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "No phone number yet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Powerful user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n.column_one[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.column_two[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #ffffff;\n  height: 300px;\n  width: 500px;\n  overflow: hidden;\n  transition-duration: 2s;\n  border-radius: 5px;\n  cursor: pointer;\n  box-shadow: 0 0 20px gray;\n  transition: 0.4s;\n  transform: translate(10px, 10px);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translate(-10px, -10px);\n  box-shadow: 20px 20px 20px gray;\n}\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 8px solid white;\n  z-index: 100;\n  height: 480px;\n  widows: 480px;\n  border-radius: 240px;\n  margin-top: -420px;\n  margin-left: 270px;\n  transition-duration: 1.5s;\n  right: 0px;\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  margin-left: 200px;\n}\n.text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  margin-left: 15px;\n  margin-top: 30px;\n}\n.text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 200;\n}\n.text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.line[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  width: 220px;\n  margin-bottom: 15px;\n  border-radius: 1px;\n}\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 3px;\n  color: grey;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  background-color: rgba(128, 128, 128, 0.164);\n  color: #00000081;\n  font-size: 25px;\n  padding-top: 5px;\n  padding-left: 20px;\n  height: 50px;\n  width: 400px;\n  margin-top: 60px;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  min-height: 70vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jb250ZW50L0Q6XFxzc2QtcHJvamVjdHNcXHdlYi1wcm9qZWN0c1xcZmlyZWJhc2UtYXV0aC9zcmNcXGFwcFxcdXNlci1jb250ZW50XFx1c2VyLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXItY29udGVudC91c2VyLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMEVBQUE7QUFFUjtFQUNJLFlBQUE7QUNBSjtBREVBO0VBQ0ksWUFBQTtBQ0NKO0FERUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDQ0o7QURBSTtFQUNJLGtDQUFBO0VBQ0EsK0JBQUE7QUNFUjtBREVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUE7RUFDSSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7QUNDSjtBREVBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxtQkFBQTtBQ0NKO0FERUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNDSjtBREVBO0VBQ0ksd0VBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyLWNvbnRlbnQvdXNlci1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uY29sdW1uX29uZXtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG4uY29sdW1uX3R3b3tcclxuICAgIHdpZHRoOjI1MHB4O1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDo1MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggZ3JheTtcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsMTBweCk7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LC0xMHB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAyMHB4IDIwcHggMjBweCBncmF5O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZCBpbWd7XHJcbiAgICBib3JkZXI6IDhweCBzb2xpZCB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGhlaWdodDogNDgwcHg7XHJcbiAgICB3aWRvd3M6IDQ4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOi00MjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNzBweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgaW1ne1xyXG4gICAgbWFyZ2luLWxlZnQ6MjAwcHg7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4udGV4dCBoM3tcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi50ZXh0IHNwYW57XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ubGluZXtcclxuICAgIGJvcmRlcjoxcHggc29saWQgZ3JheTtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjFweDtcclxufVxyXG5cclxuLnRleHQgcHtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG5cclxuLnRleHQgaXtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE2NCk7XHJcbiAgICBjb2xvcjogIzAwMDAwMDgxO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDo0MDBweDtcclxuICAgIG1hcmdpbi10b3A6NjBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcbi5jb2x1bW5fb25lIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY29sdW1uX3R3byB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCBncmF5O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAxMHB4KTtcbn1cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC0xMHB4KTtcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IDIwcHggZ3JheTtcbn1cblxuLmNhcmQgaW1nIHtcbiAgYm9yZGVyOiA4cHggc29saWQgd2hpdGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgaGVpZ2h0OiA0ODBweDtcbiAgd2lkb3dzOiA0ODBweDtcbiAgYm9yZGVyLXJhZGl1czogMjQwcHg7XG4gIG1hcmdpbi10b3A6IC00MjBweDtcbiAgbWFyZ2luLWxlZnQ6IDI3MHB4O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICByaWdodDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FyZDpob3ZlciBpbWcge1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udGV4dCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi50ZXh0IHNwYW4ge1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ubGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIHdpZHRoOiAyMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xufVxuXG4udGV4dCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRleHQgaSB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTY0KTtcbiAgY29sb3I6ICMwMDAwMDA4MTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-content',
                templateUrl: './user-content.component.html',
                styleUrls: ['./user-content.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

// Add the Firebase products that you want to use


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuneDZjAGrPnbEjGjWFONZfTVzFVPioiY",
    authDomain: "dev-incubator.firebaseapp.com",
    databaseURL: "https://dev-incubator.firebaseio.com",
    projectId: "dev-incubator",
    storageBucket: "dev-incubator.appspot.com",
    messagingSenderId: "927467482341",
    appId: "1:927467482341:web:657a3d87fb8e63f5b4f80c"
};
// Initialize Firebase
firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](firebaseConfig);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["enableProdMode"])();
}
//init dom on firebase loading
let once = true;
firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().onAuthStateChanged(() => {
    if (once) {
        once = false;
        document.querySelector('.connectingToFirebase').remove();
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"])
            .catch(err => console.error(err));
    }
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ssd-projects\web-projects\firebase-auth\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map