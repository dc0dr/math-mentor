import React from "react";
import "../../styles/Assessment.scss";
import { useNavigate } from "react-router-dom";

function AssessmentPageTwo() {
  
  const navigate = useNavigate();
  return (
    <div className='Assessment'>
      <div id='heading-div'>
        <h1>MathMentor</h1>
      </div>
      
      <div id='welcome-div'>
        <p>Let's Begin, User</p>
      </div>
      
      <div id='selection-div'>
        <div id='selection-one'>
          <label>1. What is your current class grade in Mathematics?</label><br />
          <select name='class-grade' className='selection'>
            <option value='jhs-1'>JHS 1</option>
            <option value='jhs-2'>JHS 2</option>
            <option value='jhs-3'>JHS 3</option>
          </select>
        </div>
        
        <div id='selection-two'>
          <label>2. What is your current grade in Mathematics?</label><br />
          <select name='math-grade' className='selection'>
            <option value='a'>A</option>
            <option value='b'>B</option>
            <option value='c'>C</option>
            <option value='d'>D</option>
            <option value='e'>E</option>
          </select>
        </div>
        
        <div id='selection-three'>
          <label>3. What is your current level do you belong to</label><br />
          <select name='strength' className='selection'>
            <option value='weak'>Weak</option>
            <option value='fair'>Fair</option>
            <option value='normal'>Normal</option>
            <option value='strong'>Strong</option>
          </select>
        </div>
      </div>
      
      <div id="btn-div">
        <button id="proceed-btn" onClick={() => navigate('/assessment-three')}>Next</button>
      </div>
    </div>
  );
}

export default AssessmentPageTwo;