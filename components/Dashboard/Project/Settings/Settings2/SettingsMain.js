import React from 'react'
import DeleteProject from './DeleteProject'
import DevelopmentSettings from './DevelopmentSettings'
import ProjectId from './ProjectId'
import ProjectName from './ProjectName'
import RootDirectory from './RootDirectory'
import TransferProject from './TransferProject'
import Version from './Version'


export default function SettingsMain() {
  return (
<>

  <div className="w-full bg-white rounded-md border-b-[1px] border-gray-300">

<ProjectName />
<DevelopmentSettings />
<RootDirectory />
<Version />
<ProjectId />
<TransferProject />
<DeleteProject />
  </div>

</>
  )
}

