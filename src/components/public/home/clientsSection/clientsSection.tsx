import ClientsGrid from "./clientsGrid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel";

export default function ClientsSection() {
  return (
    <>
      <section className="dot mt-[100px] pt-[100px] w-full flex flex-col items-center justify-center">
        <div className="mb-[60px] max-w-[510px] text-center">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Especialistas em hospedagem
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
            Os nossos clientes
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            A mais de 9 anos hospedando os sonhos dos nossos clientes
          </p>
        </div>

        <Carousel className="w-full flex justify-center items-center">
          <CarouselContent className="w-full flex justify-center items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="p-4 border rounded-lg shadow-lg mx-2  w-full flex justify-center items-center">
                <ClientsGrid />
              </CarouselItem>
            ))}
          </CarouselContent>
    
        </Carousel>
      </section>
    </>
  );
}