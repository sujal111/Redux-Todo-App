import { ADD_TODO,REMOVE_TODO,EDIT_TODO } from "../constants";

export const addTodo=(todo)=>({type:ADD_TODO,payload:todo});

export const removeTodo=(todo)=>({type:REMOVE_TODO,payload:todoId})

export const editTodo=(todo)=>({type:EDIT_TODO,payload:todo})