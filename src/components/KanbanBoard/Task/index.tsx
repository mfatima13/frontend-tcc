import React from 'react';

import {
  Draggable,
} from 'react-beautiful-dnd';

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
  order: number;
  id: number;
  index: number;
}

const Task: React.FC<TaskProps> = (props) => {
  return (
    <Draggable draggableId={props.name} index={props.index}>
      {(provided) => (
        <Container 
          {...provided.draggableProps} 
          ref={provided.innerRef}>
          <LineCategory priority={props.priority} />
          <div>
            <h3 {...provided.dragHandleProps}>{props.name}</h3>
            <LineDiv />
            <p>
              {props.description}
            </p>
          </div>
        </Container>
      )}
    </Draggable>
  );
}

export default Task;