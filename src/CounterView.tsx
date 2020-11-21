import React from "react";
import {Count} from "./Count";
import {counterStore} from "./CounterStore";


const CounterView: React.FC = () => {

    return (
        <div>
            <Count/>
            <br/>
            <button onClick={() => counterStore.decrement()}>- </button>
            <button onClick={() => counterStore.increment()}>+</button>
        </div>
    );
};

export default CounterView;
