import React from 'react'

import "./globals.css"
import Section from './components/Section';
import About from './components/About';
import Projects from './components/Projects';
import TernaryOperatorUseState from './components/TernaryOperatorUseState';
import ImageSlider from './components/ImageSlider';


export default function Page(){
    return(
        <main className="">
            <section className=""> 
                <Section />   
            </section>
             <section className="padding">{/*  globals.css padding*/}
                <About />   
            </section>
            <section className="p-5 bg-slate-500 border-2 border-slate-800 rounded-sm"> 
                <Projects />   
            </section>
            <section className=""> 
                <TernaryOperatorUseState /> 
                <ImageSlider />  
            </section>
        </main>
    )
}

