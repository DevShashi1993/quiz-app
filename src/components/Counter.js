import React from "react";
import { useSelector , useDispatch } from "react-redux";

const Counter =  () => {
    const {count} = useSelector(state => state.counterState);
    const dispatch = useDispatch();

    const incrementCount = () => {dispatch({type: "INCREMENT_COUNT"})};
    const decrementCount = () => {dispatch({type: "DECREMENT_COUNT"})};

    return (
        <>
            <h1>Counter</h1>
            <p>This is a simple example of a React component.</p>
            <p aria-live="polite">Current count: <strong>{count}</strong></p>
            <button type="button" className="btn btn-primary btn-lg" onClick={incrementCount}>Increment</button>
            <button type="button" className="btn btn-primary btn-lg" onClick={decrementCount}>Decrement</button>
        </>
    );
}

export default Counter;
