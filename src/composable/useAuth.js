import {ref} from "vue";

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "@firebase/auth";

import { firebaseApp, firebaseAuth } from "./useFirebase";
import { async } from "@firebase/util";

const isAuthenticated = ref(false);

const user = ref("");



const useAuth = () => {
    const login = async(username, password) => {
     const res = 
     await signInWithEmailAndPassword(firebaseAuth, username, password);
     
     if (res.user) {
       isAuthenticated.value = true;
       user.value = res.user.email
     }
    };

    const signup = async(username, password) => {
      const res = 
      await createUserWithEmailAndPassword(firebaseAuth, username, password);
      
      if (res.user) {
        isAuthenticated.value = true;
        user.value = res.user.email
      }
     };
  
    const logout = async() => {
      await signOut(firebaseAuth);
      isAuthenticated.value = false;
      user.value = "";
    };
  
    return { isAuthenticated, login, signup, logout, user };
  };
  
  export default useAuth;