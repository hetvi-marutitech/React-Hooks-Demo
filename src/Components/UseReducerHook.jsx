import { useReducer } from "react";

const initialState = 0 ;

function CounterReducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
}

function UseReducerHook() {
    const [count, dispatch] = useReducer(CounterReducer, initialState);

    return (
        <div>
            <h2>Use Reducer Hook</h2>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "reset" })}>
                Reset
            </button>
        </div>
    );
}

export default UseReducerHook;