import React from 'react'
import Image from 'next/image'
import CheckoutHero from './CheckoutHero'
import Link from 'next/link'

export default function SuccessMain() {
  return (
    <>
    <div className="flex justify-center py-12">
        <div className="flex flex-col">
            <Image src={"/images/success.png"} width="700" height="400" alt='success' />
            <Link href="/">
            <button className=" w-[45%] mx-auto py-2 rounded-md mt-4 text-light-blue font-semibold text-[0.97rem]">Go Back Home</button>
            </Link>
        </div>
    </div>
    </>
  )
}
