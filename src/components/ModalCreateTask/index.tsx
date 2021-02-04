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
  todoId: string;
  showModal: Boolean;
  setShowModal(Modal: Boolean): void;
}

interface TaskProps {
  name: string;
  description?: string;
  completed: false;
  priority: string;
	toDo: number;
}

interface Params {
  id?: string;
}

const ModalCreateToDo: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  todoId,
  ...rest
}) => {
  const [name, setName] = useState('');
  const [descricao, setDescricao] = useState('');
  const [priority, setPriority] = useState('');
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
    const res = await api.post('/project-api/task/', {
      name: name,
      description: descricao,
      completed: false,
      priority: priority,
      toDo: todoId,

    });
    console.log(res);
    setName("");
    setDescricao("");
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
              <h2>Crie uma nova Tarefa</h2>
              <div>
                <label htmlFor="">Dê um titulo para a tarefa:</label>
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor="">Agora faça uma descrição da tarefa:</label>
                <textarea id="" name="description" value={descricao} onChange={e => setDescricao(e.target.value)} />
                <label htmlFor="">Selecione uma cor para priorizar:</label>
                <input type="color" name="" id="" value={priority} onChange={e =>setPriority(e.target.value)}/>
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