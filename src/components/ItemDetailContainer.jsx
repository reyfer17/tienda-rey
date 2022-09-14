import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import customFetch from "../utils/customFetch";
import dataFromDB from "../utils/DB";

const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    useEffect(() =>{
        customFetch(3000, dataFromDB[1])
            .then(datos => setData(dataFromDB[1]))
            .catch(err => console.log(err))
    },[])
    
    return (
        <>
        <ItemDetail item={data}/>
        </>
    );
}

export default ItemDetailContainer;