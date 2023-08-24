import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {auth} from "../models/Firebase";

const authService = {
  
    register: async (email, password) => {
      try {
        const userEmail = email;
        const userPassword = password;
        await createUserWithEmailAndPassword(auth, userEmail, userPassword)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            //localStorage.setItem('user', JSON.stringify(user));
            // ...
          });
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      }
    },
    
    login: async (email, password) => {
      try {
        const userEmail = email;
        const userPassword = password;
        await signInWithEmailAndPassword(auth, userEmail, userPassword)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            //localStorage.setItem('user', JSON.stringify(user));
            // ...
          });
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      }
    }
    

}

export default authService;