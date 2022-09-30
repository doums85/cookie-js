// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARSX8QTORpFR9CK8T0vneS15_2M5EqdGI",
  authDomain: "test-22d7e.firebaseapp.com",
  databaseURL: "https://test-22d7e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-22d7e",
  storageBucket: "test-22d7e.appspot.com",
  messagingSenderId: "902319992441",
  appId: "1:902319992441:web:bbd200358af5cbb0adeea8",
  measurementId: "G-7ND0JM65RK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };