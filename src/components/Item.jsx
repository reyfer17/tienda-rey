import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const Item = ({id, title, category, categoryID, imageProduct, price, stock}) => {
  return (
    <>
    <Card align="center" sx={{ width: 200, marginLeft: 0.5, my:5, marginRight: 2 }}>
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
        <Typography variant="body2" color="secondary">
          Categoría: {category}
        </Typography>
        <Typography variant= "h4" color="primary">
          ${price} 
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${id}`} style={{textDecoration:"none"}}><Button variant="contained" color="secondary" size="medium">Detalle</Button></Link>
      </CardActions>
    </Card>
  </>
  );
}

export default Item;