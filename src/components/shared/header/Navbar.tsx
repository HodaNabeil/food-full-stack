"use client";

import { Pages, Routes } from "@/constants/enums";
import Link from "../link/Link";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navLinks = [
       {
      title: "Home",
      href: Routes.ROOT,
      id: crypto.randomUUID(),
    },
    {
      title: "Menu",
      href: Routes.MENU,
      id: crypto.randomUUID(),
    },
    {
      title: "About",
      href: Routes.ABOUT,
      id: crypto.randomUUID(),
    },
    {
      title: "Contact",
      href: Routes.CONTACT,
      id: crypto.randomUUID(),
    },
    {
      title: "Login",
      href: Pages.LOGIN,
      id: crypto.randomUUID(),
    },
  ];
  return (
    <nav>
      <Button
        variant="secondary"
        size="sm"
        className="absolute top-[30px] right-10 lg:hidden cursor-pointer"
        onClick={() => setOpenMenu(true)}
      >
        <MenuIcon className="!w-6 !h-6" />
      </Button>

      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}
      >
        <Button
          variant="secondary"
          size="sm"
          className="absolute  top-[30px]  right-10 lg:hidden cursor-pointer"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6" />
        </Button>
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={`/${link.href}`}
                className={`font-medium text-foreground   transition-all duration-300 ease-out 
                    
                    ${
                      link.href === Pages.LOGIN
                        ? "bg-primary text-white px-4 py-2  hover:bg-primary/80  text-sm rounded-full"
                        : "text-foreground hover:text-primary"
                    }
                    `}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
