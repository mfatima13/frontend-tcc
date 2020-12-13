import React from 'react';
import { MdMenu, MdAdd } from 'react-icons/md';

import {
    ContentBoard,
    ContentToDo,
    HeadToDo,
    TaskContent,
    AddToDo,
} from './styles';

import Task from './Task';

const KanbanBoard: React.FC = () => {
    return (
        <>
            <ContentBoard>
                <ContentToDo>
                    <HeadToDo>
                        <h4>
                            ToDo 
                            <button><MdAdd /> </button>
                            <button><MdMenu /> </button>
                        </h4>
                    </HeadToDo>
                    <TaskContent>
                        <Task></Task>
                        <Task></Task>
                    </TaskContent>

                </ContentToDo>
                <ContentToDo>
                    <HeadToDo>
                        <h4>
                            ToDo 
                            <button><MdAdd /> </button>
                            <button><MdMenu /> </button>
                        </h4>
                    </HeadToDo>
                    <TaskContent>
                        <Task></Task>
                        <Task></Task>
                    </TaskContent>

                </ContentToDo>
                <AddToDo>Nova Lista <MdAdd /></AddToDo>

            </ContentBoard>
        </>
    );
}

export default KanbanBoard;