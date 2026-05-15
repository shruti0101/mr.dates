








import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvqW3l8iVW6eT_ajpXtIjUb9mthsMTa4U",
  authDomain: "formbackend-8d706.firebaseapp.com",
  projectId: "formbackend-8d706",
  storageBucket: "formbackend-8d706.appspot.com",
  messagingSenderId: "83013516202",
  appId: "1:83013516202:web:2a01837c5bf7db346a09d3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
