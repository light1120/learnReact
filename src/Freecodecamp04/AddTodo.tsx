import { useEffect, useRef, useState } from 'react';
import { Input } from './Input';
import { toast } from 'react-hot-toast';
import { ITodoAction } from './TodoStore';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

export default function AddTodo() {
  const [input, setInput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  // const { addTodo } = useContext(TodoContext)!;
  const dispatch = useDispatch<Dispatch<ITodoAction>>();

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('form has been submited');
    if (input.trim() !== '') {
      // addTodo(input);
      dispatch({
        text: input,
        type: 'add',
      });
      setInput('');
      toast.success('add todo success!');
    } else {
      toast.error('todo cant be empty');
    }
  };

  useEffect(() => {
    // when first loaded , auto focus
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmission}>
      <div className="m-auto flex w-full max-w-lg items-center gap-2 border-zinc-600 p-5 placeholder:text-zinc-500">
        <Input
          type="text"
          ref={inputRef}
          placeholder="start typing...."
          className="w-full rounded-xl border-2 bg-transparent px-5 py-2 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-xl border-2 bg-blue-900 px-5 py-2 text-sm font-normal text-blue-300 active:scale-95"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
