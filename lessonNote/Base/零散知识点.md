## React 知识点

- 1、useRef : 是一个用来创建 element 或者 component 的引用的hook

```
1、const inputRef = useRef(null)
2、<input ref={inputRef} />
3、inputRef.current?.focus()
```

- 2、forwardRef : 是一个可以用来从父组件接收 ref 并传输到子组件的函数。

```
export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return (
      <input {...props} ref={ref} />
    );
  },
);
```

- 3、useState 的 React.SetStateAction 方法

```
const [todos, setTodos] = useState<T>(initialVal)

// setTodos 的参数类型是 React.SetStateAction<T>
// type SetStateAction<S> = S | ((prevState: S) => S);
// setTodos 的参数类型就是 T类型，或者参数为 T类型，且返回结果也是 T类型 的函数
// 可以如下使用，setTodos的参数是一个，返回todo[]数组的函数
setTodos((prevTodos) =>
    prevTodos.map((todo) => {
    //xxx...
    return todo;
}),
);
```
