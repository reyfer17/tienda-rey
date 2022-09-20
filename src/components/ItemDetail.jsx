import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import * as React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import Swal from 'sweetalert2';
import { DetailTitle, DetailDetail, DetailPrice, DetailStock, ItemCountContainer} from "./styledComponents";


const ItemDetail = ({item}) => {

    const [itemCount, setItemCount] = useState(0);
    
    const onAdd= (q) => {
        setItemCount(q);
        if(q===1){
        Swal.fire({
            title: 'Carga realizada',
            text: `Ha cargado ${q} unidad del producto "${item.titulo}"`,
            icon: 'success',
            confirmButtonText: 'OK!'
        })
        } else{
        Swal.fire({
            title: 'Carga realizada',
            text: `Ha cargado ${q} unidades del producto "${item.titulo}"`,
            icon: 'success',
            confirmButtonText: 'OK!'
        })
        }
    }

    return(
        <>
            <Grid columns={3} container columnSpacing={4} wrap="wrap" sx={{ marginLeft: 2, my:2, marginRight: 2 }}> 
                <Grid maxWidth={600} item>
                    <DetailTitle>{item.title}</DetailTitle>
                    <DetailDetail>{item.detail}</DetailDetail>
                    <DetailPrice>PRECIO: ${item.price}</DetailPrice>
                    <DetailStock>stock: {item.stock}</DetailStock>                  
                </Grid>
                <Grid item >
                    <img width={400} src={item.img} alt={item.title}/>
                </Grid>
                <Grid item>
                    <ItemCountContainer>
                    {
                        itemCount === 0
                        ? <ItemCount component="div" stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                        : <Link to="/cart" style={{textDecoration:"none"}} ><Button variant="contained">Ir al carrito</Button></Link>
                    }
                    </ItemCountContainer>
                </Grid>
            </Grid>
        </>
    )
}

export default ItemDetail;