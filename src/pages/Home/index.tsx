import React from 'react';
import { MdAdd } from 'react-icons/md';
import PageHeader from '../../components/PageHeader';
import ProjectLink from '../../components/ProjectLink';

import {
  Section,
  BtnContainer,
  ProjectsList
} from "./styles";

function Home() {
  return (
    <>
      <PageHeader />
      <Section>
        <BtnContainer>
          <button>
            <MdAdd />
                Novo
            </button>
          <hr />
        </BtnContainer>
        <ProjectsList>
          <ProjectLink />
          <ProjectLink />
          <ProjectLink />
          <ProjectLink />
          <ProjectLink />
        </ProjectsList>
      </Section>

      
    </>
  );
}

export default Home;