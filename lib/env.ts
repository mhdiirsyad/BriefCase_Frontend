import z from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    // PORT: z.string().transform((val) => parseInt(val, 10)).default(3000),
    // DATABASE_URL: z.url(),
    NEXT_PUBLIC_API_URL: z.string().min(1),
    // IS_FEATURE_ENABLED: z.string().transform((val) => val === 'true'),
})

const _env = envSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
})

if (!(_env.success) || !_env.data) {
    throw new Error(
        `Invalid frontend environment: ${JSON.stringify(z.treeifyError(_env.error))}`,
    );
}

export const safeEnv = _env.data