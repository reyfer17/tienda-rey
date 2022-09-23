import { ShoppingCartOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";




const Cart = () =>{
    const { cartList, clearCart, removeItem } = useContext(CartContext)
    return (
        <>
            <h1>Soy el carrito de TIENDA REY</h1>
            <ShoppingCartOutlined />
            <ul>
            {
                cartList.map(item=> <li>
                    <p>{item.titleProduct}</p>
                    <p>Valor x unidad: ${item.priceProduct}</p>
                    <p>Cantidad: {item.qProduct}</p>
                    <p>Total x {item.qProduct} unidad/es: ${item.priceProduct * item.qProduct }</p>
                    <button onClick={ () => removeItem(item.idProduct) }>Eliminar</button>   
                </li>)
            }
            </ul>
            <Button onClick={clearCart}>Vaciar Carrito</Button>
        </>
    )
}

export default Cart;