"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PercentageDiscount = /** @class */ (function () {
    function PercentageDiscount(product, discountPercent) {
        this.product = product;
        this.discountPercent = discountPercent;
    }
    PercentageDiscount.prototype.apply = function (basket) {
        var _this = this;
        var item = basket.products.find(function (item) { return item.product == _this.product; });
        if (!item)
            return 0;
        return item.quantity * item.product.price * (this.discountPercent / 100);
    };
    return PercentageDiscount;
}());
exports.default = PercentageDiscount;
