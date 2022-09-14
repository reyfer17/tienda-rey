
import * as React from 'react';
import ItemCount from './ItemCount';
import Grid from '@mui/material/Grid';

const ItemDetail = ({item}) => {
    return(
        <>
            <Grid columns={3} container columnSpacing={4} wrap="nowrap" sx={{ marginLeft: 2, my:2, marginRight: 2 }}> 
                <Grid maxWidth={600} item>
                    <p>{item.title}</p>
                    <p>stock: {item.stock}</p>
                    <p>{item.detail}</p>
                    <p>PRECIO: ${item.price}</p>
                </Grid>
                <Grid item >
                    <img width={400} src={item.img}/>
                </Grid>
                <Grid item>
                    <ItemCount component="div" stock={item.stock} inicial={1} titulo={item.title}/>
                </Grid>
            </Grid>
        </>
    )
}

export default ItemDetail;