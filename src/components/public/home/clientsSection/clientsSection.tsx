import ClientsGrid from "./clientsGrid";

export default function ClientsSection() {
  return (
    <>
      <section className="mt-[100px] pt-[100px] w-full flex flex-col items-center justify-center">
        <h1 className="font-bold text-[3rem]">
          Hospede o seu site com quem é especialista
        </h1>
        <p className="text-[1.4rem]">
          A mais de 9 anos hospedando o sonho dos nossos clientes
        </p>
        <ClientsGrid />
      </section>
    </>
  );
}
