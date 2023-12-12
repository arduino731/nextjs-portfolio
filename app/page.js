import React from 'react'

import "./index.css"
// import Image from 'next/image';
import Head from './Head';
import Nav from './Nav';
import Section from './Section';
import About from './About';


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
            <section className="xl:padding-1 wide:padding-1 wide"> 
                <Section />   
            </section>
            <section className="padding py-2"> 
                <About />   
            </section>
        </main>
    )
}

