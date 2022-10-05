import { ShoppingCartOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import db from "../utils/firebaseconfig";


const Cart = () =>{
    const { cartList, clearCart, removeItem, calcTotalxProduct, calcTotal} = useContext(CartContext)

    const createOrder= async () => {
        let itemsForDB = cartList.map(item => ({
            id: item.idProduct,
            title: item.titleProduct,
            price: item.priceProduct,
            quantity: item.qProduct,
        }))
        let order = {
            buyer: {
                name: "Periquito",
                email: "periquito@delospalotes.com",
                phone: "1123247874"
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: calcTotal(),
        }
        //console.log(order)
        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order)
        alert("Su orden fue creada con nro. de codigo:" + newOrderRef.id)
        clearCart()
        itemsForDB.map(async (item) => {
            const itemRef = doc(db,"products",item.id);
            await updateDoc(itemRef,{
                stock: increment(-item.quantity)
            })
        })

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