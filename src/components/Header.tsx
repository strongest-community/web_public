"use client";

import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faImage } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="h-[90px] flex justify-between items-center">
      <div className="ml-[30px] flex gap-[70px]">
        <h1>
          <img src="/icon.png" alt="no icon" className="h-[60px] rounded-md" />
        </h1>
        <h1 className="flex items-center">
          <Link href="/Post/Index">AllPosts</Link>
        </h1>
        <h1 className="flex items-center">
          <Link href="/Post/new">NewPost</Link>
        </h1>
        <h1 className="flex items-center">
          <Link href="/Seach">
            <h1>Seach</h1>
          </Link>
        </h1>
      </div>
      <div className="flex gap-[70px] mr-[50px]">
        <div className="mt-[15px] flex flex-col items-center">
          <FontAwesomeIcon icon={faUser} className="h-[30px] w-[30px]" />
          <p>my page</p>
        </div>
        <div className="mt-[15px] flex flex-col items-center">
          <FontAwesomeIcon icon={faImage} className="h-[30px] w-[30px]" />
          <p>my heart</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
