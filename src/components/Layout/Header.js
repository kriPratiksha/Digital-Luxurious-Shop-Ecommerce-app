import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { GiShoppingBag } from 'react-icons/gi';
import { FaHeartCirclePlus } from 'react-icons/fa6';
import { RiAccountBoxFill } from "react-icons/ri";
import { BsSearchHeartFill } from "react-icons/bs";
import { ImMenu } from "react-icons/im";


function Header() {
  return (
    <>
	<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  
      <label>
        <input type="checkbox" />
        <div className='toggle'>
          <span className='top_line common'></span>
          <span className='middle_line common'></span>
          <span className='bottom_line common'></span>
        </div>
        <div  className='slide'>
      <h2>Menu</h2>
      <ul>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"></link>
        <li><a href="#"><i className="fas fa-user"></i>Profile</a></li>
        <li><a href="#"><i className="fas fa-tv"></i>About</a></li>
        <li><a href="#"><i className="fas fa-phone"></i>Conact</a></li>
        <li><a href="#"><i className="fas fa-lock"></i>Privacy</a></li>
        <li><a href="#"><i className="fas fa-home"></i>Home</a></li>
        <li><a href="#"><i className="fab fa-gripfire"></i>New Arrivals</a></li>
        <li><a href="#"><i className="far fa-address-book"></i>My Orders</a></li>
       
      </ul>
      </div>
      </label>
		  
		  </ul>
		  </div>
	<div className="collapse navbar-collapse" >
	<ul class="navbar-nav mx-auto mb-2 mb-lg-1">
      <Link to="/" className="navbar-brand" >
	   DIGITAL LUXURIOUS SHOP</Link> </ul>

	   <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
		<li className="nav-item">
          <Link to="/Search" className="nav-link" >
		  <BsSearchHeartFill />
		  </Link>
		  </li>


		<li className="nav-item">
          <Link to="/Account" className="nav-link" data-bs-toggle="dropdown" aria-expanded="false" ><RiAccountBoxFill/></Link>
          <ul class="dropdown-menu dropdown-menu-end">
          <li><Link to="/Register" class="dropdown-item" type="button">Register</Link></li>
         <li><Link to="/Login" class="dropdown-item" type="button">Login</Link></li>
      </ul>
		  </li>

		<li className="nav-item">
          <Link to="/Wishlist" className="nav-link" >
		  <FaHeartCirclePlus />
		  </Link>
		  </li>

		  <li className="nav-item">
          <Link to="/Cart" className="nav-link" >
		  <GiShoppingBag />
		  </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

      <li className="nav-item1">
          <NavLink to="/" className="nav-link " >
		  Home</NavLink>
        </li>

        <li className="nav-item1">
          <NavLink to="/Men" className="nav-link " >
		  Men</NavLink>
        </li>

		<li className="nav-item1">
          <NavLink to="/Women" className="nav-link" >
		  Women</NavLink>
        </li>

		<li className="nav-item1">
          <NavLink to="/Kids" className="nav-link" >
		  Kids</NavLink>
        </li>

        <li className="nav-item1">
          <NavLink to="/Homelifestyle" className="nav-link" >
		  HomeLifestyle</NavLink>
        </li>

		<li className="nav-item1">
          <NavLink to="/Bags" className="nav-link" >
		  Bags</NavLink>
        </li>

		<li className="nav-item1">
          <NavLink to="/Accessories" className="nav-link" >
		  Accessories</NavLink>
        </li>

		<li className="nav-item1">
          <NavLink to="/Brands" className="nav-link" >
		  Brands</NavLink>
        </li>

		<li className="nav-item1">
          <NavLink to="/Gifts" className="nav-link" >
		  Gifts</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>



	</>
  )
}

export default Header