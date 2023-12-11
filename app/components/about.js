import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
      <div>
        <div className="flex items-center justify-center">
          <h1 className="text-5xl">About</h1>
        </div>
        <div className="p-2 m-2 flex justify-center ">
          <Image 
              src="/images/fast.png" 
              className="bg-slate-500" 
              alt="logo"
              width={100} 
              height={100} 
          /> <p>hello here</p>
          <Image 
              src="/images/responsive.png" 
              className="bg-slate-500" 
              alt="logo"
              width={100} 
              height={100} 
          />
          <Image 
              src="/images/intuitive.png" 
              className="bg-slate-500" 
              alt="logo"
              width={100} 
              height={100} 
          />
          <Image 
              src="/images/dynamic.png" 
              className="bg-slate-500" 
              alt="logo"
              width={100} 
              height={100} 
          />

      </div>
                
                        
      </div>
    )}
    
    
  export default About