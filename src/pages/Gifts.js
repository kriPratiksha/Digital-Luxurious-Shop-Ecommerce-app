import React from 'react'
import Layout from '../components/Layout/Layout'
import { NavLink } from 'react-router-dom'

function Gifts() {
  return (
	<Layout title={"Gifts"}>
		<div className='Gifts-main'>
	<img src='/images/Gifts/Gifts-main.jpg' 
		alt='main' class="gifts-image"
		width={"100%"} ></img>
    </div>
		<div className='content1'>
			<h1>Perfect Gifts for All Your Loved Ones</h1>
			<p>We have crystal gifts that say, ‘thank you’, ‘congratulations’ and ‘I love you’.
			   Explore our edit of the perfect pieces to make their day. Plus, you can take advantage of our special gift-wrapping service. Alternatively, let them choose their 
				own piece of Swarovski magic and send a Swarovski Gift Card - easy to share in person or share digitally.</p>
		</div>

		<div className='content1'>
			<h1>Extra Special Gifts</h1>
			<div className='content2'>
				<div className='content3'>
			<img src='/images/Gifts/r1c1.jpg' alt='img' width={"40%"} height={"50%"}/>
			<p>For Men </p>
			<NavLink to="/Men" className="nav-link3" >
		  Explore </NavLink>
		  
			</div>
			<div className='content3'>
			<img src='/images/Gifts/r1c2.jpg' alt='img' width={"40%"} height={"50%"}/>
			<p>For Women</p>
			<NavLink to="/Women" className="nav-link3" >
		  Explore </NavLink>
			</div>
			</div>
			
			
		</div>
    
	</Layout>
  )
}

export default Gifts