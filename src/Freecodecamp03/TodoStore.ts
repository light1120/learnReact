import { nanoid } from 'nanoid';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
}
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
    type: 'add' | 'delete' | 'edit' | 'updateStatus';
}
/**
 * 这里的state的结构需要普通对象，如果是数组，加上了redux-persist 有bug
 * @param state 
 * @param action 
 * @returns 
 */
function TodoReducer(state: TTodoState = { todos: [] }, action: ITodoAction) {
    // 数组的相关的操作，可能会影响到类型，必要的时候使用 as . 或者定义对象标注类型
    switch (action.type) {
        case 'add': {
            return {
                todos: [
                    ...state.todos || [],
                    {
                        id: nanoid(),
                        text: action.text,
                        status: 'undone',
                    },
                ] as ITodo[]
            };
        }
        case 'delete': {
            return {
                todos: state.todos.filter((todo) => todo.id !== action.id)
            }
        }
        case 'edit': {
            return {
                todos: state.todos.map((todo) => {
                    if (todo.id == action.id) {
                        todo.text = action.text || '';
                    }
                    return todo;
                })
            };
        }
        case 'updateStatus': {
            return {
                todos: state.todos.map((todo) => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            status: todo.status === 'undone' ? 'completed' : 'undone',
                        } as ITodo;
                    }
                    return todo;
                })
            }
        }
        default: {
            return state
        }
    }
}

const persistedReducer = persistReducer(persistConfig, TodoReducer)

// export const todoStore = createStore(TodoReducer)
export const todoStore = createStore(persistedReducer);
export const persistor = persistStore(todoStore);