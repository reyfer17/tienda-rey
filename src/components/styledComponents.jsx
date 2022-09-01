import styled from "styled-components";

const Wrapper = styled.div`
    padding: 10px 20px;
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
    `;

const Logo = styled.h1`
    font.weight: bold;
    `;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    `;

export { Wrapper, Logo, MenuItem, Left, Center, Right };