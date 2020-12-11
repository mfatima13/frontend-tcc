import React, { FormEvent, useRef } from 'react';
import { useSpring } from 'react-spring';

import api from '../../services/api';
import { Background, CloseModalButton, FormContainer, ModalWrapper } from './styles';

interface ModalPropsDelete {
    showModal: Boolean;
    setShowModal(Modal: Boolean): void;
    id: number;
}

const ModalDeleteProject: React.FC<ModalPropsDelete> = ({
    showModal,
    setShowModal,
    id,
    ...rest
}) => {

    const modalRef = useRef(null);
    const animation = useSpring({
        config: {
            duration: 240
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    });

    const closeModal = (e: any) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const response = await api.delete(`/team-api/team/${id}/`);
        console.log(response);
        setShowModal(false);
        if (response.status === 204) {
            alert("Deletado com sucesso!");
        } else {
            setShowModal(false);
            alert("erro ao execultar a ação!");
        }
    }

    return (
        <>
            {showModal ? (

                <Background ref={modalRef} onClick={closeModal}>
                    <ModalWrapper style={animation}>
                        <CloseModalButton
                            aria-label="Close Modal"
                            onClick={() => (setShowModal(false))}
                        />
                        <FormContainer>
                            <label htmlFor="">Você desseja realmente excluir este projeto?
                                Lembre que esta é uma ação inreversivel!</label>
                            <div>
                                <button onClick={handleSubmit}>Sim</button>
                                <button onClick={() => (setShowModal(false))}>Não</button>
                            </div>
                        </FormContainer>
                    </ModalWrapper>
                </Background>

            ) : null}
        </>
    );
}

export default ModalDeleteProject;