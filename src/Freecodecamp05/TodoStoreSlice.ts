import { nanoid } from 'nanoid';
import { createSlice } from "@reduxjs/toolkit";

export interface TTodoState {
    todos: ITodo[]
}
export interface ITodo {
    id: string;
    text: string;
    status: 'undone' | 'completed';
}
export interface ITodoAction {
    id?: string;
    text?: string;
    status?: 'undone' | 'completed';
    type: string;
}

export const TodoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    } as TTodoState,
    reducers: {
        add: (state, action: ITodoAction) => {
            state.todos.push({
                id: nanoid(),
                text: action.text || '',
                status: 'undone',
            })
        },
        delete: (state, action: ITodoAction) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.id)
        },
        edit: (state, action: ITodoAction) => {
            state.todos = state.todos.map((todo) => {
                return {
                    ...todo,
                    text: todo.id == action.id ? (action.text || '') : todo.text
                };
            })
        },
        updateStatus: (state, action: ITodoAction) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        status: todo.status === 'undone' ? 'completed' : 'undone',
                    } as ITodo;
                }
                return { ...todo };
            })
        }
    }
})

export const { add, delete: del, edit, updateStatus } = TodoSlice.actions