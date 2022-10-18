import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import db from "../utils/firebaseconfig";
import EndPurchase from "./EndPurchase";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FormToEnd, FormTitle, FormCancel, ButtonCancel} from "./styledComponents";

const initialForm = {
        name:"",
        email:"",
        phone:"",    
};

const CreateOrder= () => {
    const { cartList, clearCart, calcTotal} = useContext(CartContext)
    const [form, setForm] = useState(initialForm);
    const [orderId, setOrderId] = useState("");

    const buyer = form;

    const {name, email, phone} = buyer;

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value,
        });
    };

    const finishOrder = async () =>{
        let itemsForDB = cartList.map(item => ({
            id: item.idProduct,
            title: item.titleProduct,
            price: item.priceProduct,
            quantity: item.qProduct,
        }))
        let order = {
            buyer,
            date: serverTimestamp(),
            items: itemsForDB,
            total: calcTotal(),
        }

        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order)
        
        alert("Su orden fue creada con nro. de codigo:" + newOrderRef.id)
        setOrderId(newOrderRef.id)
        clearCart()
        
        itemsForDB.map(async (item) => {
            const itemRef = doc(db,"products",item.id);
            await updateDoc(itemRef,{
                stock: increment(-item.quantity)
            })
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        finishOrder();
    };

    return (
        <div>
        { !orderId ?
            (
            <section>
                <div>
                    <FormTitle>Completá tus datos para finalizar el proceso de compra</FormTitle>
                    <FormToEnd onSubmit={handleSubmit}>
                        <Box>
                            <TextField
                            type="text"
                            label="Nombre y apellido"
                            name="name"
                            onChange = {handleChange}
                            required
                            />
                        </Box>
                        <Box>
                            <TextField
                            type="number"
                            name="phone"
                            label="Celular"
                            onChange ={handleChange}
                            required
                            />
                        </Box>
                        <Box>
                            <TextField
                            type="email"
                            name="email"
                            label="email"
                            onChange ={handleChange}
                            required
                            />
                        </Box>
                        <Box>               
                                <TextField 
                                color="success" focused
                                type="submit"
                                value="CONFIRMAR COMPRA"/>            
                        </Box>
                    </FormToEnd>
                    <Link to="/cart/" style={{textDecoration:"none"}}><FormCancel>
                        <ButtonCancel color="secondary">Cancelar compra y volver al carrito</ButtonCancel>
                    </FormCancel></Link>
                </div>
            </section>
            ) : (
                <EndPurchase name={name} email={email} phone={phone} orderId={orderId}/>
            )}
        </div>
        )
}

export default CreateOrder;