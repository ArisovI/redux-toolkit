import { createSlice } from "@reduxjs/toolkit";
import type { Todos } from "../../types/todos-types";

const initialState:Todos[] = []

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        createTodo: (state, action) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            return state.map((todo) => {
                if(todo.id === action.payload){
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        }
    },
})

export const { createTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;