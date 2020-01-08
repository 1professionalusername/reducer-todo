

// STEP 1 - Build a simple reducer and initial state

// In a folder called `reducers` add a reducer file and build out a simple reducer with just a default return for now
// In the same file, build your initial state object that has a list of todos similar to the one below
//Export both the reducer and the initial state object

export const initialState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
};

// STEP 3 - Adding todos

// Build a form to add todos to your list
// Build a function that will dispatch an action to add a new todo
// Write the `case` in your reducer for adding a todo (You can create a unique id with `new Date()`)

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        item: action.payload,
        completed: false,
        id: new Date()
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    //STEP 4 - Toggle the completed field

    // Build a function that will dispatch an action to toggle a todo's completed field
    // Invoke this new function when you click on a todo
    // Style your todo to somehow show that it is completed (be creative here!)
    // Write the `case` in your reducer for toggling the completed property
    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        todos: state.todos.map(todo => {

          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    // STEP 5 - Clearing completed todos

    // Build a function that will dispatch an action to filter out any completed todos
    // Invoke this new function when you click on a "Clear completed" button
    // Write the `case` in your reducer for filtering completed todos

    case 'CLEAR_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      }
    default:
      return state;
  }
};
