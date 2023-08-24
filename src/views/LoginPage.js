import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import '../styles/Login.scss';
import authService from "../handles/authService";

function LoginPage() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  
  function handleEmailChange(e) {
    setUsername(e.target.value);
  }
  
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  
  
  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const response = await authService.login(email, password);
      if (response) {
        console.log("Authenticated");
        navigate('/home')
      } else {
        return null;
      }
    } catch (error) {
      if (error.code) {
        // Firebase Authentication error codes
        switch (error.code) {
          case "auth/user-not-found":
            setError("User not found. Please check your email.");
            break;
          case "auth/wrong-password":
            setError("Incorrect password. Please try again.");
            break;
          // Add more cases for other error codes as needed
          default:
            setError("An error occurred during authentication.");
            break;
        }
      } else {
        setError(error.message); // Handle non-Firebase errors
      }
    }
  }
  
  return(
    <div className='Main-div'>
      <div className='Desc-col'>
        <div className='Desc-div'>
          <h2>MathMentor</h2>
          <p>MathMentor is an online school system for upper primary level</p>
          <p>students in Ghana to help them in their studies in relation to</p>
          <p>mathematics. The system follows the syllabus of GES.</p>
        </div>
      </div>
      
      <div className='Login-col'>
        <h2>MathMentor</h2>
        <p>Welcome Back</p>
        
        <div className='Radio-div'>
          <label>
            <input type='radio' id='student' name='user' value='student' />
            Student
          </label>
          
          <label>
            <input type='radio' id='teacher' name='user' value='teacher' />
            Teacher
          </label>
        </div>
        
        <div className='Input-div'>
          <form onSubmit={submitHandler}>
            <label>
              Email <br />
              <input type="email" value={email} onChange={handleEmailChange}/>
            </label>
            <br />
            
            <label>
              Password <br />
              <input type="password" value={password} onChange={handlePasswordChange} minLength="8" />
            </label>
            
            <p>Don't have an account? <Link to={'/sign-up'} id='register-link'> Register </Link> </p>
            
            <br />
            <button type="submit" id="login-btn">Login</button>
          </form>
          
          <div id="login-error-div">
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default LoginPage;