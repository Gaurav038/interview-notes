import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import Services from '../components/Services/Services'
import About from '../components/About/About'


function HomeP() {
    return (
        <div>
            <Navbar />
            <Home />
            <Services />
            <About />
            <Footer />
        </div>
    )
}

export default HomeP
