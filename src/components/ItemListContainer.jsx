import {Wrapper} from "./styledComponents";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) =>{

    return (
        <>
            <Wrapper>{greeting}</Wrapper>
            <ItemList/>         
        </>
    );
} 

export default ItemListContainer;