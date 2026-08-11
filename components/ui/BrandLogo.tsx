import Image from "next/image";

export default function BrandLogo({ width = 160, priority = false, className = "h-14 w-auto" }: { width?: number; priority?: boolean; className?: string }) {
  return (
    <span className="relative block" style={{ aspectRatio: "10 / 3", width }}>
      <span className="sr-only">NileBit Labs</span>
      <Image src="/nilebit-logo-darkmode.svg" alt="" fill priority={priority} sizes={`${width}px`} className={`${className} theme-logo-dark object-contain object-left`} />
      <Image src="/nilebit-logo.svg" alt="" fill priority={priority} sizes={`${width}px`} className={`${className} theme-logo-light object-contain object-left`} />
    </span>
  );
}
