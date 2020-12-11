import styled from 'styled-components';

import { MdDelete } from "react-icons/md";

export const TrashButton = styled(MdDelete)`
    cursor: pointer;
    position: inherit;
    margin-right: 0;
    width: 20px;
    height: 20px;
    padding: 0;
    z-index: 10;
    color: var(--color-text-items);
    float: left;

    :hover {
        color: var(--color-hover-del);
    }
`;

export const ProjectContainer = styled.div`
    width: 24.0rem;
    height: 13.0rem;
    color: var(--color-text-items);
    text-decoration-color: none;
   
    border-radius: 2px;
    background: var(--color-items);
    padding: 1rem;
    box-shadow: -2px 2px 7px rgba(172, 169, 169, 0.21), 
        2px -2px 7px rgba(179, 179, 179, 0.25);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    //column-gap: 3rem;

    div {
        display: grid;
        grid-template-columns: 10fr 1fr;

        button {
            height: 25px;
            width: 25px;
            background: var(--color-items);
            border: 0;
        }
    }
    
    :hover {            
        border: 0.5px solid var(--color-border-items);
    }

    h5 {
        margin: 0;
        font-size: 1.6rem;
        color: var(--color-text-items);
        cursor: pointer;
    }

    span {
       // margin: 0;
        margin-top: 0.6rem;
        color: var(--color-text-items);
    }
`;