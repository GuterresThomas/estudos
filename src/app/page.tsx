
import React, { useState } from "react";
import Link from "next/link";

const Home = () => {
  return (
      <div className="">
        <h1>Home</h1>
        <div className="justify-center flex"> 
          <Link href={"/signin"}><h1>sigin page</h1></Link>
        </div>
      </div>
  )
}

export default Home