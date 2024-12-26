import { getCars } from "@/actions/getCars"
import { Header } from "@/components/Header"
import Link from "next/link"

export default async function Home() {
  const cars = await getCars()
  return (
    <div>
      <Header />
      <section className="grid sm:grid-cols-2 nmd:grid-cols-3"> 
      {cars.map((car) => (
       <Link href={(car.id.toString())} key={car.id}>
        <div>
          <img src={`/uploads/${car.img}`} alt="" />
          <h2>{car.title}</h2>
          <p>{car.priceFrom} - {car.priceTo} USD</p>
        </div>
       </Link> 
      ))
      }
      </section>
    </div>
  )
}
