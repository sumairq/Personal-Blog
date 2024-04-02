import Image from 'next/image'
import Link from 'next/link'
import profileImg from "@/public/profile-img.png"
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark dark:text-light'>
        {/* <div className=' w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark 
        dark:border-gray mr-2 md:mr-4'>
        <Image src={profileImg} alt="Sumair's Notes" className='w-full h-auto rounded-full' size="33vw" priority/>
        </div> */}
        <h1 className='font-bold dark:font-semibold text-xl md:text-4xl'>Sumair's Notes <span className=' inline-block leading-3 tracking-tighter text-logo border rounded-sm '>The Blog <br/> Of Sumair Qaisar</span> </h1>
        </Link>
  )
}

export default Logo