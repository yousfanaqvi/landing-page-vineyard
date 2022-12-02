import React from 'react'
import "./Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "animate.css"
import {Link} from "react-scroll"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function Price() {

    AOS.init({
        duration: 1500,
        easing: 'ease-in-out-back'
    });
  return (
    <div className='price-section'id='price'>
        <h1>PRICE DETAILS</h1>
        <div className='price-cards'>
        <div data-aos="fade-up" className='price-card' >
            <h2>Beginner</h2>
            <h3>$99</h3>
            <div>
                <ul className='price-content'>
                    <li> ☑️Ut enim ad minim veniam</li>
                    <li>☑️Duis aute irure</li>
                    <li> ☑️velit esse cillum</li>
                    <li>❌culpa qui officia</li>
                    <li>❌anim id est laborum</li>
                    <li>❌ consectetur adipiscing elit</li>
                </ul>
            </div>
            <Link to='contact' spy={true}  smooth={true}   duration={100} >
            <button className='reserve-button' >Reserve now</button>
            </Link>       
        </div>

        <div data-aos="fade-down" className='price-card  standard'>
            <h2>Standard</h2>
            <h3>$199</h3>
            <div>
                <ul className='price-content ' >
                    <li>☑️Ut enim ad minim veniam</li>
                    <li>☑️Duis aute irure</li>
                    <li>☑️velit esse cillum</li>
                    <li>☑️culpa qui officia</li>
                    <li>☑️anim id est laborum</li>
                    <li>❌culpa qui officia</li>
                    <li>❌anim id est laborum</li>
                    <li>❌consectetur adipiscing elit</li>
                </ul>
            </div>
            <Link to='contact' spy={true}  smooth={true}   duration={100} >
            <button className='reserve-button' >Reserve now</button>
            </Link>
        </div>

        <div  data-aos="fade-up" className='price-card'>
            <h2>Premium</h2>
            <h3>$299</h3>
            <div>
                <ul className='price-content'>
                    <li>☑️Ut enim ad minim veniam</li>
                    <li>☑️Duis aute irure</li>
                    <li>☑️velit esse cillum</li>
                    <li>☑️culpa qui officia</li>
                    <li>☑️anim id est laborum</li>
                    <li>☑️consectetur adipiscing elit</li>
                </ul>
            </div>
            <Link to='contact' spy={true}  smooth={true}   duration={100} >
            <button className='reserve-button' >Reserve now</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Price