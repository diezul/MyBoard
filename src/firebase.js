import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmSfl0BlNVAIbk-Tpue3EFcc0tEFKRJiA",
  authDomain: "myboard-974b2.firebaseapp.com",
  projectId: "myboard-974b2",
  storageBucket: "myboard-974b2.firebasestorage.app",
  messagingSenderId: "293603918567",
  appId: "1:293603918567:web:507779c0dbc6c84e8b1842",
  measurementId: "G-HCWEC7JL78"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
