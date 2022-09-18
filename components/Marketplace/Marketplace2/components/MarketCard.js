import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export default function MarketCard({
  img,
  heading,
  para,
  extra,
  price,
  tag,
  label,
  detailed,
  showAlert,
  id,
}) {
  return (
    <div className="w-full px-2 pb-4 pt-2 rounded-md shadow-lg relative my-1 border">
      <Image
        src={img}
        alt="Hotel Images"
        layout="responsive"
        objectFit="contain"
        width={"300px"}
        height="220px"
        className="rounded-xl mb-3 w-[300px] h-[220px] mx-auto block"
      />
      <hr />
      <p className="text-dark-blue-2 font-medium text-lg my-1">{heading}</p>
      <p className="text-gray-700 font-lighter text-sm my-1">{para}</p>
      <p className="text-gray-700 font-lighter text-xs my-1">{detailed}</p>
      <p className="text-gray-600 font-light text-sm my-1">{extra}</p>
      <hr className="my-3" />
      <div className="flex justify-between">
        <p className="text-dark-blue-2 font-semibold">{price}</p>
        <div>
          <p className="text-gray-500 font-semibold">{tag}</p>
        </div>
      </div>
      <div className="absolute top-[20px] right-[30px]">
        <FontAwesomeIcon
          className="text-black pt-1 cursor-pointer"
          onClick={() => showAlert(id)}
          icon={faHeart}
        />
      </div>
      <div className="absolute top-[20px] left-[20px]">
        <div
          className={`border border-dark-blue-2 w-[80px] text-center ${
            label == "Basic"
              ? "bg-white"
              : label == "Standard"
              ? "bg-orange-700"
              : "bg-green-600"
          }  opacity-90 rounded-md p-1`}
        >
          <p
            className={`text-sm font-medium  ${
              label == "Basic" ? "text-black" : "text-white"
            }`}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
