import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Ticket } from "./StyledComponents";

const EndPurchase = ({name, email, phone, orderId}) => {

    return (
        <Ticket>
            <div>
                <h1>Gracias por comprar en TIENDA REY</h1>
                <h2>DATOS DE LA COMPRA</h2>
                <p>Nombre: {name}</p>
                <p>Email: {email}</p>
                <p>Teléfono: {phone}</p>
                <p>Código de compra: {orderId}</p>
            </div>
            <div>
                <Button variant="outlined"><Link style={{textDecoration:"none"}} to="/">CERRAR</Link></Button>
            </div>
        </Ticket>
    )
}

export default EndPurchase;