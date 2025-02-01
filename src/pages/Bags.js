import React from 'react'
import Layout from '../components/Layout/Layout'
import { NavLink } from 'react-router-dom'

function Bags() {
  return (
	<Layout title={"Bags"}>
		<div className="bag-nav">
		<h2>BAGS</h2>
		<NavLink to="/Men" className="nav-link2" >
		  Shoulder bags</NavLink>
		  <NavLink to="/Men" className="nav-link2" >
		  Top handles</NavLink>
		  <NavLink to="/Men" className="nav-link2" >
		  Totes</NavLink>
		  <NavLink to="/Men" className="nav-link2" >
		  Mini bags</NavLink>	
		  <NavLink to="/Men" className="nav-link2" >
		  Backpacks and Belts Bags</NavLink>
		  <NavLink to="/Men" className="nav-link2" >
		  Briefcases</NavLink>
		</div>
		<div className='bag-main'>
			<img src='/images/Bags-collection/Bags-main.jpg' alt='bags' width={"100%"}></img>
			<h2>BAGS</h2>
			<p>The bag you carry is not merely an accessory,
				 but a reflection of your personality and aspirations.
				  Designed with precision and crafted with elegance, this bag speaks the language of sophistication and timeless beauty.</p>
			<div className='bag-two'>
				<div className='bag-left'>
					<img src='/images/Bags-collection/row1c1.png'/>
					<p>For Men </p>
								<NavLink to="/Men" className="nav-link" >
							  Explore </NavLink>
			</div>
			<div className='bag-left'>
					<img src='/images/Bags-collection/row1c2.png'/>
					<p>For Men </p>
								<NavLink to="/Men" className="nav-link" >
							  Explore </NavLink>
			</div>
		</div>
		</div>
	</Layout>
  )
}

export default Bags