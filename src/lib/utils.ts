import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertToReadableNumber = (number: number) => {
  if (number < 999)
    return number;
  else if (number <= 999000)
    return (number / 1000).toFixed(1) + 'k';
  else if (number <= 999000000)
    return (number / 1000000).toFixed(1) + 'm';
  else if (number <= 999000000000)
    return (number / 1000000000).toFixed(1) + 'B';
  else
  return (number / 1000000000000).toFixed(1) + 'T';
}
