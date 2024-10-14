import { createSlice,nanoid } from "@reduxjs/toolkit";

const intialState = {
    todos : [
        
    ]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState: intialState,
    reducers: {
        addTodo: (state,action) => {
            state.todos.push({id:nanoid(),title:action.payload,completed:false})
        },
        toggleComplete: (state,action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state,action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo:(state,action)=>{
            const todo = state.todos.find(todo => todo.id === action.payload )
            if(todo){
                todo.title = action.payload.title
            }
        }

    }
})

export const { addTodo,toggleComplete,deleteTodo,updateTodo } = todoSlice.actions;
export default todoSlice.reducer;