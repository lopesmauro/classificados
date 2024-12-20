import { v4 } from "uuid"
import sharp, { fit } from "sharp"

export const fitImage = async (img: File) => {
  const newName = `${v4()}.jpg`

  const buffer = await img.arrayBuffer()
  await sharp(buffer)
  .resize(600, 400, {
    fit: 'cover',
  })
  .toFile(`public/uploads/${newName}`)
  return newName
}

