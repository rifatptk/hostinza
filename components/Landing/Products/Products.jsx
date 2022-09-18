import Link from "next/link";

const cardsData = [
  {
    title: "CLOUD VPS",
    subTitle: "Virtual Private Servers",
    price: 5.99,
    description: "Starts with 4 vCPU, 8GB RAM, 32TB Traffic and 50GB NVMe",
    button: "View all Cloud VPS",
    to: "/vps-hosting",
  },
  {
    title: "CLOUD VDS",
    subTitle: "Virtual Dedicated Servers",
    price: 45.99,
    description: "Up to 96GB RAM & dedicated resources provisioned instantly.",
    button: "View all Cloud VDS",
    to: "/vds-hosting",
  },
  {
    title: "BARE METAL",
    subTitle: "Dedicated Servers",
    price: 135.99,
    description:
      "Bare metal servers with individual configuration and full control.",
    button: "View all DS",
    to: "/ds-hosting",
  },
];

const Products = () => {
  return (
    <>
      <h1 className="text-4xl text-center text-[#0D47A1] font-bold mt-5">
        Products & Services
      </h1>
      <p className="text-center font-bold text-gray-500">Ongoing offers</p>
      <div className="px-[32px] py-[80px] gap-4  flex-wrap flex justify-around ">
        {cardsData.map((card) => (
          <div
            key={card.title}
            className="flex flex-col justify-between w-[320px] p-[40px] ring rounded-lg bg-[#0D47A1] text-white hover:scale-105 transition-all"
          >
            <h1 className="text-xl font-bold">{card.title}</h1>

            <h3>{card.subTitle}</h3>
            <small className="text-xs">From</small>
            <h1 className="text-4xl font-bold">
              ${card.price} <small className="text-xs">/ month</small>
            </h1>
            <p className="my-5">{card.description}</p>
            <Link href={card.to}>
              <div className="cursor-pointer bg-white font-bold text-[#0D47A1] text-center rounded-full py-2">
                {card.button}
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="p-5 flex flex-wrap justify-around gap-[40px] mb-5">
        <div>
          <p className="text-4xl font-bold text-[#0d47a1]">120,000+</p>
          <p className="font-bold text-lg text-gray-700">Customers worlwide</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#0d47a1]">230,000+</p>
          <p className="font-bold text-lg text-gray-700">Servers Running</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#0d47a1]">10 Years</p>
          <p className="font-bold text-lg text-gray-700">In Business</p>
        </div>
      </div>
    </>
  );
};

export default Products;
