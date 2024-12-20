import z from 'zod'

export const createCarSchema = z.object({
  title: z.string(),
  description: z.string(),
  author_name: z.string(),
  author_email: z.string().email(),
  negotiable: z.string().optional(),
  price_from: z.string(),
  price_to: z.string(),
  img: z.instanceof(File)
    .refine(file => file.size !== 0 && file.name != undefined)
    .refine(
      (file) => ["image/jpeg", "image/jpg", "image/png"].includes(file.type),
      "O tipo de arquivo deve ser JPEG ou PNG."
    )
    .refine((file) => file.size <= 5000000, "O arquivo deve ter no máximo 5MB.")
})
