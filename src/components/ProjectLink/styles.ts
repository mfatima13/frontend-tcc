import styled from 'styled-components';

export const ProjectContainer = styled.div`
    width: 24.0rem;
    height: 13.0rem;
    cursor: pointer;
    color: var(--color-text-item);
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
    
    :hover {            
        border: 0.5px solid var(--color-border-items);
    }

    h5 {
        margin: 0;
        font-size: 1.6rem;
        color: var(--color-text-items);
    }

    span {
       // margin: 0;
        margin-top: 7.4rem;
        color: var(--color-text-items);
    }
`;