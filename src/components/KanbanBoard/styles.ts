import styled from 'styled-components';

export const ContentBoard = styled.div`
    min-height: 50rem;
    width: 100%;
    // border: 2px solid red;
    padding: 2rem 5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
`;

export const AddToDo = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    height: 2.8rem;
    width: 12rem;
    border-radius: 12px;
    margin-left: 6rem;
    border: 1px solid #9E1946;
    color: #9E1946;
    font-weight: bold;
    background: var(--color-background);
    cursor: pointer;

    :hover {
        background: #D0C9D1;
    }

    :active {
        background: #E6E6E6;
    }
`;
