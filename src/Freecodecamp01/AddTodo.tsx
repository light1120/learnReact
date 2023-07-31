import { useContext, useEffect, useRef, useState } from 'react';
import { Input } from './Input';
import { TodoContext } from './TodoContextReducer';
import { toast } from 'react-hot-toast';

export default function AddTodo() {
  const [input, setInput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  // const { addTodo } = useContext(TodoContext)!;
  const { dispath } = useContext(TodoContext)!;

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('form has been submited');
    if (input.trim() !== '') {
      // addTodo(input);
      dispath({
        text: input,
        type: 'add'
      })
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
