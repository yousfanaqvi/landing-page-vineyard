import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "animate.css"
import  "./Home.css"
function Offers() {

    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        delay: 5
    });

    const bus="https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80";
    const wine="https://images.unsplash.com/photo-1556395676-1925d260d81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
    const guide="https://images.unsplash.com/photo-1545153996-4b00d00d95a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  return (
    <div className='what-we-offer-section' id='offers'>
          <h2 className='what-we-offer'>WHAT WE OFFER</h2>
          <div className="offers-container">
            <div data-aos="zoom-in" className='card'>
                <img  className="bus" src={bus} />
                <span>Transport</span>
                <span className='offer-description'>
                    Curabitur nec eros condimentum, ullamcorper sem id, posuere tellus
                </span>
            </div>
            <div data-aos="zoom-in" className='card'>
                <img   className="guide" src={guide} />
                <span>Guided Tour</span>
                <span className='offer-description'>
                    Curabitur nec eros condimentum, ullamcorper sem id, posuere tellus
                </span>
            </div>
            <div data-aos="zoom-in" className='card'>
                <img className="wine" src={wine} />
                <span>Wine Tasting</span>
                <span className='offer-description'>
                    Curabitur nec eros condimentum, ullamcorper sem id, posuere tellus
                </span>
            </div>
        </div>
        </div>
  )
}

export default Offers