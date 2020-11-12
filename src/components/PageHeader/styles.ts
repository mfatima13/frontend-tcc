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
