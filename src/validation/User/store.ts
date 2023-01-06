import { z } from 'zod';
export const schemaUserBodyStore = z.object({
  email: z.string(),
  name: z.string()
});
