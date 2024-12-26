import { prisma } from "@/utils/prisma"
type Params = {
  imgName: string,
  title: string,
  description: string,
  priceFrom: string,
  priceTo: string,
  negotiable?: boolean,
  authorName: string,
  authorEmail: string,
}

export const addCar = async (data: Params) => {
  const newCar = await prisma.car.create({
    data: {
      img: data.imgName,
      title: data.title,
      description: data.description,
      priceFrom: parseFloat(data.priceFrom),
      priceTo: parseFloat(data.priceTo),
      negotiable: data.negotiable,
      authorName: data.priceFrom,
      authorEmail: data.priceFrom
    }
  })
  return newCar
}

export const getAllCars = async () => {
  const cars = await prisma.car.findMany({
    select: {
      id: true,
      title: true,
      img: true,
      priceFrom: true,
      priceTo: true,
    }
  })
  return cars
}
