# A minimalistic form

构建一个简单的form ，并提供校验能力

1、使用 `react-hook-from` 库提供的 form 能力

```
const {handleSubmit,reset,register,formState} = useForm()

1、注册 input 或者 textarea
<input {...register(props.label, props.validation)}/>
2、监听submit
<form onSubmit={handleSubmit(onSubmit)}>
3、处理formState ，如果校验不过，会有errors数据
formState.errors
```

2、抽象Input 组件

组件包括以下部分

- label
- error
- input / textarea
- 接收classname prop

3、构建 Form 组件

- input 列表
- submit
- 校验成功tip

4、使用 icon 优化

- navigation : BsGithub / BsTwitter
- form : BsFillCheckSquareFill
- input: MdError
