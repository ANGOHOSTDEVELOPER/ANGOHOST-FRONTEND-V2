import sonangol from '@/assets/images/clientes/Sonangol_Logo_Horizontal_Preto4_Footer-2.png'
import mstelecom from '@/assets/images/clientes/mstelecom.png'
import sonagas from '@/assets/images/clientes/images.png'
import zahara from '@/assets/images/clientes/grupozahara.png'
import girassol from '@/assets/images/clientes/clinicagiralsol.png'
import catondo from '@/assets/images/clientes/clinicacatondo.png'
import isptec from '@/assets/images/clientes/isptec.png'
import redegirassol from '@/assets/images/clientes/redegirassol.jpeg'
import kero from '@/assets/images/clientes/kero.png'
import aeroporto from '@/assets/images/clientes/areportointernacional.png'
import sonangoldistribuidora from '@/assets/images/clientes/Sonangol_Distribuidora.png'
import coimba from '@/assets/images/clientes/farmaciasdecoimbra.png'
import newcare from '@/assets/images/clientes/newcare.jpeg'
import ispetsoyo from '@/assets/images/clientes/ispetsoyo.png'
import somil from '@/assets/images/clientes/somil.png'
import nespcred from '@/assets/images/clientes/nespecred..jpeg'
import Image from "next/image";

const clients = [
    { name: 'Sonangol', picture: sonangol },
    { name: 'MS Telecom', picture: mstelecom },
    { name: 'Sonagas', picture: sonagas },
    { name: 'Grupo Zahara', picture: zahara },
    { name: 'Clínica Girassol', picture: girassol },
    { name: 'Clínica Catondo', picture: catondo },
    { name: 'ISPTEC', picture: isptec },
    { name: 'Rede Girassol', picture: redegirassol },
    { name: 'Kero', picture: kero },
    { name: 'Aeroporto Internacional', picture: aeroporto },
    { name: 'Sonangol Distribuidora', picture: sonangoldistribuidora },
    { name: 'Farmácias de Coimbra', picture: coimba },
    { name: 'NewCare', picture: newcare },
    { name: 'ISPET Soyo', picture: ispetsoyo },
    { name: 'Somil', picture: somil },
    { name: 'NespCred', picture: nespcred }
];

function ClientsGrid() {
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