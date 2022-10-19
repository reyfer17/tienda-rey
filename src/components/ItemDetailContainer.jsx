import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getItem as getProduct} from "../utils/firebaseconfig";

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {idItem} = useParams();
    useEffect(() =>{
        getProduct(idItem).then (res => {
            setData(res)
        })
    },[idItem])
    
    return (
        <>
        <ItemDetail item={data}/>
        </>
    );
}

export default ItemDetailContainer;