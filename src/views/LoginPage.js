import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import '../styles/Login.scss';
import authService from "../handles/authService";

function LoginPage() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [error, setError] = useState('');
  
  const navigate = useNavigate();
  
  function handleEmailChange(e) {
    setUsername(e.target.value);
  }
  
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  
  
  const submitHandler = (e) => {
    e.preventDefault();
    
    try {
      authService.login(email, password).then(r => console.log(r));
      navigate('/home')
    } catch (error) {
      //setError(error.message);
      console.log(error.message);
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
            
            <br />
            <button type="submit" id="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
  
}

export default LoginPage;