import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import axios from "axios";
import { baseUrl } from "../../Api/applicationsApi";

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    createUser,
    loading,
    user,
    loginUser,
    signInWithGoogle,
    logOut,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser?.email) {
          const userData = {email : currentUser.email}
       
        axios
          .post(`${baseUrl}jwt`, userData,{withCredentials:true})
          .then((result) => {
          
            const token = result.data.token;
          })
          .catch((err) => console.log(err.message));
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
