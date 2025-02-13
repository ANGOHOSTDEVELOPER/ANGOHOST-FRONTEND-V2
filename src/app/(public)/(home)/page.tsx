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
        </div>
      </header>
      <ClientsSection/>
      <section>
      <Pricing />
      </section>
    </>
  );
}
