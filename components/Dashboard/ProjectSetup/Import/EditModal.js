import React from "react";
import useTranslation from "next-translate/useTranslation";
import ModalProjectName from "./ModalProjectName";
import ModalProjectTree from "./ModalProjectTree";

export default function EditModal() {
  const { t } = useTranslation("common");
  return (
    <div>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        tabIndex="0"
        aria-hidden="true"
        className="hidden overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div className="relative p-4 w-[32rem] max-w-2xl  md:h-auto overflow-y-auto  ">
          <div className="relative bg-white rounded-lg shadow flex flex-col items-center">
            <div className="flex flex-col px-10 py-8 items-center ">
              <h3 className="text-[2rem] font-medium text-gray-900 pb-4">
                {t("Root Directory")}
              </h3>
              <p className="text-center text-[0.8rem] leading-relaxed text-gray-500 pb-4">
                {t(
                  "Select the directory where your source code is located. To deploy a monorepo, create separate projects for other directories in the future."
                )}
              </p>
              <ModalProjectName
                projectImage={"/images/github.png"}
                projectName="my-project"
              />
            </div>

            <div className="overflow-y-auto h-[15rem]  border-t-2 w-full">
              <ModalProjectTree
                projectName="my-project"
                projectBranchName="public"
                projectBranchName2nd="src"
                projectImage={"/images/github.png"}
              />
            </div>

            <div className="flex items-center gap-4 justify-center sticky py-4 w-full rounded-b border-t border-gray-200">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              >
                {t("CANCEL")}
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                {t("CONTINUE")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
