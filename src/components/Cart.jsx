import { ShoppingCartOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";




const Cart = () =>{
    const { cartList, clearCart } = useContext(CartContext)
    return (
        <>
            <h1>Soy el carrito de TIENDA REY</h1>
            <ShoppingCartOutlined />
            <ul>
            {
                cartList.map(item=> <li>
                    <p>{item.titleProduct}</p>
                    <p>Cantidad: {item.qtyProduct}</p>
                </li>)
            }
            </ul>
            <Button onClick={clearCart}>Vaciar Carrito</Button>
        </>
    )
}

export default Cart;