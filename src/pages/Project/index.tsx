import React from 'react';

import PageHeader from '../../components/PageHeader';

import { SubMenu, ButtonsContainer, Container } from './styles';

function Project() {
  return (
    <>
      <PageHeader />
      <SubMenu>
        <Container>

          <h3>Projeto tal</h3>
          <ButtonsContainer>
            <button>Board</button>
            <button>Pull</button>
            <button>Team</button>
            <button>Calender</button>
          </ButtonsContainer>
        </Container>

      </SubMenu>
    </>
  );
}

export default Project;