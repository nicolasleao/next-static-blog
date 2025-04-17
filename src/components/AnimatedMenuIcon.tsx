"use client";

import { useState, useEffect } from "react";

interface AnimatedMenuIconProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function AnimatedMenuIcon({ isOpen, toggleMenu }: AnimatedMenuIconProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Handle animation state
  useEffect(() => {
    if (isOpen || isAnimating) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match transition duration
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, isAnimating]);
  
  return (
    <button 
      className="relative z-50 w-10 h-10 focus:outline-none"
      onClick={toggleMenu}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="relative w-6 h-6 mx-auto transform transition-all duration-300">
        {/* Top line */}
        <span 
          className={`absolute h-0.5 w-6 bg-[#88A773] rounded transform transition-all duration-300 ease-in-out
                     ${isOpen 
                       ? "rotate-45 translate-y-2.5" 
                       : "rotate-0 translate-y-0"}`}
          style={{ top: "2px", transformOrigin: "center" }}
        />
        
        {/* Middle line */}
        <span 
          className={`absolute h-0.5 w-6 bg-[#88A773] rounded transform transition-all duration-300 ease-in-out
                     ${isOpen 
                       ? "opacity-0 translate-x-3" 
                       : "opacity-100 translate-x-0"}`}
          style={{ top: "50%", marginTop: "-1px" }}
        />
        
        {/* Bottom line */}
        <span 
          className={`absolute h-0.5 w-6 bg-[#88A773] rounded transform transition-all duration-300 ease-in-out
                     ${isOpen 
                       ? "-rotate-45 -translate-y-2.5" 
                       : "rotate-0 translate-y-0"}`}
          style={{ bottom: "2px", transformOrigin: "center" }}
        />
      </div>
    </button>
  );
} 