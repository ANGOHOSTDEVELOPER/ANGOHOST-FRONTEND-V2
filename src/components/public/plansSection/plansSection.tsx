"use client";
import { Check } from "lucide-react";
import React, { useState } from "react";
import { IAddon, IPlan } from "./types";
import api from "@/services/api/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";

import { CardSkeleton } from "./components/card-skeleton";
import { Button } from "@/components/ui/button";
import { AdicionarPlanoModal } from "./components/add-plan-modal";

const Pricing = ({
  firstTitle,
  title,
  description,
  type,
}: {
  firstTitle: string;
  title: string;
  description: string;
  type: string;
}) => {

  const { data, isLoading } = useQuery({
    queryKey: ["plans", type],
    queryFn: () => getPlans(type),
  });

  async function getPlans(type: string) : Promise<IPlan[] |[]> {
    const response = await api.get(`/general/getPlans/${type}`);
   return response.data.data as IPlan[];
  
  }



  return (
    <section className="relative z-10 overflow-hidden e pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                {firstTitle}
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                {title}
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                {description}
              </p>
            </div>
          </div>
        </div>

        {isLoading ? (
         <div className="flex justify-center flex-wrap gap-12">
           <CardSkeleton />
           <CardSkeleton />
           <CardSkeleton />
         </div>
        ) : (
          <div className="w-full ">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full "
            >
              <CarouselContent className="flex gap-4 bg-transparent">
                {(data|| []).map((plan) => (
                  <CarouselItem
                    key={plan.id}
                    className="p-6  rounded-lg shadow-lg  bg-transparent  translate-x-0 flex flex-col items-center basis-1/3"
                  >
                    <PricingCard
                      key={plan.id}
                      id={plan.id}
                      type={(JSON.parse(plan.addons) as IAddon).name}
                      price={(JSON.parse(plan.addons) as IAddon).price}
                      subscription={`1 ${
                        (JSON.parse(plan.addons) as IAddon).period
                      }`}
                      description={
                        "Alavanque a sua empresa com o plano mais popular"
                      }
                      buttonText={`Escolher ${
                        (JSON.parse(plan.addons) as IAddon).name
                      }`}
                      active={plan.rank === 2 && true}
                    >
                      {(JSON.parse(plan.addons) as IAddon).features
                        .split("\n")
                        .map((feature) => (
                          <List key={feature}>
                            <div
                              className={` ${
                                plan.rank === 2
                                  ? "bg-gradient-to-r from-[#6CFBB6] to-[#FFC64F]"
                                  : "border"
                              } w-[24px] h-[24px] flex items-center justify-center rounded-full p-[1px] `}
                            >
                              <div
                                className={`${
                                  plan.rank === 2 ? "bg-black" : "bg-white"
                                } w-full h-full flex items-center justify-center rounded-full`}
                              >
                                <Check
                                  color={plan.rank === 2 ? "#fff" : "#111114"}
                                  size={14}
                                />
                              </div>
                            </div>
                            {feature}
                          </List>
                        ))}
                    </PricingCard>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-" size={"lg"} />
              <CarouselNext className="absolute right-4" size={"lg"} />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;

interface IPricingCardProps {
  children: React.ReactNode;
  description: string;
  price: string;
  type: string;
  subscription: string;
  buttonText: string;
  active?: boolean;
  id: number;
}

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
  id  
}: IPricingCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <div className={`${active && "scale-105"} px-2 w-[455px]`}>
        <div
          className={`relative z-10 mb-10 overflow-hidden rounded-[32px] border-2 border-stroke ${
            active ? "text-[#fff]" : "text-black"
          } ${
            active ? "bg-[#111114]" : "bg-white"
          } px-4 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]`}
        >
          <span
            className={`mb-3 font-[400] text-2xl block ${
              active ? "text-white" : "text-primary"
            }`}
          >
            {type}
          </span>
          <h2
            className={`mb-2 text-[42px] font-bold text-dark dark:text-white ${
              active &&
              "bg-gradient-to-r from-[#6CFBB6] to-[#FFC64F] bg-clip-text text-transparent"
            }`}
          >
            {price}
            <span className="text-base font-regular text-body-color dark:text-dark-6 ">
              / {subscription}
            </span>
          </h2>
          <p className="opacity-80 font-light border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
            {description}
          </p>
          <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
          <Button
           onClick={() => setIsModalOpen(true)}
            className={` ${
              active
                ? "block w-full rounded-[24px] border border-primary bg-gradient-to-r from-[#6CFBB6] to-[#FFC64F] p-3 text-center text-base font-medium text-black transition hover:bg-opacity-90"
                : "block w-full rounded-[24px] border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
            } `}
          >
            {buttonText}
          </Button>
          {!active && (
            <div>
              <span className="absolute right-0 top-7 z-[-1]">
                <svg
                  width={77}
                  height={172}
                  viewBox="0 0 77 172"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1={86}
                      y1={0}
                      x2={86}
                      y2={172}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3056D3" stopOpacity="0.09" />
                      <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute right-4 top-4 z-[-1]">
                <svg
                  width={41}
                  height={89}
                  viewBox="0 0 41 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="38.9138"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 38.9138 87.4849)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 38.9138 74.9871)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 38.9138 62.4892)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 38.9138 38.3457)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 38.9138 13.634)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 38.9138 50.2754)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 38.9138 26.1319)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="1.42021"
                    r="1.42021"
                    transform="rotate(180 38.9138 1.42021)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 26.4157 87.4849)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 26.4157 74.9871)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 26.4157 62.4892)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 26.4157 38.3457)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 26.4157 13.634)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 26.4157 50.2754)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 26.4157 26.1319)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="1.4202"
                    r="1.42021"
                    transform="rotate(180 26.4157 1.4202)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 13.9177 87.4849)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 13.9177 74.9871)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 13.9177 62.4892)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 13.9177 38.3457)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 13.9177 13.634)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 13.9177 50.2754)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 13.9177 26.1319)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="1.42019"
                    r="1.42021"
                    transform="rotate(180 13.9177 1.42019)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 1.41963 87.4849)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 1.41963 74.9871)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 1.41963 62.4892)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 1.41963 38.3457)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 1.41963 13.634)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 1.41963 50.2754)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 1.41963 26.1319)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="1.4202"
                    r="1.42021"
                    transform="rotate(180 1.41963 1.4202)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
            </div>
          )}
        </div>
      </div>
      <AdicionarPlanoModal
      
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onAddToCart={(plano, tipo, quantidade) => console.log(plano, tipo, quantidade)}
      plano={
        {
          id: id.toString(),
          titulo: type,
          preco: parseFloat(price),
        }
      } />
    </>
  );
};

const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-base text-body-color dark:text-dark-6 flex items-center justify-start gap-x-2">
      {children}
    </div>
  );
};
