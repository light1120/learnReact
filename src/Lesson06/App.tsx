// React Dom

import {
  CompositionEventHandler,
  CompositionEvent,
  useState,
  FormEventHandler,
  FormEvent,
} from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber(number + 1);
  };
  const handleInput: CompositionEventHandler = (event: CompositionEvent) => {
    console.log(event);
    
  };

  const handleSubmit: FormEventHandler = (e: FormEvent) => {
    console.log(e);
  };

  return (
    <div>
      <button onClick={handleClick}> button + 1</button>
      <form onSubmit={handleSubmit}></form>
      <input
        onCompositionStart={handleInput}
        onCompositionUpdate={handleInput}
        onCompositionEnd={handleInput}
      />
    </div>
  );
}
