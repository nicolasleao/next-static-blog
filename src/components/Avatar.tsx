import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative w-32 h-32 mb-4">
      <Image 
        src="/images/profile-picture.webp" 
        alt="Nicolas' profile picture"
        width={128}
        height={128}
        className="rounded-full border-2 border-pastel-primary shadow-lg"
        priority
      />
    </div>
  );
} 