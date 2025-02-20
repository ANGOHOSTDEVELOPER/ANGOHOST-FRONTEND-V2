import Image from "next/image";
import faq from "@/assets/images/faq.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <>
      <div className="w-[67%] mx-auto flex items-center justify-center gap-x-[100px] pb-[150px] pt-[100px]">
        <div className="w-[60%] flex items-center justify-center">
          <Image
            src={faq}
            alt="inspiration"
            className="w-full h-full rounded-[16px] "
          />
        </div>
        <div className="w-[40%] flex items-center justify-center flex-col">
          <div className="mb-[60px] max-w-[510px] text-center">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Tem dúvidas?
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Perguntas frequentes
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              Não hesite, entre em contacto connosco
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>O que é a AngoHost?</AccordionTrigger>
              <AccordionContent>
                A AngoHost é uma plataforma de hospedagem de sites e serviços na
                nuvem, oferecendo soluções confiáveis e escaláveis para
                indivíduos e empresas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger>
                Quais serviços a AngoHost oferece?
              </AccordionTrigger>
              <AccordionContent>
                Oferecemos hospedagem de sites, registro de domínios, servidores
                VPS, certificados SSL, e-mails profissionais e outros serviços
                na nuvem.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>
                Como faço para registrar um domínio?
              </AccordionTrigger>
              <AccordionContent>
                Você pode registrar um domínio pesquisando a disponibilidade no
                nosso site e seguindo o processo de compra. Aceitamos diversos
                métodos de pagamento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>
                Posso migrar meu site para a AngoHost?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Oferecemos suporte para migração de sites de outras
                hospedagens para nossos servidores, garantindo um processo
                simples e seguro.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger>
                Qual o tempo de ativação dos serviços?
              </AccordionTrigger>
              <AccordionContent>
                A ativação é quase imediata após a confirmação do pagamento.
                Alguns serviços podem levar até 24 horas para serem totalmente
                configurados.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
