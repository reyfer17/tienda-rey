import { ShoppingCartOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "./CartContext";




const Cart = () =>{
    const ctx = useContext(CartContext)
    return (
        <>
            <h1>Soy el carrito de TIENDA REY</h1>
            <ShoppingCartOutlined />
            <ul>
            {
                ctx.cartList.map(item=> <li>{item}</li>)
            }
            </ul>
        </>
    )
}

export default Cart;