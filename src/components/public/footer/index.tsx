import { Dribbble, Facebook, Github, Instagram, Link2, Linkedin, Send, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/public/inputField/inputFiled";
import ao from '../../../assets/images/flags/ao.png'
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black px-[16px] md:px-[100px] pt-[50px] md:py-[50px] w-full h-max">
            <div className="flex flex-col-reverse lg:flex-row w-full h-max gap-x-8 gap-y-8 lg:gap-y-0 mx-auto max-w-[1366px]">
                <div className="lg:w-1/2 h-max flex items-start justify-end">
                    <form className="rounded-[20px] md:rounded-[30px] border border-[#2d2d2d] bg-[#111] p-8 px-4 md:px-8 w-full h-max">
                        <h1 style={{ letterSpacing: '-0.8px' }} className="text-[1.4rem] text-left text-white sato">Solicite um orçamento</h1>
                        <div className="flex gap-x-2 mt-7">
                            <Input autoComplete="name" placeholder="Nome" />
                        </div>
                        <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row gap-x-2 mt-2">
                            <Input autoComplete="email" type="email" placeholder="Endereço de e-mail" />
                            <Input autoComplete="mobile tel" type="phone" placeholder="Telefone" />
                        </div>
                        <textarea className='w-full py-4 border h-[200px] mt-2 rounded-[20px] border-[#222] bg-transparent text-white outline-none placeholder:text-[#777] placeholder:sato-light sato px-6' placeholder="Mensagem" />
                        <div className="w-full h-max flex items-center justify-end mt-2">
                            <button className="py-3 w-full md:w-max md:px-6 rounded-[16px] bg-[#FB650122] flex items-center justify-center text-[#FB6501] sato-bold gap-x-3">
                                Enviar mensagem <Send size={20} />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="lg:w-1/2 h-full flex flex-col text-white sato">
                    <div className="flex flex-col gap-y-12 md:gap-y-0 md:flex-row w-full items-start justify-start">
                        <div className="w-1/2">
                            <div>
                                <h1 style={{ letterSpacing: '-0.8px' }} className="text-[0.9rem] text-left text-white">ENDEREÇO</h1>
                                <div>
                                    <div className="flex items-center justify-start gap-x-3 mt-3">
                                        <div style={{ backgroundImage: `url(${ao})` }} className="flag bg-cover bg-center size-6 rounded-full" />
                                        <h3 className="sato-bold w-full">Luanda - Angola</h3>
                                    </div>
                                    <ul className="mt-6 grid grid-rows-3 gap-y-2 sato-light text-[0.9rem]">
                                        <li>Avenida A1, Talatona</li>
                                        <li>Distrito urbano de Talatona</li>
                                        <li>Luanda, AO</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h1 style={{ letterSpacing: '-0.8px' }} className="text-[0.9rem] text-left text-white">LINKS</h1>
                                <div>
                                    <ul className="mt-6 grid grid-rows-3 gap-y-2 sato-light text-[0.9rem]">

                                        <li className="flex items-start justify-start gap-x-1.5"><a href=""></a><Linkedin size={17} strokeWidth={1.5}/>LinkedIn</li>
                                        <li className="flex items-start justify-start gap-x-1.5"><a href=""></a><Dribbble size={17} strokeWidth={1.5}/>Dribble</li>
                                        <li className="flex items-start justify-start gap-x-1.5"><a href=""></a><Github size={17} strokeWidth={1.5}/>GitHub</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div>
                                <h1 style={{ letterSpacing: '-0.8px' }} className="text-[0.9rem] text-left text-white">CONTACTO</h1>
                                <div>
                                    <ul className="mt-6 grid grid-rows-3 gap-y-2 sato-light text-[0.9rem]">
                                        <li>E-MAIL</li>
                                        <li><a className="flex items-center gap-x-1.5" href="mailto:support@angohost.ao">support@angohost.ao <Link2 size={18} color="white"/></a></li>
                                        <li>TELEFONE</li>
                                        <li>(+244) 930 914 623</li>
                                        <li>(+244) 948 951 028</li>
                                        <li><a href="mailto:support@angohost.ao"></a>Entre em contacto e peça <br /> o seu orçamento</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 py-4 flex-[1] flex-grow-[1]">
                        <h1 style={{ letterSpacing: '-0.8px' }} className="text-[0.9rem] text-left text-white">Siga em:</h1>
                        <ul className="flex items-center justify-start gap-x-6 mt-2">
                            <li>
                                <Link href="https://no.com"><Facebook size={23} strokeWidth={1} /></Link>
                            </li>
                            <li>
                                <Link href="https://no.com"><Instagram size={23} strokeWidth={1} /></Link>
                            </li>
                            <li>
                                <Link href="https://no.com"><Twitter size={23} strokeWidth={1} /></Link>
                            </li>
                            <li>
                                <Link href="https://no.com"><Youtube size={23} strokeWidth={1} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full  max-w-[1366px] mx-auto border-t border-[#2d2d2d] mt-10 py-6 flex flex-col gap-y-3 md:gap-y-0 md:flex-row md:items-center justify-between text-white sato-light text-[0.9rem]">
                <p>Powered by © {new Date().getFullYear()} Codespace. </p>
                <ul className="flex flex-col md:flex-row gap-x-6 gap-y-3 md:gap-y-0">
                    <li>
                        <Link href={'/'}>Política de Privacidade</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Política de Cookies</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Termos de Uso</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Desenvolvedor</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}