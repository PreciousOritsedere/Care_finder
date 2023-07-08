// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUZ0mc0jgKDK8z6TQNYL1Dz_6mA_K78q4",
  authDomain: "carefinder-13782.firebaseapp.com",
  projectId: "carefinder-13782",
  storageBucket: "carefinder-13782.appspot.com",
  messagingSenderId: "380510945332",
  appId: "1:380510945332:web:be64409d3e70c5e8240a61",
  measurementId: "G-WXCHPJMW14"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const firestore = getFirestore(app);
const storage = getStorage(app);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}


export { app, analytics, firestore, storage };