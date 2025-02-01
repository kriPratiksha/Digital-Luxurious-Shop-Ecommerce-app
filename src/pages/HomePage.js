import React from 'react'
import Layout from '../components/Layout/Layout'
import "../styles/homepage.css";
import { NavLink, Link } from 'react-router-dom'

function HomePage() {
  return (
	<Layout title={"home Page"}>
		<video autoplay muted loop class="hidden-video" width="100%" height="100%" controls>
		<source src='/images/Home-Main.MP4' 
		type='video/mp4'/>
		</video>
		
        <div class="row">
		<div class="col1">
        <img src='/images/Women-main.jpg' 
		alt='Women' class="Women-image"
		></img>
		</div>
		<div class="col2">
		<h2>Global Women's Fashion</h2>
        <p>"A woman’s wardrobe is more than just fabric; it’s a statement of who she is and the power she carries. 
		With the right outfit, she can conquer the world."</p>
	     <NavLink to="/Women" className="nav-link1" >
		  Explore More</NavLink>
        </div>
    	</div>
       
		<div class="row">
		<div class="col2">
		<h2>Global Men's Fashion</h2>
       <p>"Style isn’t just about clothes; it’s about the attitude with which a man wears them. 
		A sharp outfit can elevate his presence and make a lasting impression without saying a word."</p>
	    <NavLink to="/Men" className="nav-link1" >
		  Explore More</NavLink>
		  </div>
		  <div class="col1">
         <img src='/images/Men-main.jpg' 
		alt='Men' class="Men-image"
		></img>		
		</div>
		</div>
		

        <div class="image-row">
        <div class="image-container">

			<div className='col1-1'>
		<img src='/images/Shoes-main.jpg' 
		alt='shoes' class="shoes-image"
		></img><NavLink to="/Shoes" className="nav-link"  >Shoes</NavLink>
		</div>
		
		<div className='col1-1'>
		<img src='/images/Glasses-main.jpg' 
		alt='glasses' class="glasses-image"
		></img><NavLink to="/Glasses" className="nav-link"> Glasses</NavLink>
		</div>

       <div className='col1-1'>
		<img src='/images/Watches-main.jpg' 
		alt='watch' class="watch-image"
		></img><NavLink to="/Watches"className="nav-link" > Watches</NavLink>
		</div>

       <div className='col1-1'>
	   <img src='/images/Bags-main.jpg' 
		alt='bages' class="bages-image"
		></img><NavLink to="/Bags" className="nav-link" > Bags</NavLink>
		</div>

       <div className='col1-1'>
	   <img src='/images/Acc-main.jpg' 
		alt='Accessories' class="Accessories-image"
		></img><NavLink to="/Accessories" className="nav-link"> Accessories</NavLink>
		</div>

        <div className='col1-1'> 
		<img class="background-image" src='/images/Kids-main.jpg' 
		alt='Kids' />
		<NavLink to="/Kids"className="nav-link" >Kids</NavLink>
		 </div>
		
		</div>
		</div>
	


	</Layout>
  )
}

export default HomePage;