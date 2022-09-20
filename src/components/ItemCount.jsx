import {ButtonGroup, Button} from "@mui/material";
import { useState } from "react";
import Swal from 'sweetalert2';

const ItemCount = ({inicial, stock, titulo}) => {
    const [unidadesACargar, setUnidadesACargar] = useState(inicial);
    
    const agregarUnidades = () =>{
        unidadesACargar<stock && setUnidadesACargar (unidadesACargar + 1);
    }

    const quitarUnidades = () =>{
        unidadesACargar>0 && setUnidadesACargar (unidadesACargar - 1);
    }
    const onAdd= () => {
        if(unidadesACargar===1){
        Swal.fire({
            title: 'Carga realizada',
            text: `Ha cargado ${unidadesACargar} unidad del producto "${titulo}"`,
            icon: 'success',
            confirmButtonText: 'OK!'
          })
        } else{
          Swal.fire({
            title: 'Carga realizada',
            text: `Ha cargado ${unidadesACargar} unidades del producto "${titulo}"`,
            icon: 'success',
            confirmButtonText: 'OK!'
          })
        }

    }
    
    return(
        <>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={quitarUnidades}>-</Button>
                <Button>{unidadesACargar}</Button>
                <Button onClick={agregarUnidades}>+</Button>
            </ButtonGroup>   
            {stock && unidadesACargar
            ?<Button variant="contained" onClick={onAdd}>Agregar</Button>
            :<Button disabled onClick={onAdd}>Agregar</Button>
            }
        </>
    )
}

export default ItemCount;