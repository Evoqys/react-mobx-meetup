import React from 'react';
import './App.css';
import CounterView from "./CounterView";
import {TodoList} from './Todos/TodoList';
import {configure} from "mobx";

configure({enforceActions: true});
function App() {
    return (
        <div className="App">
            <h1>Hello Mobx</h1>
            <h2>Todo</h2>
            <TodoList/>
            <br/>
        </div>
    );
}

export default App;
