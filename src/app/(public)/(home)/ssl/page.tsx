import TldsPricesCard from "@/components/public/home/tldsPricesCard/tldsPricesCard";
import Navbar from "@/components/public/navbar/navbar";
import Pricing from "@/components/public/plansSection/plansSection";
import { Bug, Globe, LaptopMinimalIcon, Lock, Wifi } from "lucide-react";

export default function SSL() {
  return (
    <>
      <header className="relative header w-full h-[480px]">
        <Navbar />
        <div className=" w-full h-[300px] pt-12 flex items-center justify-center text-white flex-col">
          <h1 className="font-bold text-[3rem]">Mantenha o seu site seguro</h1>
          <p className="text-[1.4rem]">Explore nos nossos planos de SSL</p>
          {/* <SearchBar /> */}
          <TldsPricesCard>
            {data.map((item) => (
              <div
                key={item.desc}
                className="w-[177px] h-full px-8 py-7 flex items-start justify-center rounded-[16px] flex-col bg-[#222]"
              >
                {item.icon}
                <p className="text-[1rem] mt-2">{item.desc}</p>
              </div>
            ))}
          </TldsPricesCard>
        </div>
      </header>
      <Pricing firstTitle="Conheça os nossos " title="Planos de SSL" description="Garanta a proteção do seu site com os nossos planos de SSL " type="ssl"/>

    </>
  );
}

const data = [
  {
    icon: <Lock className="size-[40px]"/>,
    desc: "Segurança",
  },
  {
    icon: <Globe className="size-[40px]"/>,
    desc: "Disponibilidade",
  },
  {
    icon: <Bug className="size-[40px]"/>,
    desc: "Antí-fraude",
  },
  {
    icon: <LaptopMinimalIcon className="size-[40px]"/>,
    desc: 'Eficiência',
  },
  {
    icon: <Wifi className="size-[40px]"/>,
    desc: 'Acessibilidade',
  }
];
