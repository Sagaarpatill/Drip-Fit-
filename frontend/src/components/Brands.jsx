import React from 'react'
import { Link} from 'react-router-dom';
import '../stylesheets/brands.css';
import puma from '../assets/puma.png';
import adidas from '../assets/adidas.png';
import nike from '../assets/nike.png';
import zara from '../assets/zara.png';
import ck from '../assets/ck.png';
import levis from '../assets/levis.png';
import hnm from '../assets/h&m.png';
import vanh from '../assets/vanh.png';
import lv from '../assets/lv.png';



const Brands = () => {
    
  return (
    <div className='brand-container'>
    <div className="brand-section">
        <div className="brand-header">
            <h1>Shop your favorite brands</h1>
        </div>
        <div className="brand-grid">
            
            <Link to={`/productlist?brand=Nike`} className='brand-link'>
            <div className="brand-card">
                <img src={nike} alt=""/>
            </div>
            </Link>

            <Link to='/productlist?brand=Levis' className='brand-link'>
            <div className="brand-card">
                <img src={levis} alt=""/>
            </div>
            </Link>

            <Link to='/productlist?brand=CalvinKlein' className='brand-link'>
            <div className="brand-card">
                <img src={ck} alt=""/>
            </div>
            </Link>

            <Link to='/productlist?brand=Adidas' className='brand-link'>
            <div className="brand-card">
                <img src={adidas} alt=""/>
            </div>
            </Link>

            <Link to='/productlist?brand=Puma' className='brand-link'>
            <div class="brand-card" >
                <img src={puma} alt=""/>
            </div>
            </Link>

            <Link to='/productlist?brand=Zara' className='brand-link'>
            <div className="brand-card" >
                <img src={zara} alt=""/>
            </div>
            </Link>

            <Link to='/productlist?brand=LV' className='brand-link'>
            <div className="brand-card" >
                <img src={lv} alt=""/>
            </div>
            </Link>
            
            <Link to='/productlist?brand=HnM' className='brand-link'>
            <div className="brand-card" >
                <img src={hnm} alt=""/>
            </div>
            </Link>

            <Link to='/productlist?brand=VanHeusen' className='brand-link'>
            <div className="brand-card">
                <img src={vanh} alt=""/>
            </div>
            </Link>
            
        </div>

    </div>

</div>
  )
}

export default Brands