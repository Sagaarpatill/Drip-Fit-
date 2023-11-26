import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/info.css'
import exchange from '../assets/exchange.png'
import handpicked from '../assets/handpicked.png'
import quality from '../assets/quality.png'

const Info = () => {
  return (
<div className='info-container'>

<div class="benefits-section">

  <h1>Why Us?</h1>
  <div className='benefit-container'>
  <div class="benefit">
    <img src={exchange} alt="exchange"/>
    <h3>Easy exchanges</h3>
    <p>Timely and Assured exchange on almost every product</p>
  </div>
  <div class="benefit">
    <img src={handpicked} alt="Minutes Not Hours Icon"/>
    <h3>Handpicked Products</h3>
    <p>Find the best fits according to your style and needs</p>
  </div>
  <div class="benefit">
    <img src={quality} alt="Shop Your Way Icon"/>
    <h3>Assured Quality</h3>
    <p>We provide top-notch products that pass our quality passed </p>
  </div>
  </div>
  <div class="sign-up-button">
      <Link to='/signup'>Sign Up</Link>
    </div>
</div>

</div>
  )
}

export default Info