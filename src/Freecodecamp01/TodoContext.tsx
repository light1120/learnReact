import { createContext } from 'react';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'usehooks-ts';

export interface ITodo {
  id: string;
  text: string;
  status: 'undone' | 'completed';
}

export interface ITodoContextProp {
  todos: ITodo[];
  addTodo: (todo: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  updateTodoStatus: (id: string) => void;
}

export const TodoContext = createContext<ITodoContextProp | undefined>(undefined);

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useLocalStorage<ITodo[]>('MyTodoApp', []);

  const addTodo = (text: string) => {
    const todo: ITodo = {
      id: nanoid(),
      text,
      status: 'undone',
    };
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: string) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    // setTodos 的参数类型是 React.SetStateAction<ITodo[]>
    // type SetStateAction<S> = S | ((prevState: S) => S);
    // setTodos 的参数类型就是 ITodo[] 类型， 或者 参数为 ITodo[] 返回结果也是 ITodo[] 的函数
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, text: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          todo.text = text;
        }
        return todo;
      });
    });
  };

  const updateTodoStatus = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === 'undone' ? 'completed' : 'undone',
          };
        }
        return todo;
      });
    });
  };

  const value: ITodoContextProp = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    updateTodoStatus,
  };

  return <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>;
};
