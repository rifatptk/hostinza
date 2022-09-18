import React,{useState} from "react";
import { AddIntegrationModel } from "../../Dashboard/Account/billing/Model";
import { useBlogsSlugQuery  } from '../../../data/blogs';

export default function GetStartedBox({slug}) {
  const { data}  = useBlogsSlugQuery(slug)

    const [state,setstate] = useState(false)

  return (
    <div className="mt-12 mb-36 md:px-12 md:py-12 sm:px-6 sm:py-6 xs:px-6 xs:py-6 border-[2px] border-dark-blue-2 rounded-md xs:w-[95%] sm:w-[95%] md:w-full xs:mx-auto sm:mx-auto md:mx-0">
        <AddIntegrationModel state={state} setstate={setstate}/>
      <div className="flex align-middle md:justify-between md:flex-row xs:flex-col sm:flex-col xs:justify-center sm:justify-center ">
        <p className="text-dark-blue-2 text-2xl xs:text-xl self-center font-semibold xs:text-center sm:text-center md:text-start">Get started with Vercel and Sitecore OrderCloud.</p>
        <button onClick={() => setstate(true)} className="sm:my-3 xs:my-3 md:my-0 bg-dark-blue-2 py-2 px-4 self-center active:scale-[1.05] group rounded-md transition hover:scale-[1.02] hover:bg-transparent duration-200 border-[1px] border-dark-blue-2 shadow-sm">
          <span className="text-sm group-hover:text-dark-blue-2 text-white font-medium ">
            Add Integrations
          </span>
        </button>
      </div>
    </div>
  );
}
