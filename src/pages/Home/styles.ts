import styled from 'styled-components';

export const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    margin: 0 8rem;
    min-height: 70%;
    //border: 2px solid red;

`;

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;

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

export const ProjectsList = styled.div`
    //border: 2px solid green;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 3rem 2rem;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: 2rem 4rem;
`;