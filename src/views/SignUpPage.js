import { useNavigate } from 'react-router-dom';
import React, { useState} from 'react';
import '../styles/Signup.scss';
import handleSubmit from "../handles/handleSubmit";
import authService from "../handles/authService";

function SignUpPage() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const navigate = useNavigate();

  function handleEmailChange(e) {
    setUsername(e.target.value);
  }
  
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    authService.register(email, password).then(r => console.log(r));
    navigate('/home')
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
        
        <div className='Signup-col'>
          <p>Sign Up</p>
          
          <div className='Form-div'>
            <form onSubmit={handleSubmit}>
              <label>
                First Name <br />
                <input type="text" value={firstName} onChange={handleFirstNameChange} />
              </label>
              <br />
              
              <label>
                Last Name <br />
                <input type="text" value={lastName} onChange={handleLastNameChange} />
              </label>
              <br />
              
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
              
              <br/>
              <button type="submit" id="signup-btn">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default SignUpPage;