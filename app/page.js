import React from 'react'

import "./index.css"
// import Image from 'next/image';
import Head from './components/Head';
import Nav from './components/Nav';
import Section from './components/Section';
import About from './components/About';
import Projects from './components/Projects';


export default function Page(){
    return(
        <main className="bg-slate-300 relative">
            <section>
                {/* <!-- Site logo, navigation, and header content --> */}
                <Head />
            </section>
            <section>
                <Nav />
            </section>
            <section className=""> 
                <Section />   
            </section>
            <section className="padding py-2"> 
                <About />   
            </section>
            <section className="brian py-2 m-5 bg-slate-500 ring-red-400 border-4 border-slate-800 rounded-md"> 
                <Projects />   
            </section>
        </main>
    )
}

