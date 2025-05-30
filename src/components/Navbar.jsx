import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Menu, X } from "lucide-react";

import { navLinks } from "../constants";

import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (currentLocation.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-2 mx-auto relative text-sm">
        <div className="flex items-center flex-shrink-0">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-25 mr-2 md:ml-20" src={logo} alt="logo" />
            <span className="text-lg tracking-tight">MSS_STUDIO CAR</span>
          </div>

          <ul className="hidden lg:flex ml-40 space-x-12">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="hover:text-red-600 flex items-center"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="lg:hidden md:flex flex-col justify-end ml-4 md:ml-0">
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
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="hover:text-red-600 flex items-center"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
