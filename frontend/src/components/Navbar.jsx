import React,{useState,useEffect} from 'react';
import logo from '../assets/logo.png';
import '../stylesheets/navbar.css';
import { Link,useNavigate} from 'react-router-dom';


const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    console.log(searchQuery);
    const handleSearch = (e) => {
      
      navigate(`/productdetails?name=${searchQuery}`);
    };

  return (
<div className='nav-container'>
    <nav className="navbar">
        <div className="navbar-logo">
            <Link to='/'><img src={logo} alt="Logo"/></Link>
        </div>
        <div className="navbar-links">
            <div className="navbar-link-dropdown">
                <Link to='/productlist?gender=Men' className="dropbtn" href='/'>Men</Link>
            </div>
            <div className="navbar-link-dropdown">
                <Link to='/productlist?gender=Women' className="dropbtn" href='/'>Women</Link>
            </div>
            <div className="navbar-link-dropdown">
                <Link to='/productlist?category=Handbag' className="dropbtn" href='/'>Accessories</Link>
            </div>
        </div>

        <div className='nav-right'>
        <div className="navbar-search">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass search_icon" onClick={handleSearch}></i>
        </div>

        <div className="navbar-link-dropdown account">
                <Link className="dropbtn user-i" to='/profile'><i className="fas fa-user"></i></Link>
                <Link to='/'><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
        </div>
    </nav>
</div>
)
}

export default Navbar
