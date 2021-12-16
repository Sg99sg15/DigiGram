import React from 'react'
import ChartA from './ChartA'
import Footer from './Footer'
import HeaderA from './HeaderA'
import Counter from './Counter'
import Testimonial from './Testimonial'
import Client from './Client'
import Navbar from './Navbar'


function About() {
    return (
        <>
            <div className="back-to-top"></div>
            <Navbar />
            <HeaderA />
            <main>
            <ChartA />
            <Counter />
            <Testimonial />
            <Client />
            </main>
            <Footer />
        </>
    )
}

export default About
