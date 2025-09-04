import React, { memo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = memo(function Login() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(userCredential.user, { displayName: name });

            const token = await userCredential.user.getIdToken();

            await axios.post("http://localhost:3001/signup",
                { name, email, firebaseUid: userCredential.user.uid },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            navigate("/login");
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
            <div className="signUpPage">
                <div className="signUp">
                    <p className="bigSignUp">SIGN UP</p>
                    <form className="SignUpForm" onSubmit={handleSubmit}>
                        <label>Full Name</label>
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <label>Email</label>
                        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <label>Password</label>
                        <input className="passwordInput" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <label>Confirm Password</label>
                        <input className="passwordInput" type="password" placeholder="Confirm Password" />
                        <div className="signupdiv">
                            <button className="Signupbtn" type="submit">Sign Up</button>
                        </div>
                    </form>
                    <p className="orsignup">or sign up with</p>
                    <Link to="/signup" className="SignUpButton">Sign Up</Link>
                </div>
                <div className="rightContent">
                    <h1>IskolarFinder</h1>
                    <p>Start stepping toward your future with your desired scholarship. We seek opportunities for you— just one click away.</p>
                </div>
            </div>
    );
});

export default SignUp;