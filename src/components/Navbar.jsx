import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "../assets/logo.png";

import { navLinks } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">MSS_Studio Car</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-red-600 flex items-center"
                >
                  {item.title}
                  {item.title === "Serviços" && (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navLinks.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.id}
                    className="hover:text-red-600 flex items-center"
                  >
                    {item.title}
                    {item.title === "Serviços" && (
                      <ChevronDown className="ml-1 w-4 h-4" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
