import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component";
import { signUserInWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

import { useState } from "react";

import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultInputValues = {
    email: '',
    password: ''
};

const SignInForm = () => {
    
    const [getFormData, setFormData] = useState(defaultInputValues);
    const { email, password } = getFormData;

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const resetFormFields = () => {
        setFormData(defaultInputValues);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...getFormData, [name]: value});
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await signUserInWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error) {

            console.log(error.code);

            switch(error.code) {
                case "auth/user-not-found":
                    console.log(error.code)
                    alert("this user doesnt exist!");
                    break;
                
                case "auth/wrong-password":
                    alert("Incorrect password!");
                    break;
                
                default:
                    alert(error.code);
            }
        }
    }

    return (
        <div className="sign-in-container">
            <form onSubmit={handleSubmit}>

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
                <div className="buttons-container">
                    <Button type="submit" >Sign In</Button>
                    <Button buttonType="google" onClick={signInWithGoogle} >Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;