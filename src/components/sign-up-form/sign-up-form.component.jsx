import { useState } from "react";

import './sign-up-form.styles.scss';

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { 
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        // try creating a new user and adding that user to our context
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch(error) {
            if(error.code === "auth/email-already-in-use") {
                alert("couldnt create the user, email is already in use")
            }
            console.log("User creation encountered an error: ", error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                    label="Display Name" 
                    inputOptions = {{
                        type: "text", 
                        onChange: handleChange, 
                        name: "displayName",
                        value: displayName, 
                        required: true 
                    }}
                />
                
                <FormInput 
                    label="Email" 
                    inputOptions = {{
                        type: "email", 
                        onChange: handleChange, 
                        name: "email",
                        value: email, 
                        required: true 
                    }}
                />
                
                <FormInput 
                    label="Password" 
                    inputOptions = {{
                        type: "password", 
                        onChange: handleChange, 
                        name: "password",
                        value: password, 
                        required: true 
                    }}
                />
                
                <FormInput 
                    label="Confirm Password" 
                    inputOptions = {{
                        type: "password", 
                        onChange: handleChange, 
                        name: "confirmPassword",
                        value: confirmPassword, 
                        required: true 
                    }}
                />

                <Button children="Sign Up" type="submit"/>
            </form>
        </div>
    );
}

export default SignUpForm;