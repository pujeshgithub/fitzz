
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwAm6GE07ClVH9g2a3KIbM31M_nURB3lI",
  authDomain: "myfitzz.firebaseapp.com",
  projectId: "myfitzz",
  storageBucket: "myfitzz.firebasestorage.app",
  messagingSenderId: "1013265317087",
  appId: "1:1013265317087:web:fa947951aacbfe099bbd6a",
  measurementId: "G-MJLRM3T8RV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export default app;

