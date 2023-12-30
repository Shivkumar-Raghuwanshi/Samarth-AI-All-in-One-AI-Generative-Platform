import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(2, {
    message: "query must be at least 2 characters.",
  }),
});
