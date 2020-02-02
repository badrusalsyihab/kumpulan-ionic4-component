var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var HTML_TEMPLATE = "\n<!-- \u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E41\u0E19\u0E30\u0E19\u0E33\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E27\u0E31\u0E19\n<ion-card>\n  <ion-card-content>\n    <p>The content for this card</p>\n  </ion-card-content>\n</ion-card> -->\n\n\n<ion-grid no-padding>\n  <ion-row *ngIf=\"title\">\n    <ion-col class=\"font-text-title\">\n      {{title}}\n    </ion-col>\n  </ion-row>\n  <ion-row no-padding *ngIf=\"items && items.length > 0\">\n    <ion-col size=\"6\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" *ngFor=\"let item of items\" (click)=\"clickItem(item)\">\n      <ion-card no-padding mode=\"md\" class=\"bg-color no-box-shadow\">\n        <ion-card-header no-padding>\n          <ion-row>\n            <ion-col no-padding size=\"12\">\n              <div class=\"container\">\n                <div no-padding text-left class=\"img-car\" *ngIf=\"item.shippingfeetag == true\">\n                  <img src=\"https://res.cloudinary.com/dyiuidzsc/image/upload/v1540789212/furnover/png/delivery2.png\" />\n\n                </div>\n                <div class=\" position-pomo img-pomo\">\n\n                  <span>\n\n                    <img src=\"https://res.cloudinary.com/dyiuidzsc/image/upload/v1540789242/furnover/png/tagOutOfStock.png\"\n                      *ngIf=\"item.stock == 0\" />\n                    <img src=\"https://res.cloudinary.com/dyiuidzsc/image/upload/v1540789236/furnover/png/tagIcon.png\"\n                      *ngIf=\"item.percentage > 0\" />\n                  </span>\n\n                  <div class=\"centered\" *ngIf=\"item.percentage > 0\">\n                    <p class=\"font-diccount\">{{item.percentage}}%</p>\n                    <p class=\"font-text-discount \">\n                      \u0E25\u0E14\n                    </p>\n                  </div>\n                  <div class=\"out-of-stock\" *ngIf=\"item.stock == 0\">\n                    <p class=\"font-out-of-stock no-margin  \">\n                      \u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\n                      \u0E2B\u0E21\u0E14\n                    </p>\n                  </div>\n\n                </div>\n              </div>\n\n\n              <!-- <img [src]=\"item.image.url\"> -->\n              <div *ngIf=\"item && item.image && item.image.url\" class=\"img-size-div\">\n                <ion-img class=\"img-size\" [src]=\"item.image.url\"></ion-img>\n              </div>\n              <div *ngIf=\"!item || !item.image || !item.image.url\" class=\"img-size-div\">\n                <p class=\"img-gray no-margin\"></p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-header>\n        <ion-card-content class=\"padding-in\">\n          <ion-row>\n\n            <ion-col no-padding size=\"12\">\n              <div *ngIf=\"item.name\" no-padding class=\"text-2line font-text padding-botton\">\n                {{item.name}}\n              </div>\n            </ion-col>\n            <ion-col no-padding size=\"12\" class=\"font-text-price\" *ngIf=\"!item.newpricetext && item.pricetext\">\n              <div no-padding>\n                <p> <span class=\"font-price\">{{item.pricetext}}</span> <span padding>{{item.newpricetext}}</span>\n                </p>\n\n              </div>\n            </ion-col>\n            <ion-col no-padding size=\"12\" class=\"font-text-price\" *ngIf=\"item.newpricetext && item.pricetext\">\n              <div no-padding>\n                <p> <span class=\"color-font in-line\">{{item.pricetext}}</span> <span class=\"font-price padding-price\">{{item.newpricetext}}</span>\n                </p>\n\n              </div>\n            </ion-col>\n            <!-- <ion-col no-padding size=\"2\">\n              <div no-padding text-right class=\"img-car\" *ngIf=\"item.shippingfeetag == true\">\n                <ion-img src=\"/assets/images/delivery2.png\"></ion-img>\n\n              </div> -->\n            <!-- </ion-col> -->\n            <ion-col no-padding size=\"4\">\n              <span class=\"aa\">\n                <ion-icon class=\"color-likes\" name=\"heart-empty\"></ion-icon>\n              </span>\n              <span class=\" margin-left2 color-font font-text-price\">{{item.likes}}</span>\n              <span *ngIf=\"!item.likes\" class=\"font-text-price color-font margin-left2\">0</span>\n            </ion-col>\n            <ion-col size=\"8\" text-right no-padding class=\"font-text-price\">\n              <app-ion-rating [ratings]=\"item.ratings\"></app-ion-rating>\n              <span *ngIf=\"item && item.reviews\" class=\"color-font margin-left\">({{item.reviews}})</span>\n              <span class=\"color-font\" *ngIf=\"!item.reviews\">\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E30\u0E41\u0E19\u0E19</span>\n            </ion-col>\n            <!-- <ion-col size=\"3\" text-left no-padding> -->\n            <!-- </ion-col> -->\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n<div text-center *ngIf=\"(items && items.length === 0)||!items\">\n  <p>\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E41\u0E19\u0E30\u0E19\u0E33</p>\n</div>\n";
var CSS_STYLE = "\n.card-height {\n  width: 100% !important;\n  height: 250px !important;\n}\n\n.img-size {\n  width: 100% !important;\n  object-fit: cover !important;\n  height: 162px !important;\n}\n\n.img-gray {\n  background: rgb(233, 228, 228) !important;\n  width: 100% !important;\n  height: 162px !important;\n  object-fit: cover !important;\n}\n\n.img-size-div {\n  width: 100% !important;\n  height: 162px !important;\n}\n\n.text-2line {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.position-per {\n  top: 3px !important;\n  right: 7px !important;\n  position: absolute;\n}\n\n.font-text {\n  font-size: 14px !important;\n}\n\n.font-text-price {\n  font-size: 12px !important;\n}\n\n// .card-content-md {\n//     padding: 0px !important;\n// }\n.sc-ion-card-md-h {\n  margin: 0px !important;\n}\n\n.padding-botton {\n  padding-bottom: 5px !important\n}\n\n.padding-in {\n  padding: 4px !important;\n}\n\n.color-font {\n  font-size: 12px !important;\n  color: rgb(197, 195, 195);\n}\n\n.border-line {\n  font-size: 15px;\n  text-align: center;\n  border-bottom: 1px solid red;\n  position: relative;\n}\n\n.position-pomo {\n  position: absolute;\n  right: 0% !important;\n}\n\n.img-pomo {\n  // width: 50px !important;\n  height: 0% !important;\n}\n\n.in-line {\n  -webkit-text-decoration-line: line-through;\n  text-decoration-line: line-through;\n}\n\n.img-car {\n  position: absolute !important;\n  width: 30px !important;\n  height: 0% !important;\n  left: 0% !important;\n  margin-left: 5px !important;\n  margin-top: 8px !important;\n}\n\n.font-diccount {\n  font-weight: bold;\n  margin-top: 5px !important;\n  font-size: 11px !important;\n  color: rgb(255, 38, 0) !important;\n}\n\n.font-text-discount {\n  font-weight: bold;\n  margin-top: -8px;\n  font-size: 11px !important;\n  color: rgb(255, 255, 255) !important;\n}\n\n.centered {\n  position: absolute;\n  width: 35px; // margin-top: 25px;\n  top: 0; // left: 50%;\n  right: 0; // transform: translate(-50%, -50%);\n}\n\n.out-of-stock {\n  position: absolute;\n  width: 35px;\n  margin-top: 5px !important; // margin-top: 25px;\n  top: 0; // left: 50%;\n  // transform: translate(-50%, -50%);\n}\n\n.container {\n  // position: relative;\n  text-align: center;\n  color: white;\n}\n\n.font-price {\n  font-size: 12px !important;\n  color: rgb(255, 38, 0) !important;\n  font-weight: bold;\n}\n\n.padding-price {\n  padding: 8px !important;\n}\n\n.position-pomo2 {\n  position: relative;\n  right: 0% !important;\n}\n\n.img-pomo2 {\n  width: 50px !important;\n  height: 0% !important;\n}\n\n.sc-ion-card-ios-s img {\n  display: unset !important;\n}\n\n.sc-ion-card-md-s img {\n  display: unset !important;\n}\n\nimg {\n  display: unset !important;\n  width: 35px;\n}\n\n.font-out-of-stock {\n  font-weight: bold; // margin-top: -8px;\n  font-size: 11px !important;\n  color: rgb(255, 255, 255) !important;\n}\n\n.padding-left {\n  padding-left: 4px !important;\n}\n\n.font-text-title {\n  font-weight: bold;\n  color: rgb(255, 38, 0) !important;\n}\n\n.bg-color {\n  background-color: rgb(255, 255, 255) !important;\n}\n\n.no-box-shadow {\n  box-shadow: unset;\n}\n\n.position-ab {\n  position: absolute !important;\n}\n\n.margin-left {\n  margin-left: 2px !important;\n}\n\n.font-likes {\n  font-size: 12px !important\n}\n\n.color-likes {\n  font-size: 13px !important;\n  color: rgb(197, 195, 195);\n}\n\n.aa {\n  position: absolute !important;\n  margin-top: 2px !important;\n}\n\n.margin-left2 {\n  margin-left: 8px !important;\n}\n\n.padding-like-left {\n  padding-left: 5% !important;\n}\n\n.no-margin {\n  margin: 0% !important;\n}\n";
var EcommerceProductGridComponent = /** @class */ (function () {
    function EcommerceProductGridComponent() {
        this.items = [];
        this.title = '';
        this.outPutData = new EventEmitter();
    }
    EcommerceProductGridComponent.prototype.ngOnInit = function () {
    };
    EcommerceProductGridComponent.prototype.clickItem = function (item) {
        this.outPutData.emit(item);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], EcommerceProductGridComponent.prototype, "items", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EcommerceProductGridComponent.prototype, "title", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EcommerceProductGridComponent.prototype, "outPutData", void 0);
    EcommerceProductGridComponent = __decorate([
        Component({
            selector: 'app-ecommerce-product-grid',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], EcommerceProductGridComponent);
    return EcommerceProductGridComponent;
}());
export { EcommerceProductGridComponent };
//# sourceMappingURL=ecommerce-product-grid.component.js.map