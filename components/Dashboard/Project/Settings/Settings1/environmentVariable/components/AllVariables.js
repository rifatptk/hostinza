import useTranslation from "next-translate/useTranslation";

export default function AllVariables(){
    const { t } = useTranslation("common");
    return(
        <div className="flex justify-center mb-4">
            <div className="block border rounded-md border-dark-blue-2 bg-gray-50 w-full shadow-md">
              <div className="w-2/3 p-10 mx-auto">
                <h5 className="text-dark-blue-2 text-base text-center font-medium mb-2">
                  {t("No Environment Variables Added")}
                </h5>
                <p className="text-gray-700 text-center text-sm mb-4">
                  {t("Customize the behavior of your application based on the phase of the Develop, Preview, Ship workflow that it is in")}{"."}
                </p>
              </div>
            </div>
        </div>
    )
}