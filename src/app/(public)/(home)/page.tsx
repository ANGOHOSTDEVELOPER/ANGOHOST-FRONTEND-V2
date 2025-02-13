import Navbar from "@/components/public/navbar/navbar";
import SearchBar from "@/components/public/home/searchBar/searchBar";
import TldsPricesCard from "@/components/public/home/tldsPricesCard/tldsPricesCard";
import ClientsSection from "@/components/public/home/clientsSection/clientsSection";
import Pricing from "@/components/public/plansSection/plansSection";


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
          <SearchBar/>
          <TldsPricesCard/>

          {/* <div className="mt-8 flex items-center justify-center p-1 bg-white rounded-[100px] h-[65px]">
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
>>>>>>> 6f560c56455e5de232eae3ac5822caa42675162d */}
        </div>
      </header>
      <ClientsSection/>
      <section>
      <Pricing />
      </section>
    </>
  );
}
