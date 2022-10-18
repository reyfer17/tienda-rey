import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import db from "../utils/firebaseconfig";
import EndPurchase from "./EndPurchase";
import TextField from '@mui/material/TextField';

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
                <div className="form">
                <h2>Completá tus datos para finalizar</h2>
                <form onSubmit={handleSubmit}>
                    <div className="part-form">
                        <TextField
                        type="text"
                        name="name"
                        placeholder="Nombre y apellido"
                        onChange = {handleChange}
                        required
                        />
                    </div>
                    <div className="part-form">
                        <TextField
                        type="number"
                        name="phone"
                        placeholder="Celular"
                        onChange ={handleChange}
                        required
                        />
                    </div>
                    <div className="part-form">
                        <TextField
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange ={handleChange}
                        required/>
                    </div>
                    <div className="buttons-form">
                        <div>
                            <TextField
                            type="submit"
                            value="CONFIRMAR COMPRA"/>
                        </div>
                        <div>
                            <Button><Link to="/cart/">CANCELAR</Link></Button>
                        </div>
                    </div>
                </form>
                </div>
            </section>
            ) : (
                <EndPurchase name={name} email={email} phone={phone} orderId={orderId}/>
            )}
        </div>
        )
}

export default CreateOrder;