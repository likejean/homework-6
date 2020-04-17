import React, {useState} from 'react';
import Main from './components/main';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import uuid from 'react-uuid';
import './App.css';
import isEmpty from './helpers/EmptyObject';
import ValidateUserInput from "./helpers/ValidateUserInputChange";


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

const initialErrors = {
    boardTitleError: {
        errors: '',
        inputStatus: false
    },
    taskTitleError: {
        errors: '',
        inputStatus: false
    },
    boardOrderError: {
        errors: '',
        inputStatus: false
    },
    taskDescriptionError: {
        errors: '',
        inputStatus: false
    },
    firstNameError: {
        errors: '',
        inputStatus: false
    },
    lastNameError: {
        errors: '',
        inputStatus: false
    }
}

function App() {

    const [note, setNote] = useState("");
    const [boards, setBoards] = useState(initialBoards);
    const [inputErrors, setInputErrors] = useState(initialErrors);
    const [boardsSchema, setBoardsSchema] = useState([...Array(initialBoards.length).keys()]);

    const handleCreateNewBoard2 = board => {
        let index = parseInt(board.order) - 1;
        if (isEmpty(board) !== true) {
            setBoards(boards => [
                ...boards.slice(0, index),
                Object.assign({},
                    {
                        ...board,
                        id: uuid(),
                        name: board.title.toLowerCase(),
                        tasks: []
                    }),
                ...boards.slice(index)
            ]);
            setBoards(boards => boards.map((board, id) => ({...board, order: id })));
            setBoardsSchema(boardsSchema => [...boardsSchema].concat(boards.length));
        }
    }


    const handleValidateUserInput2 = (input, name) => {
        if (name === 'board-order') setInputErrors(inputErrors => ({ ...inputErrors, boardOrderError: ValidateUserInput(name, input, boards.length)} ));
        if (name === 'board-title') setInputErrors(inputErrors => ({ ...inputErrors, boardTitleError: ValidateUserInput(name, input, boards.length)} ));
        if (name === 'task-title') setInputErrors(inputErrors => ({ ...inputErrors, taskTitleError: ValidateUserInput(name, input, boards.length)} ));
        if (name === 'task-description') setInputErrors(inputErrors => ({ ...inputErrors, taskDescriptionError: ValidateUserInput(name, input, boards.length)} ));
        if (name === 'first') setInputErrors(inputErrors => ({ ...inputErrors, firstNameError: ValidateUserInput(name, input, boards.length)} ));
        if (name === 'last') setInputErrors(inputErrors => ({ ...inputErrors, lastNameError: ValidateUserInput(name, input, boards.length)} ));
    }

    const handleResetAllErrors2 = () => setInputErrors(initialErrors);

    const handleEditTaskItem2 = e => {
        console.log(e.target.id);
    }

    const handleDeleteBoard2 = e => {
        let id = e.target.id;
        setBoards(boards => boards.filter(board => board.id !== id));
        setBoards(boards => boards.map((board, id) => ({...board, order: id })));
        setBoardsSchema(boardsSchema => [...boardsSchema].filter(elem => elem !== boards.length - 1));
    }


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
        )
        else setNote('This list is empty');
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
        const dragTask = boards.find(board => board.name === task_name).tasks.find(task => task.id === id);

        setBoards(boards => boards.map(board =>
            board.name === task_name && board_name !== null
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
        className === 'show' ? visible = true : visible = false;

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


    const handleEventProps = {
        createBoard: handleCreateNewBoard2,
        createTask: handleCreateNewTask2,
        moveTask: handleMoveTaskWithinBoard2,
        dragTask: handleDragAndDrop2,
        deleteTask: handleDeleteTaskItem2,
        hideTask: handleShowTaskItem2,
        showTask: handleShowTaskItem2,
        editTask: handleEditTaskItem2,
        deleteBoard: handleDeleteBoard2,
        validateInput: handleValidateUserInput2,
        resetErrors: handleResetAllErrors2
    };

    const handleStateProps = {
        boards: boards,
        boardMessage: note,
        errors: inputErrors,
        boardsSchema: boardsSchema
    };

    return <Main {...handleEventProps} {...handleStateProps} />

}

export default App;
