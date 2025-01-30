import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, services } from "../constants";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
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
    setServicesOpen(false);
  };

  const handleServiceClick = (path) => {
    navigate(path);
    setServicesOpen(false);
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">MSS_STUDIO CAR</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navLinks.map((item, index) => (
              <li key={index} className="relative">
                {item.title === "Serviços" ? (
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="hover:text-red-600 flex items-center"
                  >
                    {item.title}
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="hover:text-red-600 flex items-center"
                  >
                    {item.title}
                  </a>
                )}

                {item.title === "Serviços" && servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-neutral-900/95 rounded-lg shadow-xl backdrop-blur-lg py-2">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceClick(service.path)}
                        className="w-full text-left px-4 py-2 hover:bg-neutral-800 hover:text-red-600 transition-colors"
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                )}
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
                  {item.title === "Serviços" ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="hover:text-red-600 flex items-center"
                      >
                        {item.title}
                        <ChevronDown
                          className={`ml-1 w-4 h-4 transition-transform ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 space-y-2 mt-2">
                          {services.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => handleServiceClick(service.path)}
                              className="block w-full text-left hover:text-red-600 py-1"
                            >
                              {service.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className="hover:text-red-600 flex items-center"
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
