import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1, "Title should not be empty.").max(255),
  description: z.string().min(1, "Description should not be empty.").max(1000),
});
