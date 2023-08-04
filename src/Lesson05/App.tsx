// Props vs useState  vs useEffect

import { useEffect, useState } from 'react';

const Child = (props: { num: number }) => {
  // 1、此时 num 会随着点击增加，但是 number 不会
  // 2、useState(props.num) 第一次初始化为0 ，后面 props.num 变化了，会 number 的值没有影响
  // 3、state 初始化之后，只有 setState 才能改变
  // 4、如果组件的key发生变化之后，会再次初始化为0
  //const [number, setNumber] = useState(props.num);

  // 修改？
  // 这里可能会想到使用 Effect 监听 props 的变化，然后 setNumber
  // 可以实现功能。但是不服务Effect的场景，也不符合 state 的场景
  // useEffect(() => {
  //   setNumber(props.num);
  // }, [props]);
  // return <h1>{number}</h1>;

  //正确做法
  //Child组件的作用就是，接收参数然后渲染成 h1 标签， 不需要state。 直接渲染 props 即可

  return <h1>{props.num}</h1>;
};

export default function App() {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <button onClick={handleClick}> button + 1</button>
      <Child num={number}></Child>
    </div>
  );
}
