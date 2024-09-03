import { z } from 'zod'

export const bidFormSchema = (minBid: number) =>
    z.object({
        bidAmount: z.number().min(minBid, { message: "Your bid cannot be less than the minimum bid" }),
    });

export const pleadFormSchema = (type: 'stake' | 'collect', minAmount?: number) =>
    z.object({
        interest: type === 'stake' ? z.string() : z.string().optional(),
        duration: type === 'stake' ? z.string() : z.string().optional(),
        minAmount: type === 'stake' ? z.number().min(minAmount || 0, { message: "Your plead amount cannot go below the minimum amount" }) : z.number().optional(),
    });