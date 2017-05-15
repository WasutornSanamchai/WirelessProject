webpackJsonp([0],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vocab__ = __webpack_require__(312);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabModule", function() { return VocabModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VocabModule = (function () {
    function VocabModule() {
    }
    return VocabModule;
}());
VocabModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__vocab__["a" /* Vocab */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vocab__["a" /* Vocab */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__vocab__["a" /* Vocab */]
        ]
    })
], VocabModule);

//# sourceMappingURL=vocab.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vocab; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Vocab = (function () {
    function Vocab(navCtrl, navParams, angularFire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFire = angularFire;
        this.vocab = angularFire.database.list('/testUpdate');
    }
    Vocab.prototype.ionViewDidLoad = function () { };
    Vocab.prototype.getVocab = function () {
        this.vocab.subscribe(function (queriedItems) {
            console.log(queriedItems);
        });
    };
    Vocab.prototype.addVocab = function () {
        this.vocab.push({
            username: "username",
            email: "mail",
            status: "No Status Now",
            number: 1
        });
    };
    return Vocab;
}());
Vocab = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-vocab',template:/*ion-inline-start:"C:\Users\pen_s\Desktop\TermsTem_Auth\src\pages\vocab\vocab.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>vocab</ion-title>\n  </ion-navbar>\n\n</ion-header>\n <ion-content padding>\n  <h2>Vocab List</h2>\n  <!--<ion-list>\n    <ion-item *ngFor="let vocab of vocab | async">\n      <div *ngIf="vocab.subject==\'Management Information Systems\'">\n      <h2>{{vocab.vocab}}</h2>\n        <ul>\n          <li>Chapter {{vocab.chapterNo}}: {{vocab.chapterName}}</li>\n          <li>Subject: {{vocab.subject}}</li>\n          <li>Definition: <p>{{vocab.def}}</p></li>\n          <li>Part: {{vocab.part}}</li>\n          <li>Year: {{vocab.subject}}</li>\n        </ul>\n      </div>\n    </ion-item>\n  </ion-list>-->\n  <button ion-button (click)  = "getVocab()"> Get Vocab </button>\n  <button ion-button (click)  = "addVocab()"> Add Vocab </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pen_s\Desktop\TermsTem_Auth\src\pages\vocab\vocab.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2__["e" /* AngularFire */]])
], Vocab);

//# sourceMappingURL=vocab.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map