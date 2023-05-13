import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB7AtWeh-Kz-8TN6uLn3YFP9Z_hBAIpYj8",

  authDomain: "mixmeajs.firebaseapp.com",

  projectId: "mixmeajs",

  storageBucket: "mixmeajs.appspot.com",

  messagingSenderId: "286662713941",

  appId: "1:286662713941:web:df66d8066917b9bd6baadc",

  measurementId: "G-9H3PG08ZBC"



  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  
  