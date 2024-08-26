"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasketPricer_1 = require("./Components/Basket-Pricer/BasketPricer");
var BuyThreeGetCheapestFree_1 = require("./Components/Basket-Pricer/Offers/BuyThreeGetCheapestFree");
var PercentageDiscount_1 = require("./Components/Basket-Pricer/Offers/PercentageDiscount");
var catalogue = [
    { id: 1, name: 'Baked Beans', price: 0.99 },
    { id: 2, name: 'Biscuits', price: 1.20 },
    { id: 3, name: 'Sardines', price: 1.89 },
    { id: 4, name: 'Shampoo (Small)', price: 2.00 },
    { id: 5, name: 'Shampoo (Medium)', price: 2.50 },
    { id: 6, name: 'Shampoo (Large)', price: 3.50 },
];
var basket = {
    products: [
        { product: catalogue[0], quantity: 4 }, // Baked Beans x 4
        { product: catalogue[1], quantity: 1 }, // Biscuits x 1
    ],
};
var offers = [
    new BuyThreeGetCheapestFree_1.default([catalogue[0]]),
    new PercentageDiscount_1.default(catalogue[3], 25),
];
var pricer = new BasketPricer_1.default(offers);
var subTotal = pricer.calculateSubTotal(basket); // Expected: 5.16
var discount = pricer.calculateDiscount(basket); // Expected: 0.99
var total = pricer.calculateTotal(basket); // Expected: 4.17
console.log('Catalogue: ');
console.log(catalogue);
console.log('');
console.log('----- Assignment Beans Example -----');
console.log('Basket contents:');
console.log('Baked Beans x 4');
console.log('Biscuits x 1');
console.log('<--- Basket Totals --->');
console.log("Sub-total: \u00A3".concat(subTotal));
console.log("Discount: \u00A3".concat(discount));
console.log("Total: \u00A3".concat(total));
console.log('');
var originalExampleBasket = {
    products: [
        { product: catalogue[5], quantity: 3 }, // Large Shampoo x 3
        { product: catalogue[4], quantity: 1 }, // Medium Shampoo x 1
        { product: catalogue[3], quantity: 2 }, // Small Shampoo x 2
    ]
};
var shampooOffer = new BuyThreeGetCheapestFree_1.default([catalogue[5], catalogue[4], catalogue[3]]);
var shampooPricer = new BasketPricer_1.default([shampooOffer]);
var originalSubTotal = shampooPricer.calculateSubTotal(originalExampleBasket); // Expected: 17
var originalDiscount = shampooPricer.calculateDiscount(originalExampleBasket); // Expected: 5.50
var originalTotal = shampooPricer.calculateTotal(originalExampleBasket); // Expected: 11.5
console.log('----- Assignment Shampoo Example -----');
console.log('Basket contents:');
console.log('Large Shampoo x 3');
console.log('Medium Shampoo x 1');
console.log('Small Shampoo x 2');
console.log('<--- Basket Totals --->');
console.log("Sub-total: \u00A3".concat(originalSubTotal));
console.log("Discount: \u00A3".concat(originalDiscount));
console.log("Total: \u00A3".concat(originalTotal));
console.log('');
var emptyBasket = {
    products: []
};
var emptySubTotal = pricer.calculateSubTotal(emptyBasket); // Expected: 0
var emptyDiscount = pricer.calculateDiscount(emptyBasket); // Expected: 0
var emptyTotal = pricer.calculateTotal(emptyBasket); // Expected: 0
console.log('----- Empty Example -----');
console.log('Basket contents:');
console.log('Absolutely nothing mate.');
console.log('<--- Basket Totals --->');
console.log("Sub-total: \u00A3".concat(emptySubTotal));
console.log("Discount: \u00A3".concat(emptyDiscount));
console.log("Total: \u00A3".concat(emptyTotal));
console.log('');
