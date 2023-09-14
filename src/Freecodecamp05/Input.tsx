// 创建一个可再用的 Input 组件
import cn from 'classnames';
import { InputHTMLAttributes, forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        className={cn(
          'w-full rounded-xl border-2 border-zinc-600 bg-transparent px-5 py-2 outline-none placeholder:text-zinc-500',
          String(className),
        )}
      />
    );
  },
);
