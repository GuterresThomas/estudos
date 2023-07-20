'use client'
import React from 'react'
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';


const FormSchema = z.object({
    username: z
    .string()
    .min(4, {message:"the username must be 4 letters or more"})
    .max(10, { message: "The username must be 10 characters or less" })
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "The username must contain only letters, numbers and underscore (_)"
    ),
    email: z.string().email({message:"Invalid email, please enter a valid email"}),
    isAdmin: z.boolean(),
    createdAt: z.coerce.date()
    .min(new Date(1920, 0, 1), {
        message: "Date cannot go past January 1 1920",
      })
      .max(new Date(), { message: "Date must be in the past" })
      .refine(
        (date) => {
          const ageDifMs = Date.now() - date.getTime();
          const ageDate = new Date(ageDifMs);
  
          const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
          return age >= 18;
        },
        { message: "You must be 18 years or older" }
      ),
});

type FormInput = z.infer<typeof FormSchema>;

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInput>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            email: '',
            isAdmin: true,
            createdAt: new Date(),
        },
    });

    return (
        <div className='justfify-center flex bg-zinc-500 rounded-md p-2'>
            <form onSubmit={handleSubmit((d) => console.log(d))} className=' font-sans-Roboto text-lg font-semibold space-y-2  '>
            <div>
                <label htmlFor="username">Username:</label>
                <input id="username" {...register('username')} className='bg-zinc-100 rounded-md mt-2 ml-2'/>
                {errors?.username?.message && <p className=' text-red-800 font-bolder text-sm'>{errors.username.message}</p>}
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input id="email" {...register('email')} className='bg-zinc-100 rounded-md mt-2 ml-12'/>
                {errors?.email?.message && <p  className=' text-red-800 font-bolder text-sm'>{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="isAdmin">IsAdmin</label>
                <input id="isAdmin" type="checkbox" {...register('isAdmin')} className='bg-zinc-100 rounded-md mt-2 ml-2' />
            </div>

            <div>
                <label htmlFor="createdAt">Creation Date</label>
                <input id="createdAt" type="date" {...register('createdAt')} className='bg-zinc-100 rounded-md mt-2 ml-2' />
                {errors?.createdAt?.message && (
                    <p className=' text-red-800 font-bolder text-sm'>{errors.createdAt.message}</p>
                )}
            </div>

            <button type="submit" className='bg-zinc-800 text-zinc-50 hover:bg-zinc-600 rounded-md p-2'>Submit</button>
        </form>
        </div>
    );
}
