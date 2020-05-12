import React, {useState, useEffect, useRef} from 'react';
import Main from './components/main';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import uuid from 'react-uuid';
import jwt from 'jsonwebtoken';
import './App.css';
import isEmpty from './helpers/EmptyObject';
import SwapArrayElements from "./helpers/SwapArrayElements";
import ValidateUserInput from "./helpers/ValidateUserInputChange";


const initialPriorityTaskList = [
    {
        priority_level: 'high',
        id: uuid(),
        order: 0,
        tasks: []
    },
    {
        priority_level: 'low',
        order: 1,
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
};

const URI_local = 'http://localhost:8080';
//const URI_local = 'https://rest-api-server-kanban.herokuapp.com';

function KanbanBoard() {

    const [note, setNote] = useState("");
    const [loading, setLoading] = useState(true);
    const [boards, setBoards] = useState([]);
    const [userLogin, setUserLogin] = useState(false);
    const [inputErrors, setInputErrors] = useState(initialErrors);
    const [boardsSchema, setBoardsSchema] = useState([]);
    const [priorityTasks, setPriorityTasks] = useState(initialPriorityTaskList);
    const [editModalButtonClick, setEditModalButtonClick] = useState(false);
    const [searchEditTask, setSearchEditTask] = useState({});
    const [panelControlButtons, setPanelControlButtons] = useState({
        kanban_board: true,
        priority_board: false
    });
    const [serverResponseNote, setServerResponseNote] = useState('');

    //Pull the latest board order from the child component...
    const boardsRef = useRef();
    const setBoardOrderState = data => {
        boardsRef.current = data;
    };


    useEffect(() => {
        async function getData() {
            const res = await fetch(
                `${URI_local}/boards`);
            res.json()
                .then(data => {
                    setBoards(data.boards.map(board => (
                            {
                                id: board._id,
                                order: board.order,
                                name: board.name,
                                title: board.title,
                                tasks: board.tasks.map(task => ({
                                    id: task._id,
                                    visibility: true,
                                    task_title: task.title,
                                    location: task.location,
                                    task_description: task.description,
                                    task_priority: task.priority,
                                    board: task.board,
                                    first: task.first,
                                    last: task.last
                                }))
                            }
                        ))
                    );
                    setLoading(false);
                    setBoards(boards => boards.sort((a, b) => a.order - b.order));
                    setBoardsSchema([...Array(data.boards.length).keys()]);
                })
                .catch(err => console.log(err));
            setServerResponseNote('');
        };

        getData()
            .then(() => console.log('Successfully rendered!'))
            .catch(() => console.log('Rendering failed'));

        let store = JSON.parse(localStorage.getItem('login'));

        const isExpired = store => {
            if (store.token && jwt.decode(store.token)) {
                const now = new Date();
                return store.expiryDate < now.getTime();
            }
            return false;
        }
        if (store && store.token) {
            if(isExpired(store)) {
                console.log('Your login session expired!')
                setUserLogin(false);
                localStorage.clear();
            }
            else {
                setUserLogin(true);
            }
        }
    }, []);


    const handleUserLoginAuth = credentials => {
        fetch(`${URI_local}/users/login`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(credentials)
            })
            .then(response =>
                response.json()
                    .then(result => {
                    console.warn('result', result);
                    if (result.token) {
                        const now = new Date();
                        localStorage.setItem('login', JSON.stringify({
                                login: true,
                                token: result.token,
                                birthDate: now.getTime(),
                                tokenLife: jwt.decode(result.token).exp * 1000 - now.getTime(),
                                expiryDate: jwt.decode(result.token).exp * 1000
                            }
                        ));
                    } else {
                        localStorage.setItem('login', JSON.stringify({
                                login: false,
                                error: {
                                    message: result.message,
                                    description: result.description
                                }
                            }
                        ));
                    }
                    let store = JSON.parse(localStorage.getItem('login'));
                    if (store && store.token) {
                        setUserLogin(true);
                    }
                }))
            .catch(() => console.log('error occurred'))
    };

    const handleFindForEditTaskModal = e => {
        const name = e.target.getAttribute('name');
        const id = e.target.id;
        if (id) setSearchEditTask(boards.find(board => board.name === name).tasks.find(task => task.id === id));
        setEditModalButtonClick(!editModalButtonClick);
    }

    const handleToggleEditTaskModal = () => setEditModalButtonClick(!editModalButtonClick);

    const handleAddNewBoard2 = board => {
        console.log(board)
        if (!isEmpty(board)) {
            const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('login')).token;
            fetch(`${URI_local}/boards`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': bearer
                },
                body: JSON.stringify({
                    ...board,
                    order: board.order,
                    name: board.title.toLowerCase()
                })
            })
                .then(response => response.json())
                .then(result => {
                    const board = result.createdBoard;
                    if(board) {
                        console.log('NOTE: ', result.message);
                        setServerResponseNote(result.message);
                        setBoards(boards => [
                            ...boards.slice(0, board.order),
                            Object.assign({},
                                {
                                    ...board,
                                    order: board.order
                                }),
                            ...boards.slice(board.order)
                        ]);
                        setBoards(boards => boards.map((board, id) =>
                            board.order <= id ?
                                {
                                    ...board,
                                    order: id
                                }
                                :
                                {
                                    ...board,
                                    order: id + 1
                                }
                        ));
                        setBoardsSchema(boardsSchema => [...boardsSchema].concat(boardsSchema.length));

                        return [
                            ...boardsRef.current.slice(0, board.order),
                            Object.assign({},
                                {
                                    id: board.id,
                                    order: board.order,
                                    name: board.name
                                }),
                            ...boardsRef.current.slice(board.order)
                        ].map((board, id) =>
                            board.order <= id ?
                                {
                                    ...board,
                                    order: id
                                }
                                :
                                {
                                    ...board,
                                    order: id + 1
                                }
                        );
                    }else{
                        throw new Error('Your login session is expired or you do not have a permission to perform this operation!');
                    }
                })
                .then(data => {
                    fetch(`${URI_local}/boards`, {
                        method: 'PATCH',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(data)
                    })
                        .then(response => response.json())
                        .then(result => {
                            console.log('NOTE: ', result.message);
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
                .catch(err => {
                    console.log(err);
                });
        };
    }

    const handleInsertNewBoard2 = board => {
        const index = board.order - 1;
        console.log(board)
        if (!isEmpty(board)) {
            const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('login')).token;
            fetch(`${URI_local}/boards`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': bearer
                },
                body: JSON.stringify({
                    ...board,
                    order: index,
                    name: board.title.toLowerCase()
                })
            })
                .then(response => response.json())
                .then(result => {
                    const board = result.createdBoard;
                    if(board) {
                        console.log('NOTE: ', result.message);
                        setBoards(boards => [
                            ...boards.slice(0, index),
                            Object.assign({},
                                {
                                    ...board,
                                    order: index
                                }),
                            ...boards.slice(index)
                        ]);
                        setBoards(boards => boards.map((board, id) =>
                            board.order <= id ?
                                {
                                    ...board,
                                    order: id
                                }
                                :
                                {
                                    ...board,
                                    order: id + 1
                                }
                        ));
                        setBoardsSchema(boardsSchema => [...boardsSchema].concat(boardsSchema.length));

                        return [
                            ...boardsRef.current.slice(0, index),
                            Object.assign({},
                                {
                                    id: board.id,
                                    order: board.order,
                                    name: board.name
                                }),
                            ...boardsRef.current.slice(index)
                        ].map((board, id) =>
                            board.order <= id ?
                                {
                                    ...board,
                                    order: id
                                }
                                :
                                {
                                    ...board,
                                    order: id + 1
                                }
                        );
                    }else{
                        throw new Error('Your login session is expired or you do not have a permission to perform this operation!');
                    }
                })
                .then(data => {
                    fetch(`${URI_local}/boards`, {
                        method: 'PATCH',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(data)
                    })
                        .then(response => response.json())
                        .then(result => {
                            console.log('NOTE: ', result.message);
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
                .catch(err => {
                    console.log(err);
                });
        };
    };


    const handleValidateUserInput2 = (input, name) => {
        if (name === 'board_order') setInputErrors(inputErrors => ({
            ...inputErrors,
            boardOrderError: ValidateUserInput(name, input, boards.length)
        }));
        if (name === 'board_title') setInputErrors(inputErrors => ({
            ...inputErrors,
            boardTitleError: ValidateUserInput(name, input, boards.length)
        }));
        if (name === 'task_title') setInputErrors(inputErrors => ({
            ...inputErrors,
            taskTitleError: ValidateUserInput(name, input, boards.length)
        }));
        if (name === 'task_description') setInputErrors(inputErrors => ({
            ...inputErrors,
            taskDescriptionError: ValidateUserInput(name, input, boards.length)
        }));
        if (name === 'first') setInputErrors(inputErrors => ({
            ...inputErrors,
            firstNameError: ValidateUserInput(name, input, boards.length)
        }));
        if (name === 'last') setInputErrors(inputErrors => ({
            ...inputErrors,
            lastNameError: ValidateUserInput(name, input, boards.length)
        }));
    };

    const handleGeneratePriorityTasksList2 = () => {
        setPriorityTasks(initialPriorityTaskList);
        boards.map(board => (
                board.tasks.forEach(task => {
                    if (task.task_priority) return setPriorityTasks(priorityTasks =>
                        priorityTasks.map(list => list.priority_level === 'high'
                            ?
                            {
                                ...list,
                                tasks: list.tasks.concat({
                                    ...task,
                                    location: 'priority_list',
                                    priority_level: 'high'
                                })
                            }
                            :
                            list
                        ));
                    else return setPriorityTasks(priorityTasks =>
                        priorityTasks.map(list => list.priority_level === 'low'
                            ?
                            {
                                ...list,
                                tasks: list.tasks.concat({
                                    ...task,
                                    location: 'priority_list',
                                    priority_level: 'low'
                                })
                            }
                            :
                            list
                        ));
                })
            )
        );
        setPanelControlButtons({
                kanban_board: false,
                priority_board: true
            }
        );
    };

    const handleResetMainKanbanView = () => setPanelControlButtons({
            kanban_board: true,
            priority_board: false
        }
    );

    const handleResetAllErrors2 = () => setInputErrors(initialErrors);

    const handleSubmitNewTaskItems2 = revised_task => {
        fetch(`${URI_local}/tasks/${revised_task.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(revised_task)
        })
            .then(response => response.json())
            .then(data => {
                const new_task = data.updatedTask;
                setBoards(boards => boards.map(board =>
                    board.name === new_task.board
                        ?
                        {
                            ...board,
                            tasks: board.tasks.map(old_task =>
                                old_task.id === new_task.id
                                    ?
                                    {
                                        ...old_task,
                                        ...new_task
                                    }
                                    :
                                    old_task
                            )
                        }
                        :
                        board
                ));
            }).catch(err => {
            console.log(err);
        });
    };

    const handleDeleteBoard2 = e => {
        const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('login')).token;
        const data = boardsRef.current
            .filter(board => board.id !== e.target.id)
            .map((board, id) => ({...board, order: id}));
        fetch(`${URI_local}/boards/${e.target.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then((result, err) => {
                console.log('NOTE: ', result.message);
                if (err) throw new Error('Your login session is expired or you do not have a permission to perform this operation!')
                else {
                    const id = result.deletedBoard;
                    setBoards(boards => boards.filter(board => board.id !== id));
                }

            })
            .catch(err => {
                console.log(err);
            });
        setBoards(boards => boards.map((board, id) => ({...board, order: id})));
        setBoardsSchema(boardsSchema => [...boardsSchema].filter(elem => elem !== boards.length - 1));

    };

    const handleCreateNewTask2 = task => {

        const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('login')).token;

        if (isEmpty(task) !== true) {
            fetch(`${URI_local}/tasks`, {
                method: 'POST',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...task, board: 'todo'})
            })
                .then(response => response.json())
                .then(result => {
                    if (result.err) throw new Error('Your login session is expired or you do not have a permission to perform this action...');
                    else {
                        const task = result.createdTask;
                        console.log('NOTE: ', result.message);
                        setBoards(boards => boards.map(board =>
                            board.name === task.board
                                ?
                                {
                                    ...board,
                                    tasks: board.tasks.concat(
                                        {
                                            id: task._id,
                                            visibility: true,
                                            task_title: task.title,
                                            location: task.location,
                                            task_description: task.description,
                                            task_priority: task.priority,
                                            board: task.board,
                                            first: task.first,
                                            last: task.last
                                        }
                                    )
                                }
                                :
                                board
                        ));
                    }
                })
                .catch(err => console.log(err));
        } else setNote('This list is empty');
    };

    const handleSwapTasksWithinKanbanBoard2 = e => {
        const task_id = e.target.id;
        const direction = e.target.getAttribute('name');
        const board_name = e.target.getAttribute('board');
        setBoards(boards => [...boards].map(board => {
            if (board.name === board_name) {
                const index1 = board.tasks.findIndex(task => task.id === task_id);
                const tasks = direction === 'up'
                    ? SwapArrayElements(board.tasks, index1, index1 - 1)
                    : SwapArrayElements(board.tasks, index1, index1 + 1)
                return {...board, tasks}
            } else {
                return board;
            }
        }));
    };

    const handleSwapTasksWithinPriorityList2 = e => {
        const task_id = e.target.id;
        const direction = e.target.getAttribute('name');
        const list_priority_level = e.target.getAttribute('priority_level');

        setPriorityTasks(priorityTasks => [...priorityTasks].map(list => {
            if (list.priority_level === list_priority_level) {
                const index1 = list.tasks.findIndex(task => task.id === task_id);
                const tasks = direction === 'up'
                    ? SwapArrayElements(list.tasks, index1, index1 - 1)
                    : SwapArrayElements(list.tasks, index1, index1 + 1)
                return {...list, tasks}
            } else {
                return list;
            }
        }));
    };


    const handleMoveTaskBetweenBoards2 = e => {
        const id = e.target.getAttribute('id');
        const direction = e.target.getAttribute('direction');
        const boardOrder = e.target.getAttribute('order');
        const location = e.target.getAttribute('location');
        const task_priority = e.target.getAttribute('task_priority');
        let isTrueSet = (task_priority === 'true');
        let movingTask;
        location === 'kanban_board'
            ?
            movingTask = boards.find(board => board.order === parseInt(boardOrder)).tasks.find(task => task.id === id)
            :
            movingTask = priorityTasks.find(list => list.order === parseInt(boardOrder)).tasks.find(task => task.id === id);

        ///remove a task....

        location === 'kanban_board'
            ?
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
            )
            :
            setPriorityTasks(priorityTasks => priorityTasks.map(list =>
                    list.order === parseInt(boardOrder)
                        ?
                        {
                            ...list,
                            tasks: list.tasks.filter(task => task.id !== id)
                        }
                        :
                        list
                )
            );
        ////Add a task......

        location === 'kanban_board'
            ?
            direction === 'right'
                ?
                setBoards(boards => boards.map(board =>
                        board.order === parseInt(boardOrder) + 1
                            ?
                            {
                                ...board,
                                tasks: board.tasks.concat({...movingTask, board: board.name})
                            }
                            : board
                    )
                )
                :
                setBoards(boards => boards.map(board =>
                        board.order === parseInt(boardOrder) - 1
                            ?
                            {
                                ...board,
                                tasks: board.tasks.concat({...movingTask, board: board.name})
                            }
                            : board
                    )
                )
            :
            direction === 'right'
                ?
                setPriorityTasks(priorityList => priorityList.map(list =>
                        list.order === parseInt(boardOrder) + 1
                            ?
                            {
                                ...list,
                                tasks: list.tasks.concat({
                                    ...movingTask,
                                    priority_level: list.priority_level,
                                    task_priority: false
                                })
                            }
                            : list
                    )
                )
                :
                setPriorityTasks(priorityList => priorityList.map(list =>
                        list.order === parseInt(boardOrder) - 1
                            ?
                            {
                                ...list,
                                tasks: list.tasks.concat({
                                    ...movingTask,
                                    priority_level: list.priority_level,
                                    task_priority: true
                                })
                            }
                            : list
                    )
                );
        if (movingTask.location === 'priority_list')
            setBoards(boards => [...boards].map(board =>
                board.name === movingTask.board
                    ?
                    {
                        ...board,
                        tasks: board.tasks.map(task =>
                            task.id === movingTask.id
                                ?
                                {
                                    ...task,
                                    task_priority: !isTrueSet
                                }
                                :
                                task
                        )
                    }
                    : board
            ));
        if (location === 'kanban_board') fetch(`${URI_local}/boards/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                moveOutBoard: +boardOrder,
                moveInBoard: direction === 'left' ? +boardOrder - 1 : +boardOrder + 1
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err));
    };

    const handleDragAndDrop2 = (board_name, task_name, id) => {
        const dragTask = boardsRef.current.find(board => board.name === task_name).tasks.find(task => task.id === id);

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
        fetch(`${URI_local}/boards/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                moveOutBoard: +boardsRef.current.find(board => board.name === task_name).order,
                moveInBoard: +boardsRef.current.find(board => board.name === board_name).order
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err));

    };

    const handleDeleteTaskItem2 = e => {
        const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('login')).token;
        fetch(`${URI_local}/tasks/${e.target.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: e.target.id,
                board: e.target.getAttribute('name'),
                title: e.target.getAttribute('title')
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result.message);
                if (result.err) throw new Error('Your login session is expired or you do not have a permission to perform this operation!')
                else {
                    const { deletedTask: {id, board_name} } = result;
                    setBoards(boards => boards.map(board =>
                        board.name === board_name
                            ?
                            {
                                ...board,
                                tasks: board.tasks.filter(task => task.id !== id)
                            }
                            :
                            board
                    ));
                }
            })
            .catch(err => {
                console.log(err);
            });
        if (priorityTasks.length > 0) setPriorityTasks(priorityTasks.filter(task => task.id !== e.target.id));
    };

    const handleShowTaskItem2 = e => {
        let visible;
        const id = e.target.getAttribute('id');
        const name = e.target.getAttribute('name');
        const className = e.target.getAttribute('class').split(" ")[0];
        const location = e.target.getAttribute('location');
        const priority_level = e.target.getAttribute('priority_level');
        className === 'show' ? visible = true : visible = false;
        location === 'kanban_board'
            ?
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
            )
            :
            setPriorityTasks(priorityTasks => priorityTasks.map(list =>
                    list.priority_level === priority_level
                        ?
                        {
                            ...list,
                            tasks: list.tasks.map(task => task.id === id
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
                        list
                )
            )
    };

    const handleResetServerNotes = () => {
        console.log('Reset');
    }

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

    const handleEventProps = {
        insertBoard: handleInsertNewBoard2,
        addBoard: handleAddNewBoard2,
        createTask: handleCreateNewTask2,
        moveTask: handleMoveTaskBetweenBoards2,
        dragTask: handleDragAndDrop2,
        deleteTask: handleDeleteTaskItem2,
        hideTask: handleShowTaskItem2,
        showTask: handleShowTaskItem2,
        submitNewTaskItems: handleSubmitNewTaskItems2,
        deleteBoard: handleDeleteBoard2,
        validateInput: handleValidateUserInput2,
        resetErrors: handleResetAllErrors2,
        setBoardOrderState: setBoardOrderState,
        userLoginAuth: handleUserLoginAuth,
        resetServerNotes: handleResetServerNotes,
        swapTasks: {
            swapKanbanTasks: handleSwapTasksWithinKanbanBoard2,
            swapPriorityTasks: handleSwapTasksWithinPriorityList2
        },
        swapPriorityTasks: handleSwapTasksWithinPriorityList2,
        filterPriorityTasks: handleGeneratePriorityTasksList2,
        toggleEditModal: handleToggleEditTaskModal,
        findTaskForEdit: handleFindForEditTaskModal,
        resetMainKanbanView: handleResetMainKanbanView

    };

    const handleStateProps = {
        userLogin: userLogin,
        serverNote: serverResponseNote,
        boards: boards,
        loading: loading,
        priorityTasks: priorityTasks,
        boardMessage: note,
        errors: inputErrors,
        boardsSchema: boardsSchema,
        searchEditTask: searchEditTask,
        modalButtonClick: editModalButtonClick,
        panelControlButtons: panelControlButtons
    };

    return <Main {...handleEventProps} {...handleStateProps} />

}

export default KanbanBoard;