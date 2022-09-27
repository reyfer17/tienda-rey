import { createContext } from "react";
import { useState } from "react";

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

    const removeItem = (id) => {
        let cartFiltered = cartList.filter( p => p.idProduct !== id)

        setCartList(
            cartFiltered
        );
    }

    const calcCartQ = () => {
        let qOnCart = cartList.map (p => p.qProduct);
        return qOnCart.reduce (((pValue, cValue) => pValue + cValue),0);
    }

    const calcTotalxProduct = (idProduct) => {
        let i = cartList.map(p => p.idProduct).indexOf(idProduct);
        return cartList[i].priceProduct*cartList[i].qProduct;
    }

    const calcTotal= () => {
        let totalxProduct = cartList.map (p => calcTotalxProduct(p.idProduct));
        return totalxProduct.reduce (((pValue, cValue) => pValue + cValue),0);
    }

    return (
        <CartContext.Provider value={{cartList, addItem, clearCart, removeItem, calcCartQ, calcTotalxProduct, calcTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
