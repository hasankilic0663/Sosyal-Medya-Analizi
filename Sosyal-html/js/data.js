import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDGp3dPQJky3fNHcVIsBB1J4LIQT7WhHAE",
  authDomain: "sosyalmedyabagimliligi-62b40.firebaseapp.com",
  databaseURL: "https://sosyalmedyabagimliligi-62b40-default-rtdb.firebaseio.com",
  projectId: "sosyalmedyabagimliligi-62b40",
  storageBucket: "sosyalmedyabagimliligi-62b40.appspot.com",
  messagingSenderId: "560097483077",
  appId: "1:560097483077:web:2753182a437ca277c7c62c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
