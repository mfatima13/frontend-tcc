import styled from 'styled-components';

export const ProjectContainer = styled.div`
    width: 24.0rem;
    height: 13.0rem;
    cursor: pointer;
   
    border-radius: 2px;
    background: var(--color-items);
    padding: 1rem;
    box-shadow: -2px 2px 7px rgba(172, 169, 169, 0.21), 
        2px -2px 7px rgba(179, 179, 179, 0.25);
    
    :hover {
            
        border: 0.5px solid var(--color-border-items);
    }
`;