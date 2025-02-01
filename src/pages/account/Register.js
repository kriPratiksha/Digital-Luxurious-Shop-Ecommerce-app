import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Register = () =>  {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [phone, setPhone] = useState("")
	const navigate = useNavigate()
   
	//form function
	const handleSubmit = async(e) => {
		e.preventDefault()
		try {
			const res = await axios.post('/api/v1/auth/register',
				{ name, email, password, phone}
			);
			if(res.data.success){
				toast.success(res.data.message);
				navigate("/Login");
			} else{
				toast.error(res.data.message);
			}

		}
		catch(error){
			console.log(error)
			toast.error("Something went wrong")
		}
	};
	
    return (
		<Layout title={"Register"}>	
		<div class="dropdown-item">    
		    <div className="form-container">
		<form onSubmit={handleSubmit}>
			<div className='display-6'>
			  <h1>MY DIGI LUX ACCOUNT</h1>	
				<button type='Link' className='btn btn-primary'>Continue with Google</button>		
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
		  className="form-control" id="formGroupExampleInput" placeholder="Enter Your Name" required></input>
          </div>  
        <div class="mb-3">
           <input type="email" value={email}onChange={(e) => setEmail(e.target.value)}
		     className="form-control" id="formGroupExampleInput2" placeholder=" Enter Your Email" required></input>
        </div>
        <div class="mb-3">
            <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
			 className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Phone" required></input>
        </div>
        <div class="mb-3">
            <input type="password"value={password} onChange={(e) => setPassword(e.target.value)}
			  className="form-control" id="formGroupExampleInput2" placeholder="Create Your Password" required></input>
        </div>
            <button type='Submit' className='btn btn-primary'>Submit</button>
</form>
</div>   
</div>        
		</Layout>
    );
};

export default Register;
