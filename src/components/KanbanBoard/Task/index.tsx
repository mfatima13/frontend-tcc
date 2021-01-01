import React from 'react';

import { 
  Container,
  LineDiv,
  LineCategory
} from './styles';

export interface TaskProps {
  name: string;
  description?: string;
  completed: false;
  priority: string;
	toDo: number;
  order?: number;
  id: number;
}

const Task: React.FC<TaskProps> = (props) => {
  return (
    <Container>
      <LineCategory priority={props.priority} />
      <div>
        <h3>{props.name}</h3>
        <LineDiv />
        <p>
          {props.description}
        </p>
      </div>
      
    </Container>
  );
}

export default Task;