import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    background-color: var(--color-menu-barra);
`;

export const TopBar = styled.div`
    width: 90%;
    height: 8rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-barra);
    padding: 1.6rem 0;
`;

export const LogoBar = styled.div`
    span {
        font-size: 1.8rem;
        font-weight: bold;
    }
`;

export const ButtonsBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: var(--color-text-barra);
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 600;
        margin-left: 3rem;
        transition: color 4ms;
    }

    a:hover {
        background: var(--color-submenu-barra);
        height: 2.5rem;
        border-radius: 4px;
        transition: color 5ms;
    }

    svg {
        margin-left: 3px;
        height: 2.1rem;
        width: 2.2rem;
        color: var(--color-text-barra);
    }
`;

export const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    margin: 0 8rem;
    min-height: 70%;

`;

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    hr {
        margin: 3rem;
        width: 80%;
        background: var(--color-line);
    }

    button {
        height: 4.8rem;
        width: 8rem;
        background: var(--color-btn-new);
        border: 0;
        box-shadow: -2px 3px 3px rgba(173, 164, 164, 0.25);
        border-radius: 5px;
        color: var(--color-text-items);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        font-weight: bold;
    }

    button:hover {
        background: var(--color-btn-hover);
    }
    button:active {
        background: var(--color-btn-new-dark);
    }
`;