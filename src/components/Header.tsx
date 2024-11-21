import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='w-full sm:flex inline-flex justify-between py-5 px-10  md:flex md:justify-between m-5  '>
      {/* logo */}
      <Image src="/images/carticon.png" alt="logo" width={40} height={40} />
      <ul className='flex items-center gap-5'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Category</a></li>
        <li><a href="#">Shop</a></li>
      </ul>

    </div>
  )
}

export default Header



