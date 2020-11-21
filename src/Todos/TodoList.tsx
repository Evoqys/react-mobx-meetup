import React from "react";
import {observer} from "mobx-react";
import {todoStore} from "./TodoStore";
import {TodoView} from "./TodoView";

export const TodoList = observer(() => {
    const onNewTodo = () => {
        todoStore.addTodo(prompt('Enter a new todo:','I want a  Pizza')!);
    }

    return (
        <div style={{display: "flex", flexDirection:"column" , alignItems:"center"}}>
            <ul>
                { todoStore.todos.map(
                    (todo, idx) => <TodoView todo={ todo } key={ idx } />
                ) }
            </ul>
            <button onClick={ onNewTodo }>New Todo</button>
            <small> (double-click a todo to edit)</small>
            <TodoCompletedCount/>
        </div>
    );
});

const TodoCompletedCount: React.FC = observer(() => {
    return <div>{todoStore.completedTodosCount}</div>
});

