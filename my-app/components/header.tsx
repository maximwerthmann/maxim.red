"use client";

import * as React from "react";
import {
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Pages = [
  {
    title: "Home",
    href: "/",
  },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (pathnamehref) => {
    return pathname === pathnamehref ? "text-foreground" : "text-foreground/60";
  };

  const { theme, setTheme } = useTheme();

  const isTheme = (thisTheme) => {
    return theme === thisTheme ? "text-foreground" : "text-foreground/60";
  }

  return (
    <header className="w-full h-14 flex items-center justify-between border-b px-8 md:px-16">
      <div className="flex space-x-4 w-full justify-between md:justify-start">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center" asChild>
            <Button variant="ghost" className="font-bold text-lg ">
              マクスイム
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Pages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Pages?.map(
              (item, index) =>
                item.href && (
                  <DropdownMenuItem key={index}>
                    <Link
                      href={item.href}
                      className={`${isActive(
                        item.href
                      )} rounded-md flex flex-1 items-center text-sm transition-colors duration-20`}
                    >
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                )
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setTheme("light")} className={isTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")} className={isTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")} className={isTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
        <div className="hidden md:flex items-center space-x-4">
          {Pages?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={`${isActive(
                    item.href
                  )} p-2 rounded-md flex flex-1 items-center font-semibold text-sm transition-colors duration-20 hover:text-foreground/80`}
                >
                  {item.title}
                </Link>
              )
          )}
        </div>
    </header>
  );
}
