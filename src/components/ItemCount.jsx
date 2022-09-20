import {ButtonGroup, Button} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";


const ItemCount = ({initial = 1, stock, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect (() =>{
        setCount(initial);
    },[initial]);

    const agregarUnidades = () =>{
        count<stock && setCount(count + 1);
    }

    const quitarUnidades = () =>{
        count>0 && setCount (count - 1);
    }
    
    return(
        <>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={quitarUnidades}>-</Button>
                <Button>{count}</Button>
                <Button onClick={agregarUnidades}>+</Button>
            </ButtonGroup>   
            {
                stock && count
                ?<Button variant="contained" onClick={ () => onAdd(count) }>Agregar</Button>
                :<Button variant="contained" disabled >Agregar</Button>
            }
        </>
    )
}

export default ItemCount;