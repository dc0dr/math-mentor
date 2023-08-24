import { collection, addDoc } from "firebase/firestore"
import { db } from "../models/Firebase"

const handleSubmit = async (email, password) => {
  //const ref = collection(db, "test_data") // Firebase creates this automatically
  
  let data = {
    userEmail: email,
    userPassword: password
  }
  
  try {
    const docRef = await addDoc(collection(db, "user_details"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}

export default handleSubmit