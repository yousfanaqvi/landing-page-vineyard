import React,{useEffect} from 'react'
import logo from "./assets/vzwytnukafvaj.svg"
import vector from "./assets/vector.svg"
import {Link} from "react-scroll"
import Offers from './Offers'
import Price from './Price'
import Contact from './Contact'
import {motion,useScroll} from "framer-motion"
import bImage from "./assets/frame1.jpg"
import "./Home.css"
import "animate.css"

function Home() {
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        document.getElementById("background").style.backgroundImage = `url('${bImage}')`;
      }, []);
     return ( 
     <>
        <div className='Main-container' id='home'>
        <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}/>
        <div id='background'></div>
        <div className='hero-section'>
            <img className='logo animate__animated animate__slow animate__fadeInDown' src={logo}/>
            <span className="visit-exquisite-vine animate__animated animate__slow animate__fadeInDown animate__delay-1s" >
                Visit exquisite vineyards across the country.
            </span>
            {/* <Link to='contact' spy={true}  smooth={true}   duration={100} >
            <button className="reserve-button" id="visit-button">
                <span className="i-want-to-visit">Let's go</span>
            </button>
            </Link> */}
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