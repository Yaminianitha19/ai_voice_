// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzOAvqspLJ21OXiaznz4lm_yJ9VWEfFGI",
  authDomain: "ai-voice-123c1.firebaseapp.com",
  projectId: "ai-voice-123c1",
  storageBucket: "ai-voice-123c1.firebasestorage.app",
  messagingSenderId: "727670308759",
  appId: "1:727670308759:web:bc67602d0e74fb08b40ed2",
  measurementId: "G-ZJH5L3YX13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);