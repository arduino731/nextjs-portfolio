// import headerLogo from '../wolfpawLeft1.png'; 


const Nav = () => {
    return (
        <header>
            <nav>
                <h1 className="text-2x p-2 m-2 bg-slate-500 underline font-bold">logo here</h1>
                <div className="p-2 m-2 flex justify-center ">
                    <img src="./images/wolfIcon.png" width="100" height="100" /> 
                    <img src="./images/PawsLogo.png" width="100" height="100" /> 
                    <img src="./images/PawsLogo.png" width="100" height="100" /> 
                    <img src="./images/PawsLogo.png" width="100" height="100" /> 
                    <img src="./images/wolf_paw_Right1.png" width="100" height="100" /> 
                </div>
                <div className="p-2 m-2 flex justify-center ">
                    <img src="./images/wolfIcon.png" width="100" height="100" /> 
                    <img src="./images/PawsLogo.png" width="100" height="100" /> 
                    <img src="./images/PawsLogo.png" width="100" height="100" /> 
                    <img src="./images/PawsLogo.png" width="100" height="100" /> 
                    <img src="./images/wolfpawLeft1.png" width="100" height="100" /> 
                    <img src="./images/hamburger.png" width="100" height="100" /> 
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