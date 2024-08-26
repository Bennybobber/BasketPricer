import * as Type from './Components/Basket-Pricer/IBasket.interface'
import BasketPricer from './Components/Basket-Pricer/BasketPricer';
import BuyThreeGetCheapestFree from './Components/Basket-Pricer/Offers/BuyThreeGetCheapestFree';
import PercentageDiscount from './Components/Basket-Pricer/Offers/PercentageDiscount';

const catalogue: Type.IProduct[] = [
    { id: 1, name: 'Baked Beans', price: 0.99 },
    { id: 2, name: 'Biscuits', price: 1.20 },
    { id: 3, name: 'Sardines', price: 1.89 },
    { id: 4, name: 'Shampoo (Small)', price: 2.00 },
    { id: 5, name: 'Shampoo (Medium)', price: 2.50 },
    { id: 6, name: 'Shampoo (Large)', price: 3.50 },
];

const basket: Type.IBasket = {
    products: [
        { product: catalogue[0], quantity: 4 }, // Baked Beans x 4
        { product: catalogue[1], quantity: 1 }, // Biscuits x 1
    ],
};

const offers: Type.IOffer[] = [
    new BuyThreeGetCheapestFree([catalogue[0]]),
    new PercentageDiscount(catalogue[3], 25),
];

const pricer = new BasketPricer(offers);

const subTotal = pricer.calculateSubTotal(basket); // Expected: 5.16
const discount = pricer.calculateDiscount(basket); // Expected: 0.99
const total = pricer.calculateTotal(basket); // Expected: 4.17

console.log('');
console.log('Catalogue: ');
console.log(catalogue);
console.log('');
console.log('----- Assignment Beans Example -----');
console.log('Basket contents:');
console.log('Baked Beans x 4');
console.log('Biscuits x 1');
console.log('<--- Basket Totals --->');
console.log(`Sub-total: £${subTotal}`);
console.log(`Discount: £${discount}`);
console.log(`Total: £${total}`);
console.log('');

const originalExampleBasket: Type.IBasket = {
    products: [
        { product: catalogue[5], quantity: 3 }, // Large Shampoo x 3
        { product: catalogue[4], quantity: 1 }, // Medium Shampoo x 1
        { product: catalogue[3], quantity: 2 }, // Small Shampoo x 2

    ]
};
const shampooOffer: Type.IOffer = new BuyThreeGetCheapestFree([catalogue[5], catalogue[4], catalogue[3]])
const shampooPricer = new BasketPricer([shampooOffer]);

const originalSubTotal = shampooPricer.calculateSubTotal(originalExampleBasket); // Expected: 17
const originalDiscount = shampooPricer.calculateDiscount(originalExampleBasket); // Expected: 5.50
const originalTotal = shampooPricer.calculateTotal(originalExampleBasket); // Expected: 11.5

console.log('----- Assignment Shampoo Example -----');
console.log('Basket contents:');
console.log('Large Shampoo x 3');
console.log('Medium Shampoo x 1');
console.log('Small Shampoo x 2');
console.log('<--- Basket Totals --->');
console.log(`Sub-total: £${originalSubTotal}`);
console.log(`Discount: £${originalDiscount}`);
console.log(`Total: £${originalTotal}`);
console.log('');

const emptyBasket: Type.IBasket = {
    products: []
}

const emptySubTotal = pricer.calculateSubTotal(emptyBasket); // Expected: 0
const emptyDiscount = pricer.calculateDiscount(emptyBasket); // Expected: 0
const emptyTotal = pricer.calculateTotal(emptyBasket); // Expected: 0

console.log('----- Empty Example -----');
console.log('Basket contents:');
console.log('Absolutely nothing mate.');
console.log('<--- Basket Totals --->');
console.log(`Sub-total: £${emptySubTotal}`);
console.log(`Discount: £${emptyDiscount}`);
console.log(`Total: £${emptyTotal}`);
console.log('');