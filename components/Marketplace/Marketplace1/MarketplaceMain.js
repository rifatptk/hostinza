import React from 'react'
import MarketplaceAppLayout from './MarketplaceAppLayout'
import MarketplaceFilter from './MarketplaceFilter'

export default function MarketplaceMain() {
  return (
    <>
    <div className="pt-12 pb-24 border-t-[1px]">
<MarketplaceFilter />
<MarketplaceAppLayout />
    </div>
    </>
  )
}
