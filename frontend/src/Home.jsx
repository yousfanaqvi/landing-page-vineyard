import React from 'react'
import logo from "./assets/vzwytnukafvaj.svg"
import vector from "./assets/vector.svg"
import {Link} from "react-scroll"
import Offers from './Offers'
import Price from './Price'
import Contact from './Contact'
import {motion,useScroll} from "framer-motion"
import "./Home.css"
import "animate.css"
import Nav from "./Nav"

function Home() {
    const { scrollYProgress } = useScroll();

     return ( 
     <>
        <Nav/>
        <div className='Main-container' id='home'>
        <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}/>
        <div className='background animate__animated animate__slow animate__zoomIn'></div>
        <div className='hero-section'>
            <img className='logo' src={logo}/>
            <span className="visit-exquisite-vine animate__animated animate__slow animate__fadeInDown animate__delay-1s" >
                Visit exquisite vineyards across the country.
            </span>
            <Link to='contact' spy={true}  smooth={true}   duration={100} >
            <button className="reserve-button">
                <span className="i-want-to-visit">i want to visit</span>
            </button>
            </Link>
            <Link to='offers' spy={true}  smooth={true}   duration={100} className="vector animate__animated animate__infinite	animate__pulse"  >
                <img src={vector} />
            </Link>
        </div>
        <Offers/>
        <Price/>
        <Contact/>
        </div>
    </>
  )
}

export default Home