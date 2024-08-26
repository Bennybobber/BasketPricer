interface IProduct {
    id: number;
    name: string;
    price: number;
}

interface IBasketItem {
    product: IProduct;
    quantity: number;
}

interface IBasket {
    products: IBasketItem[];
}

interface IOffer {
    apply(basket: IBasket): number;
}

interface IBasketPricer {
    calculateDiscount(basket: IBasket): number;
    calculateSubTotal(basket: IBasket): number;
    calculateTotal(basket: IBasket): number;
}

export type {
    IProduct,
    IBasket,
    IOffer,
    IBasketItem,
    IBasketPricer,
};

