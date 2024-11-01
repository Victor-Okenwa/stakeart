import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const splitCamelCaseToWords = (input: string) => {
	return input.replace(/([A-Z])/g, " $1").trim();
};
export const handleClipBoardCopy = (text: string) => {
	navigator.clipboard.writeText(text);
	toast.success("Copied to clipboard");
};

export const convertToReadableNumber = (number: number, steps?: number) => {
  const setSteps = !steps ? 1 : steps;
  if (number < 999)
    return number;
  else if (number <= 999000)
    return (number / 1000).toFixed(setSteps) + 'k';
  else if (number <= 999000000)
    return (number / 1000000).toFixed(setSteps) + 'm';
  else if (number <= 999000000000)
    return (number / 1000000000).toFixed(setSteps) + 'B';
  else
    return (number / 1000000000000).toFixed(setSteps) + 'T';
}
