import {  Facebook, Github, Instagram, Linkedin, Send, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/public/inputField/inputFiled";
import Link from "next/link";
import ao from '@/assets/images/flags/ao.png';

export function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#0A0A0A] to-[#111114] px-6 md:px-20 pt-16 pb-8 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Formulário de Orçamento */}
                <div className="bg-[#1A1A1D] p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold">Solicite um orçamento</h2>
                    <p className="text-gray-400 text-sm mt-2">Entre em contato e obtenha um orçamento personalizado.</p>
                    <div className="mt-6 space-y-4">
                        <Input autoComplete="name" placeholder="Nome" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input autoComplete="email" type="email" placeholder="E-mail" />
                            <Input autoComplete="tel" type="phone" placeholder="Telefone" />
                        </div>
                        <textarea className="w-full h-32 p-4 rounded-xl bg-[#222] border border-[#333] placeholder-gray-500 text-white" placeholder="Mensagem" />
                        <button className="w-full py-3 bg-[#FB6501] rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all hover:bg-[#E05800]">
                            Enviar mensagem <Send size={18} />
                        </button>
                    </div>
                </div>

                {/* Informações de Contato */}
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold">Endereço</h3>
                        <div className="flex items-center gap-3 mt-3">
                            <div className="size-6 rounded-full bg-cover" style={{ backgroundImage: `url(${ao})` }}></div>
                            <span className="font-semibold">Luanda - Angola</span>
                        </div>
                        <ul className="mt-4 text-gray-400 text-sm space-y-2">
                            <li>Avenida A1, Talatona</li>
                            <li>Distrito urbano de Talatona</li>
                            <li>Luanda, AO</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Contato</h3>
                        <ul className="mt-4 text-gray-400 text-sm space-y-2">
                            <li>Email: <a href="mailto:support@angohost.ao" className="text-white hover:underline">support@angohost.ao</a></li>
                            <li>Telefone: (+244) 930 914 623</li>
                            <li>(+244) 948 951 028</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Redes Sociais */}
            <div className="max-w-7xl mx-auto mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} AngoHost. Todos os direitos reservados.</p>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white"><Facebook size={20} /></Link>
                    <Link href="#" className="hover:text-white"><Instagram size={20} /></Link>
                    <Link href="#" className="hover:text-white"><Twitter size={20} /></Link>
                    <Link href="#" className="hover:text-white"><Youtube size={20} /></Link>
                    <Link href="#" className="hover:text-white"><Linkedin size={20} /></Link>
                    <Link href="#" className="hover:text-white"><Github size={20} /></Link>
                </div>
            </div>
        </footer>
    );
}
