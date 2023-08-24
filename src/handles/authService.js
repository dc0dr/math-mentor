import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../models/Firebase";

const authService = {
  
    register: async (email, password) => {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
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
    
    login: (email, password) => {
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
    }

}

export default authService;