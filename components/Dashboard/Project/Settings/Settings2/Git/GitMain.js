import React from 'react'
import ConnectedgitRepository from './ConnectedgitRepository'
import ConnectionPrompt from './ConnectionPrompt'
import DeployHooks from './DeployHooks'
import IgnoredBuildStep from './IgnoredBuildStep'
import ProductionBranch from './ProductionBranch'

export default function GitMain() {
  return (
    <div className="w-full bg-white rounded-md border-b-[1px] border-gray-300">
 <ConnectedgitRepository />
 <ProductionBranch />
 <DeployHooks />
 <IgnoredBuildStep />
 <ConnectionPrompt />
 </div>
  )
}
