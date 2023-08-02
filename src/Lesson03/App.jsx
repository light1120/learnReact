import React from "react";
import ReactDOM from "react-dom/client";
const rootElement = document.getElementById("root");

// 深入理解 useState
/**
 * 1、useState Hooks 就是一个 [[state, setState],...] 的 的二维数组
 * 2、每次调用setState都会，执行render函数，render时将currentHookIndex设置成0
 * 3、然后调用了一次函数，然后按照固定顺序从0开始执行的Hooks，并赋予state最新的值，然后返回最新JSX
 * 4、diff JSX , 并渲染最新DOM
 */

let componentHooks = [];
let currentHookIndex = 0;
const root = ReactDOM.createRoot(rootElement)
// useState 在 React 中是如何工作的（简化版）
function useState(initialState) {
  let pair = componentHooks[currentHookIndex];
  if (pair) {
    // 这不是第一次渲染
    // 所以 state pair 已经存在
    // 将其返回并为下一次 hook 的调用做准备
    currentHookIndex++;
    return pair;
  }

  // 这是我们第一次进行渲染
  // 所以新建一个 state pair 然后存储它
  pair = [initialState, setState];

  function setState(nextState) {
    // 当用户发起 state 的变更，
    // 把新的值放入 pair 中
    pair[0] = nextState;
    render();
  }

  // 存储这个 pair 用于将来的渲染
  // 并且为下一次 hook 的调用做准备
  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}

// 教学需要，不用在意 render 的实现
const render = () => {
  currentHookIndex = 0;
  // ReactDOM.render(<App />, rootElement);
  root.render(<App />);
};

function App() {
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  console.log(componentHooks);
  return (
    <div className="App">
      <p>{n}</p>
      <p>
        <button onClick={() => setN(n + 1)}>+1</button>
      </p>
      <p>{m}</p>
      <p>
        <button onClick={() => setM(m + 1)}>+1</button>
      </p>
    </div>
  );
}

root.render(<App />);