import React from 'react'
import Search from "../cover/icons8-search-100.png"
import Toggle from "../cover/navtoggle.png"
import User from "../cover/user.svg"
import Favorite from "../cover/favorite-64.png"
import Cart from "../cover/cart.svg"
import {Link} from "react-router-dom"


const NavBar = () => {

  const [sidebar, setSidebar] = React.useState(false)

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
        <div><Link to="/cart"><img src={Cart} alt=""/></Link></div>

        <div className="nav-toggle" id="navbar-toggle" onClick={()=> setSidebar(!sidebar)}>
          <img src={Toggle} alt="t" width="100%"/>
        </div>
      </div>
    </div>
    <div id="navbar-link" className={sidebar?"navbar nav-active":"navbar"}>
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
      <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About US</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  </section>
  )
}

export default NavBar
