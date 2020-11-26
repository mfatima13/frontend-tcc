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
        cursor: pointer;
    }

    /*a:hover {
        background: var(--color-submenu-barra);
        height: 2.5rem;
        border-radius: 4px;
        transition: color 5ms;
    }*/

    svg {
        margin-left: 3px;
        height: 2.1rem;
        width: 2.2rem;
        color: var(--color-text-barra);
    }

`;

export const Dropdown = styled.div`

    margin-left: 2rem;
    //overflow: hidden;
    display: inline-block;
    position: relative;

    button {
        cursor: pointer;
        border: none;
        outline: none;
        background-color: inherit;
    }

    .dropdown-content {
        
        display: none;
        align-items: center;
        align-content: center;
        justify-items: center;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 10rem;
        min-height: 4rem;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 6;

        svg {
            margin-right: 0.4rem;
            height: 3.2rem;
            width: 2.1rem;
            color: var(--color-text-items);
            size: 1.3rem;
        }
    }

    .dropdown-content a {
        color: var(--color-text-items);
        margin: 1rem;
        font-size: 1.4rem;
        height: 3.2rem;
        border-radius: 0.4rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        row-gap: 0.7rem;
        
        :hover {
            color: var(--color-text-menu);
            background: var(--color-submenu-barra);
            svg {
                color: var(--color-text-menu);
                background: var(--color-submenu-barra); 
            }        
        }        
    }

    /*:hover .dropdown-content {
        display: block;
        //align-self: flex-start;
    } */

    :hover .dropdown-content {
        display: block;
    }
`;