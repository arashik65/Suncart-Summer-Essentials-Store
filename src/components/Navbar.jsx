"use client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-2 bg-white border-slate-200 sticky top-0 z-50">
      <nav className="flex justify-between items-center  max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo1.png"}
            alt="logo"
            loading="eager"
            width={90}
            height={90}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">SunCart</h3>
        </div>

        {/* Desktop Menu (lg+) */}
        <ul className="hidden lg:flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-products"}>All Products</Link>
          </li>
          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Auth (desktop + mobile shared) */}
          <div className="hidden lg:flex items-center gap-3">
            <ul className="flex items-center gap-3 text-sm">
              <li>
                <Link href={"/signin"}>Login</Link>
              </li>
              <li>
                <Link href={"/signup"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
