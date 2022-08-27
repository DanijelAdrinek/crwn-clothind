import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => {

    /* FOR SIGNING USER IN WITH GOOGLE REDIRECT */

    // useEffect(() => {

    //     async function fetchData() {
    //         const response = await getRedirectResult(auth);
            
    //         if(response) {
    //             createUserDocumentFromAuth(response.user);    
    //         }
    //     }

    //     fetchData();

    // }, []);

    // const logGoogleUserWithRedirect = () => {
    //     signInWithGoogleRedirect();
    // }

    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    );
}

export default Authentication;