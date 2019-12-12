import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/Reducer";



const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTitleText, setNewTitleText,] = useState('');


    const handleChanges = e => {
        setNewTitleText(e.target.value);
    };

    return (

        <div>
            <h1>Reducer Todos!</h1>
            {state.map(state => {
                return (
                    <div onClick={() => {
                        dispatch({ type: "Toggle", payload: state.id })
                    }} >
                        {state.item}
                    </div>
                )
            }
            )}

            <input
                className="Input"
                type="text"
                name="newTitle"
                value={newTitleText}
                onChange={handleChanges}
            />


            <button onClick={() => { dispatch({ type: "Add_Todo", payload: newTitleText }); }}>
                Add Item
        </button>


            <button onClick={() => { dispatch({ type: "Clear_Todo", payload: newTitleText }) }}>
                Clear Completed
        </button>
        </div>
    )
};

export default TodoList;