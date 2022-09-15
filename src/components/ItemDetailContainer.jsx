import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import customFetch from "../utils/customFetch";
import dataFromDB from "../utils/DB";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {idItem} = useParams();
    useEffect(() =>{
        customFetch(2000, dataFromDB.find(item => item.id == idItem))
            .then(datos => setData(datos))
            .catch(err => console.log(err))
    },[idItem])
    
    return (
        <>
        <ItemDetail item={data}/>
        </>
    );
}

export default ItemDetailContainer;