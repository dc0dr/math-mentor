import { doc, setDoc } from "firebase/firestore"
import { db } from "../models/Firebase"
import { auth } from "../models/Firebase"

const handleRegister = async (email, firstname, lastname) => {
  //const ref = collection(db, "test_data") // Firebase creates this automatically
  
  const user = auth.currentUser.uid;
  
  let data = {
    userEmail: email,
    firstName: firstname,
    lastName: lastname
  }
  
  
  try {
    //const docRef = await addDoc(collection(db, "user"), data);
    const userDocRef = doc(db, "user", user);
    await setDoc(userDocRef, data);
    console.log("Document written with ID: ", userDocRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}

export default handleRegister;