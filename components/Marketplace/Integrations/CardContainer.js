import React from 'react'
import FeaturedCard from './FeaturedCards'
import Card from './Card'

export default function CardContainer(){

  
    return(
        <div className="w-full px-2 py-2 xs:w-auto">
            <div id="featured" className=" xs:mx-3 xs:overflow-x-auto sm:overflow-x-auto md:overflow-hidden xs:w-full">
             <h2 className="px-3 py-1 mt-1 font-semibold text-3xl text-dark-blue-2 opacity-90">Featured</h2>
           <div className=" overflow-x-auto lg:grid  xl:grid mt-3  py-2   grid-rows-1 grid-cols-3 mx-auto xs:flex gap-5  md:w-full sm:flex md:flex ">
           <FeaturedCard   maintext={'MongoDB Atlas'} secondarytext="Intuitive document-oriented database"/>
           <FeaturedCard   maintext="Axiom" secondarytext={'Logs, functions, and Web Vitals insights'}/>
           <FeaturedCard   maintext="Sanity" secondarytext="The Unified Content Platform"/>
           </div>
            </div>
            <div id="commerce"  className=" xs:overflow-x-auto sm:overflow-x-auto md:overflow-hidden xs:mx-3 xs:w-full">
             <h2  className="px-3 py-1 mt-3 font-semibold text-3xl text-dark-blue-2 opacity-90">Commerce</h2>
           <div  className="overflow-x-auto lg:grid  xl:grid mt-3 py-2   xs:place-items-center grid-rows-1 xs:flex  gap-5  md:w-full sm:flex md:flex flex-wrap grid-cols-3  mx-auto">
           <Card  maintext={'MongoDB Atlas'} secondarytext="Intuitive document-oriented database"/>
           <Card  maintext="Axiom" secondarytext={'Logs, functions, and Web Vitals insights'}/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           </div>
            </div>
            <div id="logging" className='xs:mx-3 overflow-x-auto'>
             <h2 className="px-3 py-1 mt-3 font-semibold text-3xl text-dark-blue-2 opacity-90">Logging</h2>
           <div className="lg:grid  xl:grid mt-3 py-2  gap-y-3 grid-rows-1 xs:flex align-middle gap-5 w-[auto] sm:flex md:flex flex-wrap grid-cols-3  mx-auto">
           <Card  maintext={'MongoDB Atlas'} secondarytext="Intuitive document-oriented database"/>
           <Card  maintext="Axiom" secondarytext={'Logs, functions, and Web Vitals insights'}/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           </div>
            </div>
            <div id="databases" className='xs:mx-3 overflow-x-auto'>
             <h2 className="px-3 py-1 mt-3 font-semibold text-3xl text-dark-blue-2 opacity-90">Databases</h2>
           <div className="lg:grid  xl:grid mt-3 py-2  gap-y-3 xs:place-items-center grid-rows-1 xs:flex align-middle gap-5 w-[auto] sm:flex md:flex flex-wrap grid-cols-3  mx-auto">
           <Card  maintext={'MongoDB Atlas'} secondarytext="Intuitive document-oriented database"/>
           <Card  maintext="Axiom" secondarytext={'Logs, functions, and Web Vitals insights'}/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           </div>
            </div>
            <div id="cms" className='xs:mx-3 overflow-x-auto'>
             <h2 className="px-3 py-1 mt-3 font-semibold text-3xl text-dark-blue-2 opacity-90">CMS</h2>
           <div className="lg:grid  xl:grid mt-3 py-2  gap-y-3 xs:place-items-center grid-rows-1 xs:flex align-middle gap-5 w-[auto] sm:flex md:flex flex-wrap grid-cols-3  mx-auto">
           <Card  maintext={'MongoDB Atlas'} secondarytext="Intuitive document-oriented database"/>
           <Card  maintext="Axiom" secondarytext={'Logs, functions, and Web Vitals insights'}/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           </div>
            </div>
            <div id="monitoring" className='xs:mx-3 overflow-x-auto'>
             <h2 className="px-3 py-1 mt-3 font-semibold text-3xl text-dark-blue-2 opacity-90">Monitoring</h2>
           <div className="lg:grid  xl:grid mt-3 py-2  gap-y-3 xs:place-items-center grid-rows-1 xs:flex align-middle gap-5 w-[auto] sm:flex md:flex flex-wrap grid-cols-3  mx-auto">
           <Card  maintext={'MongoDB Atlas'} secondarytext="Intuitive document-oriented database"/>
           <Card  maintext="Axiom" secondarytext={'Logs, functions, and Web Vitals insights'}/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           </div>
            </div>
            <div id="devtools" className='xs:mx-3 overflow-x-auto'>
             <h2 className="px-3 py-1 mt-3 font-semibold text-3xl text-dark-blue-2 opacity-90">DevTools</h2>
           <div className="lg:grid  xl:grid mt-3 py-2  gap-y-3 xs:place-items-center grid-rows-1 xs:flex align-middle gap-5 w-[auto] sm:flex md:flex flex-wrap grid-cols-3  mx-auto">
           <Card  maintext={'MongoDB Atlas'} secondarytext="Intuitive document-oriented database"/>
           <Card  maintext="Axiom" secondarytext={'Logs, functions, and Web Vitals insights'}/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           </div>
            </div>
            <div id="messaging" className='xs:mx-3 overflow-x-auto '>
             <h2 className="px-3 py-1 mt-3 font-semibold text-3xl text-dark-blue-2 opacity-90">Messaging</h2>
           <div className="lg:grid  xl:grid mt-3 py-2  gap-y-3 xs:place-items-center grid-rows-1 xs:flex align-middle gap-5 w-[auto] sm:flex md:flex flex-wrap grid-cols-3  mx-auto">
           <Card  maintext={'MongoDB Atlas'} secondarytext="Intuitive document-oriented database"/>
           </div>
            </div>
            <div id="code repository" className='xs:mx-3 overflow-x-auto pb-36'>
             <h2 className="px-3 py-1 mt-3 font-semibold text-3xl text-dark-blue-2 opacity-90">Code Repository</h2>
           <div className="lg:grid  xl:grid mt-3 py-2  gap-y-3 xs:place-items-center grid-rows-1 xs:flex align-middle gap-5 w-[auto] sm:flex md:flex flex-wrap grid-cols-3  mx-auto">
           <Card  maintext={'MongoDB Atlas'} secondarytext="Intuitive document-oriented database"/>
           <Card  maintext="Axiom" secondarytext={'Logs, functions, and Web Vitals insights'}/>
           <Card  maintext="Sanity" secondarytext="The Unified Content Platform"/>
           </div>
            </div>
           {/* <Card /> */}
        </div>
    )
}