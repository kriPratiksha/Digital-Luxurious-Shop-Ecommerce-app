import React from 'react'
import Layout from '../components/Layout/Layout'
import { NavLink } from 'react-router-dom'

function Accessories() {
  return (
	<Layout title={"Accessories"}>
		<video width="100%" height="100%" controls>
		<source src='/images/Accessories/Acc-main.MP4' 
		type='video/mp4'/>
		</video>
		<div className="container">
			<h2>Accessories</h2>
			<p>Our accessories are designed to complement your style and enhance your overall look. </p>
			<div className="row-image">
			<div className="content6">	
				<img src='/images/Accessories/access.png' alt='collection' />
				<p>Diomends</p>
		 	             <NavLink to="/Women" className="nav-link6" >
		                 Explore </NavLink>
						 </div>
						 <div className="content6">	
				<img src='/images/Accessories/access1.png' alt='collection' />
				<p>Women</p>
		 	             <NavLink to="/Women" className="nav-link6" >
		                 Explore </NavLink>
						 </div>
			</div>
			</div>


			<div className='row3'>
					<h2>Shop by Category</h2>
					<div className='rows-images'>
					<div className="content5">		
				<img src='/images/Accessories/r1c1.png' alt='Necklaces' class="Necklaces"/>
				<p>Necklaces</p>
		 	             <NavLink to="/Women" className="nav-link5" >
		                 Explore </NavLink>
				</div>
				<div className="content5">
				<img src='/images/Accessories/r1c2.png' alt='Bracelets' class="Bracelets"/>
				<p>Bracelets</p>
		 	             <NavLink to="/Women" className="nav-link5" >
		                 Explore </NavLink>
				</div>
				<div className="content5">
				<img src='/images/Accessories/r1c3.png' alt='Earrings' class="Earrings"/>
				<p>Earrings</p>
		 	             <NavLink to="/Women" className="nav-link5" >
		                 Explore </NavLink>
                </div>
				<div className="content5">
				<img src='/images/Accessories/r1c4.png' alt='Rings' class="Rings"/>
				<p>Watches</p>
		 	             <NavLink to="/Women" className="nav-link5" >
		                 Explore </NavLink>
                </div> 
				</div>
			</div>

			<div className='row3'>
					<h2>Your Favourites</h2>
					<div className='rows-images1'>
					<div className="content4">
				<img src='/images/Accessories/r2c1.png' alt='Watches' class="Watches"/>
				<p>Watches</p>
		 	             <NavLink to="/Women" className="nav-link4" >
		                 Explore </NavLink>
				</div>
				<div className="content4">
				<img src='/images/Accessories/r2c2.png' alt='Accessories' class="Accessories"/>
                <p>Special items</p>
		 	             <NavLink to="/Women" className="nav-link4" >
		                 Explore </NavLink>
				</div>
				<div className="content4">
				<img src='/images/Accessories/r2c3.png' alt='Decorations' class="Decorations"/>
				<p>Decoratins</p>
		 	             <NavLink to="/Women" className="nav-link4" >
		                 Explore </NavLink>
				</div>
				
                </div> 
			</div>

			<div className='row3'>
					<h2>Women Collection</h2>
					<div className='rows-images2'>
						<div className="content4">
				          <img src='/images/Accessories/r2c1.1.png' alt='Watches' class="Watches"/>
						  <p>Green Gold-tone plated</p>
		 	             <NavLink to="/Women" className="nav-link4" >
		                 Explore </NavLink>
				         </div>
						 <div className="content4">
				          <img src='/images/Accessories/r2c2.2.png' alt='Watches' class="Watches"/>
						  <p>Multicolored gold-tone plated</p>
		 	             <NavLink to="/Women" className="nav-link4" >
		                 Explore </NavLink>
				         </div><div className="content4">
				          <img src='/images/Accessories/r2c4.4.png' alt='Watches' class="Watches"/>
						  <p>White Rhodium plated</p>
		 	             <NavLink to="/Women" className="nav-link4" >
		                 Explore </NavLink>
				         </div>
                </div> 
			</div>
		
	</Layout>
  )
}

export default Accessories