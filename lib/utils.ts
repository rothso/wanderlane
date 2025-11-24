import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hash(str: string): number {
  return Array.from(str).reduce((hash, char) => {
    hash = (hash << 5) - hash + char.charCodeAt(0);
    return hash | 0;
  }, 0);
}
