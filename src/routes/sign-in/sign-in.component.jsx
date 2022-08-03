import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth"; 

import { 
    auth,
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

    useEffect(() => {

        async function fetchData() {
            const response = await getRedirectResult(auth);
            
            if(response) {
                createUserDocumentFromAuth(response.user);    
            }
        }

        fetchData();

    }, []);

    const logGoogleUserWithPopup = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    const logGoogleUserWithRedirect = () => {
        signInWithGoogleRedirect();
    }

    return (
        <div>
            <h1>Sign-in Page</h1>
            <button onClick={logGoogleUserWithPopup}>
                Sign in with Google Popup
            </button>
            <button onClick={logGoogleUserWithRedirect}>
                Sign in with Google Redirect
            </button>
            <SignUpForm />
        </div>
    );
}

export default SignIn;