import { Email, ShoppingCartOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";

const Cart = () =>{
    const { cartList, clearCart, removeItem, calcTotalxProduct, calcTotal} = useContext(CartContext)

    const createOrder= () => {
        console.log("createOrder")
        let order = {
            buyer: {
                name: "Periquito",
                email: "periquito@delospalotes.com",
                phone: "1123247874"
            },
            date: serverTimestamp(),
            items: cartList,
            total: calcTotal(),
        }
        console.log(order)
    }
    return (
        <>
            <h1>Carrito de TIENDA REY <ShoppingCartOutlined /></h1>
            {
                (cartList.length > 0)
                ? <Button onClick={clearCart}>Vaciar Carrito</Button>
                :<h2> El carrito está vacío</h2>
            }  
            {     
                <>
                    <ul>
                        {
                            cartList.map(item=> (<li key={item.idProduct}>
                                <p>{item.titleProduct}</p>
                                <p>Valor x unidad: ${item.priceProduct}</p>
                                <p>Cantidad: {item.qProduct}</p>
                                <p>Total x {item.qProduct} unidad/es: ${calcTotalxProduct(item.idProduct) }</p>
                                <button onClick={ () => removeItem(item.idProduct) }>Eliminar</button>   
                            </li>))
                        }
                    </ul>
                    <h2>El total es de: ${calcTotal()}</h2>
                    <Link to="/" style={{textDecoration:"none"}} ><Button variant="contained">Continuar comprando</Button></Link>
                    {
                        (cartList.length > 0)
                        ? <Button onClick={createOrder} variant="contained" color="secondary">Finalizar compra</Button>
                        :<></>
                    }  
                </>
            }          
        </>
    )
}

export default Cart;