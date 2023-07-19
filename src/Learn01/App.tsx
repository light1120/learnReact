/**
 * 1、定义组件
 * 2、引入组件
 * 3、渲染数据
 * 4、配置style
 * 5、条件渲染
 * 6、列表渲染
 * 7、监听事件
 * 8、响应事件
 * 9、更新数据
 */
import { useState } from "react";

const Component1 = function () {
  return (
    <>
      <p>I am Component 1</p>
    </>
  );
};
const Component2 = function () {
  return (
    <>
      <p>I am Component 2</p>
    </>
  );
};

export default function App() {
  const flag = false;
  //条件渲染
  const comp = flag ? <Component1 /> : <Component2 />;
  //渲染数据
  const user = {
    name: "light",
    age: "18",
    avatar: "https://i.imgur.com/yXOvdOSs.jpg",
    avatarH: 200,
    avatarW: 200,
  };
  //更新数据
  const [count, setCount] = useState(0);
  //定义事件响应
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p
        // 添加事件
        onClick={handleClick}
        style={{
          backgroundColor: "red",
        }}
      >
        hello, I,am {user.name}。
      </p>
      {comp}
      {/* 条件渲染 */}
      {flag ? <Component2 /> : <Component1 />}
      {/* 条件渲染 */}
      {!flag && <Component2 />}
      <img
        src={user.avatar}
        alt={"my age is " + user.age}
        // 使用 style
        style={{
          width: user.avatarW,
          height: user.avatarH,
        }}
      />
      {/* 列表渲染 */}
      <ul>
        {[1, 2, 3, 4, 5].map((num) => {
          return <li>{num}</li>;
        })}
      </ul>
      <button onClick={handleClick}>Clicked {count} times</button>
    </>
  );
}
