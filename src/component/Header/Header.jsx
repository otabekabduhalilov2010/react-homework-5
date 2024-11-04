import React from 'react'
import './Header.css'


const Header = () => {
  return (
<>
<header class="header" >
    <div class="container">
      <nav  class="nav" >
        <div class="menu1">
          Digital Agency
        </div>
    <div class="menu">
      <a href="">home</a>
      <a href="">About</a>
      <a href="">Testimonials</a>
      <a href="">contact</a>
    </div>
      </nav>
      
      <div class="title">
        <div class="wrap1">
          <h1>
            Building digital <br /> products, brands  <br /> & experience              
          </h1>
          <p>Digital Agency is your online team mangement tool that <br /> easy and prompt
          </p>
          <button  class="clik1" >
            Contact Us
          </button>
  </div>
  <img src="./women biznis.png" alt="" class="photo1"/>

  

</div>
</div>
</header>



</>
)
}

export default Header