import React,{useState} from 'react';
import '../stylesheets/hero.css';
import { Link } from 'react-router-dom';
import bg from '../assets/banner2.webp';
import bg2 from '../assets/banner3.avif'
import {useNavigate} from 'react-router-dom';


const Hero = () => {

  const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    console.log(searchQuery);
    const handleSearch = (e) => {
      // if(searchQuery === 'Audi' || 'BMW')
      // {
        navigate(`/carlist?brand=${searchQuery}`);
      // }
      // else{
      // navigate(`/cardetails?name=${searchQuery}`);
      // }
    };
  return (
    <div className='hero-container'>
      {/* <Link to='/'>
		      <img src={bg} alt="banner" />
      </Link> */}
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={bg} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bg2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Hero