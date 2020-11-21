import React from "react";
import {Todo} from "./TodoModel";
import {observer} from "mobx-react";
import {runInAction} from "mobx";

export const TodoView: React.FC<{todo: Todo}> = observer(({todo}) => {
    const onToggleCompleted = () => {
        runInAction(() => {
            todo.completed = !todo.completed;
        });
    }

    const onRename = () => {
        todo.task = prompt('Task name', todo.task) || todo.task;
    }

    return (
        <li style={{margin: '10px'}} onDoubleClick={ onRename }>
            <input
                type='checkbox'
                checked={ todo.completed }
                onChange={ onToggleCompleted }
            />
            { todo.task }
        </li>
    );
});