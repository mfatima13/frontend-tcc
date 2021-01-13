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

import ModalCreateToDo from '../ModalCreateToDo';

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
  const [showModalCreateToDo, setShowModalCreateToDo] = useState<Boolean>(false);

  const openModal = () => {
    setShowModalCreateToDo(prev => !prev);
  };

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
    console.log("opa -> ", result);
    // ToDo ordered
    if (result.type === "column") {
      if (!result.destination) return;

      const { draggableId } = result;
      const { destination } = result;
      const realDestination = destination?.index ? destination?.index + 1 : result.source.index;
      console.log(realDestination);
      const items = todos
      await api.post(`/project-api/todos/${draggableId}/move/`, {
        "order": realDestination
      });
      // console.log(response);
      const [reoderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reoderedItem);

      setTodos(items);
    }

    // Task ordered

    if (result.type === "task") {
      console.log("task ->", result);
      //const {  } = result;
      const { draggableId } = result;
      const { destination } = result;
      const todoDestination = destination?.droppableId;
      const todoOrigin = result.source.droppableId;
      console.log("origin", todoOrigin);
      const position = destination?.index;
      const realDestination = position ? position + 1 : 1;
      console.log(draggableId, todoDestination, realDestination);
      todos.map((iten) => {
        if (iten.name === todoDestination) {
          // tasksOrigin.append(iten.tasks);
          setTasks(iten.tasks);
        }
        const tasksOrigin = tasks;
        console.log("entrou", tasks);
      });

      const task = tasks;
      const reoderedItem = task?.splice(result.source.index, 1);

    }
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

              <ModalCreateToDo showModal={showModalCreateToDo} setShowModal={setShowModalCreateToDo} />

              <AddToDo onClick={openModal}>Nova Lista <MdAdd /></AddToDo>
            </ContentBoard>
          )}
        </Droppable>
      </DragDropContext>

  );
}

export default KanbanBoard;