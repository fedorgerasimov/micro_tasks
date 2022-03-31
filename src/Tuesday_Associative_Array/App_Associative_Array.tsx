import React, {useState} from 'react';
import './App_Associative_Array.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";
import {log} from "util";


export type FilterValuesType = "all" | "active" | "completed";

export type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksObjectType = {
    [key: string]: Array<TaskType>
}

function App_Associative_Array() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodoListsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksObjectType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    const removeTask = (todolistID: string, id: string) => {
         setTasks( {...tasks, [todolistID]: tasks[todolistID].filter(t => t.id !== id)})
        //let filteredTasks = tasks.filter(t => t.id != id);
        //setTasks(filteredTasks);
    }

    const addTask = (todolistID: string, title: string) => {
        const newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks,   [todolistID]: [newTask,...tasks[todolistID]]})  // вначале делаем поверхностную копию, затем берём ключ и подставляем значение. В значение положили новую,а затем старые.
        //let task = {id: v1(), title: title, isDone: false};
        //let newTasks = [task, ...tasks];
        //setTasks(newTasks);
    }

    const changeStatus = (todolistID: string, taskId: string, IsDoneValue: boolean) => {
        console.log('check')
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(el => el.id === taskId ? {...el, isDone: IsDoneValue} : el)})
        //let task = tasks.find(t => t.id === taskId);
        //if (task) {
        //    task.isDone = isDone;}
        //setTasks([...tasks]);
    }

    const changeFilter = (todolistID: string ,value: FilterValuesType) => {
        console.log(todolistID)
        setTodolists(todolists.map(el => el.id === todolistID ? {...el,  filter: value} : el))  // используем map, так как если использовать find нужно будет делать ещё копию
        //setFilter(value);
    }


    const todolistComponents = todolists.map((el) => {
        let tasksForTodolist = tasks[el.id];
        if (el.filter === "active") {
            tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
        }
        if (el.filter === "completed") {
            tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
        }
        return (
            <Todolist
                key={el.id}
                todolistID={el.id} //нужен отдельный id только для todolistID1 или todolistID2
                todolists={el.id}
                title={el.title}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={el.filter}
            />
        )
    })


    return (
        <div className="App">
            {todolistComponents}
        </div>
    );
}

export default App_Associative_Array;
