"use client";
export default function Navbar() {
  
  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="bg-black text-white flex justify-between items-center px-6 py-4">
      <h1 className="font-bold text-lg">MyApp</h1>

      <ul className="flex gap-6">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}