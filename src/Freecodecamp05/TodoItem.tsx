import { motion } from 'framer-motion';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsCheck2Square } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { Input } from './Input';
import { useDispatch } from 'react-redux';
import { RootDispatch } from './TodoStore';
import { ITodo, del, edit, updateStatus } from './TodoStoreSlice';

export const TodoItem = (props: { todo: ITodo }) => {
  const { todo } = props;

  const [editingTodoText, setEditingTodoText] = useState<string>('');
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

  // const { deleteTodo, editTodo, updateTodoStatus } = useContext(TodoContext)!;
  const dispatch = useDispatch<RootDispatch>();

  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingTodoId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingTodoId]);

  const handleEdit = (todoId: string, todoText: string) => {
    setEditingTodoId(todoId);
    setEditingTodoText(todoText);
    editInputRef.current?.focus();
  };

  const handleUpdate = (todoId: string) => {
    if (editingTodoText.trim() !== '') {
      // editTodo(todoId, editingTodoText);
      dispatch({
        id: todoId,
        text: editingTodoText,
        type: edit().type,
      });
      setEditingTodoId(null);
      setEditingTodoText('');
      toast.success('');
    } else {
      toast.error('Todo cannot be empty');
    }
  };

  const handleUpdateCancel = () => {
    setEditingTodoId(null);
    setEditingTodoText('');
  };

  const handleDelete = (todoId: string) => {
    // deleteTodo(todoId);
    dispatch({
      id: todoId,
      type: del().type,
    });
    toast.success('Todo deleted successfully');
  };

  const handleStatusUpdate = (todoId: string) => {
    // updateTodoStatus(todoId);
    dispatch({
      id: todoId,
      type: updateStatus().type,
    });
    toast.success('Todo status updated successfully');
  };

  return (
    <motion.li
      layout
      className={cn(
        ' rounded-xl bg-zinc-900 p-5 ',
        todo.status == 'completed' && 'bg-opacity-50 text-zinc-500',
      )}
    >
      {editingTodoId === todo.id ? (
        <motion.div className="flex">
          <Input
            ref={editInputRef}
            type="text"
            value={editingTodoText}
            className=" mr-5  text-white"
            onChange={(e) => setEditingTodoText(e.target.value)}
          />
          <button
            className=" rounded-xl border-2 border-orange-900 bg-orange-900 px-5 py-2 text-sm font-normal text-orange-300 active:scale-95"
            onClick={() => handleUpdate(todo.id)}
          >
            Update
          </button>
          <button
            className=" ml-5 rounded-xl border-2 bg-white px-5 py-2 text-sm font-normal"
            onClick={() => handleUpdateCancel()}
          >
            Cancel
          </button>
        </motion.div>
      ) : (
        <div className="flex flex-col gap-5 text-white">
          <motion.span
            layout
            style={{
              textDecoration: todo.status == 'completed' ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </motion.span>
          <div className="flex justify-between gap-5 text-white">
            <button onClick={() => handleStatusUpdate(todo.id)}>
              {todo.status === 'undone' ? (
                <span className="flex items-center gap-1">
                  <BsCheck2Square />
                  Mark Completed
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <TbRefresh />
                  Mark Undone
                </span>
              )}
            </button>
            <div className="flex items-center gap-2">
              <button
                className="flex items-center gap-1"
                onClick={() => handleEdit(todo.id, todo.text)}
              >
                <FaRegEdit />
                Edit
              </button>
              <button
                className="flex items-center gap-1 text-red-500"
                onClick={() => handleDelete(todo.id)}
              >
                <RiDeleteBin7Line />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.li>
  );
};
