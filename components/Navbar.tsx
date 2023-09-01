import { Button } from "antd";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
  const navItems = [
    {
      id: "1",
      name: "Explore",
      href: "/",
      current: false,
    },
    {
      id: "2",
      name: "Problems",
      href: "/problems",
      current: true,
    },
    {
      id: "1",
      name: "Contest",
      href: "/",
      current: false,
    },
    {
      id: "1",
      name: "Dicuss",
      href: "/",
      current: false,
    },
    {
      id: "1",
      name: "Interview",
      href: "/",
      current: false,
    },
  ];
  return (
    <div className=" gap-4 md:flex hidden bg-gray-100 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/logo.svg" alt="logo" />
        <div className="flex gap-10">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`${
                item.current ? "font-bold text-blue-500 underline" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
          <Button type="primary">Sign In</Button>
          <Button type="default">Sign Up</Button>
        </div>
      </div>
    </div>
  );
};
