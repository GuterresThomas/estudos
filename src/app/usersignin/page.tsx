'use client'
import React, { useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation'
import { User } from "firebase/auth";

function Page() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { result, error } = await signIn(email, password);

        if (error) {
            alert(error)
            return router.push("/");
        }
            console.log(result)
            return router.push("/user");
    

    }

    return (
        <div className="flex justify-center">
            <div>
                <h1 className="mt-20 font-sans-Roboto font-semibold text-lg ">Login de Usuário:</h1>
                <form onSubmit={handleForm} className="p-5 rounded-md mt-2 bg-zinc-100">
                    <label className="font-sans-Roboto font-semibold m-2" htmlFor="email">
                        <p className="bg-zinc-100">Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="bg-zinc-50 p-2" />
                    </label>
                    <label className="font-sans-Roboto font-semibold m-2" htmlFor="password">
                        <p className="bg-zinc-100">Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="bg-zinc-50 p-2" />
                    </label>
                    <br />
                    <button type="submit" className="bg-zinc-400 rounded-md ml-14 p-2 mt-2 font-sans-Roboto font-bold hover:bg-zinc-500">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Page;