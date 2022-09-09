import { useState, useEffect } from "react";
import Item from "./Item";
import Grid from '@mui/material/Grid';

const ItemList = () => {
    const [data, setData] = useState([])
    useEffect(() =>{
        console.log("componente item se monto en el DOM")
        const dataFromDB = [
            {
                id: 1,
                title: "Pepa Pig",
                category: "juguetes",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YDA4KcHWfbfqMcyX-zHHVmr7uLv_o4S3Sg&usqp=CAU",
                price: 1000
            },
            {
                id: 2,
                title: "Bebe Lloron Unicornio",
                category: "juguetes",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgkthRSkxBeaLUc25KD3X1ZBxs94liLJ2eA&usqp=CAU",
                price: 6000
            },
            {
                id: 3,
                title: "El cisne negro",
                category: "libros",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DGYQecayirdInLi0ILG2b5QG_3ENmic3dKyLgYPAkxeaMgZOdKGwZrX0ywN9MI7t-jM&usqp=CAU",
                //img:'../images/cisnenegro.jpg',
                price: 500
            },
            {
                id: 4,
                title: "Remera One Piece",
                category: "ropa",
                img:"data:image/jpeg;base64,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",
                price: 700
            },
            {
                id: 5,
                title: "Existe la suerte?",
                category: "libros",
                img:"https://http2.mlstatic.com/D_NQ_NP_609199-MLA42925990381_072020-O.webp",
                price: 500
            }
        ];
        setData(dataFromDB);
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