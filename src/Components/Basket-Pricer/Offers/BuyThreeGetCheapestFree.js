"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuyThreeGetCheapestFree = /** @class */ (function () {
    function BuyThreeGetCheapestFree(applicableProducts) {
        this.applicableProducts = applicableProducts;
    }
    BuyThreeGetCheapestFree.prototype.apply = function (basket) {
        // map the applicable items to get only their names.
        var applicableProductsNames = this.applicableProducts.flatMap(function (item) { return item.name; });
        var applicableItems = basket.products
            .filter(function (item) { return applicableProductsNames.includes(item.product.name); })
            .flatMap(function (item) { return Array(item.quantity).fill(item.product); })
            .sort(function (a, b) { return a.price - b.price; }); // Sort by price, cheapest first
        var discount = 0;
        while (applicableItems.length >= 3) {
            // Take the top 3 items to discount
            var itemsToDiscount = applicableItems.splice(0, 3);
            // Take first item as it's cheapest and discount.
            discount += itemsToDiscount[0].price;
        }
        return discount;
    };
    return BuyThreeGetCheapestFree;
}());
exports.default = BuyThreeGetCheapestFree;
