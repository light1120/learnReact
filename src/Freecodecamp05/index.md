使用 redux toolkit 重写 freecodecamp01

redux-toolkit react-redux redux-persist

使用 configureStore createSlice

## 注意点

- createSlice 中的 reducer 的编写。 函数需要对 state 进行修改 才能生效

```
delete: (state, action: ITodoAction) => {
    // 仅仅这样写，不会生效。 同样得，如果对原数据不会产生变化时都不会生效，如 map 等
    // state.todos.filter((todo) => todo.id !== action.id)
    state.todos = state.todos.filter((todo) => todo.id !== action.id)
},
```

- dispatch 时的 type , 需要加上前缀。 或者在创建 slice 时 将 type 导出

```
export const { add } = TodoSlice.actions
// add() 函数 返回 一个 包含 type: 'todos/add' 的对象
dispatch({
    // 或者这里直接写'todos/add'字符串（不建议，需要避免魔法字符串）
    type: add().type,
    text: input,
});
```

- 使用 redux-persist 插件时， 只需要将 persistReducer 下之前的 reducer即可

```
export const todoStore = configureStore({
    reducer: {
        todos: persistReducer<TTodoState>(persistConfig, TodoSlice.reducer)
    }
})
```
