import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqm27vrlZjEdR0gPI8lto8CQ2-atZCIjs",
  authDomain: "note-f4233.firebaseapp.com",
  databaseURL: "https://note-f4233-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "note-f4233",
  storageBucket: "note-f4233.appspot.com",
  messagingSenderId: "461837570904",
  appId: "1:461837570904:web:92ee14a91f6f4f7051cb2d",
  measurementId: "G-4KVTH656P4"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
