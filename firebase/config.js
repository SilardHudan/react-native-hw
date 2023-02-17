import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAdT9WY75HJb5tgsMv_LbC4bgxDmnKmSzc",
  authDomain: "mobile-app-d808c.firebaseapp.com",
  projectId: "mobile-app-d808c",
  storageBucket: "mobile-app-d808c.appspot.com",
  messagingSenderId: "676882144098",
  appId: "1:676882144098:web:6f044de7281d21839a6a3b",
  measurementId: "G-8RJ8Z6TF4J",
};

// Init Firebase
export const app = initializeApp(firebaseConfig);

//Init authorization
export const auth = getAuth(app);

//Init storage
export const storage = getStorage(app);

//Init Firestore database
export const db = getFirestore(app);
