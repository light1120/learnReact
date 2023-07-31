import { nanoid } from 'nanoid';
import { createContext, useReducer } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export interface ITodo {
  id: string;
  text: string;
  status: 'undone' | 'completed';
}
interface ITodoAction {
  id?: string;
  text?: string;
  status?: 'undone' | 'completed';
  type: 'add' | 'delete' | 'edit' | 'updateStatus';
}

export interface ITodoContextProp {
  todos: ITodo[];
  dispath: React.Dispatch<ITodoAction>;
}

export const TodoContext = createContext<ITodoContextProp | undefined>(undefined);

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useLocalStorage<ITodo[]>('MyTodoApp', []);

  const [, dispath] = useReducer((todos: ITodo[], action: ITodoAction) => {
    const newTodos = TodoReducer(todos, action);
    setTodos(newTodos);
    return newTodos;
  }, todos);

  const value: ITodoContextProp = {
    todos,
    dispath,
  };

  return <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>;
};

function TodoReducer(todos: ITodo[], action: ITodoAction) {
  switch (action.type) {
    case 'add': {
      return [
        ...todos,
        {
          id: nanoid(),
          text: action.text,
          status: 'undone',
        },
      ] as ITodo[];
    }
    case 'delete': {
      return todos.filter((todo) => todo.id !== action.id);
    }
    case 'edit': {
      return todos.map((todo) => {
        if (todo.id == action.id) {
          todo.text = action.text || '';
        }
        return todo;
      });
    }
    case 'updateStatus': {
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            status: todo.status === 'undone' ? 'completed' : 'undone',
          } as ITodo;
        }
        return todo;
      });
    }
    default: {
      throw Error(`Unknown action: ${String(action.type)}`);
    }
  }
}
