"use client";

import Image from "next/image";
import { useState } from "react";

type AvatarProps = {
  alt: string;
  size?: number;
  rounded?: string;
  priority?: boolean;
  className?: string;
};

export function Avatar({ alt, size = 40, rounded = "rounded-xl", priority = false, className = "" }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        aria-label={alt}
        className={`grid shrink-0 place-items-center bg-gradient-to-br from-emerald-400 to-cyan-500 font-display font-bold text-[#04211a] ${rounded} ${className}`}
        style={{ width: size, height: size, fontSize: Math.round(size * 0.34) }}
      >
        HN
      </span>
    );
  }

  return (
    <Image
      src="/profile.jpg"
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      onError={() => setFailed(true)}
      className={`shrink-0 object-cover ${rounded} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
