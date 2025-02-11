import ClientsGrid from "@/components/public/clientsSection";
import Navbar from "@/components/public/navbar/navbar";
import TldSelector from "@/components/public/tldSelector";
import { Search } from "lucide-react";


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



export default function Home() {
  return (
    <>
      <header className="relative header w-full h-[480px]">
        <Navbar />
        <div className=" w-full h-[300px] pt-12 flex items-center justify-center text-white flex-col">
          <h1 className="font-bold text-[3rem]">
            Encontre o domínio perfeito para o seu site
          </h1>
          <p className="text-[1.4rem]">
            Registre um domínio agora e obtenha descontos
          </p>
          <div className="mt-8 flex items-center justify-center p-1 bg-white rounded-[100px] h-[65px]">
            <button   type="button" title="search" className="w-fit h-full px-5">
              <Search size={20} color="#000" />
            </button>
            <input
              type="text"
              className="outline-none border-none text-[1.1rem] w-[400px] h-full text-black"
              placeholder="Insira o seu domínio"
            />
            <TldSelector />
            <button   type="button" title="verificar"  className="px-8 h-full bg-primary text-white rounded-[100px]">
              Verificar
            </button>
          </div>
          <div className="text-white flex items-center justify-between absolute p-2 gap-x-2 bottom-[-70px] bg-primary rounded-[24px]">
            {data.map((item) => (
              <div
                key={item.name}
                className="flex-[1] h-full p-8 flex items-center justify-center rounded-[16px] flex-col bg-[#222]"
              >
                <h1 className="font-bold text-[1.5rem]">{item.name}</h1>
                <p className="text-[1.2rem]">{item.price} Kz/ano</p>
              </div>
            ))}
          </div>
        </div>
      </header>
      <section className="mt-[100px] pt-[100px] w-full flex flex-col items-center justify-center">
        <h1 className="font-bold text-[3rem]">
          Hospede o seu site com quem é especialista
        </h1>
        <p className="text-[1.4rem]">
          A mais de 9 anos hospedando o sonho dos nossos clientes
        </p>
        <ClientsGrid/>
      </section>
      <section className="w-full h-[1000px] bg-black mt-[200px] flex items-center justify-cener">

      </section>
    </>
  );
}
