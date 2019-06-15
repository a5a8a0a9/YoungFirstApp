webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/a01/a01.module": [
		158
	],
	"../pages/a02/a02.module": [
		152
	],
	"../pages/result-of-a/result-of-a.module": [
		160
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A02PageModule", function() { return A02PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__a02__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var A02PageModule = /** @class */ (function () {
    function A02PageModule() {
    }
    A02PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__a02__["a" /* A02Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__a02__["a" /* A02Page */]),
            ],
        })
    ], A02PageModule);
    return A02PageModule;
}());

//# sourceMappingURL=a02.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return A02Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_of_a_result_of_a__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var A02Page = /** @class */ (function () {
    function A02Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clicked = true;
        this.imgSrc = [];
        this.cssClass = new Array(12).fill("animated ");
        this.data = navParams.get('data');
        for (var i = 0; i < 12; i++) {
            this.imgSrc[i] = "assets/imgs/yellow.png";
        }
    }
    A02Page.prototype.cantClick = function (i) {
        if (this.clicked) {
            this.a2 = Math.floor(Math.random() * 12 + 1);
            this.cssClass[i] += "flip";
            this.imgSrc[i] = "assets/imgs/yellow" + this.a2 + ".png";
            this.clicked = false;
            this.data[1].num = this.a2;
            this.data[1].img = this.imgSrc[i];
            //setTimeout(() => {
            //    this.imgSrc[i] = "assets/imgs/yellow" + this.a2 + ".png";
            //}, 570);
        }
    };
    A02Page.prototype.goResult = function () {
        if (!this.clicked) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_of_a_result_of_a__["a" /* ResultOfAPage */], { data: this.data });
        }
        else {
            for (var i = 0; i < 12; i++) {
                this.cssClass[i] = "animated " + "tada";
            }
        }
    };
    A02Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-a02',template:/*ion-inline-start:"D:\ionic-project\young\src\pages\a02\a02.html"*/'<!--\n\n  Generated template for the A02Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar hideBackButton color="yellowCard">\n\n    <ion-title><strong>夫妻宮</strong></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1><strong>第二張牌</strong></h1>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-3 *ngFor="let img of imgSrc;let i = index">\n\n        <ion-card [ngClass]="cssClass[i]">\n\n          <img (click)="cantClick(i)" [src]="img" />\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <!--<ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card [ngClass]="cssClass[0]">\n\n          <img (click)="cantClick(\'flip\',0)" [src]="imgSrc[0]" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card [ngClass]="cssClass[1]">\n\n          <img (click)="cantClick(\'flip\',1)" [src]="imgSrc[1]" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card [ngClass]="cssClass[2]">\n\n          <img (click)="cantClick(\'flip\',2)" [src]="imgSrc[2]" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card [ngClass]="cssClass[3]">\n\n          <img (click)="cantClick(\'flip\',3)" [src]="imgSrc[3]" />\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card [ngClass]="cssClass[4]">\n\n          <img (click)="cantClick(\'flip\',4)" [src]="imgSrc[4]" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card [ngClass]="cssClass[5]">\n\n          <img (click)="cantClick(\'flip\',5)" [src]="imgSrc[5]" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card [ngClass]="cssClass[6]">\n\n          <img (click)="cantClick(\'flip\',6)" [src]="imgSrc[6]" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card [ngClass]="cssClass[7]">\n\n          <img (click)="cantClick(\'flip\',7)" [src]="imgSrc[7]" />\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card [ngClass]="cssClass[8]">\n\n          <img (click)="cantClick(\'flip\',8)" [src]="imgSrc[8]" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card [ngClass]="cssClass[9]">\n\n          <img (click)="cantClick(\'flip\',9)" [src]="imgSrc[9]" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card [ngClass]="cssClass[10]">\n\n          <img (click)="cantClick(\'flip\',10)" [src]="imgSrc[10]" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card [ngClass]="cssClass[11]">\n\n          <img (click)="cantClick(\'flip\',11)" [src]="imgSrc[11]" />\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>-->\n\n  <div>\n\n    <button (click)="goResult()" ion-button round outline>看結果</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-project\young\src\pages\a02\a02.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], A02Page);
    return A02Page;
}());

//# sourceMappingURL=a02.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultOfAPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultOfAPage = /** @class */ (function () {
    function ResultOfAPage(navCtrl, navParams, http, tts) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.tts = tts;
        this.stoped = false;
        this.preData = [];
        this.preData = navParams.get('data');
        this.a1 = this.preData[0].num;
        this.a2 = this.preData[1].num;
        this.http.get("assets/data/a01result.json").map(function (res) { return res.json(); }).subscribe(function (result) {
            _this.data = result;
            _this.result = _this.data[_this.a1 - 1][_this.a2 - 1];
        });
        this.res1Img = this.preData[0].img;
        this.res2Img = this.preData[1].img;
    }
    ResultOfAPage.prototype.speak = function () {
        this.stoped = !this.stoped;
        if (this.stoped) {
            this.tts.speak({
                text: this.result,
                rate: 0.8
            })
                .then(function () { return console.log('Success'); })
                .catch(function (reason) { return console.log(reason); });
        }
        else {
            this.stop();
        }
    };
    ResultOfAPage.prototype.stop = function () {
        this.tts.speak("");
    };
    ResultOfAPage.prototype.goHome = function () {
        this.navCtrl.popToRoot();
    };
    ResultOfAPage.prototype.ngOnDestroy = function () {
        this.stop();
    };
    ResultOfAPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result-of-a',template:/*ion-inline-start:"D:\ionic-project\young\src\pages\result-of-a\result-of-a.html"*/'<!--\n  Generated template for the ResultOfAPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton color="dark">\n    <ion-title><strong>夫妻宮</strong></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col style="background-color: #990000">\n          <ion-card>\n            <img [src]="res1Img" />\n          </ion-card>\n        </ion-col>\n        <ion-col style="background-color: #ffcc00">\n          <ion-card>\n            <img [src]="res2Img" />\n          </ion-card>\n        </ion-col>               \n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-card padding color="light" class="resCard">\n      <p text-left text-justify>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ result }}</p>\n  </ion-card>\n  <button (click)="speak()" ion-button round>{{ stoped ? "停止" : "朗讀"}}</button>\n  <button (click)="goHome()" ion-button round>回首頁</button>\n</ion-content>\n'/*ion-inline-end:"D:\ionic-project\young\src\pages\result-of-a\result-of-a.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
    ], ResultOfAPage);
    return ResultOfAPage;
}());

//# sourceMappingURL=result-of-a.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A01PageModule", function() { return A01PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__a01__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var A01PageModule = /** @class */ (function () {
    function A01PageModule() {
    }
    A01PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__a01__["a" /* A01Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__a01__["a" /* A01Page */]),
            ],
        })
    ], A01PageModule);
    return A01PageModule;
}());

//# sourceMappingURL=a01.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return A01Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__a02_a02__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var A01Page = /** @class */ (function () {
    function A01Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clicked = true;
        this.imgSrc = [];
        this.cssClass = new Array(12).fill("animated ");
        this.data = [
            {
                num: 0,
                img: ""
            },
            {
                num: 0,
                img: ""
            }
        ];
        for (var i = 0; i < 12; i++) {
            this.imgSrc[i] = "assets/imgs/red.png";
        }
    }
    A01Page.prototype.cantClick = function (i) {
        if (this.clicked) {
            this.a1 = Math.floor(Math.random() * 12 + 1);
            this.cssClass[i] += "flip";
            this.clicked = false;
            this.imgSrc[i] = "assets/imgs/red" + this.a1 + ".png";
            this.data[0].num = this.a1;
            this.data[0].img = this.imgSrc[i];
            //setTimeout(() => {
            //    this.imgSrc[i] = "assets/imgs/red" + this.a1 + ".png";
            //}, 570);
        }
    };
    A01Page.prototype.goA02 = function () {
        if (!this.clicked) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__a02_a02__["a" /* A02Page */], { data: this.data });
        }
        else {
            for (var i = 0; i < 12; i++) {
                this.cssClass[i] = "animated " + "tada";
            }
        }
    };
    A01Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-a-1',template:/*ion-inline-start:"D:\ionic-project\young\src\pages\a01\a01.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton color="redCard">\n\n    <ion-title><strong>夫妻宮</strong></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h1><strong>第一張牌</strong></h1>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-3 *ngFor="let img of imgSrc;let i = index">\n\n        <ion-card [ngClass]="cssClass[i]">\n\n          <img (click)="cantClick(i)" [src]="img" />\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n \n\n  <div>\n\n    <button (click)="goA02()" ion-button round outline>抽下一張</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-project\young\src\pages\a01\a01.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], A01Page);
    return A01Page;
}());

//# sourceMappingURL=a01.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultOfAPageModule", function() { return ResultOfAPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_of_a__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResultOfAPageModule = /** @class */ (function () {
    function ResultOfAPageModule() {
    }
    ResultOfAPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__result_of_a__["a" /* ResultOfAPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__result_of_a__["a" /* ResultOfAPage */]),
            ],
        })
    ], ResultOfAPageModule);
    return ResultOfAPageModule;
}());

//# sourceMappingURL=result-of-a.module.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__a01_a01__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.doorArray = ["夫妻宮", "子女宮", "父母宮", "兄弟宮", "奴僕宮", "田宅宮", "命宮", "官祿宮", "疾惡宮", "財帛宮", "福德宮", "遷移宮"];
        this.imgArray = new Array(12).fill("assets/imgs/blue");
        this.title = "易經天星占卜";
        for (var i = 0; i < 12; i++) {
            this.imgArray[i] = this.imgArray[i] + (i + 1) + ".png";
        }
    }
    HomePage.prototype.goPage = function (i) {
        if (i == 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__a01_a01__["a" /* A01Page */]);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic-project\young\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{ title }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h1><ion-icon name="star"></ion-icon>{{title}}<ion-icon name="star-outline"></ion-icon></h1>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-3 *ngFor="let door of doorArray;let i = index">\n\n        <ion-card [style.opacity]="i==0?1:0.5">\n\n          <img (click)="goPage(i)" [src]="imgArray[i]" />\n\n          <strong>{{door}}</strong>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-project\young\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_a01_a01_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_a02_a02_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_result_of_a_result_of_a_module__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__pages_a01_a01_module__["A01PageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_a02_a02_module__["A02PageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_result_of_a_result_of_a_module__["ResultOfAPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/a02/a02.module#A02PageModule', name: 'A02Page', segment: 'a02', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/a01/a01.module#A01PageModule', name: 'A01Page', segment: 'a01', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result-of-a/result-of-a.module#ResultOfAPageModule', name: 'ResultOfAPage', segment: 'result-of-a', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__["a" /* TextToSpeech */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic-project\young\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionic-project\young\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map