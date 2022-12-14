import { AppBar, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from "./StyledComponents";

const NavBar = () => {
  return (
    <>
      <AppBar position="relative">
        <Wrapper>
          <Left>
            <Link style={{textDecoration:"none"}} to="/"><Logo >TIENDA REY</Logo></Link>
          </Left>
          <Center> 
            <Link style={{textDecoration:"none"}} to="/category/juguetes"><MenuItem>Juguetes</MenuItem></Link>
            <Link style={{textDecoration:"none"}} to="/category/libros"><MenuItem>Libros</MenuItem></Link>
            <Link style={{textDecoration:"none"}} to="/category/ropa"><MenuItem>Ropa</MenuItem></Link>
          </Center>
          <Right>
          <List>
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