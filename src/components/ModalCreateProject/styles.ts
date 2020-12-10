import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { animated } from 'react-spring';

export const Background = styled.div`
    //margin: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const ModalWrapper = styled(animated.div)`
    margin-top: 0;
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #FFF;
    color: #000;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
    margin-top: 4rem;
    gap: 1.5rem;

    h2 {
        font-size: 24px;
        font-weight: bold;
        color: var(--color-modal-label);
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    label {
        left: 0;
        font-size: 20px;
        font-weight: bold;
        color: var(--color-modal-label);
    }

    input {
        height: 6rem;
        width: 50rem;
        background: var(--color-modal-input);
        border: 0;
        border-radius: 10px;
        font-size: 20px;
        color: var(--color-text);
        padding: 1.2rem 1.6rem;

    }

    textarea {
        width: 50rem;
        background: var(--color-modal-input);
        border: 0 solid;
        border-radius: 10px;
        font: 20px Roboto;
        color: var(--color-text);
        min-height: 16rem;
        max-height: 16rem;
        outline: 0;
        resize: vertical;
        padding: 1.2rem 1.6rem;
    }

    input:focus, textarea:focus {
        border: 2px solid var(--color-input-border);
    }

    button {
        margin-top: 2rem;
        background: var(--color-btn-login);
        color: var(--color-text-btn-login);
        font-size: 20px;
        font-weight: bold;
        border: 0 solid;
        border-radius: 10px;
        height: 6rem;
        width: 50rem;

        :hover {
            background: var(--color-btn-login-light);
        }
        :active {
            background: var(--color-btn-login-dark);
        }
    }
`;