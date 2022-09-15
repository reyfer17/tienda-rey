import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


const Item = ({id, title, category, categoryID, imageProduct, price, stock}) => {
  return (
    <>
    <Card sx={{ width: 200, marginLeft: 0.5, my:5, marginRight: 2 }}>
      <CardMedia
        component="img"
        height="220"
        src={imageProduct}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Categoría: {category}
        </Typography>
        <Typography color="text.secondary">
          ${price} 
        </Typography>
        <ItemCount component="div" stock={stock} inicial={1} titulo={title}/>
      </CardContent>
      <CardActions width="300">
        <Link to={`/item/${id}`}><Button size="medium">Detalle</Button></Link>
      </CardActions>
      <CardActions>
        <Button size="small">Compartir</Button>
      </CardActions>
    </Card>
  </>
  );
}

export default Item;