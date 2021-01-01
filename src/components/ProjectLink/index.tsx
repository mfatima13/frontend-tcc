import React, { useState } from 'react';
import { ProjectContainer, TrashButton } from './styles';
import RefactorDates from '../../utils/refectorDates';
import { Link } from 'react-router-dom';
import ModalDeleteProject from '../ModalDeleteProject';

interface ProjectProps {
  id: number;
  name: string;
  //modify_date: Date;
  create_date: Date;
}


const ProjectLink: React.FC<ProjectProps> = (props) => {
  const [showModalDelete, setShowModalDelete] = useState<Boolean>(false);

  const openModal = () => {
		setShowModalDelete(prev => !prev);
	};

  return (
    <>
      <ModalDeleteProject showModal={showModalDelete} setShowModal={setShowModalDelete} id={props.id}/>
      <ProjectContainer>
        <div>
          <Link to={`/project/${props.id}/`} key={props.id} style={{ textDecoration: 'none' }}>
            <h5>{props.name}</h5>
          </Link>
          <button onClick={openModal}>
            <TrashButton />
          </button>

        </div>
        <span>{RefactorDates(String(props.create_date))}</span>
        {props.children}
      </ProjectContainer>
    </>
  );
}

export default ProjectLink;