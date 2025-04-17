"use client";

import dynamic from "next/dynamic";
import { CSSProperties } from "react";

// Dynamic import with ssr:false inside this client component is safe
const ThreeCloud = dynamic(() => import("./ThreeCloud"), { ssr: false });

interface ClientThreeCloudProps {
  className?: string;
  style?: CSSProperties;
}

export default function ClientThreeCloud({ className = "", style = {} }: ClientThreeCloudProps) {
  return (
    <div className={`w-full h-full ${className}`} style={style}>
      <ThreeCloud />
    </div>
  );
} 