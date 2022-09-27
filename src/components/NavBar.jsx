import { AppBar, Divider, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from "./styledComponents";

const NavBar = () => {
  return (
    <>
      <AppBar position="relative">
        <Wrapper>
          <Left>
            <Link style={{textDecoration:"none"}} to="/"><Logo >TIENDA REY</Logo></Link>
          </Left>
          <Center> 
            <Link style={{textDecoration:"none"}} to="/category/1"><MenuItem>Juguetes</MenuItem></Link>
            <Link style={{textDecoration:"none"}} to="/category/2"><MenuItem>Libros</MenuItem></Link>
            <Link style={{textDecoration:"none"}} to="/category/3"><MenuItem>Ropa</MenuItem></Link>
          </Center>
          <Right>
          <List>
              <ListItem button>
                <ListItemText primary="Registrarse" secondary="nuevo usuario" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Loguearse" />
              </ListItem>
              <Divider light />
              <Link to="/cart" style={{textDecoration:"none"}} >
                <ListItem button>
                  <ListItemText secondary="en carrito" />
                  <CartWidget />
                </ListItem>
              </Link>
            </List>
          </Right>
        </Wrapper>
      </AppBar>
    </>
  );
}

export default NavBar;
