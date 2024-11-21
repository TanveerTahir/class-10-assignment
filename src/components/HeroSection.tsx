import React from "react"
import Image from "next/image"




const HeroSection = () => {
    return(
          <div className="gap-5 sm:grid md:grid-cols-2  lg:grid-cols-3 ">
            <div className="bg-gray-400 w-full content-center justify-center items-center text-center h-screen">
                <div className="">
                    <Image src="/images/p1.jpg" alt="product-1" width={300} height={300} className="flex justify-self-center"/>
                    <h1 className="text-2xl font-bold font-sans text-white">Canon D-32</h1> 
                    <br /> <p className="text-white">39999/=</p><br />
                    <button className="bg-blue-500 text-white rounded px-10">Buy Now</button>
                </div>
            </div>

            <div className="bg-gray-400 w-full content-center justify-center items-center text-center  h-screen">
                <div className="">
                    <Image src="/images/p1.jpg" alt="product-2" width={300} height={300} className="flex justify-self-center"/>
                    <h1 className="text-2xl font-bold font-sans text-white">Nikkon 70-D</h1> 
                    <br /> <p className="text-white">59999/=</p><br />
                    <button className="bg-blue-500 text-white rounded px-10">Buy Now</button>
                </div>
            </div>

            <div className="bg-gray-400 w-full content-center justify-center items-center text-center h-screen">
        
                <div className="">
                    <Image src="/images/p1.jpg" alt="product-3" width={300} height={300} className="flex justify-self-center"/>
                    <h1 className="text-2xl font-bold font-sans text-white">Sony CyberShot</h1> 
                    <br /> <p className="text-white">89999/=</p><br />
                    <button className="bg-blue-500 text-white rounded px-10">Buy Now</button>
                </div>
            </div>
          </div>
    )
}

export default HeroSection