import React, { FormEvent, useRef, useState } from 'react';
import { useSpring } from 'react-spring';
import { mutate } from 'swr';
import { format, compareAsc } from 'date-fns'
import api from '../../services/api';

import {
  useParams
} from "react-router-dom";


import { Background, CloseModalButton, FormContainer, ModalWrapper } from './styles';

interface ModalProps {
  showModal: Boolean;
  setShowModal(Modal: Boolean): void;
}

interface TodoForm {
  name: string;
  created_at?: string;
  id?: number;
  order?: number;
  tasks?: [];
  index: number;
}

interface Params {
  id?: string;
}

const ModalCreateToDo: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  ...rest
}) => {
  const [name, setName] = useState('');
  const { id } = useParams<Params>();

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
    const data = new Date();
    console.log(format(data, "yyyy-MM-dd"));
    
    // call api 
    const res = await api.post('/project-api/todos/', {
      "name": name,
      "group": id,
      "initDate": "",
      "endDate": format(data, "yyyy-MM-dd"),
      "order": null
    });
    console.log(res);
    

    setName("");
    setShowModal(false);
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
              <h2>Crie uma nova lista de Tarefas</h2>
              <div>
                <label htmlFor="">Dê um nome para sua lista:</label>
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor="">Agora faça uma breve descrição da lista:</label>
                <textarea id="" name="description" />
                <button onClick={handleSubmit}>Criar</button>
              </div>

            </FormContainer>
          </ModalWrapper>
        </Background>
      ) : null}


    </>
  );
}

export default ModalCreateToDo;