import React, { useReducer } from "react";
import { initialState, Reducer } from "../reducers/Reducer";
import reducer from '../reducers/Reducer'



const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);




    return (
        <div>
            <h1>Some Stuff</h1>
        </div>
    )









}
export default TodoList;