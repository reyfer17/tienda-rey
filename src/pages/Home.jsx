import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart";
import CartContextProvider from "../components/CartContext";
import NavBar from "../components/NavBar";
import CreateOrder from "../components/CreateOrder";

const Home = () => {
    return (
        <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/item/:idItem" element={<ItemDetailContainer />}/>
                <Route path="/category/:idCategory" element={<ItemListContainer />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/createOrder/" element={<CreateOrder/>} />
            </Routes>
        </BrowserRouter>
        </CartContextProvider>
    );
}

export default Home;