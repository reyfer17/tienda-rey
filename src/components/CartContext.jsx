import { createContext } from "react";
import { useState } from "react";
import Item from "./Item";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addItem = (product,q) => {
        let isInCart = cartList.find(p => p.idProduct === product.id);
        if (isInCart === undefined){
            setCartList([
                ...cartList, 
                {
                    idProduct: product.id,
                    imgProduct: product.img,
                    priceProduct: product.price,
                    titleProduct: product.title,
                    qProduct: q
                }
            ]);
        } else {
            isInCart.qProduct += q;
            setCartList([
                ...cartList
            ]);
        }
    }

    const clearCart = () => {
        setCartList([])
    };


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
