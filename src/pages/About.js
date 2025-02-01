import React from 'react'
import Layout from '../components/Layout/Layout'

function About() {
  return (
	<Layout title={"About us Ecommerce App"}>
	 <div className="row contactus ">
	 <h1 class="display-6">ABOUT - US</h1>
        <div className="col-md-6 ">
          <img
            src="/images/About-us main.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
		  Welcome to DIGITAL LUXURIOUS SHOPyour ultimate destination for all your 
		  fashion needs! We bring you a wide range of clothing from top brands and marts, offering styles 
		  for every occasion at unbeatable prices.
Our mission is simple: to make high-quality, branded fashion accessible to everyone, 
all in one convenient place. With a commitment to variety, affordability, and customer satisfaction,
 we’re here to transform the way you shop.
Explore our collection today and discover why DIGITAL LUXURIOUS SHOP is the go-to choice for fashion lovers everywhere!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;