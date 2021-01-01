import styled from 'styled-components';

interface TaskPriority {
    priority?: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #E0DFE2;
    min-height: 14rem;
    width: 100%;
    //border: 1px solid rgba(162, 159, 159, 0.9);
    border-radius: 4px;
    filter: drop-shadow(1px 1px 1px rgba(48, 48, 48, 0.11));

    div {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        padding: 0.8rem;
    }
`;

export const LineDiv = styled.hr`
    width: 100%;
    //color: var(--color-line);
    background: #8F8F8F;
`;

export const LineCategory = styled.hr<TaskPriority>`
    height: 0.7rem;
    width: 100%;
    background: ${props => props.priority};
    border-radius: 4px;
    border: 0;
`;