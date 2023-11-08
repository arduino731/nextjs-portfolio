import Image from 'next/image'

const Nav = () => {
    return (
        <header>
            <nav>
                <a href="/" >
                    <Image 
                        src="/images/wolfIcon.png" 
                        className="p-10 bg-slate-500" 
                        alt="logo"
                        width={100} 
                        height={100} 
                    /> 
                </a>

                <h1 className="text-2x p-2 m-2 bg-slate-500 underline font-bold">logo here</h1>
                <div className="p-2 m-2 flex justify-center ">
                    <Image 
                        src="/images/wolfIcon.png" 
                        className="bg-slate-500" 
                        alt="logo"
                        width={100} 
                        height={100} 
                    /> 
                    <Image 
                        src="/images/PawsLogo.png" 
                        className="bg-slate-500" 
                        alt="logo"
                        width={100} 
                        height={100} 
                    />
                    <Image 
                        src="/images/PawsLogo.png" 
                        className="bg-slate-500" 
                        alt="logo"
                        width={100} 
                        height={100} 
                    />
                    <Image 
                        src="/images/PawsLogo.png" 
                        className="bg-slate-500" 
                        alt="logo"
                        width={100} 
                        height={100} 
                    />
                    <Image 
                        src="/images/wolf_paw_Right1.png" 
                        className="bg-slate-500" 
                        alt="logo"
                        width={100} 
                        height={100} 
                    />
                </div>
                <div className="p-2 m-2 flex justify-center ">
                <Image 
                        src="/images/wolfIcon.png" 
                        className="bg-slate-500" 
                        alt="logo"
                        width={100} 
                        height={100} 
                    /> 
                    <Image 
                        src="/images/PawsLogo.png" 
                        className="bg-slate-500" 
                        alt="logo"
                        width={100} 
                        height={100} 
                    />
                    <Image 
                        src="/images/PawsLogo.png" 
                        className="bg-slate-500" 
                        alt="logo"
                        width={100} 
                        height={100} 
                    />
                    <Image 
                        src="/images/PawsLogo.png" 
                        className="bg-slate-500" 
                        alt="logo"
                        width={100} 
                        height={100} 
                    />
                    <Image 
                        src="/images/wolf_paw_Right1.png" 
                        className="bg-slate-500" 
                        alt="logo"
                        width={100} 
                        height={100} 
                    />
                </div>


                <div className="bg-slate-700 font-semibold text-white p-2 m-2">
                    <h1>Consider Light and Dark Modes</h1>
                    <p>radio animation</p>
                    <p>Provide options for users to switch between light and dark modes to accommodate varying preferences and visual needs.</p>
                </div>
            </nav>
        </header>
    )
}
export default Nav