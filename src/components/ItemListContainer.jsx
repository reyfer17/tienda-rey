import { useState, useEffect } from "react";
import ItemList from "./ItemList";
//import customFetch from "../utils/customFetch";
//import dataFromDB from "../utils/DB";
import { useParams } from "react-router-dom";
//import firestoreFetch from "../utils/firestoreFetch";
import { getAllItems as getProducts, getItemsByCategory as getProductsByCategory } from "../utils/firebaseconfig";


const ItemListContainer = () => {
    
    const [data, setData] = useState([]);
    const { idCategory } = useParams();

    useEffect (() =>{
        if(idCategory === undefined){
            getProducts().then( (res) => {
                setData(res)
            });
        } else{
            getProductsByCategory(idCategory).then((res)=>{
                setData(res);
            })
        }    
    },[idCategory]);
    
    return (
        <>
            <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;