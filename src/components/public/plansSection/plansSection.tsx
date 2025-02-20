import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const plans = [
  
  {
    type: "Entusiasta",
    price: "77 500 Kz",
    subscription: "3 meses",
    description:"Perfeito para pequenos negócios",
    active: false,
    features: [
      "Domínio Grátis .ao .com",
      "300GB Espaço SSD",
      "Permite 10 Sites",
      "CPU 3 Núcleos",
      "Limite de 150.000 arquivos",
      "30 Contas de Email",
      "100 MySQL",
      "Backups Semanais",
      "SSL Let's Encrypt Grátis",
      "Uptime de 99.9%",
    ],
  },
  {
    type: "Explorador",
    price: "15 850 Kz",
    subscription: "3 meses",
    description:"Alavanque a sua empresa com o plano mais popular",
    active: true,
    features: [
      "20GB Espaço SSD",
      "Permite 1 Site",
      "CPU 3 Núcleos",
      "Limite de 150.000 arquivos",
      "4 MySQL",
      "Backups Semanais",
      "SSL Let's Encrypt Grátis",
      "Uptime de 99.9%",
      "Permite 10 contas de E-mail",
    ],
  },
  {
    type: "Especialista",
    price: "47 750 Kz",
    subscription: "3 meses",
    description:"Alta performance e recursos aprimorados",
    active: false,
    features: [
      "Domínio Grátis .ao .com",
      "200GB Espaço SSD",
      "Permite 2 Sites",
      "CPU 4 Núcleos",
      "Limite de 150.000 arquivos",
      "4 MySQL",
      "Backups Semanais",
      "SSL Let's Encrypt Grátis",
      "Permite até 70 contas de E-mail",
      "Uptime de 99.9%",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="relative z-10 overflow-hidden e pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Conheça os nossos
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Planos de hospedagem
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Garanta a performance do seu site com os nossos planos de hospedagem
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap">
            {plans.map((plan) => (
        <PricingCard
        key={plan.type}
        type={plan.type}
        price={plan.price}
        subscription={plan.subscription}
        description={plan.description}
        buttonText={`Escolher ${plan.type}`}
        active={plan.active}
      >
        {plan.features.map((feature) => (
          <List key={feature}><div className={` ${plan.active ? "bg-gradient-to-r from-[#6CFBB6] to-[#FFC64F]" : "border"} w-[24px] h-[24px] flex items-center justify-center rounded-full p-[1px] `}>
          <div className={`${plan.active ? "bg-black" : "bg-white"} w-full h-full flex items-center justify-center rounded-full`}>
            <Check color={plan.active ? "#fff":  "#111114" } size={14} />
          </div>
        </div>{feature}</List>
          
        ))}
      </PricingCard>
      ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

interface IPricingCardProps {
  children: React.ReactNode,
  description: string,
  price: string,
  type: string,
  subscription: string,
  buttonText: string,
  active?: boolean
}

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}: IPricingCardProps) => {
  return (
    <>
      <div className={`${active && "scale-105"} w-full px-2 md:w-1/2 lg:w-[32%] mx-auto`}>
        <div className={`relative z-10 mb-10 overflow-hidden rounded-[32px] border-2 border-stroke ${active ? 'text-[#fff]' : 'text-black'} ${active ? 'bg-[#111114]' : 'bg-white'} px-4 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]`}>
          <span className={`mb-3 font-[400] text-2xl block ${active ? "text-white" : 'text-primary'}`}>
            {type}
          </span>
          <h2 className={`mb-2 text-[42px] font-bold text-dark dark:text-white ${active && "bg-gradient-to-r from-[#6CFBB6] to-[#FFC64F] bg-clip-text text-transparent"}`}>
            {price}
            <span className="text-base font-regular text-body-color dark:text-dark-6 ">
              / {subscription}
            </span>
          </h2>
          <p className="opacity-80 font-light border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
            {description}
          </p>
          <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
          <Link
            href="/#"
            className={` ${
              active
                ? "block w-full rounded-[24px] border border-primary bg-gradient-to-r from-[#6CFBB6] to-[#FFC64F] p-3 text-center text-base font-medium text-black transition hover:bg-opacity-90"
                : "block w-full rounded-[24px] border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
            } `}
          >
            {buttonText}
          </Link>
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
    </>
  );
};

const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-base text-body-color dark:text-dark-6 flex items-center justify-start gap-x-2">{children}</div>
  );
};



