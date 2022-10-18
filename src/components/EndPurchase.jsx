import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const EndPurchase = ({name, email, phone, orderId}) => {


    return (
        <section className="container-fin">
            <div>
                <h1>Gracias por comprar en Tienda Rey</h1>
                <h2>DATOS DE LA COMPRA</h2>
                <p>Nombre: {name}</p>
                <p>Email: {email}</p>
                <p>Teléfono: {phone}</p>
                <p>ID de compra: {orderId}</p>
            </div>
            <div>
                <Button variant="contained"><Link style={{textDecoration:"none"}} to="/">CERRAR</Link></Button>
            </div>
        </section>
    )
}

export default EndPurchase;