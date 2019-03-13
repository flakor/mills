webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar navbar-light\" style=\"background-color: #E6E6E6;\">\n\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n     <span class=\"navbar-toggler-icon\"></span>\n   </button>\n<a class=\"navbar-brand\" routerLink=\"/\">Home Tasks</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" *ngIf=\"!auth.isLoggedIn()\" routerLink=\"/login\">Sign in</a>\n      <a class=\"nav-item nav-link\" *ngIf=\"auth.isLoggedIn()\" routerLink=\"/profile\"><fa name=\"user\"></fa> {{ auth.getUserDetails()?.name }}</a>\n    </div>\n    <div class=\"navbar-nav ml-auto\">\n      <!-- <a class=\"nav-item nav-link\" *ngIf=\"auth.isLoggedIn()\" (click)=\"auth.logout()\"><fa name=\"sign-out\"></fa>Logout</a> -->\n      <a class=\"nav-item nav-link\" *ngIf=\"auth.isLoggedIn()\" (click)=\"auth.logout()\"><fa name=\"sign-out\"></fa>Logout</a>\n    </div>\n  </div>\n</nav>\n      <router-outlet></router-outlet>\n\n<footer class=\"footer\">\n    <div class=\"container\">\n        <p class=\"text-muted\">&copy; Copyright 2018 | Condor Code factory</p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toverux_ngx_sweetalert2__ = __webpack_require__("../../../../@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/components/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_minings_minings_component__ = __webpack_require__("../../../../../src/app/components/minings/minings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_mining_service__ = __webpack_require__("../../../../../src/app/services/mining.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuardService */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_minings_minings_component__["a" /* MiningsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__toverux_ngx_sweetalert2__["a" /* SweetAlert2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__toverux_ngx_sweetalert2__["a" /* SweetAlert2Module */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_7_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbCollapseModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_21__common_toastr_service__["a" /* ToastrService */],
                __WEBPACK_IMPORTED_MODULE_18__services_mining_service__["a" /* MiningService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* HashLocationStrategy */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/toastr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToastrService = (function () {
    function ToastrService() {
    }
    ToastrService.prototype.success = function (message, title) {
        toastr.success(message, title);
    };
    ToastrService.prototype.info = function (message, title) {
        toastr.info(message, title);
    };
    ToastrService.prototype.warning = function (message, title) {
        toastr.warning(message, title);
    };
    ToastrService.prototype.error = function (message, title) {
        toastr.error(message, title);
    };
    ToastrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ToastrService);
    return ToastrService;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card m-3\">\n  <div class=\"card-body\">\n\n  <h1>Hello there</h1>\n\n  <p>Won't you please </p>\n  <!-- <p>Won't you please <a routerLink=\"/login\">sign in</a></p> -->\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card m-3\">\n  <div class=\"card-body\">\n\n\n\n      <h1 class=\"form-signin-heading\">Sign in</h1>\n      <p class=\"lead\">Not a member? Please instead.</p>\n      <!-- <p class=\"lead\">Not a member? Please <a routerLink=\"/register\">register</a> instead.</p> -->\n      <form (submit)=\"login()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Sign in!</button>\n      </form>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(auth, router, toastr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            _this.toastr.success('Login successful.');
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
            _this.toastr.error(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/minings/minings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  max-width: 960px;\n}\n\n.border-top { border-top: 1px solid #e5e5e5; }\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\n.border-top-gray { border-top-color: #adb5bd; }\n\n.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\n\n.lh-condensed { line-height: 1.25; }\n\n.active {}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/minings/minings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h4 class=\"mb-3\">Vista Minera</h4>\n    <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-success progress-bar-striped active\" role=\"progressbar\"\n        aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:40%\">\n          40% Complete (success)\n        </div>\n      </div>\n\n\n\n    <br>\n    <!--  modal bootstrap-->\n    <!-- Button trigger modal -->\n        <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" data-toggle=\"modal\" data-target=\"#modalAdd\" >\n          <i class=\"fa fa-plus\"></i>\n        </button>\n\n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"modalAdd\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"addModalLabel\">Add Mining View</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n                <form class=\"needs-validation\" (submit)=\"addMining($event)\" novalidate>\n              <div class=\"modal-body\">\n                <div class=\"col-md-12 order-md-1\">\n                          <h4 class=\"mb-3\">Vista Minera</h4>\n\n                  <div class=\"input-group\" class=\"row\">\n\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"name\">Minera</label>\n                        <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"name\" placeholder=\"Ex Juan Perez Codelco\" required>\n                        <div class=\"invalid-feedback\">\n                          Valid Minera is required.\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"picture\">Picture</label>\n                        <input type=\"text\" name=\"picture\" id=\"picture\" [(ngModel)]=\"picture\" class=\"form-control\" placeholder=\"Add A Picture\" required>\n                        <div class=\"invalid-feedback\">\n                          Valid Picture is required.\n                        </div>\n                      </div>\n\n                      <div class=\"col-md-6 mb-3\">\n                        <label for=\"category\">Minera</label>\n                        <select class=\"custom-select d-block w-100\" name=\"category\" id=\"category\" [(ngModel)]=\"category\" required>\n                          <option value=\"\" >Choose...</option>\n                          <option>codelco</option>\n                          <option>barrick</option>\n                          <option>esperaza</option>\n                        </select>\n                        <div class=\"invalid-feedback\">\n                          Please select a valid minera.\n                        </div>\n                      </div>\n\n                        <div class=\"col-md-6 mb-3\">\n                          <label for=\"price\">Precio</label>\n                          <input type=\"number\" name=\"price\" id=\"price\" [(ngModel)]=\"price\" class=\"form-control\" placeholder=\"$\" required>\n                          <div class=\"invalid-feedback\">\n                            Please select a valid Price.\n                          </div>\n                        </div>\n\n\n                        <div class=\"col-md-12 mb-3\">\n                          <label for=\"description\">Description</label>\n                          <input type=\"text\" class=\"form-control\" name=\"description\" id=\"description\" [(ngModel)]=\"description\" placeholder=\"Description\" required>\n                          <div class=\"invalid-feedback\">\n                            Description code required.\n                          </div>\n                        </div>\n\n\n                  </div>\n\n\n              </div>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" #btnClose class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"submit\" class=\"btn btn-primary\" >Save changes</button>\n              </div>\n                </form>\n            </div>\n          </div>\n        </div>\n    <!--  end modal bootstrap-->\n\n\n\n<table class=\"table text-center table-hover\">\n  <thead>\n    <tr>\n      <th>name</th>\n      <th>picture</th>\n      <th>price</th>\n      <th>category</th>\n      <th>description</th>\n      <th>Operations</th>\n    </tr>\n  </thead>\n  <tbody>\n    <div  class=\"loading\" *ngIf=\"loading\">\n        <img src=\"../../assets/img/loader.gif\">\n\n    </div>\n    <tr *ngFor=\"let mining of minings\">\n\n      <td >{{ mining.name }}</td>\n      <td>{{ mining.picture }}</td>\n      <td>{{ mining.price }}</td>\n      <td>{{ mining.category }}</td>\n      <td>{{ mining.description }}</td>\n      <td>\n        <swal\n          #deleteSwal\n          title=\"Delete {{ mining.name }}?\"\n          text=\"Swal confirm\"\n          type=\"warning\"\n          [showCancelButton]=\"true\"\n          [focusCancel]=\"true\"\n          (confirm)=\"deleteMining(mining._id)\">\n        </swal>\n        <button class=\"btn btn-danger\" (click)=\"deleteSwal.show()\">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n\n\n        <!--  modal bootstrap-->\n        <!-- Button trigger modal -->\n            <button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" [attr.data-target]=\"'#' + mining._id\" >\n              <i class=\"fa fa-edit\"></i>\n            </button>\n\n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"{{ mining._id}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"editModalLabel\">Edit {{ mining.name }}</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <!-- <form class=\"needs-validation\"  novalidate> -->\n                      <div class=\"input-group\" class=\"row\">\n\n                          <div class=\"col-md-6 mb-3\">\n                            <label for=\"name\">Minera</label>\n                            <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"name\" placeholder=\"{{ mining.name }}\" required>\n                            <div class=\"invalid-feedback\">\n                              Valid Minera is required.\n                            </div>\n                          </div>\n\n                          <div class=\"col-md-6 mb-3\">\n                            <label for=\"picture\">Picture</label>\n                            <input type=\"text\" name=\"picture\" id=\"picture\" [(ngModel)]=\"picture\" class=\"form-control\" placeholder=\"{{ mining.picture }}\" required>\n                            <div class=\"invalid-feedback\">\n                              Valid Picture is required.\n                            </div>\n                          </div>\n\n                          <div class=\"col-md-6 mb-3\">\n                            <label for=\"category\">Minera</label>\n                            <select class=\"custom-select d-block w-100\" name=\"category\" id=\"category\" [(ngModel)]=\"category\" required>\n                              <option value=\"\" >Choose...</option>\n                              <option>codelco</option>\n                              <option>barrick</option>\n                              <option>esperaza</option>\n                            </select>\n                            <div class=\"invalid-feedback\">\n                              Please select a valid minera.\n                            </div>\n                          </div>\n\n                            <div class=\"col-md-6 mb-3\">\n                              <label for=\"price\">Precio</label>\n                              <input type=\"number\" name=\"price\" id=\"price\" [(ngModel)]=\"price\" class=\"form-control\" placeholder=\"{{ mining.price }}\" required>\n                              <div class=\"invalid-feedback\">\n                                Please select a valid Price.\n                              </div>\n                            </div>\n\n\n                            <div class=\"col-md-12 mb-3\">\n                              <label for=\"description\">Description</label>\n                              <input type=\"text\" class=\"form-control\" name=\"description\" id=\"description\" [(ngModel)]=\"description\" placeholder=\"{{ mining.description }}\" required>\n                              <div class=\"invalid-feedback\">\n                                Description code required.\n                              </div>\n                            </div>\n\n\n                      </div>\n\n                    <!-- </form> -->\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" #btnCloseEdit class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateMining(mining)\">Save changes</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n        <!--  end modal bootstrap-->\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/minings/minings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiningsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mining_service__ = __webpack_require__("../../../../../src/app/services/mining.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MiningsComponent = (function () {
    function MiningsComponent(miningService) {
        var _this = this;
        this.miningService = miningService;
        this.loading = true;
        this.miningService.getMinings()
            .subscribe(function (minings) {
            if (!minings) {
                console.log('error server');
            }
            else {
                _this.loading = false;
                console.log(minings);
                _this.minings = minings;
            }
        });
    }
    MiningsComponent.prototype.ngOnInit = function () {
    };
    MiningsComponent.prototype.addMining = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.name);
        console.log(this.picture);
        console.log(this.price);
        console.log(this.category);
        console.log(this.description);
        var newMining = {
            name: this.name,
            picture: this.picture,
            price: this.price,
            category: this.category,
            description: this.description
        };
        this.miningService.addMining(newMining)
            .subscribe(function (mining) {
            _this.minings.push(mining);
            _this.name = '';
            _this.picture = '';
            _this.price = '';
            _this.category = '';
            _this.description = '';
            _this.btnClose.nativeElement.click();
        });
    };
    MiningsComponent.prototype.deleteMining = function (id) {
        if (!id == false) {
            var minings_1 = this.minings;
            this.miningService.deleteMining(id)
                .subscribe(function (data) {
                // console.log(data)
                // console.log(data.n);
                if (data.n == 1) {
                    for (var i = 0; i < minings_1.length; i++) {
                        if (minings_1[i]._id == id) {
                            minings_1.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    MiningsComponent.prototype.updateMining = function (mining) {
        var _this = this;
        var newMining = {
            _id: mining._id,
            name: this.name,
            picture: this.picture,
            price: this.price,
            category: this.category,
            description: this.description
        };
        this.miningService.updateMining(newMining)
            .subscribe(function (res) {
            console.log(res);
            _this.name = mining.name;
            _this.picture = mining.picture;
            _this.price = mining.price;
            _this.category = mining.category;
            _this.description = mining.description;
            _this.btnCloseEdit.nativeElement.click();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('btnClose'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MiningsComponent.prototype, "btnClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('btnCloseEdit'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MiningsComponent.prototype, "btnCloseEdit", void 0);
    MiningsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-minings',
            template: __webpack_require__("../../../../../src/app/components/minings/minings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/minings/minings.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_mining_service__["a" /* MiningService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_mining_service__["a" /* MiningService */]])
    ], MiningsComponent);
    return MiningsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card m-5\">\n  <div class=\"card-body\">\n\n\n\n      <h1 class=\"form-signin-heading\">Your profile Tasks</h1>\n\n      <div class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <p class=\"form-control-static\">\n            <fa name=\"user\"></fa>\n              {{ details?.name }} -\n            <fa name=\"envelope\"></fa>\n            {{ details?.email }}\n          </p>\n          <button type=\"button\" class=\"btn btn-success\" routerLink=\"/register\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n\n            <i class=\"fa fa-user-plus\"></i>\n            <a >register user</a>\n          </button>\n            <!-- modal -->\n          <!-- <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalLabel\">  <h1>Register</h1></h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n\n                  <p class=\"lead\">Already a member? Please  instead.</p>\n                  <form (submit)=\"register()\">\n                    <div class=\"form-group\">\n                      <label for=\"name\">Full name</label>\n                      <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter your name\" [(ngModel)]=\"credentials.name\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"email\">Email address</label>\n                      <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"password\">Password</label>\n                      <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                      <button type=\"submit\" class=\"btn btn-primary\">Register!</button>\n                    </div>\n                  </form>\n\n                </div>\n\n              </div>\n            </div>\n          </div> -->\n          <!-- fin modal -->\n          <p class=\"form-control-static\"></p>\n        </div>\n      </div>\n\n\n      <app-minings></app-minings>\n      <br>\n      <app-tasks></app-tasks>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            name: '',
            password: ''
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent.prototype.register = function () {
        var _this = this;
        this.auth.register(this.credentials).subscribe(function () {
            _this.btnClose.nativeElement.click();
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('btnClose'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ProfileComponent.prototype, "btnClose", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card m-3\">\n  <div class=\"card-body\"> -->\n\n    <!-- Button trigger modal -->\n    <!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n      Launch demo modal\n    </button> -->\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">  <h1>Register</h1></h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n\n            <p class=\"lead\">Already a member? Please  instead.</p>\n            <form (submit)=\"register()\">\n              <div class=\"form-group\">\n                <label for=\"name\">Full name</label>\n                <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter your name\" [(ngModel)]=\"credentials.name\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Email address</label>\n                <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"submit\" class=\"btn btn-primary\">Register!</button>\n              </div>\n            </form>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n      <!-- <h1>Register</h1>\n      <p class=\"lead\">Already a member? Please <a routerLink=\"/login\">log in</a> instead.</p>\n      <form (submit)=\"register()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter your name\" [(ngModel)]=\"credentials.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Register!</button>\n      </form> -->\n\n  <!-- </div>\n\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            name: '',
            password: ''
        };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {display:none;}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <h4 class=\"mb-3\">Vista Task</h4>\n    <form (submit)=\"addTask($event)\">\n      <div class=\"input-group\">\n          <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" placeholder=\"Add A Task\">\n          <span class=\"input-group-addon\">\n              <button type=\"submit\" class=\"btn btn-primary\">\n                  Add A task\n                </button>\n          </span>\n      </div>\n      </form>\n\n\n<table class=\"table text-center table-hover\">\n  <thead>\n    <tr>\n      <th>Status</th>\n      <th>Title</th>\n      <th>Operations</th>\n    </tr>\n  </thead>\n  <tbody>\n\n    <div  class=\"loading\" *ngIf=\"loading\">\n        <img src=\"../../assets/img/loader.gif\">\n\n    </div>\n    <tr *ngFor=\"let task of tasks\">\n      <td>\n\n        <label class=\"switch\">\n          <input type=\"checkbox\" [checked]=\"task.isDone\" (click)=\"updateStatus(task)\">\n          <span class=\"slider round\"></span>\n        </label>\n\n      </td>\n      <td>{{ task.title }}</td>\n      <td>\n        <swal\n          #deleteSwal\n          title=\"Delete {{ task.title }}?\"\n          text=\"Swal confirm\"\n          type=\"warning\"\n          [showCancelButton]=\"true\"\n          [focusCancel]=\"true\"\n          (confirm)=\"deleteTask(task._id)\">\n        </swal>\n        <button class=\"btn btn-danger\" (click)=\"deleteSwal.show()\">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksComponent = (function () {
    function TasksComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.loading = true;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            if (!tasks) {
                console.log('error server');
            }
            else {
                _this.loading = false;
                console.log(tasks);
                _this.tasks = tasks;
            }
        });
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        };
        this.taskService.addTask(newTask)
            .subscribe(function (task) {
            _this.tasks.push(task);
            _this.title = '';
        });
    };
    TasksComponent.prototype.deleteTask = function (id) {
        if (!id == false) {
            var tasks_1 = this.tasks;
            this.taskService.deleteTask(id)
                .subscribe(function (data) {
                console.log(data);
                console.log(data.n);
                if (data.n == 1) {
                    for (var i = 0; i < tasks_1.length; i++) {
                        if (tasks_1[i]._id == id) {
                            tasks_1.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    TasksComponent.prototype.updateStatus = function (task) {
        var newTask = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone
        };
        this.taskService.updateTask(newTask)
            .subscribe(function (res) {
            task.isDone = !task.isDone;
        });
    };
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tasks',
            template: __webpack_require__("../../../../../src/app/components/tasks/tasks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tasks/tasks.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.domain = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].domain;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post(this.domain + "/api/" + type, user);
        }
        else {
            base = this.http.get(this.domain + "/api/" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/mining.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiningService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MiningService = (function () {
    function MiningService(http) {
        this.http = http;
        this.domain = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].domain;
    }
    MiningService.prototype.getMinings = function () {
        return this.http.get(this.domain + "/api/mining")
            .map(function (res) { return res; });
    };
    MiningService.prototype.addMining = function (newMining) {
        return this.http.post(this.domain + "/api/mining", newMining)
            .map(function (res) { return res; });
    };
    MiningService.prototype.deleteMining = function (id) {
        return this.http.delete(this.domain + "/api/mining/" + id)
            .map(function (res) { return res; });
    };
    MiningService.prototype.updateMining = function (newMining) {
        return this.http.put(this.domain + "/api/mining/" + newMining._id, newMining)
            .map(function (res) { return res; });
    };
    MiningService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MiningService);
    return MiningService;
}());



/***/ }),

/***/ "../../../../../src/app/services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// console.log(environment.domain);
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.domain = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].domain;
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.domain + "/api/tasks")
            .map(function (res) { return res; });
    };
    TaskService.prototype.addTask = function (newTask) {
        return this.http.post(this.domain + "/api/task", newTask)
            .map(function (res) { return res; });
    };
    TaskService.prototype.deleteTask = function (id) {
        return this.http.delete(this.domain + "/api/task/" + id)
            .map(function (res) { return res; });
    };
    TaskService.prototype.updateTask = function (newTask) {
        return this.http.put(this.domain + "/api/task/" + newTask._id, newTask)
            .map(function (res) { return res; });
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    domain: 'http://localhost:3000'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map