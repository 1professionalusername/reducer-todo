

export const initialState = [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
      
    export const todoReducer = (state, action) => {
      switch (action.type) {
          case "Add_Todo":
              return [
                ...state,
                  {
                item: action.payload,
                completed: false,
                id: new Date()
                  }];
  
          case "Toggle":
              let Clickedtoggle =
              state.map(item => {
                if (item.id === action.payload) {
                return {
                 ...item,
                 completed: !item.completed
                  }
                } else {
                 return item;
                 }
                 });
                 return Clickedtoggle;
                       
          case "Clear_Todo":
            let Clear =
            state.filter(item => {
             if (item.completed === true) {
                 return !item.completed
             }else{
                 return item
             }
           }
         )
         return Clear;           
  
      default:
              return state;
      };
  
  }