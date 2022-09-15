import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import dataFromDB from "../utils/DB";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { idCategory } = useParams();
    useEffect(() =>{
        if (idCategory) {
            customFetch(2000, dataFromDB.filter(item => item.categoryCode == idCategory))
                .then(datos => setData(datos))
                .catch(err => console.log(err))
        } else {
            customFetch(2000, dataFromDB)
                .then(datos => setData(datos))
                .catch(err => console.log(err))
        }
    },[idCategory])
    
    return (
        <>
            <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;