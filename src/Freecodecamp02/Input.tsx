import { RegisterOptions, useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { MdError } from 'react-icons/md';
import cn from 'classnames';
import { findInputErrors } from './util/findInputError';

export default function Input(props: {
  name: string;
  id: string;
  label: string;
  type: string;
  placeholder: string;
  validation: RegisterOptions;
  className?: string;
  multiline?: number;
}) {
  const { register, formState } = useFormContext();
  const inputErrors = findInputErrors(formState.errors, props.name);
  const isInvalid = Object.keys(inputErrors).length > 0;

  return (
    <div className={cn('flex w-full flex-col gap-2', props.className)}>
      <div className="flex justify-between">
        <label htmlFor={props.id} className="font-semibold capitalize">
          {props.label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && <InputError message={inputErrors.error.message}></InputError>}
        </AnimatePresence>
      </div>
      {!!props.multiline && props.multiline >= 2 ? (
        <textarea
          id={props.id}
          placeholder={props.placeholder}
          className="w-full rounded-md border border-slate-300 p-5 font-medium placeholder:opacity-60"
          rows={props.multiline}
          {...register(props.label, props.validation)}
        ></textarea>
      ) : (
        <input
          className="w-full rounded-md border border-slate-300 p-5 font-medium placeholder:opacity-60"
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          {...register(props.label, props.validation)}
        />
      )}
    </div>
  );
}

const InputError = (props: { message: string }) => {
  return (
    <motion.p
      {...framer_error}
      className=" flex items-center gap-1 rounded-md  bg-red-500 px-2 font-semibold text-red-100"
    >
      <MdError></MdError>
      {props.message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
