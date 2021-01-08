import React, { FormEvent, useRef, useState } from 'react';
import { useSpring } from 'react-spring';
import { mutate } from 'swr';
import api from '../../services/api';

import { Background, CloseModalButton, FormContainer, ModalWrapper } from './styles';

interface ModalProps {
  showModal: Boolean;
  setShowModal(Modal: Boolean): void;
}

interface TeamFormProps {
  name: string,
  create_date: Date,
  modify_date: Date,
  members: [],
}

const ModalCreateProject: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  ...rest
}) => {
  const [team, setTeams] = useState<TeamFormProps[]>();
  const [name, setName] = useState('');
  const [create_date, setCreate_date] = useState('');
  const [modify_date, setModify_date] = useState('');
  const [members, setMembers] = useState([]);

  const user = localStorage.getItem("token");

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

    const response = await api.post('/team-api/team/', {
      name,
      create_date,
      modify_date,
      members,
    });
    await api.post('/team-api/members/membership/', {
      "user" : user,
      "team" : response.data.id,
    })

    setName("");
    setShowModal(false);
    setTeams(response.data);
    // const id = response.data.id;
    mutate('/team-api/members/teams/', team); // The mutate update de cache relative for the url
    // console.log(response, res);
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
                <h2>Crie um novo Projeto</h2>
                <div>
                  <label htmlFor="">Qual o nome do projeto?</label>
                  <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                  <label htmlFor="">Agora faça uma breve descrição do projeto(Essa parte não esta funcionando):</label>
                  <textarea id="" name="description"/>
                  <button onClick={handleSubmit}>Criar</button>
                </div>

              </FormContainer>
            </ModalWrapper>
        </Background>

      ) : null}
    </>
  );
}

export default ModalCreateProject;