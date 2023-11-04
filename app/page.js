import React from 'react'


import Header from './header'
import Navbar from './navbar'
import Section from './section'
import About from './about'
import "./style.css"

export default function Page(){
    return(
        <div className="bg-slate-300">
            
            <Header />
            <Navbar />
            <Section />
            <About />
        </div>
    )
}

