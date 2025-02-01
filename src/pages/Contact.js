import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
	<Layout title={"Contact-us"}>	 
		 <h1 class="display-6">CONTACT - US</h1>
	   
	   <div class="container text-center">
  <div class="row">

    <div class="col">
      ONLINE ENQUIRY
	 
	  <form class="row g-3">
	  <div class="mb-3">
<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name"></input>
</div>  
<div class="mb-3">
  <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Email"></input>
</div>
<div class="mb-3">
  <input type="phone" class="form-control" id="formGroupExampleInput2" placeholder="Phone"></input>
</div>
<div class="mb-3">
  <textarea class="form-control" id="formGroupExampleTextarea1"row="8" placeholder="Message"></textarea>
</div>
<div class="col-15">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>



    </div>

    <div class="col">
      CONTACT DETAILS
	  <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
		  <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
		  </div>
		  <div>
    </div>
    
  </div>
</div>
	</Layout>
  )
}

export default Contact