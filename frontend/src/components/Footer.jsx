import React from 'react'
import '../stylesheets/footer.css'
const Footer = () => {
  return (
    <footer>
    <div class="footer-content">
      <p>All vehicle images ©️ DripFit | Certain fashion content displayed within this website. Any unauthorized use, reproduction, distribution, recording or modification of this content is strictly prohibited.</p>
      
      <div className='footer-right'> 
      <p><a href="/" >Terms & Conditions</a> | <a href="/" >Privacy Policy</a> | <a href="/" >EULA</a></p>
      <div class="social-media">
        <a href="https://www.instagram.com" target="_a"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com" target="_a"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.linkedin.com" target="_a"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.twitter.com" target="_a"><i class="fab fa-twitter"></i></a>
      </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer