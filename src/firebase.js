// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP-bPtCIHYaxpJo5Yp99xKF53pbUXGTnI",
  authDomain: "carefinder-fdd32.firebaseapp.com",
  projectId: "carefinder-fdd32",
  storageBucket: "carefinder-fdd32.appspot.com",
  messagingSenderId: "582241401940",
  appId: "1:582241401940:web:7f84d338b81ffc579001c1",
  measurementId: "G-FNS0841QSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, analytics, storage };