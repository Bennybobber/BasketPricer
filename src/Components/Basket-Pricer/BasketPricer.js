"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasketPricer = /** @class */ (function () {
    function BasketPricer(offers) {
        this.offers = offers;
    }
    BasketPricer.prototype.calculateSubTotal = function (basket) {
        return basket.products.reduce(function (total, item) { return total + item.product.price * item.quantity; }, 0);
    };
    BasketPricer.prototype.calculateDiscount = function (basket) {
        return this.offers.reduce(function (totalDiscount, offer) { return totalDiscount + offer.apply(basket); }, 0);
    };
    BasketPricer.prototype.calculateTotal = function (basket) {
        var subTotal = this.calculateSubTotal(basket);
        var discount = this.calculateDiscount(basket);
        return parseFloat((subTotal - discount).toFixed(2));
    };
    return BasketPricer;
}());
exports.default = BasketPricer;
