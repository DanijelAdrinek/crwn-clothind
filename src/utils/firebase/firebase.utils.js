import { initializeApp } from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBoqHnNKAInVb9gy_geDw4s_46rKXoVY3E",
    authDomain: "crwn-clothing-db-d2017.firebaseapp.com",
    projectId: "crwn-clothing-db-d2017",
    storageBucket: "crwn-clothing-db-d2017.appspot.com",
    messagingSenderId: "609278576676",
    appId: "1:609278576676:web:4bf051a9d5e4bff6a170b1"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {

            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });

        } catch(error) {
            console.log("Error creating the user ", error.message);
        }

    }

    return userDocRef;
}