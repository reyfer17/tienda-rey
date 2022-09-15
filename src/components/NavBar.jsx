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
            <Link to="/"><Logo>TIENDA REY</Logo></Link>
          </Left>
          <Center> 
            <Link to="/category/1"><MenuItem>Juguetes</MenuItem></Link>
            <Link to="/category/2"><MenuItem>Libros</MenuItem></Link>
            <Link to="/category/3"><MenuItem>Ropa</MenuItem></Link>
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
              <ListItem button>
                <ListItemText secondary="en carrito" />
                <CartWidget />
              </ListItem>
            </List>
          </Right>
        </Wrapper>
      </AppBar>
    </>
  );
}

export default NavBar;
