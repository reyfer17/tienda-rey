import { useState, useEffect } from "react";
import Item from "./Item";
import Grid from '@mui/material/Grid';
import customFetch from "../utils/customFetch";
import dataFromDB from "../utils/DB";

const ItemList = () => {
    const [data, setData] = useState([])
    useEffect(() =>{
        customFetch(2000, dataFromDB)
            .then(datos => setData(dataFromDB))
            .catch(err => console.log(err))
    },[])
    
    return (
        <>
        <Grid container wrap="nowrap">
        {
            data.map(item =>(
                <Item
                    key={item.id}
                    title={item.title}
                    category={item.category}
                    imageProduct={item.img}
                    price={item.price} />
            ))   
        }
        </Grid>
        </>
    )
}

export default ItemList;