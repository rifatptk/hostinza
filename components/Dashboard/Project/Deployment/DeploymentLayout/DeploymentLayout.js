import React from 'react'
import DeploymentList from './DeploymentList'
import DeploymentSearch from './DeploymentSearch'

export default function DepoloymentLayout() {
  return (
    <>
    <div className="flex bg-[#1141d3] justify-between border-b-[1px] gap-3 sm:!p-24 p-6 py-10 items-center">
    <h1 className='text-white text-[2rem] font-medium'>
    Deployments
    </h1>
</div>

    <div className="flex pb-[30rem] flex-col sm:!w-[85%] w-[95%] 0 mt-4 justify-center m-auto">
        <DeploymentSearch />
        <DeploymentList />

    </div>
    </>
  )
}
