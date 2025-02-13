import { Search } from "lucide-react";
import TldSelector from "./tldSelector";

export default function SearchBar() {
  return (
    <div className="mt-8 flex items-center justify-center p-1 bg-white rounded-[100px] h-[65px]">
      <button className="w-fit h-full px-5">
        <Search size={20} color="#000" />
      </button>
      <input
        type="text"
        className="outline-none border-none text-[1.1rem] w-[400px] h-full text-black"
        placeholder="Insira o seu domínio"
      />
      <TldSelector />
      <button className="px-8 h-full bg-primary text-white rounded-[100px]">
        Verificar
      </button>
    </div>
  );
}
