import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <button
      onClick={() => {
        setNumber(number + 1);
        setNumber((v) => v * 2);
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}
    >
      {number}
    </button>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
