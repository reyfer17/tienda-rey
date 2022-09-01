import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting= "Hola Mundo Item List Container!!!" />
        </>
    );
}

export default Home;