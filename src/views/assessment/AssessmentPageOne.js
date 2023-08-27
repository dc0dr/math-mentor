import {Link, useNavigate} from "react-router-dom";
import React from "react";
import '../../styles/Assessment.scss';

function AssessmentPageOne() {
  
  const navigate = useNavigate();
  
  return (
      <div className='Assessment'>
        <div id='heading-div'>
          <h1>MathMentor</h1>
        </div>
        
        <div id='welcome-div'>
          <p>Welcome, User</p>
        </div>
        
        <div id='main-text-div'>
          <p>FOR EFFECTIVE LEARNING <br /> ANSWER THE FOLLOWING QUESTIONS</p>
        </div>
        
        <div id="btn-div">
          <button id="proceed-btn" onClick={() => navigate('/assessment-two')}>Proceed</button>
        </div>
      </div>
  );
}

export default AssessmentPageOne;

