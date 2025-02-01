import React from "react";
import{ Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All Right Reserved &copy; Prisni</h4>
      <p className="text-center mt-3">
      <Link to="Contact">Contact Us</Link>
        <Link to="About">About Us</Link>
        <Link to="Policy">Privacy Policy</Link>
        <Link to="Customer Services & FAQ">Customer Services & FAQ</Link>

        
       
      </p>
    </div>
  );
};

export default Footer;