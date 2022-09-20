import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/item/:idItem" element={<ItemDetailContainer />}/>
                <Route path="/category/:idCategory" element={<ItemListContainer />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Home;