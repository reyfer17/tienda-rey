import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addItem = (product) => {
        setCartList([
            ...cartList, 
            product
        ])
    }

    return (
        <CartContext.Provider value={{cartList, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
