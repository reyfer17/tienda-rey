import { AppBar } from "@mui/material";
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
            <MenuItem>Registrarse</MenuItem>
            <MenuItem>Loguearse</MenuItem>
            <MenuItem><CartWidget/></MenuItem>
          </Right>
        </Wrapper>
      </AppBar>
    </>
  );
}

export default NavBar;
