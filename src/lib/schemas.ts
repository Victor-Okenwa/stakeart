import { z } from 'zod';

export const authSchema = () =>
    z.object({
        email: z.string().email({ message: 'Invalid email' }),
        password: z.string().min(1, { message: 'Password is required' }).min(8, { message: 'Cannot be less than 8 characters' }),
    });

export const onlyOTPFormSchema = () =>
    z.object({
        otp: z.string().min(5, { message: 'Please input 5 digits' })
    });

export const bidFormSchema = () =>
    z.object({
        bidAmount: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
            message: "Input bid amount"
        }),
    });

export const pleadFormSchema = (type: 'stake' | 'collect') =>
    z.object({
        interest: type === 'stake' ? z.string() : z.string().optional(),
        duration: type === 'stake' ? z.string() : z.string().optional(),
        minAmount: type === 'stake' ? z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
            message: "Input bid amount"
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
            message: "Input bid amount"
        }),

        exhibition: z.string(),
        duration: z.string()
    });

export const stakeAssetFormSchema = () =>
    z.object({
        interest: z.string(),
        duration: z.string(),
        minAmount: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
            message: "Input minimum bid amount"
        }),
    });
