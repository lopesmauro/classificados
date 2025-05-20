"use server"
import { addCar } from "@/services/car"
import { createCarSchema } from "@/schemas/createCar"
import { fitImage } from "@/utils/fit-image"
import { redirect } from "next/navigation"

export const createCar = async (formData: FormData) => {
  const data = createCarSchema.safeParse({
    img: formData.get('img'),
    title: formData.get('title'),
    price_to: formData.get('price_to'),
    price_from: formData.get('price_from'),
    negotiable: formData.get('negotiable'),
    author_name: formData.get('author_name')?.toString(),
    author_email: formData.get('author_email')?.toString(),
    description: formData.get('description')?.toString(),
  })

  if(data.success) {
    console.log(data.data)
    const imgName = await fitImage(data.data.img)
    const newCar = await addCar({
      imgName: imgName,
      title: data.data.title,
      priceFrom: data.data.price_from,
      priceTo: data.data.price_to,
      negotiable: data.data.negotiable === 'on',
      authorName: data.data.author_name,
      authorEmail: data.data.author_email,
      description: data.data.description,
    })
    const id = newCar.id
    console.log(id)
    return
  } else {
    console.log(data.error.flatten().fieldErrors)
  }
  redirect('/')
}
