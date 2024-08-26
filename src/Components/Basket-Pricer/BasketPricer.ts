import * as Type from './IBasket.interface';
class BasketPricer implements Type.IBasketPricer{
    private offers: Type.IOffer[];
    
    constructor(offers: Type.IOffer[]) {
        this.offers = offers;
    }
    
    calculateSubTotal(basket: Type.IBasket): number {
        return basket.products.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
    
    calculateDiscount(basket: Type.IBasket): number {
        return this.offers.reduce((totalDiscount, offer) => totalDiscount + offer.apply(basket), 0);
    }
    
    calculateTotal(basket: Type.IBasket): number {
        const subTotal = this.calculateSubTotal(basket);
        const discount = this.calculateDiscount(basket);
        
        return parseFloat((subTotal - discount).toFixed(2));
    }


}

export default BasketPricer;