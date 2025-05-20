import { getCarById } from "@/services/car"

export const getCar = async (id: number) => {
  const car = await getCarById(id)
  return car
}
