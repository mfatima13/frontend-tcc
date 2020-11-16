import React from 'react';
import { ProjectContainer } from './styles';
import ReduceLines from '../../utils/reduceLines';

// import { Container } from './styles';

const ProjectLink: React.FC = () => {

  const text = 'Initial description in this project   its so terible! Do you want to remake  please! helpe me, i nead this, is all inead, so please! make this and go '

  ReduceLines(text);
  return (
      <ProjectContainer>
        <h5>Projeto TCC 02</h5>
        <p>
          {ReduceLines(text)}
        </p>

        <span>20/10/2020</span>

      </ProjectContainer>
  );
}

export default ProjectLink;