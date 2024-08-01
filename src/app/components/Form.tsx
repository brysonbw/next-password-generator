'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema, formSchema } from '../../lib/formSchema';

type Props = {
  onSubmit: (data: FormSchema) => void;
};

export default function Form({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const length = watch('length', '8'); // Default value of the range input

  return (
    <form
      id="passGeneratorForm"
      className="w-full flex flex-col p-10 border rounded-lg shadow bg-gray-800 border-gray-700"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-gray-400 text-2xl mb-2">
        Password Generator
      </h1>
      {/** Password Length Range Field */}
      <label htmlFor="length">Password Length: {length}</label>
      <input
        type="range"
        id="passwordLengh"
        min="8"
        max="64"
        value={length}
        className="w-full"
        {...register('length')}
      />
      {errors.length?.message && <p>{errors.length?.message}</p>}
      {/** Checkboxes */}
      {/** Include Numbers */}
      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          id="numbers"
          {...register('numbers')}
          className="mr-2"
        />
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      {/** Include Symbols */}
      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          id="symbols"
          {...register('symbols')}
          className="mr-2"
        />
        <label htmlFor="symbols">Include Symbols</label>
      </div>
      <button
        className="mt-5 btn px-3 py-2 text-white rounded-lg  focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        type="submit"
      >
        Generate
      </button>
    </form>
  );
}
