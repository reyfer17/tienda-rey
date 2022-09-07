import {ButtonGroup, Button} from "@mui/material";
import { useState } from "react";
import Swal from 'sweetalert2';

const ItemCount = ({inicial, stock}) => {
    const [unidadesACargar, setUnidadesACargar] = useState(inicial);
    
    const agregarUnidades = () =>{
        unidadesACargar<stock && setUnidadesACargar (unidadesACargar + 1);
    }

    const quitarUnidades = () =>{
        unidadesACargar>1 && setUnidadesACargar (unidadesACargar - 1);
    }
    const onAdd= () => {
        Swal.fire({
            title: 'Carga realizada',
            text: `Ha cargado ${unidadesACargar} unidades del producto`,
            icon: 'success',
            confirmButtonText: 'OK!'
          })
    }
    
    return(
        <>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={quitarUnidades}>-</Button>
                <Button>{unidadesACargar}</Button>
                <Button onClick={agregarUnidades}>+</Button>
            </ButtonGroup>   
            <Button onClick={onAdd}>Agregar</Button>
        </>
    )
}

export default ItemCount;