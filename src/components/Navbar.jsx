import { useState } from "react";
import "../index.css"; // Ensure this path is correct and it includes your TailwindCSS imports
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="sticky top-0 flex justify-between px-8 items-center py-6 bg-white shadow-md z-50">
        <section className="flex items-center">
          <FiMenu className="text-4xl cursor-pointer" onClick={toggleSidebar} />
          <a href="/" className="text-3xl font-mono pl-8">
            reviewo
          </a>
          <a href="/" className="text-1xl font-mono font-light pl-2">
            by Ming
          </a>
        </section>

      </nav>

      <div className={`fixed top-0 left-0 h-full bg-white text-black w-48 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <button onClick={toggleSidebar} className="p-4 text-4xl"><IoCloseSharp /></button>
        <ul className="p-4">
          <li className="my-4 text-2xl font-inter"><a href="/">Home</a></li>
          <li className="my-4 text-2xl font-inter"><a href="/catalog">Catalog</a></li>
          <li className="my-4 text-2xl font-inter"><a href="/note">Note</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
