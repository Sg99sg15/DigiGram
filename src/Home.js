import React from 'react';
import Footer from './Footer'
import Header from './Header';
import Advisor from './Advisor';
import Chart from './Chart';
import Counter from './Counter';
import Marketing from './Marketing';
import Comfort from './Comfort';
import Pricing from './Pricing';
import GetinTouch from './GetinTouch';
import Blog from './Blog';
import Client from './Client';
import Navbar from './Navbar';
import Testimonial from './Testimonial';


function Home() {
    return (
        <>
            <div className="back-to-top"></div>
            <Navbar />
            <Header />
            <main>
                <Advisor />
                <Chart />
                <Counter />
                <Marketing />
                <Comfort />
                <Pricing />
                <GetinTouch />
                <Blog />
                <Client />
            </main>

            <Footer />
        </>
    )
}
export default Home;
