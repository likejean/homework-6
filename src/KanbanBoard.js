import React, {useState, useEffect} from 'react';
import Main from './components/main';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import uuid from 'react-uuid';
import './App.css';
import isEmpty from './helpers/EmptyObject';
import SwapArrayElements from "./helpers/SwapArrayElements";
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

const initialPriorityTaskList = [
    {
        priority_level: 'high',
        order: 0,
        id: uuid(),
        tasks: []
    },
    {
        priority_level: 'low',
        order: 1,
        id: uuid(),
        tasks: []
    }
]

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

function KanbanBoard() {

    const [note, setNote] = useState("");
    const [boards, setBoards] = useState(initialBoards);
    const [inputErrors, setInputErrors] = useState(initialErrors);
    const [boardsSchema, setBoardsSchema] = useState([]);
    const [priorityTasks, setPriorityTasks] = useState(initialPriorityTaskList);
    const [editModalButtonClick, setEditModalButtonClick] = useState(false);
    const [searchEditTask, setSearchEditTask] = useState({});
    const [panelControlButtons, setPanelControlButtons] = useState({
        kanban_board: true,
        priority_board: false
    });

    useEffect(() => {
        async function getData() {
            const res = await fetch('http://localhost:3000/boards');
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
                    setBoardsSchema([...Array(data.boards.length).keys()]);
                })
                .catch(err => console.log(err));
        }

        getData()
            .then(() => console.log('Successfully rendered!'))
            .catch(() => console.log('Rendering failed'));
    }, []);


    const handleFindForEditTaskModal = e => {
        const name = e.target.getAttribute('name');
        const id = e.target.id;
        if (id) setSearchEditTask(boards.find(board => board.name === name).tasks.find(task => task.id === id));
        setEditModalButtonClick(!editModalButtonClick);
    }

    const handleToggleEditTaskModal = () => setEditModalButtonClick(!editModalButtonClick);

    const handleCreateNewBoard2 = board => {
        let index = parseInt(board.order) - 1;
        if (!isEmpty(board)) {
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
            setBoards(boards => boards.map((board, id) => ({...board, order: id})));
            setBoardsSchema(boardsSchema => [...boardsSchema].concat(boardsSchema.length));
        }
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
        boards.map((board) => (
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
        setBoards(boards => boards.map(board =>
                board.name === revised_task.board
                    ?
                    {
                        ...board,
                        tasks: board.tasks.map(old_task => old_task.id === revised_task.id
                            ? {...old_task, ...revised_task}
                            : old_task
                        )
                    }
                    :
                    board
            )
        );

        fetch(`http://localhost:3000/tasks/${revised_task.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(revised_task)
        }).then(res => {
            console.log(res.body);
        }).catch(err => {
            console.log(err);
        });
    };

    const handleDeleteBoard2 = e => {
        let id = e.target.id;
        setBoards(boards => boards.filter(board => board.id !== id));
        setBoards(boards => boards.map((board, id) => ({...board, order: id})));
        setBoardsSchema(boardsSchema => [...boardsSchema].filter(elem => elem !== boards.length - 1));

    };

    const handleCreateNewTask2 = task => {
        if (isEmpty(task) !== true) {
            fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...task, board: 'todo'})
            }).then(response => {
                response.json()
                    .then(data => {
                        const task = data.createdTask;
                        console.log(task);
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
                    })
            }).catch(err => {
                console.log(err);
            });
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
    };

    const handleDeleteTaskItem2 = e => {
        // setBoards(boards => boards.map(board =>
        //         board.name === e.target.getAttribute('name')
        //             ?
        //             {
        //                 ...board,
        //                 tasks: board.tasks.filter(task => task.id !== e.target.id)
        //             }
        //             :
        //             board
        //     )
        // );
        fetch(`http://localhost:3000/tasks/${e.target.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: e.target.id,
                board: e.target.getAttribute('name')
            })
        }).then(response => {
            response.json()
                .then(data => {
                    console.log(data)
                    const {deletedTask: { id, board_name }} = data;
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
                })

        }).catch(err => {
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

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


    const handleEventProps = {
        createBoard: handleCreateNewBoard2,
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
        boards: boards,
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