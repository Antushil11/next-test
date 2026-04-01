"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();

  const headlerButton = () => {
    const password = prompt("Enter TYour Password");
    if (password === "1234") {
      console.log("1234");
      router.push("/dashboard");
    }
  };
  return (
    <div className="text-center space-y-4 bg-linear-60 to-sky-200 ">
      <h2 className="text-4xl font-bold">Wellcome to Dev-story</h2>
      <button
        onClick={headlerButton}
        className="px-4 py-2 bg-sky-600 rounded cursor-pointer hover:bg-mauve-800 
      
      duration-200
      "
      >
        Shear story
      </button>
    </div>
  );
};

export default Banner;
