
import React, { useState } from "react";
import Link from "next/link";

const Home = () => {
  return (
      <div className="flex justify-center">
        <div className="justify-center flex-col"> 
          <Link href={"/signin"}><h1>SigIn page</h1></Link>
          <Link href={"/signup"}><h1>SignUp page</h1></Link>
          <Link href={"/admin"}><h1>Admin</h1></Link>
        </div>
      </div>
  )
}

export default Home