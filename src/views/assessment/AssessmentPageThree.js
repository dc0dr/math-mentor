import {useNavigate} from "react-router-dom";
import React, {useState}from "react";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../models/Firebase";
import {auth} from "../../models/Firebase";
import '../../styles/Assessment.scss';

function AssessmentPageThree() {
  
  const navigate = useNavigate();
  const [challenges, setChallenges] = useState('');
  const [strategies, setStrategies] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      challenges: challenges,
      strategies: strategies
    }
    
    const user = auth.currentUser.uid;
    
    try {
      const userDocRef = doc(db, "questions", user);
      await setDoc(userDocRef, data);
      console.log("Document written with ID: ", userDocRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    
    navigate('/assessment-four')
    
  }
  
  return (
    <div className='Assessment'>
      <form onSubmit={handleSubmit}>
      <div id='heading-div'>
        <h1>MathMentor</h1>
      </div>
      
      <div id='welcome-div'>
        <p>Let's Begin, User</p>
      </div>
      
      <div id='text-area-div-1'>
        <p>4. What are your challenges in learning mathematics <br/> (e.g., do you have trouble understanding concepts,
        do you have trouble solving problems, <br /> do you have trouble remembering formulas, etc.)?
        </p> <br/>
        <textarea name='challenges' className='text-area' value={challenges}
                  onChange={(e) => setChallenges(e.target.value)}>
        </textarea>
      </div>
      
      <div id='text-area-div-2'>
        <p>5. What are some strategies you have used to overcome these challenges</p>
        <textarea name='strategies' className='text-area' value={strategies}
                  onChange={(e) => setStrategies(e.target.value)}>
        </textarea>
      </div>
      
      <div id="btn-div">
        <button id="proceed-btn" type={"submit"}>Next</button>
      </div>
    </form>
    </div>
  );
}

export default AssessmentPageThree;