import {Wrapper} from "./styledComponents";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) =>{


    return (
        <>
            <Wrapper>{greeting}</Wrapper>
            <ItemCount stock={5} inicial={1}/>
        </>
    );
} 

export default ItemListContainer;