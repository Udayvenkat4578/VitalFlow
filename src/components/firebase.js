import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyp5SvRXg4KB7bXJjz8Sztdyaf5FnSZSw",
  authDomain: "signupauth-2ac8a.firebaseapp.com",
  projectId: "signupauth-2ac8a",
  storageBucket: "signupauth-2ac8a.appspot.com",
  messagingSenderId: "361025118907",
  appId: "1:361025118907:web:e9eef0adb2d15c00e4ff9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;