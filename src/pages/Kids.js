import React from 'react'
import Layout from '../components/Layout/Layout'
import { NavLink } from 'react-router-dom'

function Kids() {
  return (
	<Layout title={"Kids"}>
		<div className='Kids-heading'>
			<h2> Kids </h2>
			<p>Explore our Kid’s Collection to discover essential kidswear 
				including T-shirts, tops, sweatshirts, pants, dresses and 
				swim styles in signature colors and motifs.</p>
            <img src='/images/Kids/Kids-main.png' 
		    alt='main' class="home-image"
		    width={"100%"} ></img>
					<div class="h4 pb-2 mb-4 text-black border-bottom border-black"></div>

		 <div className='Product-collection'>
			<h2>Baby Girls-Collection</h2>
		</div>
			<div className='Product'>	
			<div className='rows-images2'>
			<div className="content4">			
				<img src='/images/Kids/Girls-main.png'/>
				<p>Casuals</p>
				<NavLink to="/Women" className="nav-link4" >
				 Explore </NavLink>
				</div>
				<div className="content4">
				<img src='/images/Kids/Girls-main3.png'/>
				<p>Party</p>
				<NavLink to="/Women" className="nav-link4" >
				 Explore </NavLink>
				</div>
				<div className="content4">
				<img src='/images/Kids/Girls-main4.png'/>
				<p>Birthday</p>
				<NavLink to="/Women" className="nav-link4" >
				 Explore </NavLink>
				</div>
				</div>
				<div class="h4 pb-2 mb-4 text-black border-bottom border-black"></div>
                </div>
				<div className='Product-collection'>
			<h2>Baby Boys-Collection</h2>
			</div>	
				<div className='Product'>
				<div className='rows-images2'>
				<div className="content4">				
				<img src='/images/Kids/Boys-main1.png'/>
				<p>Formal</p>
				<NavLink to="/Women" className="nav-link4" >
				 Explore </NavLink>
				 </div>
				 <div className="content4">
				<img src='/images/Kids/Boys-main2.png'/>
				<p>Casuals</p>
				<NavLink to="/Women" className="nav-link4" >
				 Explore </NavLink>
				 </div>
				 <div className="content4">
				<img src='/images/Kids/Boys-main3.png'/>
				<p>Party</p>
				<NavLink to="/Women" className="nav-link4" >
				 Explore </NavLink>
				 </div>
				</div>
				</div>
				<div class="h4 pb-2 mb-4 text-black border-bottom border-black"></div>

			</div>
		
	</Layout>
  )
}

export default Kids