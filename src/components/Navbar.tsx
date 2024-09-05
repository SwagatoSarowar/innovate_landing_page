import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const links: { link: string; href: string }[] = [
  {
    link: "home",
    href: "#",
  },
  {
    link: "features",
    href: "#features",
  },
  {
    link: "service",
    href: "#service",
  },
  {
    link: "pages",
    href: "/pages",
  },
  {
    link: "blog",
    href: "/blog",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="text-base sm:text-lg font-medium text-white py-8">
      <div className="flex items-center justify-between ">
        <div className="w-[100px] md:w-[120px]">
          <img className="w-full" src={logo} alt="Logo" />
        </div>
        <button className="lg:hidden text-2xl" onClick={() => setIsOpen(true)}>
          <FaBars />
        </button>
        <div
          className={`lg:hidden fixed z-[9999] right-0 top-0 h-screen w-80 flex-col items-center gap-y-6 bg-dark-400/50 p-5 backdrop-blur-lg transition-all duration-300 shadow-[-8px_0px_16px_0px_rgba(0,0,0,0.5)] ${
            isOpen ? "translate-x-0" : "translate-x-[calc(100%+20px)]"
          }`}
        >
          <button
            className="p-4 text-2xl ml-auto block"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
          <ul className="text-lg mt-10 ml-10 flex flex-col gap-y-4">
            {links.map((item, index) => (
              <li key={index}>
                <a
                  className="px-4 py-2 capitalize hover:text-light-400 duration-200"
                  href={item.href}
                >
                  {item.link}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-8 mt-8">
            <button className="px-6 py-3 hover:text-light-400 duration-200 block">
              Login
            </button>
            <button className="px-6 py-3 bg-light-400 rounded-md text-dark-400 hover:bg-light-400/80 duration-200">
              Register
            </button>
          </div>
        </div>
        <ul className="items-center gap-x-8 hidden lg:flex">
          {links.map((item, index) => (
            <li key={index}>
              <a
                className="px-4 py-2 capitalize hover:text-light-400 duration-200"
                href={item.href}
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
        <div className="items-center justify-center hidden lg:flex">
          <button className="px-6 py-3 hover:text-light-400 duration-200">
            Login
          </button>
          <button className="px-6 py-3 bg-light-400 rounded-md text-dark-400 hover:bg-light-400/80 duration-200">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
