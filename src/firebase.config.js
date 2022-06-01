import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKaRxlnGFgYKxBoS803UAAaBlZ1ZfZVMI",
  authDomain: "mui-notes.firebaseapp.com",
  projectId: "mui-notes",
  storageBucket: "mui-notes.appspot.com",
  messagingSenderId: "683888992803",
  appId: "1:683888992803:web:c77845692563e7802b0796",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
