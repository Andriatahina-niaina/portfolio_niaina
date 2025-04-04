"use client";

import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";

type NavItemProps = {
  id: string,
  label:string,
  activeSection:(string),
  setActiveSection:(section: string) => void,
  scrollToSection: (sectionId: string) => void,
  setIsOpen: (isOpen: boolean) => void

}


  const menuItems = [
    { id: "home", label: "Home" },
    { id: "Skills", label: "Skills" },
    { id: "Projects", label: "Projects" },
    { id: "Testimonials", label: "Testimonials" },
    { id: "Experiences", label: "Experiences" },
    { id: "Contact me", label: "Contact me" },

  ];

const NavItem = ({
      id, 
      label, 
      activeSection, 
      setActiveSection, 
      scrollToSection, 
      setIsOpen 
  }: NavItemProps) => {

  return (
    <li>
      <div
        className={cn("rounded p-1 whitespace-nowrap duration-300 ease-in-out cursor-pointer transition", {
          "bg-primary text-white": activeSection === id,
        })}
        onClick={() => {
          setActiveSection(id);
          scrollToSection(id);
          setIsOpen(false);
        }}
      >
        {label}
      </div>
    </li>
  );
};

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setActiveSection("home");
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);



  return (
    <div className="fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50
    md:right-auto md:left-1/2 md:-translate-x-1/2">
      <button
        className="bg-background card-shadow p-3 md:hidden rounded"
        onClick={() => setIsOpen((prevVal) => !prevVal)}
      >
        <img 
          className="block dark:hidden" 
          src="/menu_icon_light.svg" 
          alt="menu icon light" 
        />
        <img 
          className="hidden dark:block" 
          src="/menu_icon_dark.svg" 
          alt="menu icon dark" 
        />
      </button>

      <nav
        className={cn(
          "bg-background card-shadow p-3 rounded md:block duration-300 ease-in-out",
          {
            "opacity-100": isOpen,
            "opacity-0 md:opacity-100": !isOpen,
          }
        )}
      >
        <ul className="flex flex-col gap-4 text-lg font-normal md:flex-row">
          {menuItems.map((item) => (
            <NavItem
              key={item.id}
              id={item.id}
              label={item.label}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              scrollToSection={scrollToSection}
              setIsOpen={setIsOpen}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
