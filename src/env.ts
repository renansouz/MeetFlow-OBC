import { z } from 'zod';

const envSchema = z.object({
    VITE_BASE_URL: z.string(),
    VITE_URL_R2CLOUDFLARE: z.string(),
});

export const env = envSchema.parse(import.meta.env);
