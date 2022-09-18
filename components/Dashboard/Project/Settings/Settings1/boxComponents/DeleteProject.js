import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function DeleteProject({ heading, paragraph }) {
  const { t } = useTranslation("common");
  return (
    <div className="flex justify-center mb-4">
      <div className="block border-[3px] border-red-600 rounded-md bg-white w-full">
        <div className="p-6">
          <h5 className="text-dark-blue-2 text-xl font-semibold mb-2">
            {heading}
          </h5>
          <p className="text-dark-blue-2 text-base mb-4 font-light">
            {paragraph}
          </p>
          <hr />
          <div className="flex mt-4 space-x-4">
            <div className="border px-8 py-2">
              <Image
                objectFit="cover"
                width={100}
                height={80}
                alt="productImage"
                layout="fixed"
                src="/images/hotel-5.webp"
                className="rounded-md h-[350px]"
              />
            </div>
            <div>
              <p className="font-medium">weather-app</p>
              <div className="updated">Last updated 2d ago</div>
            </div>
          </div>
        </div>
        <div className="py-4 px-6 border-t bg-gray-100 text-gray-800 flex justify-end rounded-b-lg">
          <div className="right">
            <button
              type="button"
              className="inline-block px-6 py-2 border border-red-600 bg-red-600 text-white font-medium text-xs leading-tight rounded-lg hover:scale-105 transition duration-200 focus:outline-none focus:ring-0 ease-in-out"
            >
              {t("Delete")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
