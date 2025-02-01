import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/account/Register';
import Login from './pages/account/Login';
import Accessories from './pages/Accessories';
import Bags from './pages/Bags';
import Brands from './pages/Brands';
import Gifts from './pages/Gifts';
import Homelifestyle from './pages/Homelifestyle';
import Kids from './pages/Kids';
import Men from './pages/Men';
import Women from './pages/Women';
import Shoes from './pages/Shoes';
import Watches from './pages/Watches';
import Glasses from './pages/Glasses';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/accessories' element={<Accessories />}/>
      <Route path='/bags' element={<Bags/>}/>
      <Route path='/brands' element={<Brands/>}/>
      <Route path='/gifts' element={<Gifts />}/>
      <Route path='/homelifestyle' element={<Homelifestyle/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='Shoes' element={<Shoes/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/Glasses'element={<Glasses/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='Watches' element={<Watches/>}/>
      <Route path='/policy' element={<Policy />}/>
      <Route path='*' element={<Pagenotfound />}/>
      
      
    

    </Routes>
    </>
    
    
  );
}

export default App;
