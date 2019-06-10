(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helpers/authorization-interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/_helpers/authorization-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthorizationInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationInterceptor", function() { return AuthorizationInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_storage_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/storage.constants */ "./src/app/constants/storage.constants.ts");



var AuthorizationInterceptor = /** @class */ (function () {
    function AuthorizationInterceptor() {
    }
    AuthorizationInterceptor.prototype.intercept = function (request, next) {
        var tokenFromStorage = localStorage.getItem(_constants_storage_constants__WEBPACK_IMPORTED_MODULE_2__["TokenStorageKey"]);
        if (tokenFromStorage) {
            request = request.clone({
                setHeaders: {
                    Authorization: tokenFromStorage
                }
            });
        }
        return next.handle(request);
    };
    AuthorizationInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthorizationInterceptor);
    return AuthorizationInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/error-handler.ts":
/*!*******************************************!*\
  !*** ./src/app/_helpers/error-handler.ts ***!
  \*******************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authorization.service */ "./src/app/services/authorization.service.ts");





var ErrorHandlerInterceptor = /** @class */ (function () {
    function ErrorHandlerInterceptor(_authorizationService) {
        this._authorizationService = _authorizationService;
    }
    ErrorHandlerInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 401) {
                _this._authorizationService.logout();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorHandlerInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authorization_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationService"]])
    ], ErrorHandlerInterceptor);
    return ErrorHandlerInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/index.js":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.js ***!
  \***********************************/
/*! exports provided: AuthorizationInterceptor, ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authorization_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorization-interceptor */ "./src/app/_helpers/authorization-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthorizationInterceptor", function() { return _authorization_interceptor__WEBPACK_IMPORTED_MODULE_0__["AuthorizationInterceptor"]; });

/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handler */ "./src/app/_helpers/error-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return _error_handler__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlerInterceptor"]; });




/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/app-routing.module */ "./src/app/modules/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/login-page/login-page.component */ "./src/app/components/pages/login-page/login-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/sign-up/sign-up.component */ "./src/app/components/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _components_pages_books_books_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/books/books.component */ "./src/app/components/pages/books/books.component.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.js");
/* harmony import */ var _components_modal_widows_book_modal_book_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/modal-widows/book-modal/book-modal.component */ "./src/app/components/modal-widows/book-modal/book-modal.component.ts");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/material-module */ "./src/app/modules/material-module.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"],
                _components_pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"],
                _components_pages_books_books_component__WEBPACK_IMPORTED_MODULE_10__["BooksComponent"],
                _components_modal_widows_book_modal_book_modal_component__WEBPACK_IMPORTED_MODULE_12__["BookModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
            ],
            entryComponents: [
                _components_modal_widows_book_modal_book_modal_component__WEBPACK_IMPORTED_MODULE_12__["BookModalComponent"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_11__["AuthorizationInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/modal-widows/book-modal/book-modal.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/modal-widows/book-modal/book-modal.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  margin-bottom: 15px!important;\r\n  height: 67px;\r\n}\r\n\r\n.bottom {\r\n  height: 55px;\r\n}\r\n\r\n.buttons {\r\n  padding-right: 15px!important;\r\n}\r\n\r\n.left-btn {\r\n  margin-right: 5px;\r\n}\r\n\r\n.material-icons {\r\n  font-size: 60px; \r\n}\r\n\r\n.button-height {\r\n  height: 38px;\r\n}\r\n\r\n.with-scroll {\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  height: auto;\r\n  max-height: calc(90vh - 185px);\r\n}\r\n\r\nmat-datepicker-toggle {\r\n  right: 4px;\r\n}\r\n\r\n.border {\r\n  border: 1px solid black;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.red {\r\n  color: red!important;\r\n}\r\n\r\n.green {\r\n  color: green!important;\r\n}\r\n\r\n.black {\r\n  color: rgba(0,0,0,.87)!important;\r\n}\r\n\r\n.icon-width {\r\n  width: 100px!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC13aWRvd3MvYm9vay1tb2RhbC9ib29rLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLXdpZG93cy9ib29rLW1vZGFsL2Jvb2stbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNjdweDtcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG59XHJcbiAgXHJcbi5idXR0b25zIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4IWltcG9ydGFudDtcclxufVxyXG4gIFxyXG4ubGVmdC1idG4ge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiAgXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgZm9udC1zaXplOiA2MHB4OyBcclxufVxyXG5cclxuLmJ1dHRvbi1oZWlnaHQge1xyXG4gIGhlaWdodDogMzhweDtcclxufVxyXG5cclxuLndpdGgtc2Nyb2xsIHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogY2FsYyg5MHZoIC0gMTg1cHgpO1xyXG59XHJcblxyXG5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xyXG4gIHJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgY29sb3I6IHJlZCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgY29sb3I6IGdyZWVuIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJsYWNrIHtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuODcpIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb24td2lkdGgge1xyXG4gIHdpZHRoOiAxMDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/modal-widows/book-modal/book-modal.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/modal-widows/book-modal/book-modal.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-0 m-0\" [formGroup]=\"bookForm\">\n  <div class=\"col w-100\">\n    <div class=\"row w-100 p-0 m-0 text-center center header\">\n      <div class=\"col-auto text-center p-0 m-0 icon-width\">\n        <i class=\"material-icons\" *ngIf=\"displayState === displayAdding\">\n          assignment\n        </i>\n\n        <i class=\"material-icons\" *ngIf=\"displayState !== displayAdding\">\n          edit\n        </i>\n      </div>\n      <div class=\"col-auto h-100 p-0 m-0\">\n        <div class=\"row w-100 h-100 p-0 m-0 align-items-center justify-content-between\">\n          <div class=\"col-auto w-100 p-0 m-0\" *ngIf=\"displayState === displayAdding\">\n            <h1 mat-dialog-title class=\"m-0\">\n              Adding Book\n            </h1>\n          </div>\n          <div class=\"col-auto w-100 p-0 m-0\" *ngIf=\"displayState === displayEditing\">\n            <h1 mat-dialog-title class=\"m-0\">\n              Editing Book\n            </h1>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row w-100 p-0 m-0 text-center center\">\n      <div class=\"col-6 p-3\">\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\n          <mat-label class=\"label\">Title</mat-label>\n          <input type=\"text\" matInput formControlName=\"title\" autocomplete=\"off\" placeholder=\"Enter title\" required>\n          <mat-error *ngIf=\"bookForm.controls['title'].touched\n                && bookForm.controls['title'].invalid\">\n            <strong>This field is required and cannot be null</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"w-100\"></div>\n      <div class=\"col-6 p-3\">\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\n          <mat-label class=\"label\">Author</mat-label>\n          <input type=\"text\" matInput formControlName=\"author\" autocomplete=\"off\" placeholder=\"Enter author\" required>\n          <mat-error *ngIf=\"bookForm.controls['author'].touched\n                  && bookForm.controls['author'].invalid\">\n            <strong>This field is required and cannot be null</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"col-6 p-3\">\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\n          <mat-label class=\"label\">Price</mat-label>\n          <input type=\"number\" matInput step=\"any\" formControlName=\"price\" autocomplete=\"off\" placeholder=\"Enter price\"\n            required>\n          <mat-error *ngIf=\"bookForm.controls['price'].touched && bookForm.controls['price'].invalid\">\n            <strong>This field is required and cannot be null</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"w-100\"></div>\n      <div class=\"row w-100 p-0 m-0 text-center center\">\n        <div class=\"col-12 p-3\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label class=\"label\">Description</mat-label>\n            <textarea type=\"text\" rows=\"6\" matInput class=\"form-control scroll-block black\"\n              formControlName=\"description\" placeholder=\"Enter description\" required></textarea>\n            <mat-error *ngIf=\"bookForm.controls['description'].invalid && bookForm.controls['description'].touched\">\n              <strong>This field is required and cannot be null</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row w-100 p-0 m-0 text-center justify-content-end\">\n      <div class=\"col-auto m-0 p-2\" *ngIf=\"displayState == displayEditing\">\n        <button type=\"button\" class=\"btn btn-outline-success left-btn align-items-center\"\n          [disabled]=\"bookForm.invalid || isRequesting\" (click)=\"save()\">\n          <span *ngIf=\"isRequesting\" class=\"spinner-border spinner-border-sm\"></span>\n          Save\n        </button>\n        <button type=\"button\" class=\"btn btn-outline-danger left-btn align-items-center\"\n          [disabled]=\"isDeleting\" (click)=\"delete()\">\n          <span *ngIf=\"isDeleting\" class=\"spinner-border spinner-border-sm\"></span>\n          Delete\n        </button>\n      </div>\n\n      <div class=\"col-auto m-0 p-2\" *ngIf=\"displayState == displayAdding\">\n        <button type=\"button\" class=\"btn btn-outline-success left-btn align-items-center\"\n          [disabled]=\"bookForm.invalid || isRequesting\" (click)=\"add()\">\n          <span *ngIf=\"isRequesting\" class=\"spinner-border spinner-border-sm\"></span>\n          Create\n        </button>\n      </div>\n\n      <div class=\"col-auto m-0 p-2\">\n        <button type=\"button\" class=\"btn btn-outline-secondary left-btn align-items-center\" [mat-dialog-close]=\"\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/modal-widows/book-modal/book-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/modal-widows/book-modal/book-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: BookModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModalComponent", function() { return BookModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_constants_object_state_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/object-state.constants */ "./src/app/constants/object-state.constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_types_book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/types/book */ "./src/app/types/book.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");







var BookModalComponent = /** @class */ (function () {
    function BookModalComponent(_bookService, dialogRef, data) {
        this._bookService = _bookService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayEditing = src_app_constants_object_state_constants__WEBPACK_IMPORTED_MODULE_2__["ObjectState"].Edit;
        this.displayAdding = src_app_constants_object_state_constants__WEBPACK_IMPORTED_MODULE_2__["ObjectState"].Add;
        this.isRequesting = false;
        dialogRef.disableClose = false;
        console.log(data.book);
        this.book = data.book;
        this.displayState = data.action;
        this.initializeForm();
    }
    BookModalComponent.prototype.ngOnInit = function () {
    };
    BookModalComponent.prototype.initializeForm = function () {
        this.bookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.book.title || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.book.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'author': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.book.author || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.book.price || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
    };
    BookModalComponent.prototype.save = function () {
        var _this = this;
        var book = this.getBookFromBookForm();
        console.log(book);
        this._bookService.updateBook(book).subscribe(function (res) {
            console.log(res);
            _this.closeModalWidow(_this.data);
        }, function (error) {
            console.error(error);
        });
    };
    BookModalComponent.prototype.closeModalWidow = function (data) {
        this.dialogRef.close(data);
    };
    BookModalComponent.prototype.add = function () {
        var _this = this;
        var book = this.getBookFromBookForm();
        console.log(book);
        this._bookService.addBook(book).subscribe(function (res) {
            console.log(res);
            _this.closeModalWidow(_this.data);
        }, function (error) {
            console.error(error);
        });
    };
    BookModalComponent.prototype.delete = function () {
        var _this = this;
        this._bookService.deleteBook(this.data.book._id).subscribe(function (res) {
            console.log(res);
            _this.closeModalWidow(_this.data);
        }, function (error) {
            console.error(error);
        });
    };
    BookModalComponent.prototype.getBookFromBookForm = function () {
        var outputBook = new src_app_types_book__WEBPACK_IMPORTED_MODULE_4__["Book"]();
        outputBook = this.bookForm.value;
        outputBook.id = this.data.book._id;
        return outputBook;
    };
    BookModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-modal',
            template: __webpack_require__(/*! ./book-modal.component.html */ "./src/app/components/modal-widows/book-modal/book-modal.component.html"),
            styles: [__webpack_require__(/*! ./book-modal.component.css */ "./src/app/components/modal-widows/book-modal/book-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_book_service__WEBPACK_IMPORTED_MODULE_6__["BookService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], BookModalComponent);
    return BookModalComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/books/books.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/pages/books/books.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/pages/books/books.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/books/books.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-between align-items-center header\">\n    <div class=\"col\">\n      <h1>Book List <button class=\"btn\" (click)=\"create()\"><i class=\"material-icons\">\n            add\n          </i>\n        </button></h1>\n    </div>\n    <div class=\"col-auto\">\n      <button class=\"btn btn-success\" (click)=\"logout()\">Logout</button>\n    </div>\n  </div>\n  <div class=\"row body\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Title</th>\n          <th>Author</th>\n          <th>Price</th>\n          <th>description</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let book of books\">\n          <td>{{ book.title }}</td>\n          <td>{{ book.author }}</td>\n          <td>{{ book.price }}</td>\n          <td>{{ book.description }}</td>\n          <td>\n            <button class=\"btn\" (click)=\"edit(book)\">\n              <i class=\"material-icons\">\n                edit\n              </i>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/books/books.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/books/books.component.ts ***!
  \***********************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var src_app_types_book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/types/book */ "./src/app/types/book.ts");
/* harmony import */ var src_app_constants_object_state_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants/object-state.constants */ "./src/app/constants/object-state.constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_widows_book_modal_book_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modal-widows/book-modal/book-modal.component */ "./src/app/components/modal-widows/book-modal/book-modal.component.ts");








var BooksComponent = /** @class */ (function () {
    function BooksComponent(bookService, router, bookModal) {
        this.bookService = bookService;
        this.router = router;
        this.bookModal = bookModal;
        this.getBooks();
    }
    BooksComponent.prototype.ngOnInit = function () { };
    BooksComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (data) {
            _this.books = data;
            console.log(_this.books);
        }, function (err) {
            if (err.status === 401) {
                _this.router.navigate(['login']);
            }
        });
    };
    BooksComponent.prototype.logout = function () {
        localStorage.removeItem('jwtToken');
        this.router.navigate(['login']);
    };
    BooksComponent.prototype.create = function () {
        this.bookAction = src_app_constants_object_state_constants__WEBPACK_IMPORTED_MODULE_5__["ObjectState"].Add;
        this.selectedBook = new src_app_types_book__WEBPACK_IMPORTED_MODULE_4__["Book"]();
        console.log(this.selectedBook);
        this.openModalWidow();
    };
    BooksComponent.prototype.edit = function (book) {
        this.bookAction = src_app_constants_object_state_constants__WEBPACK_IMPORTED_MODULE_5__["ObjectState"].Edit;
        this.selectedBook = book;
        this.openModalWidow();
    };
    BooksComponent.prototype.openModalWidow = function () {
        var _this = this;
        var dialogRef = this.bookModal.open(_modal_widows_book_modal_book_modal_component__WEBPACK_IMPORTED_MODULE_7__["BookModalComponent"], {
            width: '70vw',
            height: '70vh',
            disableClose: true,
            autoFocus: false,
            data: {
                book: this.selectedBook,
                action: this.bookAction
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                _this.getBooks();
            }
        });
    };
    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/components/pages/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/components/pages/books/books.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/login-page/login-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/pages/login-page/login-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #eee;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: normal;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  height: auto;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.form-signin p {\r\n  margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUNBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBRUosc0JBQXNCO0VBQzlCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tc2lnbmluLWhlYWRpbmcsXHJcbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuLmZvcm0tc2lnbmluIHAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pages/login-page/login-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/login-page/login-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form class=\"form-signin\" (submit)=\"login()\" #loginForm=\"ngForm\">\r\n    <div class=\"alert alert-warning alert-dismissible\" role=\"alert\" *ngIf=\"message !== ''\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      {{message}}\r\n    </div>\r\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\r\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n    <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" [(ngModel)]=\"loginData.username\"\r\n      name=\"username\" required />\r\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"loginData.password\" name=\"password\"\r\n      required />\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">Sign in</button>\r\n    <p>\r\n      Not a member? <a [routerLink]=\"['/sign-up']\">Signup here</a>\r\n    </p>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/pages/login-page/login-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/login-page/login-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authorization.service */ "./src/app/services/authorization.service.ts");




// import { LocaleService } from 'src/app/services/locale.service';
// import { Patterns } from 'src/app/constants/patterns';
var LoginPageComponent = /** @class */ (function () {
    // loginForm: FormGroup;
    // returnUrl: string;
    // isGetting = false;
    // error: string = null;
    function LoginPageComponent(_authorizationService, router
    // private _authorizationService: AuthorizationService,
    // private _router: Router,
    // private _route: ActivatedRoute,
    // private _formBuilder: FormBuilder
    ) {
        this._authorizationService = _authorizationService;
        this.router = router;
        this.loginData = { username: '', password: '' };
        this.message = '';
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        // this.initForm();
        // this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginPageComponent.prototype.login = function () {
        var _this = this;
        this._authorizationService.login(this.loginData.username, this.loginData.password)
            .subscribe(function (res) {
            _this.router.navigate(['books']);
        }, function (error) {
            _this.message = error.error.msg;
        });
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/components/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/components/pages/login-page/login-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
            // private _authorizationService: AuthorizationService,
            // private _router: Router,
            // private _route: ActivatedRoute,
            // private _formBuilder: FormBuilder
        ])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/sign-up/sign-up.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/pages/sign-up/sign-up.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #eee;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: normal;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  height: auto;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.form-signin p {\r\n  margin-top: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBRVosc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5mb3JtLXNpZ25pbi1oZWFkaW5nLFxyXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gcCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/pages/sign-up/sign-up.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/sign-up/sign-up.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form class=\"form-signin\" (submit)=\"signup()\" #signupForm=\"ngForm\">\r\n      <div class=\"alert alert-warning alert-dismissible\" role=\"alert\" *ngIf=\"message !== ''\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        {{message}}\r\n      </div>\r\n      <h2 class=\"form-signin-heading\">Sign Up Now</h2>\r\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" [(ngModel)]=\"signupData.username\" name=\"username\" required/>\r\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"signupData.password\" name=\"password\" required/>\r\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!signupForm.form.valid\">Sign Up</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/pages/sign-up/sign-up.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/sign-up/sign-up.component.ts ***!
  \***************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authorization.service */ "./src/app/services/authorization.service.ts");




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(_authorizationService, router) {
        this._authorizationService = _authorizationService;
        this.router = router;
        this.signupData = { username: '', password: '' };
        this.message = '';
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.signup = function () {
        var _this = this;
        this._authorizationService.signup(this.signupData.username, this.signupData.password)
            .subscribe(function (resp) {
            console.log(resp);
            _this.router.navigate(['login']);
        }, function (err) {
            _this.message = err.error.msg;
        });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/pages/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/pages/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/constants/object-state.constants.ts":
/*!*****************************************************!*\
  !*** ./src/app/constants/object-state.constants.ts ***!
  \*****************************************************/
/*! exports provided: ObjectState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectState", function() { return ObjectState; });
var ObjectState;
(function (ObjectState) {
    ObjectState[ObjectState["Edit"] = 0] = "Edit";
    ObjectState[ObjectState["Add"] = 1] = "Add";
})(ObjectState || (ObjectState = {}));


/***/ }),

/***/ "./src/app/constants/storage.constants.ts":
/*!************************************************!*\
  !*** ./src/app/constants/storage.constants.ts ***!
  \************************************************/
/*! exports provided: TokenStorageKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageKey", function() { return TokenStorageKey; });
var TokenStorageKey = 'jwtToken';


/***/ }),

/***/ "./src/app/modules/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pages/login-page/login-page.component */ "./src/app/components/pages/login-page/login-page.component.ts");
/* harmony import */ var _components_pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pages/sign-up/sign-up.component */ "./src/app/components/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _components_pages_books_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pages/books/books.component */ "./src/app/components/pages/books/books.component.ts");






var APP_ROUTES = [
    // {
    //   path: '',
    //   component: HomePageComponent,
    //   canActivate: [AuthGuard],
    //   data: {
    //     expectedRoles: [RoleNames.admin, RoleNames.manager, RoleNames.user, RoleNames.accountant]
    //   }
    // },
    { path: 'login', component: _components_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"] },
    { path: 'sign-up', component: _components_pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    {
        path: 'books',
        component: _components_pages_books_books_component__WEBPACK_IMPORTED_MODULE_5__["BooksComponent"],
        data: { title: 'Book List' }
    },
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(APP_ROUTES)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/material-module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material-module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
        this._apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appUrl;
        this.initializeHeaderDetails();
    }
    ApiService.prototype.initializeHeaderDetails = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Origin, Authorization, Content-Type, Content-Disposition, Content-Length, X-Auth-Token',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Origin': '*',
        });
        this._options = { headers: headers };
    };
    // Books----------------------------------------------------------------------------------------------------------------------
    ApiService.prototype.getBooks = function () {
        var url = this._apiUrl + "/api/book";
        return this._http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ApiService.prototype.addBook = function (book) {
        console.log(book);
        var url = this._apiUrl + "/api/book";
        return this._http.post(url, book).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ApiService.prototype.updateBook = function (book) {
        console.log(book);
        var url = this._apiUrl + "/api/book";
        return this._http.put(url, book).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ApiService.prototype.deleteBook = function (bookId) {
        var url = this._apiUrl + "/api/book/" + bookId;
        return this._http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    // Films-----------------------------------------------------------------------------------------------------------------------
    ApiService.prototype.getSelfFilms = function () {
        var url = this._apiUrl + "/api/film/self";
        return this._http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ApiService.prototype.login = function (user) {
        var url = this._apiUrl + "/api/signin";
        return this._http.post(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ApiService.prototype.signup = function (user) {
        var url = this._apiUrl + "/api/signup";
        console.log(url);
        console.log(user);
        return this._http.post(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/authorization.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/authorization.service.ts ***!
  \***************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _types_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/user */ "./src/app/types/user.ts");
/* harmony import */ var _constants_storage_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/storage.constants */ "./src/app/constants/storage.constants.ts");







var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    AuthorizationService.prototype.login = function (email, password) {
        var _this = this;
        var user = new _types_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        user.username = email;
        user.password = password;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.apiService.login(user)
                .subscribe(function (res) {
                localStorage.setItem(_constants_storage_constants__WEBPACK_IMPORTED_MODULE_6__["TokenStorageKey"], res.token);
                observer.next();
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    AuthorizationService.prototype.logout = function (returnUrl) {
        localStorage.removeItem(_constants_storage_constants__WEBPACK_IMPORTED_MODULE_6__["TokenStorageKey"]);
        this.router.navigate(['login']);
    };
    AuthorizationService.prototype.signup = function (email, password) {
        var _this = this;
        var user = new _types_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        user.username = email;
        user.password = password;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.apiService.signup(user)
                .subscribe(function (res) {
                observer.next();
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    AuthorizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthorizationService);
    return AuthorizationService;
}());



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");




var BookService = /** @class */ (function () {
    function BookService(apiService) {
        this.apiService = apiService;
    }
    BookService.prototype.getBooks = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.apiService.getBooks()
                .subscribe(function (res) {
                observer.next(res);
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    BookService.prototype.addBook = function (book) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.apiService.addBook(book)
                .subscribe(function (res) {
                observer.next(res);
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    BookService.prototype.updateBook = function (book) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.apiService.updateBook(book)
                .subscribe(function (res) {
                observer.next(res);
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    BookService.prototype.deleteBook = function (bookId) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.apiService.deleteBook(bookId)
                .subscribe(function (res) {
                observer.next(res);
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/types/book.ts":
/*!*******************************!*\
  !*** ./src/app/types/book.ts ***!
  \*******************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(obj) {
        Object.assign(this, obj ? obj : {
            id: '',
            title: '',
            author: '',
            description: '',
            price: '',
            publisher: ''
        });
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/types/user.ts":
/*!*******************************!*\
  !*** ./src/app/types/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(obj) {
        Object.assign(this, obj ? obj : {});
    }
    return User;
}());



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
var environment = {
    production: false,
    appUrl: 'http://localhost:3000',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Мои документы\GitHub\web-store\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map