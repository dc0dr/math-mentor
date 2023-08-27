import { collection, addDoc } from "firebase/firestore";
import { db } from "../models/Firebase";
import { auth } from "../models/Firebase";

const handleQuestions = async (question, answer) => {
//const ref = collection(db, "test_data") // Firebase creates this automatically
  const user = auth.currentUser.uid;
  
  let data = {
    question: question,
    answer: answer,
  };

  try {
    const docRef = await addDoc(collection(db, "questions"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}