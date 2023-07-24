
import React, { useState } from "react";
import Link from "next/link";

const Home = () => {
  return (
      <div className="flex justify-center">
        <div className="justify-center flex-col mt-20"> 
          <Link href={"/signin"}><h1 className="bg-zinc-200 p-2 font-sans-Roboto text-lg font-semibold ">Admin Login page</h1></Link>
          <Link href={"/signup"}><h1 className="bg-zinc-200 p-2 font-sans-Roboto text-lg font-semibold ">Register page</h1></Link>
          <Link href={"/usersignin"}><h1 className="bg-zinc-200 p-2 font-sans-Roboto text-lg font-semibold ">User Login page</h1></Link>
          <Link href={"/user"}><h1 className="bg-zinc-200 p-2 font-sans-Roboto text-lg font-semibold ">User page</h1></Link>
        </div>
      </div>
  )
}

export default Home