import { z } from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
});

export type EnvType = z.infer<typeof envSchema>;

export function validateEnv(): EnvType {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    throw new Error("Invalid environment variables:" + result.error);
  }

  return result.data;
}

export const ENV = validateEnv();
