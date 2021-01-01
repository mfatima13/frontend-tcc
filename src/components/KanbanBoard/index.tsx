import React, { useEffect, useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DragDropContext as DragDropContextTask,
  Droppable as DroppableTask,
  Draggable as DraggableTask,
  DropResult
} from 'react-beautiful-dnd';

import {
  MdAdd,
  MdMoreVert
} from 'react-icons/md';
import api from '../../services/api';

import {
  ContentBoard,
  ContentToDo,
  HeadToDo,
  TaskContent,
  AddToDo,
  taskIten,
} from './styles';

import {
  useParams
} from "react-router-dom";

import Task, { TaskProps } from './Task';

interface Todo {
  name: string;
  created_at: string;
  id: number;
  order: number;
  tasks: [TaskProps];
}

interface Params {
  id?: string;
}

const KanbanBoard: React.FC = () => {
  const [todos, setTodos] = useState<[Todo]>();
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

  const onDragEndToDo = async (result: DropResult) => {
    console.log(result);
    const { draggableId } = result;
    const { destination } = result;
    const realDestination = destination?.index ? destination?.index + 1 : result.source.index;
    // console.log(realDestination);
    const response = await api.post(`/project-api/todos/${draggableId}/move/`, {
      "order": realDestination
    });
    /*todos.map((todo) => {
      //console.log("id do todo", todo.id, "draggableId: ", Number(draggableId));
      // (todo.order = realDestination) && setTodos(todos) 
      if (todo.id === Number(draggableId)){
        const todoMoved = todo;
       } else { setTodos(todos) };
    });
    const dest = result.destination?.index | null;
    const todoMoved = todos[result.source.droppableId];
    const [removed] = todos.splice(result.source.index, 1);
    todos.splice(dest, 0, removed);
    setTodos({
      ...todos,
      [result.source.droppableId]: {
        ...todoMoved
      }
    });
    */
    console.log(todos);
  }

  return (
    <>
      <DragDropContext onDragEnd={(results) => onDragEndToDo(results)} >
        <Droppable droppableId={String(ContentBoard)} direction="horizontal">
          {(provided) => (
            <ContentBoard {...provided.droppableProps} ref={provided.innerRef}>
              { todos?.map((iten, index=iten.order) => (
                <Draggable key={iten.order} draggableId={String(iten.id)} index={index}>
                  {(provided) => (
                    <ContentToDo {...provided.draggableProps} ref={provided.innerRef}>
                      <HeadToDo {...provided.dragHandleProps}>
                        <h4>
                          {iten.name}
                          <button><MdAdd /> </button>
                          <button><MdMoreVert /> </button>
                        </h4>
                      </HeadToDo>

                      <DragDropContextTask onDragEnd={(results) => { console.log(results) }}>
                        <DroppableTask droppableId={String(TaskContent)}>
                          {(provided) => (
                            <TaskContent {...provided.droppableProps} ref={provided.innerRef}>
                              {iten.tasks?.map((task, index) => (
                                <DraggableTask key={task.id} draggableId={String(task.id)} index={index}>
                                  {(provided) => (
                                    <div {...provided.draggableProps} ref={provided.innerRef} 
                                      {...provided.dragHandleProps}>
                                      <Task                                    
                                        key={task.order}
                                        id={task.id}
                                        name={task.name}
                                        description={task.description}
                                        priority={task.priority}
                                        toDo={task.toDo}
                                        order={task.order}
                                        completed={task.completed}
                                      />
                                    </div>
                                  )}
                                </DraggableTask>
                              ))}
                            </TaskContent>
                          )}

                        </DroppableTask>

                      </DragDropContextTask>

                    </ContentToDo>
                  )}
                </Draggable>
              ))}
              <AddToDo>Nova Lista <MdAdd /></AddToDo>
              {provided.placeholder}
            </ContentBoard>
          )}
        </Droppable>
      </DragDropContext>

    </>
  );
}

export default KanbanBoard;