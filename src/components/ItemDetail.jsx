
import * as React from 'react';
import ItemCount from './ItemCount';
import Grid from '@mui/material/Grid';
import { DetailTitle, DetailDetail, DetailPrice, DetailStock, ItemCountContainer} from "./styledComponents";

const ItemDetail = ({item}) => {
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
                    <img width={400} src={item.img}/>
                </Grid>
                <Grid item>
                  <ItemCountContainer>
                    <ItemCount component="div" stock={item.stock} inicial={1} titulo={item.title}/>
                  </ItemCountContainer>
                </Grid>
            </Grid>
        </>
    )
}

export default ItemDetail;