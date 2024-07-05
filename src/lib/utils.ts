import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}

export const authFormSchema = (type: string) =>
  z.object({
    // sign up
    firstName: type === "sign-in" ? z.string().optional() : z.string(),
    lastName: type === "sign-in" ? z.string().optional() : z.string(),
    city: type === "sign-in" ? z.string().optional() : z.string(),
    address: type === "sign-in" ? z.string().optional() : z.string().max(50),
    state:
      type === "sign-in" ? z.string().optional() : z.string().min(2).max(2),
    postalCode:
      type === "sign-in" ? z.string().optional() : z.string().min(3).max(6),
    dateOfBirth:
      type === "sign-in" ? z.string().optional() : z.string().min(10).max(10),
    ssn: type === "sign-in" ? z.string().optional() : z.string().min(3),

    // common
    email: z.string().email(),
    password: z.string().min(8),
  });

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));
