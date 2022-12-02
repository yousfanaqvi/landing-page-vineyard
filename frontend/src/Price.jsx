import React from 'react'
import "./Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "animate.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';import {Link} from "react-scroll"
import CancelIcon from '@mui/icons-material/Cancel';
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
                    <li> <CheckCircleOutlineIcon sx={{ fontSize: 12 }}/> Ut enim ad minim veniam</li>
                    <li><CheckCircleOutlineIcon sx={{ fontSize: 12 }}/> Duis aute irure</li>
                    <li><CancelIcon sx={{ fontSize: 12 }}/> velit esse cillum</li>
                    <li><CancelIcon sx={{ fontSize: 12 }}/> culpa qui officia</li>
                    <li><CancelIcon sx={{ fontSize: 12 }}/> anim id est laborum</li>
                    <li><CancelIcon sx={{ fontSize: 12 }}/>  consectetur adipiscing elit</li>
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
                    <li><CheckCircleOutlineIcon sx={{ fontSize: 12 }}/> Ut enim ad minim veniam</li>
                    <li><CheckCircleOutlineIcon sx={{ fontSize: 12 }}/> Duis aute irure</li>
                    <li><CheckCircleOutlineIcon sx={{ fontSize: 12 }}/> velit esse cillum</li>
                    <li><CheckCircleOutlineIcon sx={{ fontSize: 12 }}/> culpa qui officia</li>
                    <li><CheckCircleOutlineIcon sx={{ fontSize: 12 }}/> anim id est laborum</li>
                    <li><CancelIcon sx={{ fontSize: 12 }}/> culpa qui officia</li>
                    <li><CancelIcon sx={{ fontSize: 12 }}/> anim id est laborum</li>
                    <li><CancelIcon sx={{ fontSize: 12 }}/> consectetur adipiscing elit</li>
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
                    <li><CheckCircleOutlineIcon sx={{ fontSize: 12 }}/> Ut enim ad minim veniam</li>
                    <li><CheckCircleOutlineIcon sx={{ fontSize: 12 }}/> Duis aute irure</li>
                    <li><CheckCircleOutlineIcon sx={{ fontSize: 12 }}/> velit esse cillum</li>
                    <li><CheckCircleOutlineIcon sx={{ fontSize: 12 }}/> culpa qui officia</li>
                    <li><CheckCircleOutlineIcon sx={{ fontSize: 12 }}/> anim id est laborum</li>
                    <li><CheckCircleOutlineIcon sx={{ fontSize: 12 }}/> consectetur adipiscing elit</li>
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