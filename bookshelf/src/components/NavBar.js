import React from 'react'
import Search from "../img/icons8-search-100.png"
import Toggle from "../img/navtoggle.png"
import User from "../img/user.svg"
import Favorite from "../img/favorite-64.png"
import Cart from "../img/cart.svg"


const NavBar = () => {
  return (
    <section id="header-section">
    <div className="header">
      <div className="nav-logo">
        <h3>BOOKshelf</h3>
      </div>


     
      <div className="nav-icon flex">
        <div><img src={Search} alt=""/></div>

        <div className="user-acc"><img src={User} alt=""/></div>
        <div><a href="favorite.html"><img src={Favorite
        } alt=""/></a></div>
        <div><a href="cart.html"><img src={Cart} alt=""/></a></div>

        <div className="nav-toggle" id="navbar-toggle">
          <img src={Toggle} alt="t" width="100%"/>
        </div>
      </div>
    </div>
    <div className="navbar" id="navbar-link">
      <div className="account-info">
        <div className="acco-img flex">
          <img src={User} alt=""/>
        </div>
        <div className="acc-info flex">
          <h3>Anonymous</h3>
          <p className="p2-text">reader</p>
        </div>
      </div>
      <ul>
        <li><a href="index.html" className="active">Home</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="aboutus.html">About US</a></li>
        <li><a href="contact_us.html">Contact Us</a></li>
      </ul>
    </div>
  </section>
  )
}

export default NavBar
