import styled from "styled-components";

export const SubMenu = styled.div`
    height: 4rem;
    width: 100%;
    background: var(--color-submenu-barra);
    display: flex;
    flex-direction: row;

    h3 {
        color: var(--color-text-barra);
        font-size: 1.8rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        cursor: pointer;

        svg {
            height: 2.2rem;
            width: 2.2rem;
        }
    }
    
`;

export const Container = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: flex-end;
    align-items: flex-end;
    button {
        height: 2.6rem;
        width: 8.2rem;
        padding: 2px;
        border: 0;
        background: var(--color-btn-submenu);
        color: var(--color-text-btn-submenu);
        font-size: 1.4rem;
        font-weight: bold;
        cursor: pointer;   
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.7rem;

        svg {
            height: 1.8rem;
            width: 1.8rem;
        }
    }
`;

export const ContentBoard = styled.div`
    min-height: 50rem;
    width: 100%;
    // border: 2px solid red;
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const ContentToDo = styled.div`
    min-height: 45rem;
    width: 25rem;
    background: var(--color-todo-background);
    //box-shadow: -2px 2px 4px rgba(149, 152, 153, 0.21);
    border-radius: 4px;  
`;