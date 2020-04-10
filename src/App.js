import React, { useState } from 'react';
import Main from './components/main';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import uuid from 'react-uuid';
import './App.css';
import isEmpty from './helpers/EmptyObject';


function App() {

    const [ taskToDoList, setToDoTaskList ] = useState([]);
    const [ taskInProgressList, setTaskInProgressList ] = useState([]);
    // const [ taskReviewList, setTaskReviewList] = useState([]);
    // const [ taskDoneList, setTaskDoneList] = useState([]);
    const [ note, setNote ] = useState("");

    const handleCreateNewTask = task => {
        if(isEmpty(task) !== true) setToDoTaskList(taskToDoList => [...taskToDoList, {...task, id: uuid(), board: "todo"}]);
        else setNote('This list is empty');
    }

    const handleMoveTaskWithinBoard = e => {
        const id = e.target.getAttribute('id');
        const name = e.target.getAttribute('name');
        if (name === 'right-todo') {
            // setSearches(searches => searches.concat(query))
            setTaskInProgressList(taskInProgressList => taskInProgressList.concat({...taskToDoList.find(task => task.id === id), board: "in-progress"}));
            setToDoTaskList([...taskToDoList].filter(task => task.id !== id));
        }
        if (name === 'left-in-progress') {
            // setSearches(searches => searches.concat(query))
            setToDoTaskList(taskToDoList => taskToDoList.concat({...taskInProgressList.find(task => task.id === id), board: "todo"}));
            setTaskInProgressList([...taskInProgressList].filter(task => task.id !== id));
        }
    }


    const handleEventProps = {
        createList: handleCreateNewTask,
        moveTask: handleMoveTaskWithinBoard
    }


    const handleStateProps = {
        taskToDoList: taskToDoList,
        taskInProgressList: taskInProgressList,
        boardMessage: note
    }

    return (
        <div>
            <Main {...handleEventProps} {...handleStateProps} />
        </div>
    );
}

export default App;
