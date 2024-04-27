"use client";
import { Menu } from "lucide-react";

const navItems = [
  {
    title: "works",
    href: "#works",
  },
  {
    title: "about",
    href: "#about",
  },
  {
    title: "contact",
    href: "#contact",
  },
];

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-20 w-full  bg-bg/90 p-6 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <div className="font-semibold leading-tight">
          <h1 className="">ALEXIS KEN</h1>
          <h1 className="">ALVAREZ</h1>
        </div>
        <button className="block rounded-md p-2 md:hidden bg-black text-white">
          <Menu />
        </button>
        <ul className="hidden gap-20 md:flex">
          {navItems.map((items) => (
            <button key={items.title}>
              <li
                className=" group relative overflow-hidden rounded-md px-4 py-2 font-semibold uppercase transition-all duration-200 ease-in-out hover:bg-gray-200"
                onClick={() => {
                  const section = document.querySelector(`#${items.href}`);
                  section?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "start",
                  });
                }}
              >
                <p className="transition-all duration-500 ease-in-out group-hover:-translate-y-[115%]">
                  {items.title}
                </p>
                <p className="absolute translate-y-full transition-all duration-500 ease-in-out group-hover:-translate-y-full">
                  {items.title}
                </p>
              </li>
            </button>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
