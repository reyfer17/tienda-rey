import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { CartDetail, CartDetailTitle, CartResume, CartOptions, CartEmpty, CartOptionsAlt, CartTitle } from "./styledComponents";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


const Cart = () =>{
    const { cartList, clearCart, removeItem, calcTotalxProduct, calcTotal} = useContext(CartContext)

    return (
        <>
            
            <CartTitle>Productos en carrito</CartTitle>
            
            {     (cartList.length > 0)
                ? 
                <>
                    <div>
                        {
                            <CartDetailTitle>
                                <p>Producto</p>
                                <p>Cat.</p>
                                <p>Valor x u.</p>
                                <p>Cant.</p>
                                <p>Sub total</p>  
                                <p> </p>
                            </CartDetailTitle>
                        }
                        {
                            cartList.map(item=> (<CartDetail key={item.idProduct}>
                                <p>{item.titleProduct}</p>
                                <p>{item.categoryProduct}</p>
                                <p>${item.priceProduct}</p>
                                <p>x{item.qProduct}</p>
                                <p>${calcTotalxProduct(item.idProduct) }</p>
                                <p><DeleteForeverRoundedIcon color="secondary" onClick={ () => removeItem(item.idProduct) }></DeleteForeverRoundedIcon></p>  
                            </CartDetail>))
                        }
                    </div>
                    <div>
                        {
                            <CartResume>
                                <p>Total de la compra:</p>
                                <p>${calcTotal()}</p>
                            </CartResume>
                        }
                    </div>
                
                </>
                :<CartEmpty>¡El carrito está vacío!</CartEmpty>
            }      
                <div>
                    
                        {  (cartList.length > 0)
                            ? 
                        <>
                            <CartOptions>
                                <Link to="/" style={{textDecoration:"none"}} ><Button variant="contained">Seguir comprando</Button></Link>
                                <Button variant="outlined" onClick={clearCart}>Vaciar Carrito</Button>
                                <Link to="/CreateOrder" style={{textDecoration:"none"}}><Button variant="contained" color="secondary" >Finalizar Compra</Button></Link>
                            </CartOptions>
                        </>
                        :<>
                            <CartOptionsAlt>
                                <Link to="/" style={{textDecoration:"none"}} ><Button variant="contained">Quiero ver los productos en venta</Button></Link>
                            </CartOptionsAlt>
                        </>
                        }
                </div>    
        </>
    )
}

export default Cart;