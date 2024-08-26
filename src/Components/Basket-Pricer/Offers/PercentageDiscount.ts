import * as Type from '../IBasket.interface';
import { IBasket } from "../IBasket.interface";

class PercentageDiscount implements Type.IOffer {
    private readonly product: Type.IProduct;
    private readonly discountPercent: number;

    constructor(product: Type.IProduct, discountPercent: number) {
        this.product = product;
        this.discountPercent = discountPercent;
    }

    apply(basket: IBasket): number {
        const item = basket.products.find(item => item.product == this.product);
        
        if (!item) return 0;
        
        return item.quantity * item.product.price * (this.discountPercent / 100);
    }
}

export default PercentageDiscount;