# 使用 redux 重写 freecodecamp01

redux react-redux redux-persist

## 如何使用

- 1、定义一个 reducer
- 2、调用redux库提供的`createStore`传入reducer创建一个store

```
const store = createStore(reducer)
```

- 3、引入`react-redux`库提供的`<Provider>` 传入store ，防止应用最外层

```
<Provider store={store}>
```

- 4、获取state，使用`react-redux`提供的`useSelector`

```
const todos = useSelector((state: TTodoState) => state.todos);
```

- 5、获取dispatch，使用`react-redux`提供的`useDispatch`

```
const dispatch = useDispatch<Dispatch<ITodoAction>>();
```

## 其他 Api

- useStore ： `react-redux` 用于获取整个store 。但是dispatch 不会出发组件渲染，建议用`useSelector` 替换
