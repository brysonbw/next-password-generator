import * as z from 'zod';

export const formSchema = z.object({
  length: z.string().max(64, { message: 'Max reached' }),
  numbers: z.boolean().optional(),
  symbols: z.boolean().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
