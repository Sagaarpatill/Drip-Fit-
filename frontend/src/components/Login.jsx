import React,{useState} from 'react'
import '../stylesheets/login.css'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/signin', {
    method:'POST',  
    headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email,
        password
      }),
      credentials: 'include',
    });

    const data = await res.json();

    if(res.status === 400 || !data)
    {
      window.alert("Invalid Credentials!");
    } else {
      window.alert("Login Successful!");
      navigate('/');
    }


  }

  return (
    <div className='login-container'>
        <div className='login-section'>
            <div className='login-header'>
                <h1>Log In</h1>
            </div>
            <form method='POST'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' value="Log In" onClick={loginUser}>Log In</button>
            </form>
            <div className='login-bottom'>
              <span>Don't have an account? <span><Link to='/signup' className='signup'>Sign Up</Link></span></span>
              <span>Forgot Password</span>
            </div>
        </div>
    </div>
  )
}

export default Login