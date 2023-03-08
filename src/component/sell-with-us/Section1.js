import React from 'react'
import './Section1.css'


function Section1() {
  return (
    <header className="banner" style={{
        backgroundSize: "cover",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/images/veggies.png")`,
        backgroundBlendMode: 'darken'
         
    }}>
        <div className="banner__contents">
            <h1 className="banner__title">
                Sell on Green Shop Today
            </h1>
            <h3 className="banner__description">
            Market your agricultural products to a larger audience <br /> all over Nigeria 
            </h3>
            <button className='banner__button'>
                Register Now
            </button>
        </div>
    </header>
  )
}

export default Section1