import styled from 'styled-components';

export const ContentToDo = styled.div`
    min-height: 47rem;
    width: 27rem;
    background: var(--color-todo-background);
    //box-shadow: -2px 2px 4px rgba(149, 152, 153, 0.21);
    border-radius: 4px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

export const HeadToDo = styled.div`

    width: 100%;
    height: 4rem;
    //border: 1px solid green;
    padding: 0.2rem;
    display: flex;
    flex-direction: row;
    gap: 3rem;
    
    h4 {
        font-size: 1.8rem;
        display: grid;
        grid-template-columns: 12fr 1fr 1fr;
        justify-content: center;
        align-items: center;  
        color: var(--color-todo-text);

        button {
            background: var(--color-todo-background);
            border: 0;
            height: 1.8rem;
            width: 1.8rem;
            cursor: pointer;
            margin-left: 0.8rem;
        }
    }

    svg {
        height: 1.8rem;
        width: 1.8rem;
    }
`;

export const TaskContent = styled.div`
    width: 100%;
    min-height: 14rem;
    //border: 1px solid green;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const taskIten = styled.div`
    margin: 0;
    padding: 0;
    border: 1px solid green;
`;