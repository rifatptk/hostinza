import React from 'react'
import MarketplaceHeader from './MarketplaceHeader'

export default function MarketplaceHeaderLayout({ children }) {
  return (
    <>
    <MarketplaceHeader />
  {children}
  </>
  )

}
