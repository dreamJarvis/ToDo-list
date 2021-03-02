// initial state
const initState = {
    todos: []
}

// state : depicts the state of the store
// action: it is the request made by the user on the store
const rootReducer = (state = initState, action)=>{
    if(action.type === 'ADD_POST'){
        const todos = state.todos ? ([...state.todos, action.payload]):([ action.payload]);

        // updating state
        return{
            ...state,
            todos:todos
        }
    }

    if(action.type === 'DELETE_POST'){
        const todoList = state.todos.filter((todo) => todo.id !== action.id);

        // updating state
        return{
            ...state,
            todos:todoList
        }
    }

    return state;
}

export default rootReducer;