import React, { useState } from "react";
import DomainCard from "./DomainCard";
import DomainHero from "./DomainHero";

const domains = [
  { domainName: "", extension: ".com", price: "$50", ids: "domain-1" },
  { domainName: "", extension: ".io", price: "$30", ids: "domain-2" },
  { domainName: "", extension: ".co", price: "$70", ids: "domain-3" },
  { domainName: "", extension: ".edu", price: "$70", ids: "domain-4" },
  { domainName: "", extension: ".org", price: "$70", ids: "domain-5" },
  { domainName: "", extension: ".net", price: "$70", ids: "domain-6" },
  { domainName: "", extension: ".app", price: "$80", ids: "domain-7" },
  { domainName: "", extension: ".lite", price: "$70", ids: "domain-8" },
  { domainName: "", extension: ".lite", price: "$70", ids: "domain-9" },
  { domainName: "", extension: ".lite", price: "$70", ids: "domain-10" },
  { domainName: "", extension: ".lite", price: "$70", ids: "domain-11" },
  { domainName: "", extension: ".lite", price: "$70", ids: "domain-12" },
];

export default function DomainArea() {
  const [inputValue, setInputValue] = useState("");

  const domainComponent = domains.map((domain) => (
    <DomainCard
      key={domain.ids}
      ids={domain.ids}
      domainName={inputValue}
      extension={domain.extension}
      price={domain.price}
      upperNameO={inputValue + domain.extension}
      upperPriceO={domain.price}
    />
  ));

  const handleChange = (e) => {
    setInputValue(e.target.value);
    document.getElementById("domainComp").classList.add("!grid");
    document.getElementById("load-more").classList.add("!block");
    document.getElementById("hero").classList.add("sm:!h-[20rem]", "h-[15rem]");
  };

  if (typeof window !== "undefined") {
    if (inputValue.length < 1) {
      document.getElementById("domainComp").classList.remove("!grid");
      document.getElementById("load-more").classList.remove("!block");
      document
        .getElementById("hero")
        .classList.remove("sm:!h-[20rem]", "h-[15rem]");
    }
  }

  return (
    <>
      <DomainHero
        inputValueOutside={inputValue}
        handleChangeOutside={handleChange}
        idOutside="hero"
        classOutside="flex flex-col justify-center homeHeroGradient border-b-[1px] sm:!p-24 p-6  h-[100vh] items-center transition-all duration-500 !ease-in-out"
      />
      <div
        id="domainComp"
        className="hidden lg:!grid-cols-4 md:!grid-cols-3 grid-cols-1 gap-4 pt-10 mx-auto sm:!w-[95%] w-[95%] "
      >
        {domainComponent}
      </div>
      <div id="load-more" className="hidden w-[95%] mx-auto my-10">
        <button className="w-full bg-white border-2 border-[#1141d3] text-[0.9rem] text-[#1141d3] font-medium rounded-md py-1">
          Load More
        </button>
      </div>
    </>
  );
}
