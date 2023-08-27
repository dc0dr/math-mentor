import {useNavigate} from "react-router-dom";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../models/Firebase";
import {auth} from "../../models/Firebase";
import React, {useState} from "react";
import '../../styles/Assessment.scss';

function AssessmentPageFour() {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState('');
  const [proficiency, setProficiency] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      preferences: preferences,
      proficiency: proficiency
    }
    
    const user = auth.currentUser.uid;
    
    try {
      const userDocRef = doc(db, "questions", user);
      await updateDoc(userDocRef, data);
      console.log("Document updated with ID: ", userDocRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    
    navigate('/assessment-five')
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
          <p>6. What are your learning preferences (e.g., do you prefer to learn by reading, watching videos
            or doing hands-on activities)?</p>
          <textarea name='preferences' className='text-area' value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}>
          </textarea>
        </div>
        
        <div id='text-area-div-2'>
          <p>7. What are your strengths and weakness in Mathematics?</p>
          <textarea name='proficiency' className='text-area' value={proficiency}
                    onChange={(e) => setProficiency(e.target.value)}>
          </textarea>
        </div>
        
        <div id="btn-div">
          <button id="proceed-btn" type={"submit"}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default AssessmentPageFour;