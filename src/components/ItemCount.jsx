import {ButtonGroup, Button} from "@mui/material";
import { useState } from "react";

const ItemCount = ({inicial, stock, onAdd}) => {
    const [unidadesACargar, setUnidadesACargar] = useState(inicial);
    
    const agregarUnidades = () =>{
        unidadesACargar<stock && setUnidadesACargar (unidadesACargar + 1);
    }

    const quitarUnidades = () =>{
        unidadesACargar>1 && setUnidadesACargar (unidadesACargar - 1);
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