 
const Section = () => {
    return (
        <div className="p-2 m-2 text-4xl">
            <h1 className="text-red-300 font-bold  flex justify-center ">Hello, I am <span className="BVV">.Brian van Vlymen</span></h1>
            <h1 className="text-red-300 font-bold  flex justify-center">I am a full-stack web developer.</h1>
            <div className="text-red-300 font-bold flex justify-center">
                <button 
                    className="px-4 py-4 text-sm text-blue-500 rounded-md bg-blue-100 font-medium"
                    id=""
                    >View my work</button>
            </div>
            <h1 className="text-red-300 font-bold underline">UX enginner crafting beatiful digital user experiences</h1>
        </div>
        
    );
}

export default Section;