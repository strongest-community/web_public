"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";




const Header = () => {
  return (
    <div className="h-[90px] flex justify-between items-center">
      <div className="ml-[30px] flex gap-[70px]">
        <h1>AppName</h1>
        <h1>
          <Link href="/Post/Index">AllPosts</Link>
        </h1>
        <h1>
          <Link href="/Post/new">NewPost</Link>
        </h1>
        <h1> 
          <Link href="/Seach"><h1>Seach</h1></Link>
        </h1>
      </div>
      <div className="flex gap-[70px] mr-[50px]">
        <div className="flex flex-col items-center">
          <Image src="/images/user.png" height={33} width={35} className="relative bottom-[5px]" alt="image" />
          <p>my page</p>
        </div>
        <div className="mt-[15px] flex flex-col items-center">
          <Image src="/images/heart.png" height={40} width={35} className="relative bottom-[5px]" alt="image" />
          <p>my heart</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
