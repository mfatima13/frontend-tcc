import React, { useEffect, useState } from 'react';
import {
  Droppable,
  Draggable,
} from 'react-beautiful-dnd';

import {
  MdAdd,
  MdMoreVert
} from 'react-icons/md';

import {
  ContentToDo,
  HeadToDo,
  TaskContent,
} from './styles';

import Task, { TaskProps } from '../Task';

export interface Todo {
  name: string;
  created_at: string;
  id: number;
  order: number;
  tasks?: [TaskProps];
  index: number;
}

const ToDo: React.FC<Todo> = (props) => {
  return (
    <Draggable draggableId={String(props.id)} index={props.index}>
      {(provided) => (
        <ContentToDo {...provided.draggableProps} ref={provided.innerRef}>
          <HeadToDo>
            <h4 {...provided.dragHandleProps}>
              {props.name}
              <button><MdAdd /> </button>
              <button><MdMoreVert /> </button>
            </h4>
          </HeadToDo>

          <Droppable droppableId={props.name} type="task">
            {(provided, snapshot) => (
              <TaskContent
                {...provided.droppableProps}
                ref={provided.innerRef}
                {...snapshot.isDraggingOver}
              >
                {props.tasks?.map((task, index) => (
                  <Task
                    index={index}
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    description={task.description}
                    priority={task.priority}
                    toDo={task.toDo}
                    order={task.order}
                    completed={task.completed}
                  />
                ))}
                {provided.placeholder}
              </TaskContent>
            )}
          </Droppable>

        </ContentToDo>
      )}
    </Draggable>
  );
}

export default ToDo;
