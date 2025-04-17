"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedMenuIcon from "./AnimatedMenuIcon";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = "";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden" ref={menuRef}>
      {/* Use the new animated menu icon */}
      <AnimatedMenuIcon isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* Overlay with blur effect */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-40 
                    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu with staggered animation for menu items */}
      <div 
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-neutral-900/95 backdrop-blur-sm p-6 shadow-xl 
                  transform transition-all duration-500 ease-out
                  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col space-y-1 pt-16">
          {[
            { href: "/", label: "home" },
            { href: "/about", label: "about" },
            { href: "https://youtube.com", label: "youtube", external: true },
            { href: "/community", label: "community" },
          ].map((item, index) => (
            <Link 
              key={item.label}
              href={item.href}
              className={`text-xl font-medium text-neutral-200 hover:text-green-400 transition-all py-4 border-b border-neutral-700
                        transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
                        transition-all duration-300 ease-out`}
              style={{ 
                transitionDelay: isOpen ? `${150 + index * 50}ms` : '0ms',
              }}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
} 