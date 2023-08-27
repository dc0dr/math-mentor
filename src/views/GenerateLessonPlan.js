import React, {useState, useEffect} from  'react';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../models/Firebase";
import {auth} from "../models/Firebase";
import axios from 'axios';
import '../styles/Lesson.scss'

function GenerateLessonPlan () {
  const [userResponses, setUserResponses] = useState('');
  const [lessonPlan, setLessonPlan] = useState('');
  const [learningMethod, setLearningMethod] = useState("");
  const [likability, setLikability] = useState("");
  const [challenges, setChallenges] = useState("");
  const [strategies, setStrategies] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [preferences, setPreferences] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  
  const user = "Wzlx59mYQRcJXshux69PH5aOKsE3"
  
  const API_KEY = "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";
  
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "questions", user);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const documentData = docSnap.data();
        if (documentData) {
          const {
            learningMethod,
            likability,
            challenges,
            strategies,
            proficiency,
            preferences,
            gradeLevel
          } = documentData;
          
          // Set the values to the state variables
          setLearningMethod(learningMethod);
          setLikability(likability);
          setChallenges(challenges);
          setStrategies(strategies);
          setProficiency(proficiency);
          setPreferences(preferences);
          setGradeLevel(gradeLevel)
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }
    };
    
    fetchData().then(() => console.log("Data fetched"));
  }, [user]);
  
  const generateLessonPlan = async () => {
    
    try {
      
      await setUserResponses(`Grade Level: ${gradeLevel}. \nProficiency level in mathematics: ${proficiency}. \nPreferred style of learning mathematics: ${preferences}. \nLikability level of mathematics: ${likability}. \nPreferred learning method: ${learningMethod}. \nChallenges faced when learning mathematics: ${challenges}. \nStrategies put it in place to get better at math: ${strategies}`)
      
      console.log(`${learningMethod}, ${likability}, ${challenges}, ${strategies}, ${proficiency}, ${preferences}`);
      
      const systemMessage = {
        role: "system",
        content:
          "You are a AI tutor whose job to help students get better at mathematics. " +
          "Your one and only job is to determine the learning style of the student based on a set that will be provided to you beforehand. You don't have to ask any questions. Just infer what you have to from the input provided and use it to determine the learning style of the student " +
          " and generate a lesson plan for the student based on their learning style."
      };

      const userMessage = {
        role: "user",
        content: `Grade Level: ${gradeLevel}. \nProficiency level in mathematics: ${proficiency}. \nPreferred style of learning mathematics: ${preferences}. \nLikability level of mathematics: ${likability}. \nPreferred learning method: ${learningMethod}. \nChallenges faced when learning mathematics: ${challenges}. \nStrategies put it in place to get better at math: ${strategies}`, // User's input
      };


      const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-3.5-turbo-16k",
        messages: [systemMessage, userMessage],
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      });
      console.log(response.data.choices[0].message.content);
      setLessonPlan(response.data.choices[0].message.content)
    } catch (e) {
      console.error('Error:', e);
      // throw new Error('Error generating lesson plan');
    }
  }
  
  return (
    <div className={'Lesson'}>
      <button onClick={generateLessonPlan}>Generate</button>
      <div id={'content'}>
          <pre>{lessonPlan}</pre>
      </div>
    </div>
  );
}

export default GenerateLessonPlan;