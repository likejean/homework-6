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
    const [ taskReviewList, setTaskReviewList] = useState([]);
    const [ taskDoneList, setTaskDoneList] = useState([]);
    const [ note, setNote ] = useState("");




    const handleCreateNewTask = task => {
        if(isEmpty(task) !== true) setToDoTaskList(taskToDoList => [...taskToDoList, {...task, id: uuid(), board: "todo", visibility: true}]);
        else setNote('This list is empty');
    }

    const handleMoveTaskWithinBoard = e => {
        const id = e.target.getAttribute('id');
        const name = e.target.getAttribute('name');
        //////////////
        if (name === 'right-todo') {
            setTaskInProgressList(taskInProgressList => taskInProgressList.concat({...taskToDoList.find(task => task.id === id), board: "in-progress"}));
            setToDoTaskList([...taskToDoList].filter(task => task.id !== id));
        }
        if (name === 'left-in-progress') {
            setToDoTaskList(taskToDoList => taskToDoList.concat({...taskInProgressList.find(task => task.id === id), board: "todo"}));
            setTaskInProgressList([...taskInProgressList].filter(task => task.id !== id));
        }
        ///////////////
        if (name === 'right-in-progress') {
            setTaskReviewList(taskReviewList => taskReviewList.concat({...taskInProgressList.find(task => task.id === id), board: "review"}));
            setTaskInProgressList([...taskInProgressList].filter(task => task.id !== id));
        }
        if (name === 'left-review') {
            setTaskInProgressList(taskInProgressList => taskInProgressList.concat({...taskReviewList.find(task => task.id === id), board: "in-progress"}));
            setTaskReviewList([...taskReviewList].filter(task => task.id !== id));
        }
        ///////////////
        if (name === 'right-review') {
            setTaskDoneList(taskDoneList => taskDoneList.concat({...taskReviewList.find(task => task.id === id), board: "done"}));
            setTaskReviewList([...taskReviewList].filter(task => task.id !== id));
        }
        if (name === 'left-done') {
            setTaskReviewList(taskReviewList => taskReviewList.concat({...taskDoneList.find(task => task.id === id), board: "review"}));
            setTaskDoneList([...taskDoneList].filter(task => task.id !== id));
        }
    };

    const handleDragAndDrop = (board_name, task_name, id) => {
        let taskObj = {};
        if (task_name === 'todo') {
            taskObj = taskToDoList.find(task => task.id === id);
            setToDoTaskList([...taskToDoList].filter(task => task.id !== id));
        }
        if (task_name === 'in-progress') {
            taskObj = taskInProgressList.find(task => task.id === id);
            setTaskInProgressList([...taskInProgressList].filter(task => task.id !== id));
        }
        if (task_name === 'review') {
            taskObj = taskReviewList.find(task => task.id === id);
            setTaskReviewList([...taskReviewList].filter(task => task.id !== id));
        }
        if (task_name === 'done') {
            taskObj = taskDoneList.find(task => task.id === id);
            setTaskDoneList([...taskDoneList].filter(task => task.id !== id));
        }
        if (board_name === 'in-progress') setTaskInProgressList(taskInProgressList => taskInProgressList.concat({...taskObj, board: "in-progress"}));
        if (board_name === 'todo') setToDoTaskList(taskToDoList => [...taskToDoList].concat({...taskObj, board: "todo"}));
        if (board_name === 'review') setTaskReviewList(taskReviewList => [...taskReviewList].concat({...taskObj, board: "review"}));
        if (board_name === 'done') setTaskDoneList(taskDoneList => [...taskDoneList].concat({...taskObj, board: "done"}));

    }

    const handleDeleteTaskItem = e => {
        const id = e.target.getAttribute('id');
        const name = e.target.getAttribute('name');

        //////////////
        if (name === 'todo') setToDoTaskList([...taskToDoList].filter(task => task.id !== id));
        if (name === 'in-progress') setTaskInProgressList([...taskInProgressList].filter(task => task.id !== id));
        if (name === 'review') setTaskReviewList([...taskReviewList].filter(task => task.id !== id));
        if (name === 'done') setTaskDoneList([...taskDoneList].filter(task => task.id !== id));
    }


    const handleShowTaskItem = e => {
        let visible;
        const id = e.target.getAttribute('id');
        const name = e.target.getAttribute('name');
        const className = e.target.getAttribute('class').split(" ")[0];
        className === 'show' ? visible = true : visible = false;
        if (name === 'todo') setToDoTaskList([...taskToDoList].map(task => task.id === id ? { ...task, visibility: visible } : task));
        if (name === 'in-progress') setTaskInProgressList([...taskInProgressList].map(task => task.id === id ? { ...task, visibility: visible } : task));
        if (name === 'review') setTaskReviewList([...taskReviewList].map(task => task.id === id ? { ...task, visibility: visible } : task));
        if (name === 'done') setTaskDoneList([...taskDoneList].map(task => task.id === id ? { ...task, visibility: visible } : task));

    };

    const handleEventProps = {
        createList: handleCreateNewTask,
        moveTask: handleMoveTaskWithinBoard,
        deleteTask: handleDeleteTaskItem,
        hideTask: handleShowTaskItem,
        showTask: handleShowTaskItem,
        dragTask: handleDragAndDrop
    };

    const handleStateProps = {
        taskToDoList: taskToDoList,
        taskInProgressList: taskInProgressList,
        taskReviewList: taskReviewList,
        taskDoneList: taskDoneList,
        boardMessage: note
    };

    return <Main {...handleEventProps} {...handleStateProps} />

}

export default App;
