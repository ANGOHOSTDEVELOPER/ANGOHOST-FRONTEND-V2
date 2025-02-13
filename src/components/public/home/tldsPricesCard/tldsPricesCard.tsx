export default function TldsPricesCard() {
    return (
        <>
            <div className="text-white flex items-center justify-between absolute p-2 gap-x-2 bottom-[-70px] bg-primary rounded-[24px]">
            {data.map((item) => (
              <div
                key={item.name}
                className="flex-[1] h-full p-8 flex items-center justify-center rounded-[16px] flex-col bg-[#222]"
              >
                <h1 className="font-bold text-[1.5rem]">{item.name}</h1>
                <p className="text-[1.2rem]">{item.price} Kz/ano</p>
              </div>
            ))}
          </div>
        </>
    )
}


const data = [
  {
    name: ".co.ao",
    price: 35000,
  },
  {
    name: ".ao",
    price: 35000,
  },
  {
    name: ".com",
    price: 35000,
  },
  {
    name: ".org",
    price: 35000,
  },
  {
    name: ".edu.ao",
    price: 35000,
  },
];