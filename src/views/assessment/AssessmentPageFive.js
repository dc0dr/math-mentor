import {useNavigate} from "react-router-dom";
import {auth} from "../../models/Firebase";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../models/Firebase";
import React from "react";
import '../../styles/Assessment.scss';

function AssessmentPageFive() {
  const navigate = useNavigate();
  const [learningMethod, setLearningMethod] = React.useState('');
  const [likability, setLikability] = React.useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      learningMethod: learningMethod,
      likability: likability
    }
    
    const user = auth.currentUser.uid;
    
    try {
      const userDocRef = doc(db, "questions", user);
      await updateDoc(userDocRef, data);
      console.log("Document updated with ID: ", userDocRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    
    navigate('/assessment-six')
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
          <p>8. What do you think is the best way for you to learn Mathematics</p>
          <textarea name='learningMethod' className='text-area' value={learningMethod}
                    onChange={(e) => setLearningMethod(e.target.value)}>
          </textarea>
        </div>
        
        <div id='text-area-div-2'>
          <p>9. Do you like math?. If yes or no, why?</p>
          <textarea name='likability' className='text-area' value={likability}
                    onChange={(e) => setLikability(e.target.value)}>
          </textarea>
        </div>
        
        <div id="btn-div">
          <button id="proceed-btn" type={"submit"}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default AssessmentPageFive;