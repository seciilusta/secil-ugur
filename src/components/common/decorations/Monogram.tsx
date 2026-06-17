import Image from "next/image";

type MonogramProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizes = {
  sm: "h-14 w-14",
  md: "h-20 w-20",
  lg: "h-28 w-28 sm:h-32 sm:w-32",
  xl: "h-36 w-36 sm:h-44 sm:w-44",
};

export function Monogram({ size = "xl", className = "" }: MonogramProps) {
  return (
    <div className={`relative ${sizes[size]} ${className}`} aria-hidden>
      <Image
        src="/monogram-transparent.png"
        alt="Seçil & Uğur monogram"
        fill
        sizes="(max-width: 640px) 9rem, 11rem"
        className="object-contain"
        priority
      />
    </div>
  );
}