import styled from 'styled-components';


export const Container = styled.div`
    margin: 6rem auto;
    height: 50rem;
    width: 110rem;
    // border: 1px solid red;
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;

    div.formContainer {
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }
    
`;

export const Img = styled.img`
    height: 40rem;
    width: 55rem;
    // border: 2px solid black;
`;

export const LabelLogin = styled.label`
    color: var(--color-text);
    font-size: 2.0rem;
`;

export const Input = styled.input`
    height: 4.0rem;
    width: 25rem;
    border: 0 solid;
    border-radius: 0.2rem;
    background: var(--color-input-login);
    padding: 0px 8px;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--color-text);

    :hover {
        border: 0.23rem solid var(--color-btn-login);
    }
    
    :focus {
        border: 0.23rem solid var(--color-btn-login);
    }
`;

export const FormLogin = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
    
    //align-items: center;
    justify-content: center;

    button {
        margin-top: 0.6rem;
        height: 4.0rem;
        width: 25rem;
        background: var(--color-btn-login);
        color: var(--color-text-btn-login);
        font-size: 1.8rem;
        font-weight: 700;
        border: 0 solid;
        border-radius: 2px;
    }

    button:hover {
        transition: 0.2s;
        background: var(--color-btn-login-dark);
    }

    span {
        color: var(--color-text);
        font-size: 1.6rem;
        font-weight: 600;
        font-style: italic;
        text-decoration: underline;
        cursor: pointer;
        margin-left: 10rem;
        //text-align: end;
    }   
`;

export const RegisterLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 80px;

    span {
        color: var(--color-text);
        font-size: 1.6rem;
        font-weight: 600;
        text-decoration: underline;
        text-align: center;
        cursor: pointer;    
        margin-bottom: 10px;
    }
    
`;
