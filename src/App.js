import React, {useState} from 'react';
import Main from './components/main';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import uuid from 'react-uuid';
import './App.css';
import isEmpty from './helpers/EmptyObject';


const initialBoards = [
    {
        name: 'todo',
        order: 0,
        title: 'To-Do',
        id: uuid(),
        tasks: []
    },
    {
        name: 'in-progress',
        order: 1,
        title: 'In-Progress',
        id: uuid(),
        tasks: []

    },
    {
        name: 'review',
        order: 2,
        title: 'To-Review',
        id: uuid(),
        tasks: []

    },
    {
        name: 'done',
        order: 3,
        title: 'Completed',
        id: uuid(),
        tasks: []
    },
    {
        name: 'extra',
        order: 4,
        title: 'Extra',
        id: uuid(),
        tasks: []
    }
];

function App() {

    const [taskToDoList, setToDoTaskList] = useState([]);
    const [taskInProgressList, setTaskInProgressList] = useState([]);
    const [taskReviewList, setTaskReviewList] = useState([]);
    const [taskDoneList, setTaskDoneList] = useState([]);
    const [note, setNote] = useState("");

    const [boards, setBoards] = useState(initialBoards);
    const [boardLength, setBoardLength] = useState(initialBoards.length);


    const handleCreateNewTask2 = task => {
        if (isEmpty(task) !== true) setBoards(boards => boards.map(board =>
            board.name === 'todo'
                ?
                {
                    ...board,
                    tasks: board.tasks.concat(
                        {
                            ...task,
                            id: uuid(),
                            board: "todo",
                            visibility: true
                        }
                    )
                }
                :
                board
            )
        );
    };


    const handleMoveTaskWithinBoard2 = e => {
        const id = e.target.getAttribute('id');
        const direction = e.target.getAttribute('direction');
        const boardOrder = e.target.getAttribute('order');
        const movingTask = boards.find(board => board.order === parseInt(boardOrder)).tasks.find(task => task.id === id);

        ///remove a task....
        setBoards(boards => boards.map(board =>
            board.order === parseInt(boardOrder)
                ?
                {
                    ...board,
                    tasks: board.tasks.filter(task => task.id !== id)
                }
                :
                board
            )
        );

        ////Add a task......
        setBoards(boards => boards.map(board =>
            board.order === parseInt(boardOrder) + 1 && direction === 'right'
                ?
                {
                    ...board,
                    tasks: board.tasks.concat({...movingTask, board: board.name})
                }
                : board
            )
        );
        setBoards(boards => boards.map(board =>
            board.order === parseInt(boardOrder) - 1 && direction === 'left'
                ?
                {
                    ...board,
                    tasks: board.tasks.concat({...movingTask, board: board.name})
                }
                : board
            )
        );
    };

    const handleDragAndDrop2 = (board_name, task_name, id) => {
        console.log(board_name, task_name, id);
        const dragTask = boards.find(board => board.name === task_name).tasks.find(task => task.id === id);
        console.log(dragTask)
        setBoards(boards => boards.map(board =>
            board.name === task_name
                ?
                {
                    ...board,
                    tasks: board.tasks.filter(task => task.id !== id)
                }
                :
                board
            )
        );
        setBoards(boards => boards.map(board =>
                board.name === board_name
                ?
                {
                    ...board,
                    tasks: board.tasks.concat({...dragTask, board: board.name})
                }
                : board
            )
        );
    }

    const handleDeleteTaskItem2 = e => {
        setBoards(boards => boards.map(board =>
                board.name === e.target.getAttribute('name')
                    ?
                    {
                        ...board,
                        tasks: board.tasks.filter(task => task.id !== e.target.id)
                    }
                    :
                    board
            )
        );
    };

    const handleShowTaskItem2 = e => {
        let visible;
        const id = e.target.getAttribute('id');
        const name = e.target.getAttribute('name');
        const className = e.target.getAttribute('class').split(" ")[0];
        console.log(id, name, className);
        className === 'show' ? visible = true : visible = false;
        console.log(visible)
        setBoards(boards => boards.map(board =>
            board.name === name
                ?
                {
                    ...board,
                    tasks: board.tasks.map(task => task.id === id
                        ?
                        {
                            ...task,
                            visibility: visible
                        }
                        :
                        task
                    )
                }
                :
                board
            )
        );
    }

    /////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////

    const handleCreateNewTask = task => {
        if (isEmpty(task) !== true) setToDoTaskList(taskToDoList => [...taskToDoList, {
            ...task,
            id: uuid(),
            board: "todo",
            visibility: true
        }]);
        else setNote('This list is empty');
    };


    const handleMoveTaskWithinBoard = e => {
        const id = e.target.getAttribute('id');
        const name = e.target.getAttribute('name');
        //////////////...................................................
        if (name === 'right-todo') {
            setTaskInProgressList(taskInProgressList => taskInProgressList.concat({
                ...taskToDoList.find(task => task.id === id),
                board: "in-progress"
            }));
            setToDoTaskList([...taskToDoList].filter(task => task.id !== id));
        }
        if (name === 'left-in-progress') {
            setToDoTaskList(taskToDoList => taskToDoList.concat({
                ...taskInProgressList.find(task => task.id === id),
                board: "todo"
            }));
            setTaskInProgressList([...taskInProgressList].filter(task => task.id !== id));
        }
        ///////////////
        if (name === 'right-in-progress') {
            setTaskReviewList(taskReviewList => taskReviewList.concat({
                ...taskInProgressList.find(task => task.id === id),
                board: "review"
            }));
            setTaskInProgressList([...taskInProgressList].filter(task => task.id !== id));
        }
        if (name === 'left-review') {
            setTaskInProgressList(taskInProgressList => taskInProgressList.concat({
                ...taskReviewList.find(task => task.id === id),
                board: "in-progress"
            }));
            setTaskReviewList([...taskReviewList].filter(task => task.id !== id));
        }
        ///////////////
        if (name === 'right-review') {
            setTaskDoneList(taskDoneList => taskDoneList.concat({
                ...taskReviewList.find(task => task.id === id),
                board: "done"
            }));
            setTaskReviewList([...taskReviewList].filter(task => task.id !== id));
        }
        if (name === 'left-done') {
            setTaskReviewList(taskReviewList => taskReviewList.concat({
                ...taskDoneList.find(task => task.id === id),
                board: "review"
            }));
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
        if (board_name === 'in-progress') setTaskInProgressList(taskInProgressList => taskInProgressList.concat({
            ...taskObj,
            board: "in-progress"
        }));
        if (board_name === 'todo') setToDoTaskList(taskToDoList => [...taskToDoList].concat({
            ...taskObj,
            board: "todo"
        }));
        if (board_name === 'review') setTaskReviewList(taskReviewList => [...taskReviewList].concat({
            ...taskObj,
            board: "review"
        }));
        if (board_name === 'done') setTaskDoneList(taskDoneList => [...taskDoneList].concat({
            ...taskObj,
            board: "done"
        }));

    }

    const handleEditTaskItem = e => {



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
        if (name === 'todo') setToDoTaskList([...taskToDoList].map(task => task.id === id ? {
            ...task,
            visibility: visible
        } : task));
        if (name === 'in-progress') setTaskInProgressList([...taskInProgressList].map(task => task.id === id ? {
            ...task,
            visibility: visible
        } : task));
        if (name === 'review') setTaskReviewList([...taskReviewList].map(task => task.id === id ? {
            ...task,
            visibility: visible
        } : task));
        if (name === 'done') setTaskDoneList([...taskDoneList].map(task => task.id === id ? {
            ...task,
            visibility: visible
        } : task));

    };

    const handleEventProps = {
        createList: handleCreateNewTask2,
        moveTask: handleMoveTaskWithinBoard2,
        dragTask: handleDragAndDrop2,
        deleteTask: handleDeleteTaskItem2,
        hideTask: handleShowTaskItem2,
        showTask: handleShowTaskItem2,
        editTask: handleEditTaskItem
    };

    const handleStateProps = {
        boards: boards,
        taskToDoList: taskToDoList,
        taskInProgressList: taskInProgressList,
        taskReviewList: taskReviewList,
        taskDoneList: taskDoneList,
        boardMessage: note,
        boardLength: boardLength
    };

    return <Main {...handleEventProps} {...handleStateProps} />

}

export default App;
