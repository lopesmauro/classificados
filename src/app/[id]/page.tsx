import { Header } from "@/components/Header";
import { getCar } from "@/actions/getCarById";

type Params = {
  params: {
    id: string;
  };
};

export default async function CarPage({ params }: Params) {
  const car = await getCar(Number(params.id));
  console.log("Carro carregado:", car);

  if (!car) {
    return (
      <div>
        <Header />
        <p>Carro não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-scree p-4">
      <Header />
      <div className="max-w-4xl mx-auto shadow-md rounded-lg p-6 mt-4">
        <h1 className="text-2xl font-bold mb-4">{car.title}</h1>
        <img src={`/uploads/${car.img}`} alt="" />
        <p className="text-gray-700 mb-4">{car.description}</p>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Preço De:</strong> R$ {car.priceFrom.toLocaleString("pt-BR")}</li>
          <li><strong>Preço Até:</strong> R$ {car.priceTo.toLocaleString("pt-BR")}</li>
          <li><strong>Negociável:</strong> {car.negotiable ? "Sim" : "Não"}</li>
          <li><strong>Autor:</strong> {car.authorName}</li>
          <li><strong>Email do Autor:</strong> {car.authorEmail}</li>
        </ul>
      </div>
    </div>
  );
}
