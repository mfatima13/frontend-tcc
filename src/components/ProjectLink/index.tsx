import React from 'react';
import { ProjectContainer } from './styles';
// import ReduceLines from '../../utils/reduceLines';
import RefactorDates from '../../utils/refectorDates';
import { Link } from 'react-router-dom';
import { title } from 'process';

// import { Container } from './styles';

interface ProjectProps {
  id: number;
	name: string;
	//modify_date: Date;
	create_date: Date;
}

const ProjectLink: React.FC<ProjectProps> = (props) => {

  // const text = 'Initial description in this project   its so terible! Do you want to remake  please! helpe me, i nead this, is all inead, so please! make this and go nkjkhgkj cjuygvujhy'

  // ReduceLines(text);
  // console.log(props.name);
  return (
      <Link to={`/project/${props.id}`} style={{textDecoration: 'none'}}>
        <ProjectContainer key={ props.id }>
          <h5>{ props.name }</h5>
         
          <span>{ RefactorDates(String(props.create_date)) }</span>
          {props.children}
        </ProjectContainer>
      </Link>
  );
}

export default ProjectLink;