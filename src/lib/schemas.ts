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

// refine((val) => !Number.isNaN(parseInt(val, 10)), {
//     message: "Please input number"
// })

export const mintFormSchema = () =>
    z.object({
        title: z.string().min(1, { message: "Input title" }),
        category: z.string().min(1, { message: 'Please select a category' }),
        medium: z.string().optional(),
        dimension: z.string().optional(),
        description: z.string().optional(),
        netWeight: z.string(),
        owner: z.string(),
        country: z.string(),
        avatar: z
            .instanceof(FileList, { message: "Please select a JPG file" })
            .refine((fileList) => fileList.length > 0, {
                message: "Please select a JPG file.",
            })
            .transform((fileList) => fileList.item(0))
            .refine((file) => file?.type === "image/jpg", {
                message: "Only jpg files are allowed.",
            }),
    }).refine(({ category, medium }) => {
        console.log(category, medium)
        return category == 'art' && medium === '';
    }, { message: 'Please input art medium', path: ['medium'] });

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
