import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { animated } from 'react-spring';

export const Background = styled.div`
    margin: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    display: flex;
    justify-content: center;
`;

export const ModalWrapper = styled(animated.div)`
    margin-top: 10rem;
    width: 600px;
    height: 250px;
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
    margin: 6rem;
    gap: 1.5rem;

    div {
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
        justify-content: end;
        align-items: end;        
        margin-left: 30rem;

    }

    label {
        left: 0;
        font-size: 20px;
        font-weight: bold;
        color: var(--color-modal-label);
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
        width: 10rem;

        :hover {
            background: var(--color-btn-login-light);
        }
        :active {
            background: var(--color-btn-login-dark);
        }
    }
`;