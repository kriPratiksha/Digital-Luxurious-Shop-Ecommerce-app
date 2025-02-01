import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-toastify';


const Login=() => {
  const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    //form function
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(name, password)
    toast.success('Register Successfully')
  }
  return (
      <Layout title={"Login"}>
          <div class="dropdown-item">    
          </div>

          <div class="popup">
            <form onSubmit={handleSubmit}>
              <div class="popup-content">
         <img src='/images/user-icon.png' alt='User' class="user"></img>
				<img src='/images/close-icon.png' alt='Close' class="close"></img>
           <input type='text' value={name} onChange={(e) => setName(e.target.value)} 
            className="form-control" id="formGroupExampleInput2" placeholder='Username'required></input>
            <input type='password'  value={password} onChange={(e) => setPassword(e.target.value)}
            className="form-control" id="formGroupExampleInput2" placeholder='Password' required></input>
                  <a href='#'  class="button1">Login</a>
              </div>
              </form>
			  </div>
              
			            
      </Layout>
  );
}

export default Login;