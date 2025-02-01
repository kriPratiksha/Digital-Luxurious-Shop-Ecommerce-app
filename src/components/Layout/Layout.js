import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {Helmet} from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = ({ children, description, keywords, author, title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{ title}</title>
            </Helmet>
      <Header/>
      <main style={{ minHeight: "75vh" }}>
        <ToastContainer/>
        {children}</main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "Ecommerce app- Shop Now",
  description: "Mern Stack Project",
  keywords:" Mongodb, Express, React, Node",
  author: "Prisni"
}

export default Layout;