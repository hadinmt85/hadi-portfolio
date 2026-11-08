import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Kept for API compatibility; entrance animation is CSS-only now. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
};

export function Reveal({ children, className = "", as: Tag = "div" }: RevealProps) {
  return <Tag className={`reveal ${className}`.trim()}>{children}</Tag>;
}
