import * as Type from '../IBasket.interface';

class BuyThreeGetCheapestFree implements Type.IOffer {
    private applicableProducts: Type.IProduct[];

    constructor(applicableProducts: Type.IProduct[]) {
        this.applicableProducts = applicableProducts;
    }

    apply(basket: Type.IBasket): number {
        // map the applicable items to get only their names.
        const applicableProductsNames = this.applicableProducts.flatMap(item => item.name);
        const applicableItems = basket.products
            .filter(item => applicableProductsNames.includes(item.product.name))
            .flatMap(item => Array(item.quantity).fill(item.product))
            .sort((a, b) => a.price - b.price); // Sort by price, cheapest first
        let discount = 0;

        while (applicableItems.length >= 3) {
            // Take the top 3 items to discount
            const itemsToDiscount = applicableItems.splice(0, 3);
            // Take first item as it's cheapest and discount.
            discount += itemsToDiscount[0].price;
        }

        return discount;
    }
}

export default BuyThreeGetCheapestFree;