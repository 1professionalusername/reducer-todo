


export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },

    {
        item: 'Use reducers',
        completed: false,
        id: 3892987590
    },

    {
        item: 'Get reps with reducers',
        completed: false,
        id: 3892987591
    },

]

const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
        // //console.log(state)
        // return {
        //     ...state,
        //     item: action.payload,
        //     completed: false,
        //     id: new Date()

        // };

        default:
            return state;
    }
}
