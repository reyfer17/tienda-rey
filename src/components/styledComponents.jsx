import styled from "styled-components";


const Wrapper = styled.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    `;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
    `;

const Logo = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    font-style: italic;
    color: red;
    &:hover { 
        color: yellow ;
        font-size: 4.1rem;}
    &:visited { 
        color: yellow ;
        font-size: 4.1rem;}
    &:active { 
        color: yellow ;
        font-size: 4.2rem;}
    `;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `;

const MenuItem = styled.div`
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: 25px;
    &:hover { 
        color: yellow ;
        font-size: 4.1rem;}
    &:visited { 
        color: yellow ;
        font-size: 4.1rem;}
    &:active { 
        color: yellow ;
        font-size: 4.2rem;}
    `;

const DetailTitle = styled.h1`
    font-size: 50px;
    text-align: center;
    text-decoration: underline;
    `;

const DetailDetail = styled.p`
    font-size: 20px;
    text-align: justify;
    `;

const DetailPrice= styled.p`
    font-size: 40px;
    color: blue;
    font-style: oblique;
    text-align: right;
    `;

const DetailStock= styled.p`
    font-size: 20px;
    color: violet;
    font-style: oblique;
    text-align: right;
    `;

const ItemCountContainer= styled.div`
    font-size: 20px;
    color: violet;
    font-style: oblique;
    margin-top:200px;
    `;

const CartDetail = styled.div`
    display:grid;
    grid-auto-flow:column;
    grid-template-columns:25% 20% 20% 15% 15% 5%;
    margin:1% 25%;
    padding: 0% 3%;
    border: solid;
    border-radius: 10px;
    text-align: center;
    font-size: 80%;
    `;

const CartDetailTitle = styled.div`
    display:grid;
    grid-auto-flow:column;
    grid-template-columns:25% 20% 20% 15% 15% 5%;
    margin:1% 25%;
    padding: 0% 3%;
    text-align: center;
    font-size: 90%;
    p {
        color: purple;
        text-decoration: underline;
        font-weight: bold;
    };
    `

const CartResume = styled.div`
    display:grid;
    grid-auto-flow:column;
    grid-template-columns:75% 25%;
    margin:1% 25%;
    padding: 0% 3%;
    text-align: center;
    font-size: 150%;
    background-color: purple;
    border-radius: 10px;
    p {
        color: white;
        font-weight: bold;
        font-style: oblique;
    };
    `

const CartOptions = styled.div`
    display:grid;
    grid-auto-flow:column;
    grid-template-columns:33% 33% 33%;
    margin:1% 25%;
    padding: 0% 3%;
    text-align: center;
    `;

const CartEmpty = styled.h2`
    display:grid;
    grid-auto-flow:column;
    grid-template-columns:100%;
    margin:1% 25%;
    padding: 0% 3%;
    text-align: center;
    color: red;
    font-weight: bold;
    font-style: oblique;
    font-size: 300%;
    `;

const CartOptionsAlt = styled.div`
    display:grid;
    grid-auto-flow:column;
    grid-template-columns:100%;
    margin:1% 25%;
    padding: 0% 3%;
    text-align: center;
    `;

    const CartTitle = styled.h1`
    font-size: 300%;
    display:grid;
    grid-auto-flow:column;
    grid-template-columns:100%;
    margin:1% 25%;
    padding: 0% 3%;
    text-align: center;
    `;

export { CartDetail, CartDetailTitle, CartResume, CartOptions, CartEmpty, CartOptionsAlt, CartTitle, Wrapper, Logo, MenuItem, Left, Center, Right, DetailTitle, DetailDetail, DetailPrice, DetailStock, ItemCountContainer };