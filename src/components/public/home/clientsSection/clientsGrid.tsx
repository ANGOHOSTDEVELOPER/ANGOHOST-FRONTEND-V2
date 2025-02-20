
import Image from "next/image";
import { IClient } from './types'








interface ClientsGridProps {
   clients:IClient[]
}


  
function ClientsGrid({clients}: ClientsGridProps) {
    return (
        <div className="grid grid-cols-4 grid-rows-4 gap-6 p-8 w-[70%] h-max">
            {clients.map((client, index) => (
                <div 
                    key={index} 
                    className="relative flex items-center justify-center bg-[#fafafa] p-6 rounded-lg group hover:bg-gray-200 transition-all duration-300"
                >
                    <Image src={client.picture} alt={client.name} className="max-w-[150px] max-h-[100px] object-contain" />
                    <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center text-sm py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {client.name}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default ClientsGrid