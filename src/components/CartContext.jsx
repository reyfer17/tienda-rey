import { createContext } from "react";
import { useState } from "react";
import Item from "./Item";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addItem = (product,q) => {
        setCartList([
            ...cartList, 
            {
                idProduct: product.id,
                imgProduct: product.img,
                priceProduct: product.price,
                titleProduct: product.title,
                qtyProduct: q
            }
        ])
    };

    const clearCart = () => {
        setCartList([])
    };

    /*const isInCart = (product) => {
        cartList.find ( p => p.id == product.id)?
        p.

        )
    }*/

    /*const removeItem (id)= (product) => {
        setCartList([
            ...cartList, 
            product
        ])
    }*/

    return (
        <CartContext.Provider value={{cartList, addItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
