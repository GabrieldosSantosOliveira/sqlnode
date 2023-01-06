import { z } from 'zod';
export const schemaAddressBodyStore = z.object({
  zipcode: z.string(),
  street: z.string(),
  number: z.number()
});
export const schemaAddressParamsStore = z.object({
  user_id: z.string()
});
