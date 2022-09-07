import {Wrapper} from "./styledComponents";
import ItemCount from "./ItemCount";
import Swal from 'sweetalert2';
import { useState } from "react";

const ItemListContainer = ({greeting}) =>{
    const onAdd= (q) => {
        //console.log(q)
        Swal.fire({
            title: 'Carga realizada',
            text: `Ha cargado ${q} unidades del producto`,
            icon: 'success',
            confirmButtonText: 'OK!'
          })
    }

    return (
        <>
            <Wrapper>{greeting}</Wrapper>
            <ItemCount stock={5} inicial={1} onAdd={onAdd}/>
        </>
    );
} 

export default ItemListContainer;