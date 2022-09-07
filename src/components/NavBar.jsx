import { AppBar, Divider, List, ListItem, ListItemText } from "@mui/material";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from "./styledComponents";

const NavBar = () => {
  return (
    <>
      <AppBar position="relative">
        <Wrapper>
          <Left>
            <Logo>TIENDA REY</Logo>
          </Left>
          <Center>
            <MenuItem>Libros</MenuItem>
            <MenuItem>Juguetes</MenuItem>
            <MenuItem>Ropa</MenuItem>
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
