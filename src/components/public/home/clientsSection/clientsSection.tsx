import clientsList from "./clientList";
import ClientsGrid from "./clientsGrid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ClientsSection() {
  return (
    <section className=" dot   mt-[100px] pt-[100px] flex flex-col items-center w-full">
      <div className="mb-10 max-w-[510px] text-center">
        <span className="mb-2 block text-lg font-semibold text-primary">
          Especialistas em hospedagem
        </span>
        <h2 className="mb-3 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-4xl md:text-[40px]">
          Os nossos clientes
        </h2>
        <p className="text-base text-body-color dark:text-dark-6">
          Há mais de 9 anos hospedando os sonhos dos nossos clientes
        </p>
      </div>

      <Carousel
       
        className="    w-full flex justify-center "
      >
        <CarouselContent className="flex gap-4 bg-transparent">
          {clientsList.map((clients, index) => (
            <CarouselItem
              key={`${clients.type}-${index}`}
              className="p-6  rounded-lg shadow-lg  bg-transparent  translate-x-0 flex flex-col items-center"
            >
              <h2 className="text-xl font-semibold text-primary mb-3 text-center">
                {clients.type}
              </h2>
              <ClientsGrid clients={clients.clients} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>
    </section>
  );
}
