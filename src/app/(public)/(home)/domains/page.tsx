import SearchBar from "@/components/public/home/searchBar/searchBar";
import TldsPricesCard from "@/components/public/home/tldsPricesCard/tldsPricesCard";
import Navbar from "@/components/public/navbar/navbar";

export default function Domains() {
  return (
    <header className="relative header w-full h-[480px] mb-[200px]">
      <Navbar />
      <div className=" w-full h-[300px] pt-12 flex items-center justify-center text-white flex-col">
        <h1 className="font-bold text-[3rem]">
          Encontre o domínio perfeito para o seu site
        </h1>
        <p className="text-[1.4rem]">
          Registre um domínio agora e obtenha descontos
        </p>
        <SearchBar />
        <TldsPricesCard>
          {data.map((item) => (
            <div
              key={item.name}
              className="flex-[1] h-full p-8 flex items-center justify-center rounded-[16px] flex-col bg-[#222]"
            >
              <h1 className="font-bold text-[1.5rem]">{item.name}</h1>
              <p className="text-[1.2rem]">{item.price} Kz/ano</p>
            </div>
          ))}
        </TldsPricesCard>
      </div>
    </header>
  );
}

const data = [
  {
    name: ".co.ao",
    price: 35000,
  },
  {
    name: ".ao",
    price: 35000,
  },
  {
    name: ".com",
    price: 35000,
  },
  {
    name: ".org",
    price: 35000,
  },
  {
    name: ".edu.ao",
    price: 35000,
  },
];
