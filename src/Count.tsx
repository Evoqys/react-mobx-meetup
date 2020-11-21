import React from "react";
import {counterStore} from "./CounterStore";
import {observer} from "mobx-react";


// export const Count: React.FC<{count: number}> = (props) => {
//     return <div>{props.count}</div>;
// };


export const Count: React.FC = observer(() => {
    return <div>{counterStore.count}</div>
});
