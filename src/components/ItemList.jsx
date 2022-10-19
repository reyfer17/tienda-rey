import Item from "./Item";
import Grid from '@mui/material/Grid';

const ItemList = ({data}) => {
    return(
        <>
            <Grid container>
            {
                data.length > 0 ?
                data.map(item =>(
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        categoryId={item.categoryCode}
                        imageProduct={item.img}
                        price={item.price}
                        stock={item.stock} />
                ))  
                : <p>Cargando, espere unos segundos...</p> 
            }
            </Grid>
        </>
    )
}

export default ItemList;