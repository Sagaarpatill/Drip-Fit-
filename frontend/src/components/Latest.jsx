import React from 'react'
import { Link } from 'react-router-dom';
import tshirt from '../assets/tshirt.avif'
import shirt from '../assets/shirt.avif'
import jeans from '../assets/jeans.webp'
import shoes from '../assets/shoes.webp'
import pants from '../assets/pants.avif'
import handbag from '../assets/handbag.avif'

import '../stylesheets/latest.css'

const Latest = () => {
  return (
    <div className='latest-container'>
    <div className='latest-section'>
      	<div className="latest-header">
    		<h1>Categories</h1>
		    </div>

		<div className="latest-grid">

           <div className="latest-card">
          <Link to='/productlist?category=Tshirt' className='link'> 
                <img src={tshirt} alt=""/>
                <h2>T-shirts</h2>
          </Link>            
            </div>
            

            <div className="latest-card">
            <Link to='/productlist?category=Shirt' className='link'>
                <img src={shirt} alt=""/>
                <h2>Shirts</h2>
            </Link>
            </div>
            

            <div className="latest-card">
            <Link to='/productlist?category=Jeans' className='link'>
                <img src={jeans} alt=""/>
                <h2>Jeans</h2>
            </Link>
            </div>

            <div className="latest-card">
            <Link to='/productlist?category=Pant' className='link'>
                <img src={pants} alt=""/>
                <h2>Pants</h2>
            </Link>
            </div>

            <div className="latest-card">
            <Link to='/productlist?category=Shoes' className='link'>
                <img src={shoes} alt=""/>
                <h2>Shoes</h2>
            </Link>
            </div>

            <div className="latest-card">
            <Link to='/productlist?category=Handbag' className='link'>
                <img src={handbag} alt=""/>
                <h2>Handbags</h2>
            </Link>
            </div>
            
		</div>

      <div className="see-more">
        <Link to='/productlist?category=' className='link'>See All</Link>
      </div>
    </div>

    </div>
  )
}

export default Latest