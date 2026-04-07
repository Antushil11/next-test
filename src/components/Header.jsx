"use client";
import NavLink from "@/navlink/NavLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const patename = usePathname();
  console.log(patename);
  if (patename.startsWith("/dashboard")) return <></>;

  return (
    <header className="text-4xl flex flex-wrap justify-between items-center   border-b-2 border-gray-300 py-4">
      <Link href={"/"}>🦈 Dev-Story</Link>
      <nav className="space-x-5 text-2xl">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/tutorials">tuotorial</NavLink>
        <NavLink href="/stories">stories</NavLink>
        <NavLink href="/login">login</NavLink>
        <NavLink href="/register">register</NavLink>
      </nav>
    </header>
  );
};

export default Header;
