import React from 'react';
import { MdDashboard, MdStarBorder } from 'react-icons/md';
import { FaCodeBranch, FaNetworkWired, FaUserFriends } from 'react-icons/fa';
import PageHeader from '../../components/PageHeader';

import { 
  SubMenu, 
  ButtonsContainer, 
  Container, 
  ContentBoard,
  ContentToDo
} from './styles';

function Project() {
  return (
    <>
      <PageHeader />
      <SubMenu>
        <Container>

          <h3>Projeto tal <MdStarBorder /></h3>
          <ButtonsContainer>
            <button>Board <MdDashboard /></button>
            <button>Pull <FaCodeBranch /></button>
            <button>Team <FaUserFriends /></button>
            <button>Projeto <FaNetworkWired /></button>
          </ButtonsContainer>
        </Container>

      </SubMenu>
      <ContentBoard>
        <ContentToDo />
      </ContentBoard>
    </>
  );
}

export default Project;