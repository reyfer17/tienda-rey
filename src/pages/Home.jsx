import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/item/:idItem" element={<ItemDetailContainer />}/>
                <Route path="/category/:idCategory" element={<ItemListContainer />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Home;