"use client";
import { useState } from "react";
import Link from "next/link";

const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About us", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "Services", path: "/services" },
];

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-between lg:px-100 p-4 ">
      {/* logo */}
      <a href={"/"}>Praise</a>

      {/* nav items */}
      <nav className="space-x-4 hidden lg:flex">
        {navData.map((nav) => (
          // using anchor tag

          // <a key={nav.id} href={nav.path}>
          //   {nav.name}
          // </a>

          // using next/link
          <Link key={nav.id} href={nav.path}>
            {nav.name}
          </Link>
        ))}
      </nav>

      <button onClick={() => setShow(true)} className="block lg:hidden">
        menu
      </button>

      {/* mobile menu */}
      {show && (
        <div className="absolute top-0 left-0 h-screen w-full bg-black text-white flex flex-col items-center justify-center space-y-4 lg:hidden">
          {navData.map((nav) => (
            <Link key={nav.id} href={nav.path}>
              {nav.name}
            </Link>
          ))}

          <button onClick={() => setShow(false)}>close</button>
        </div>
      )}
    </div>
  );
}
