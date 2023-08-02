import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

const Span = function (props: { num: number }) {
  return <span>{props.num}</span>;
};

const App = function Counter() {
  const [number, setNumber] = useState(0);
  const counterJsx = (
    <button
      onClick={() => {
        setNumber(number + 1);
      }}
    >
      <Span num={number}></Span>
      <Span num={number}></Span>
    </button>
  );
  console.log(counterJsx);
  return counterJsx;
};

// 编译之后的代码。嵌套组件会编译成children属性下嵌套jsxDEV
// const App = function Counter() {
//   _s();
//   const [number,setNumber] = useState(0);
//   const counterJsx = /* @__PURE__ */
//   jsxDEV("button", {
//       onClick: ()=>{
//           setNumber(number + 1);
//       }
//       ,
//       children: [/* @__PURE__ */
//       jsxDEV(Span, {
//           num: number
//       }, void 0, false, {
//           fileName: "/Users/xxx/xxx/App.tsx",
//           lineNumber: 16,
//           columnNumber: 7
//       }, this), /* @__PURE__ */
//       jsxDEV(Span, {
//           num: number
//       }, void 0, false, {
//           fileName: "/Users/xxx/xxx/App.tsx",
//           lineNumber: 17,
//           columnNumber: 7
//       }, this)]
//   }, void 0, true, {
//       fileName: "/Users/xxx/xxx/App.tsx",
//       lineNumber: 13,
//       columnNumber: 22
//   }, this);
//   console.log(counterJsx);
//   return counterJsx;
// };

// 多组件嵌套下的counterJsx输出
// {$$typeof: Symbol(react.element), type: 'button', key: null, ref: null, props: {…}, …}
//   $$typeof: Symbol(react.element)
//   key: null
//   props:
//     children: Array(2)
//       0: {$$typeof: Symbol(react.element), key: null, ref: null, props: {…}, type: ƒ, …}
//       1: {$$typeof: Symbol(react.element), key: null, ref: null, props: {…}, type: ƒ, …}
//       length: 2
//       [[Prototype]]: Array(0)
//     onClick: () => { setNumber(number + 1); }
//     [[Prototype]]: Object
//   ref: null
//   type: "button"
//   _owner: FiberNode {tag: 0, key: null, stateNode: null, elementType: ƒ, type: ƒ, …}
//   _store: {validated: false}
//   _self: undefined
//   _source: {fileName: '/Users/xxxxxx/App.tsx', lineNumber: 13, columnNumber: 22}

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
