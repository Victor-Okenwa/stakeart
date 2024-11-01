import { z } from 'zod'

export const bidFormSchema = () =>
    z.object({
        bidAmount: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
            message: "Expected number"
        }),
    });

export const pleadFormSchema = (type: 'stake' | 'collect') =>
    z.object({
        interest: type === 'stake' ? z.string() : z.string().optional(),
        duration: type === 'stake' ? z.string() : z.string().optional(),
        minAmount: type === 'stake' ? z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
            message: "Expected number"
        }) : z.string().optional(),
    });

export const mintFormSchema = () =>
    z.object({
        title: z.string().min(1, { message: "Title cannot be empty" }),
        medium: z.string(),
        dimension: z.string(),
        description: z.string().optional(),
        netWeight: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
            message: "Expected number"
        }).optional(),
        owner: z.string(),
        country: z.string(),
        avatar: z
            .instanceof(FileList)
            .refine((fileList) => fileList.length > 0, {
                message: "Please select a JPG file.",
            })
            .transform((fileList) => fileList.item(0))
            .refine((file) => file?.type === "image/jpg", {
                message: "Only jpg files are allowed.",
            }),
    });

export const auctionAssetFormSchema = () =>
    z.object({
        minBid: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
            message: "Expected number"
        }),

        exhibition: z.coerce.date().min(new Date(), { message: "Cannot parse date less than now" }),
        duration: z.coerce.date().min(new Date(), { message: "Cannot parse date less than now" })
    });

export const stakeAssetFormSchema = () =>
    z.object({
        interest: z.string(),
        duration: z.coerce.date().min(new Date(), { message: "Cannot parse date less than now" }),
        minAmount: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
            message: "Expected number"
        }),
    });
