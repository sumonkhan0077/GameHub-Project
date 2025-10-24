// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBee90xpuVCF0FVRgrRK-2sgS-EYUawanU",
  authDomain: "assignment09-game-hub.firebaseapp.com",
  projectId: "assignment09-game-hub",
  storageBucket: "assignment09-game-hub.firebasestorage.app",
  messagingSenderId: "607248944727",
  appId: "1:607248944727:web:6d1414e7c2c80c2c6a1d12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);