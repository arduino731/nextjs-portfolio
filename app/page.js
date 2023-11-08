import React from 'react'

// import Head from './components/Head'
// import Nav from './components/Nav'
// import Section from './components/Section'
import About from './about'
import "./style.css"

import { Head, Nav, Section} from './components';




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
                <About />   
            </section>
            <section className="padding py-2"> 
                <About />   
            </section>
        </main>
    )
}

