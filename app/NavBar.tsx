"use client";

import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const navItems = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            className={classNames({
              "text-zinc-900": item.href === currentPath,
              "text-zinc-500": item.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
