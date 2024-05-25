import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4_f-jjkhQ1bMSva3pd3W0bZgaj48YDHw",
  authDomain: "instagram-clone-with-rea-f7835.firebaseapp.com",
  projectId: "instagram-clone-with-rea-f7835",
  storageBucket: "instagram-clone-with-rea-f7835.appspot.com",
  messagingSenderId: "208510626822",
  appId: "1:208510626822:web:670d89598f9509db766787",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
