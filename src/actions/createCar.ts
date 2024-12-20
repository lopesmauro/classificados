"use server"

import { createCarSchema } from "@/schemas/createCar"
import { fitImage } from "@/utils/fit-image"
import { redirect } from "next/navigation"

export const createCar = async (formData: FormData) => {
    const data = createCarSchema.safeParse({
      title: formData.get('title'),
      description: formData.get('description'),
      author_name: formData.get('author_name'),
      author_email: formData.get('author_email'),
      price_to: formData.get('price_to'),
      price_from: formData.get('price_from'),
      img: formData.get('img')
    })

    if(data.success) {
      console.log(data.data)
      const imgName = await fitImage(data.data.img)
    } else {
      console.log(data.error.flatten().fieldErrors)
    }

    redirect('/')
}
