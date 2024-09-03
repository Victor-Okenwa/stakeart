import { z } from 'zod'

export const bidFormSchema = () =>
    z.object({
        bidAmount: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
            message: "Expected number, received a string"
        }),
    });

export const pleadFormSchema = (type: 'stake' | 'collect') =>
    z.object({
        interest: type === 'stake' ? z.string() : z.string().optional(),
        duration: type === 'stake' ? z.string() : z.string().optional(),
        minAmount: type === 'stake' ? z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
            message: "Expected number, received a string"
        }) : z.string().optional(),
    });