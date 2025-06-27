import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Initials from names used in ReviewCard (Reviews section)
export const getInitials = (name: string): string => {
  if (!name) return "";

  const parts = name.split(" ").filter(Boolean);

  return parts.length === 1
    ? parts[0].substring(0, 2).toUpperCase()
    : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};
