import Input from './Input';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { GrMail } from 'react-icons/gr';
import { desc_validation, name_validation, password_validation } from './util/validation';
import { useState } from 'react';
import { BsFillCheckSquareFill } from 'react-icons/bs';

export type Inputs = {
  name: string;
  password: string;
};

export default function Form() {
  const methods = useForm<Inputs>();
  const [success, setSuccess] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  };

  return (
    <FormProvider {...methods}>
      <form className="mx-auto w-full max-w-3xl p-5" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation}></Input>
          <Input {...password_validation}></Input>
          <Input {...desc_validation} className="md:col-span-2"></Input>
        </div>
        <div className="mt-5">
          {success && (
            <p className=" mb-5 flex items-center gap-2 font-semibold text-green-500">
              <BsFillCheckSquareFill></BsFillCheckSquareFill>
              Form has been submitted successfully
            </p>
          )}
          <button
            type="submit"
            className="flex items-center gap-1 rounded-md bg-blue-600 p-5 font-semibold text-white hover:bg-blue-800"
          >
            <GrMail></GrMail>
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
