'use client';
import Form from './components/Form';
import { toast } from 'react-hot-toast';
import { FormSchema } from '../lib/formSchema';
import { generatePassword } from '@/utils/generatePassword';
import { useState } from 'react';
import GeneratedPasswordCard from './components/GeneratedPasswordCard';

export default function Home() {
  const [generatedPassword, setGeneratedPassword] = useState('');

  const onSubmit = (data: FormSchema) => {
    try {
      const result = generatePassword({ ...data });
      setGeneratedPassword(result);
      toast.success('Password generated successfully!');
    } catch (error) {
      console.error(error);
      toast.success('Password failed to generate');
    }
  };

  return (
    <main className="mt-auto">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/** Left Container */}
        <section className="mx-auto text-center">
          <Form onSubmit={onSubmit} />
        </section>
        {/** Right Container */}
        <section className="mx-auto text-center">
          <GeneratedPasswordCard generatedPassword={generatedPassword} />
        </section>
      </div>
    </main>
  );
}
