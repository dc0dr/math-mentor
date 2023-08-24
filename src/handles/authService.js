import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../models/Firebase";

const authService = {
  
    register: async (email, password) => {
      try {
        const userCredential = await  createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        console.log(user)
        //localStorage.setItem('user', JSON.stringify(user));
        // ...
      } catch (error) {
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      }
    },
    
    login: async (email, password) => {
      return new Promise(async(resolve, reject) => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          //console.log(user);
          resolve(user)
        } catch (error) {
          //const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          reject(error);
        }
      });
    },
  
    logout: async () => {
      return new Promise(async(resolve, reject) => {
        try {
          await auth.signOut();
          resolve(true)
        } catch (error) {
          reject(error);
        }
      });
    }
}

export default authService;