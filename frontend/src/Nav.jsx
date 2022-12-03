import React , {state}from 'react'
import {Link} from "react-scroll"
import "animate.css"
export default function Nav() {

  return (
    <div>
      <nav className='animate__animated animate__fadeInDown animate__slow animate__delay-2s' >
        
          <Link to='home' spy={true}  >Home</Link>
        
          <Link to='offers' spy={true}   >Offers</Link>
        
         <Link to="price" spy={true}  >Price</Link> 
        
          <Link to="contact" spy={true}  >Contact</Link>

        </nav>
</div>
  )
}
