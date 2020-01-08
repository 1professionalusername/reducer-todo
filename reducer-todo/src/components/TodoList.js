import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/todoReducer";


// STEP 2 - Set up state in your component
//Using the `reducer` hook, set up state in your component.
const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState('');


    const handleChanges = e => {
        setNewTodo(e.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
    };
    return (
        <div>
            <div>
                {state.todos.map(todo => (
                    <p
                        key={todo.id}
                        className={`item${todo.completed ? ' completed' : ''}`}
                        onClick={() =>
                            dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
                        }
                    >
                        {todo.item}
                    </p>

                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='todo'
                    className='input'
                    onChange={handleChanges}
                />
                <button
                    type='submit'
                    onClick={() =>
                        dispatch({ type: 'ADD_TODO', payload: newTodo })
                    }
                >
                    Add New
            </button>
                <button onClick={() => dispatch({ type: 'CLEAR_TODO' })}>
                    Clear Completed
            </button>
            </form>
        </div>
    );
};

export default TodoList;