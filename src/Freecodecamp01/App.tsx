// https://www.freecodecamp.org/news/typescript-tutorial-for-react-developers/#what-are-we-going-to-build
// Build a classic todo application
// 1、Add a todo item.
// 2、Edit a todo item.
// 3、Delete a todo item.
// 4、Mark a todo item as completed or not.
// 5、Storing todo items in the browser's local storage.
// 6、Displaying proper error messages when the user tries to add or edit a todo item with an empty title.

import { Toaster } from 'react-hot-toast';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';
export default function App() {
  return (
    <TodoProvider>
      <Toaster position="bottom-center" />
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}
