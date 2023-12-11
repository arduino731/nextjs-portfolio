import Image from 'next/image'

const Nav = () => {
    return (
        <header className="padding-x">
            <nav>
                <div className="p-2 flex justify-between">
                    <a href="/" >
                        <Image 
                            src="/images/wolfIcon.png" 
                            className="" 
                            alt="logo"
                            width={130} 
                            height={100} 
                        /> 
                    </a>
                     
                    <button>
                        <Image 
                            src="/images/moon.png" 
                            className="" 
                            alt="logo"
                            width={50} 
                            height={50} 
                        />
                    </button>
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