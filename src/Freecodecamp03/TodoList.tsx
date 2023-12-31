import { motion } from 'framer-motion';
import { SiStarship } from 'react-icons/si';
import { TodoItem } from './TodoItem';
import { TTodoState } from './TodoStore';
import { useSelector } from 'react-redux';
export default function TodoList() {
  // const todos = useStore<ITodo[]>().getState();
  const todos = useSelector((state: TTodoState) => state.todos);
  if (!todos.length) {
    return (
      <div className="m-auto max-w-lg px-5">
        <h1 className="flex flex-col items-center gap-5 rounded-xl bg-zinc-900 px-5 py-10 text-center text-xl font-bold text-white">
          <SiStarship />
          You have nothing to do!
        </h1>
      </div>
    );
  }
  return (
    <motion.ul className="m-auto grid max-w-lg gap-2 px-5">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </motion.ul>
  );
}
