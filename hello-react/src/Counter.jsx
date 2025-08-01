import { useState } from "react";

export function Counter() {
    let [index, setIndex] = useState(1);

    function increment() {
        const newValue = index + 1;
        setIndex(newValue);
        console.log(index);
    }

    function decrement() {
        const newValue = index - 1;
        setIndex(newValue);
        console.log(index);
    }

    return(
        <>
            <h2>Counter</h2>
            <h3>{index}</h3>
            <button onClick={increment}>+</button> <button onClick={decrement}>-</button>
        </>
    )
}