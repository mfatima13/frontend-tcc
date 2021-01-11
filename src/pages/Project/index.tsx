import React, { useEffect, useState } from 'react';
import { MdDashboard, MdStarBorder } from 'react-icons/md';
import { FaCodeBranch, FaNetworkWired, FaUserFriends } from 'react-icons/fa';
import PageHeader from '../../components/PageHeader';
import KanbanBoard from '../../components/KanbanBoard';

import {
  useParams
} from "react-router-dom";

import api from '../../services/api';

import { 
  SubMenu, 
  ButtonsContainer, 
  Container
} from './styles';

interface Params {
  id?: string;
}

interface Proj {
  id?: number,
  name: string,
  create_date?: string,
  modify_date?: string,
  members?: [
    string
  ]
}

const Project: React.FC = () =>  {
  const [project, setProject] = useState<Proj>();
  const { id } = useParams<Params>();

  useEffect(() => {
    api.get(`/team-api/team/${id}/`).then((response) => {
      setProject(response.data);
    });
  }, [])
  
  return (
    <>
      <PageHeader />
      <SubMenu>

        <Container>
          <h3>{project?.name}<MdStarBorder /></h3>
          <ButtonsContainer>
            <button>Board <MdDashboard /></button>
            <button>Pull <FaCodeBranch /></button>
            <button>Team <FaUserFriends /></button>
            <button>Projeto <FaNetworkWired /></button>
          </ButtonsContainer>
        </Container>

      </SubMenu>
      <KanbanBoard />
    </>
  );
}

export default Project;