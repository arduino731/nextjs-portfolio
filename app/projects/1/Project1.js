'use client'
import Image from 'next/image'
import './style.css'
import useHandleScroll from '../../hooks/HandleScroll'

export default function Project1() {
  const currentSection = useHandleScroll();

  return (
    <article className="colorBackgroundOpposite colorText">
      {/* Section Header */}
      <div className="flex items-center colorBackground pb-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <h1 className="p-4 colorTextOpposite rounded-md text-3xl md:text-5xl font-medium my-10 ">Interactive Front-End Developer Showcase</h1>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Project Summary */}
      <div
        className={`scrollHandle md:mx-20 my-6 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out ${
          currentSection === 'projectSummary' ? 'opacity-100' : 'opacity-0'
        }`}
        data-id="projectSummary"
      >
        <p className="text-center text-2xl font-bold mb-6 fadeIn">
        A dynamic, responsive portfolio built with modern web technologies to demonstrate front-end development expertise. Features mobile-first design, smooth GSAP animations, custom JS interactions, and accessibility best practices. Designed using Pug templates and styled with Tailwind CSS, this project highlights UI/UX principles, SEO optimization, and performance tuning for real-world production readiness.
        </p>
          {/* <!-- First Box with Background --> */}
        <div className="colorBackground flex flex-row md:flex-row w-3/4 m-auto p-6 items-center rounded-lg shadow-lg justify-around border-slate-300 border flex-wrap">
          <div className="fadeIn flex flex-col items-center justify-center w-64 h-auto colorBackgroundOpposite colorText rounded-lg shadow-md ">
            <h2 className="text-lg font-bold">Mobile-like Design</h2>
            {/* <!-- Mobile-like Box (Placed Inside the Bottom of H2) --> */}
            <div className="m-5 relative w-auto md:w-56 h-[500px] bg-black rounded-[40px] shadow-xl border-[10px] border-gray-500 overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-lg"></div>
              {/* <!-- Embedded YouTube Video --> */}
              <iframe  
                className="w-full h-full rounded-[30px]" 
                src="https://www.youtube.com/embed/2vOmAAKTv74?autoplay=1" 
                title="Mobile-like Design Portfolio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameborder="0" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
          {/* <!-- Second Box with Background --> */}
          <div className="fadeIn flex flex-col items-center justify-center w-64 md:w-96 h-auto colorBackgroundOpposite colorText rounded-lg shadow-md ">
            <h2 className="text-lg font-bold ">Desktop-like Design</h2>
            {/* <!-- Mobile-like Box with YouTube Iframe --> */}
            <div className="m-5 relative md:w-80 w-auto h-[300px] bg-black rounded-[40px] shadow-xl border-[10px] border-gray-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-10 bg-gray-800 flex items-center px-4">
                      <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                      <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              {/* <!-- Embedded YouTube Video --> */}
              <iframe  
                className="w-full h-full rounded-[30px]" 
                src="https://www.youtube.com/embed/gUfnJ_Gykg0?autoplay=1" 
                title="Desktop-like Design Portfolio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameborder="0" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
      {/* What I Built List */}
      <div
        className={`scrollHandle md:mx-20 my-6 p-6 colorBackground rounded-lg shadow-md transition-opacity duration-1000 ease-in-out ${
          currentSection === 'built' ? 'opacity-100' : 'opacity-0'
        }`}
        data-id="built"
      >
        <div className="text-center mb-6 fadeIn ">
          <h2 className="text-3xl font-bold colorTextOpposite mb-2 fadeIn">💡 What I Built</h2>
          <p className="colorTextOpposite text-lg fadeIn">Interactive Front-End Developer features of this project:</p>
        </div>


        {/* here */}
        <h1 className="colorTextOpposite text-lg text-left fadeIn">📱 Mobile + Desktop Animated Portfolio</h1>
        <ul className="list-disc list-inside space-y-1 text-left colorTextOpposite text-base md:text-lg">
          <li className="fadeIn">Pug (Jade) for templating</li>
          <li className="fadeIn">Express.js for backend routing</li>
          <li className="fadeIn">GSAP and TweenMax for animation</li>
          <li className="fadeIn">jQuery + Vanilla JS for dynamic interactivity</li>
          <li className="fadeIn">Google Analytics for SEO and performance insight</li>
        </ul>
        <h1 className="colorTextOpposite text-lg text-left fadeIn">✨ Key Features:</h1>
        <ul className="list-disc list-inside space-y-1 text-left colorTextOpposite text-base md:text-lg">
          <li className="fadeIn">Scroll-activated animations</li>
          <li className="fadeIn">Dynamic paw animations with fading effects</li>
          <li className="fadeIn">Fully responsive layout from mobile to desktop</li>
          <li className="fadeIn">Animated headings using GSAP</li>
          <li className="fadeIn">Accessibility-conscious design (contrast, alt tags, navigation)</li>
        </ul>
        <h1 className="colorTextOpposite text-lg text-left fadeIn">🛠️ Tools & Technologies</h1>
        <ul className="list-disc list-inside space-y-1 text-left colorTextOpposite text-base md:text-lg">
          <li className="fadeIn">HTML5/CSS3 + Tailwind CSS</li>
          <li className="fadeIn">Bootstrap</li>
          <li className="fadeIn">Font Awesome</li>
          <li className="fadeIn">NPM Modules</li>
          <li className="fadeIn">LocalStorage for performance boost</li>
          <li className="fadeIn">Image optimization (WebP, responsive sizes)</li>
        </ul>
      </div>

      {/* GitHub and Live Link Section */}
      <div
        className={`scrollHandle md:mx-20 my-6 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out ${
          currentSection === 'gitHub' ? 'opacity-100' : 'opacity-0'
        }`}
        data-id="gitHub"
      >
        <div className="mx-auto max-w-xl text-center p-6 m-4 colorBackground colorTextOpposite rounded-lg shadow-md border-slate-300 border">
          <p className="text-lg mt-6 colorTextOpposite">
            🌐 Want to view the live demo?
            <br />
            Access the running project on AWS EC2:
          </p>
          <a
            href="https://github.com/arduino731/van-vlymen-paws-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverSpotlight colorText colorBackgroundOpposite fadeIn inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
          >
            🌐 View Live Project →
          </a>
        </div>
        <div className="mx-auto max-w-xl text-center p-6 colorBackground fadeIn colorTextOpposite rounded-lg shadow-md border-slate-300 border">
          <p className="text-lg mt-10 ">
            🔍 Want to see more source code?
            <br />
            Check out my GitHub!
          </p>
          <a
            href="https://github.com/arduino731/van-vlymen-paws-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
          >
            Visit My GitHub →
          </a>
        </div>
      </div>



      <div className="colorBackground" style={{ position: 'relative', height: '300px' }} >
        <Image 
            src="/images/ScreenshotRWD.png" 
            alt="ScreenshotRWD"
            className="p-6 h-auto rounded-md" 
            quality={100}
            fill
            style={{
              objectFit: 'contain',
            }}
        />
      </div>




          {/* <div class="flex mx-2 colorBackground">
            <div class="w-1/4 px-2">
              <h2 className="text-center text-lg">Animated Dog Paws</h2>
              <div class="flex flex-row items-center justify-center">
                <div class="w-1/4 relative h-full" style={{position:"relative", height: "100px"}}>
                  <Image 
                  src="/images/wolf_paw_Right1.png" 
                  alt="wolf paw right" 
                  quality={100}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                  /> 
                </div>
                <div class="w-1/4 relative h-full" style={{position:"relative", height: "100px"}}>
                  <Image 
                  src="/images/wolfpawLeft1.png" 
                  alt="wolf paw left" 
                  quality={100}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                  /> 
                
                </div>
              </div>
            </div>
            <div class="w-1/4 px-2">
              <h2 className="text-center text-lg">Responsive Design</h2>
              <div class="flex flex-row items-center justify-center">
                <div class="w-1/4 relative h-full" style={{position:"relative", height: "100px"}}>
                  <Image 
                  src="/images/responsive.png" 
                  alt="responsive" 
                  // className="rounded-full" 
                  quality={100}
                  // priority={true}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                  /> 
                
                </div>
              </div>
            </div>
            <div class="w-1/4 px-2">
            <h2 className="text-center text-lg">GSAP Animations</h2>
              <div class="flex flex-row items-center justify-center">
                <div class="w-1/4 relative h-full" style={{position:"relative", height: "100px"}}>
                  <Image 
                  src="/images/greensock.png" 
                  alt="greensock" 
                  quality={100}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                  /> 
                
                </div>
              </div>
            </div>
            <div class="w-1/4 px-2">
            <h2 className="text-center text-lg">Performance & Accessibility</h2>
              <div class="flex flex-row items-center justify-center">
                <div class="w-1/4 relative h-full" style={{position:"relative", height: "100px"}}>
                  <Image 
                  src="/images/access.png" 
                  alt="access" 
                  quality={100}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                  /> 
                
                </div>
              </div>
            </div>
          </div> */}
      
    

    </article>
  )
}
