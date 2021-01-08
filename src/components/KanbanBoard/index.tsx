import React, { useEffect, useState } from 'react';
import {
  DragDropContext,
  Droppable,
  DropResult
} from 'react-beautiful-dnd';

import {
  MdAdd,
  MdMoreVert
} from 'react-icons/md';
import api from '../../services/api';

import {
  ContentBoard,
  AddToDo,
} from './styles';

import {
  useParams
} from "react-router-dom";

import ToDo, { Todo } from './ToDo';
import Tasks, { TaskProps } from './Task';

interface Params {
  id?: string;
}

const KanbanBoard: React.FC = () => {
  const [todos, setTodos] = useState<[Todo]>();
  const [tasks, setTasks] = useState<[TaskProps]>(); // Gonna be use this for reoder itens on interface
  const { id } = useParams<Params>();

  useEffect(() => {
    async function loadToDos() {
      const response = await api.get("/project-api/todos/", {
        params: {
          'group': id,
        }
      });
      setTodos(response.data);
      // console.log(todos);
    };
    loadToDos();

  }, []);

  if (!todos) { // TODO User this for cache load in future
    return <p style={{ margin: 80 }}>Carregando...</p>
  }

  const onDragEnd = async (result: DropResult) => {
    console.log(result);
    
    if (!result.destination) return;
    const { draggableId } = result;
    const { destination } = result;
    const realDestination = destination?.index ? destination?.index + 1 : result.source.index;
    const response = await api.post(`/project-api/todos/${draggableId}/move/`, {
      "order": realDestination
    });

    const items = todos
    const [reoderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reoderedItem);

    setTodos(items);
    
    // console.log(todos);
  }

  return (
      <DragDropContext onDragEnd={(results) => onDragEnd(results)} >
        <Droppable 
          droppableId="all-colluns" 
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <ContentBoard 
              {...provided.droppableProps} 
              ref={provided.innerRef}
            >
              {todos?.map((iten, index) => (
                <ToDo 
                  key={iten.id}
                  name={iten.name}
                  order={iten.order}
                  created_at={iten.created_at}
                  tasks={iten.tasks}
                  id={iten.id}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <AddToDo>Nova Lista <MdAdd /></AddToDo>
            </ContentBoard>
          )}
        </Droppable>
      </DragDropContext>
  );
}

export default KanbanBoard;