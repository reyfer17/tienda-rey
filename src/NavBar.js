import {AppBar} from "@material-ui/core";
import cartWidget from "./cartWidget";
import {Wrapper, Logo , MenuItem, Left, Center, Right} from "./styledComponents";

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
            <MenuItem><cartWidget/></MenuItem>
          </Right>
        </Wrapper>
      </AppBar>
    </>
  );
}

export default App;
