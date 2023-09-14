# React library

## 1、react-hot-toast

[react-hot-toast](https://github.com/timolins/react-hot-toast) 是一个React的一个轻量的，自定义的通知组件

```
1、pnpm add react-hot-toast  //安装
2、<div><Toaster/></div>  //放最顶层
3、toast("Hello World")  //调用
```

## 2、react-icons

[react-icons](https://github.com/react-icons/react-icons) 是一个react svg icon 的包，包含多个库，例如 [Ant Design Icons](https://react-icons.github.io/react-icons/icons?name=ai)

```
1 、 pnpm add react-icons
2 、import { AiFillChrome } from "react-icons/ai"
3 、<AiFillChrome />
```

## 3、usehooks-ts

[usehooks-ts](https://github.com/juliencrn/usehooks-ts) 是一个TS编写的 React hooks 库。

- useLocalStorage
- useSessionStorage
- useWindowSize
- useCopyToClipboard
- ...

## 4、framer-motion

[framer-motion](https://github.com/framer/motion) 是一个 Framer 提供的 React 动作库。

- `<motion.div />`
- `<motion.ul />`
- `<motion.li />`
- `<motion.span />`
- ...

## 5、classnames

[classNames](https://github.com/JedWatson/classnames) 是一个用于 React 中 css class 名拼接的包

`className={cn('class1', flag ? 'class2' : 'class3')}`

## 6、nanoid

[nanoid](https://github.com/ai/nanoid) 是一个用于js的非常轻量的唯一字符串id生成器。

[uuid](https://github.com/uuidjs/uuid) 的替代品

## 7、react hooks library

[aHooks](https://ahooks.js.org/)

## 8、[react-hook-form](https://github.com/react-hook-form/react-hook-form)

Performant, flexible and extensible forms with easy-to-use validation

```
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" />

      <input type="submit" />
    </form>
  );
}
```

## 9、[react-error-boundary](https://github.com/bvaughn/react-error-boundary)

Reusable React error boundary component. Supports all React renderers (including React DOM and React Native)

```
<ErrorBoundary
    fallback={<div>Something went wrong</div>}
    fallbackRender={fallbackRender}
    onReset={(details) => {  // Reset the state of your app so the error doesn't happen again }}
    onError={logError}
>
  <ExampleApplication />
</ErrorBoundary>
```

## 10、[react-json-view](https://github.com/mac-s-g/react-json-view)

用于树型显示JSON数据

```
import ReactJson from 'react-json-view'

// use the component in your app!
<ReactJson src={my_json_object} />
```
