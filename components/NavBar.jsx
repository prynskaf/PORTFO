"use client";
import React from "react";
import { menuItems } from "@/data/menuItems";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <section className="fixed left-0 right-0 z-10">
      <Navbar onMenuOpenChange={setIsMenuOpen} className="">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="logo ">
            <Link
              href="#home"
              className="font-bold space-x-2"
              color="foreground"
            >
              <span className="text-[red] text-[1.2rem]">P</span>rince
              <span className="text-[red] text-[1.2rem]">k</span>yei
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-8 font-bold"
          justify="center"
        >
          <NavbarItem isActive>
            <Link color="foreground" href="#home">
              <span className="text-[red] text-[1.2rem] font-bold">H</span>ome
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#about" color="foreground">
              <span className="text-[red] text-[1.2rem] font-bold">A</span>bout
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#projects">
              <span className="text-[red] text-[1.2rem] font-bold">P</span>
              rojects
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Link href="#contact" color="foreground">
              <span className="text-[red] text-[1.2rem] font-bold">C</span>
              ontact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className=" flex justify-center items-center">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                href={`#${item.toLowerCase()}`}
                size="lg"
                color="foreground"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </section>
  );
}
