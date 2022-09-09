import { useState, useEffect } from "react";
import Item from "./Item";
import Grid from '@mui/material/Grid';
import customFetch from "../utils/customFetch";
import dataFromDB from "../utils/DB";

const ItemList = () => {
    const [data, setData] = useState([])
    useEffect(() =>{
        customFetch(3000, dataFromDB)
            .then(datos => setData(dataFromDB))
            .catch(err => console.log(err))
    },[])
    
    return (
        <>
        <Grid container wrap="nowrap">
        {
            data.length ?
            data.map(item =>(
                <Item
                    key={item.id}
                    title={item.title}
                    category={item.category}
                    imageProduct={item.img}
                    price={item.price} />
            ))  
            : <p>Cargando, espere unos segundos...</p> 
        }
        </Grid>
        </>
    )
}

export default ItemList;