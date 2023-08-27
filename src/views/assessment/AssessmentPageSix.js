import {useNavigate} from "react-router-dom";

function AssessmentPageSix() {
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
        <p>
          CONGRATULATIONS.YOU HAVE ANSWERED ALL QUESTIONS.<br/>
          YOUR MODE OF LEARNING WILL BE DETERMINED.<br/>
          PROCEED TO MOVE DIRECTLY TO YOUR HOMEPAGE.
        </p>
      </div>
      
      <div id="btn-div">
        <button id="proceed-btn" onClick={() => navigate('/home')}>Proceed</button>
      </div>
    </div>
  );
}

export default AssessmentPageSix;