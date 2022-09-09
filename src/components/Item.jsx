import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from "./ItemCount";


const Item = ({title, category, imageProduct, price}) => {
  return (
    <>
    <Grid container wrap="nowrap">
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="200"
      width="50"
      src={imageProduct}
      alt={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Categoria: {category}
      </Typography>
      <Typography color="text.secondary">
         ${price} 
      </Typography>
      <ItemCount component="div" stock={5} inicial={1}/>
    </CardContent>
    <CardActions>
      <Button size="small">Compartir</Button>
      <Button size="small">Detalles</Button>
    </CardActions>
  </Card>
  </Grid>
  </>
  );
}

export default Item;