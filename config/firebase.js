import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { initializeFirestore} from "firebase/firestore"
import { getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD8btQAUcv5pQI8RLUaiK50Sy5pRR0hAW0",
  authDomain: "myhealth-398ef.firebaseapp.com",
  projectId: "myhealth-398ef",
  storageBucket: "myhealth-398ef.appspot.com",
  messagingSenderId: "560647460477",
  appId: "1:560647460477:web:11a9abdab889ea6d2f0314"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = initializeFirestore(app, {experimentalForceLongPolling: true})

const storage = getStorage(app)

export {app, auth, db, storage}