import React from 'react'

export default function InstructionsBox() {

    let instarr = ['ORDERCLOUD_MARKETPLACE_ID','ORDERCLOUD_MARKETPLACE_NAME','ORDERCLOUD_BUYER_CLIENT_ID','ORDERCLOUD_MIDDLEWARE_CLIENT_ID','ORDERCLOUD_MIDDLEWARE_CLIENT_SECRET','COMMERCE_PROVIDER']

  return (
    <div className='w-full py-3'>
    <h1 className='pt-6 pb-8 text-dark-blue-2 font-semibold text-4xl'>Instructions</h1>
    <div>
        <p className='pt-2 text-dark-blue-2 opacity-80 text-md'>Follow the prompts to add the OrderCloud integration to your Vercel project. It will create 2 API Client resources in your selected OrderCloud marketplace with AppNames of Vercel-Storefront-Connector and Vercel-Middleware-Connector. Note: if a API Clients with these AppNames already exist, new ones will not be created. The details of those clients will saved in the following project environment variables.</p>
    </div>
    <ul className="pt-3">
        {instarr.map((item,index)=>{
            return(
                <li key={index} className='my-3 text-sm '><span className='bg-gray-600 opacity-80 text-white p-1 rounded-sm '>{item}</span></li>
            )
        })}
    </ul>
</div>
  )
}
