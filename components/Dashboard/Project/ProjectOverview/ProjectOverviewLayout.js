import React from 'react'
import PreviewDeployments from './PreviewDeployments'
import ProductionDeployment from './ProductionDeployment'
import ProjectHeader from './ProjectHeader'

export default function UserOverviewLayout() {
  return (
  <>
    <ProjectHeader projectName="MyProject" />
    <ProductionDeployment />
    <PreviewDeployments />
  </>
  )
}
