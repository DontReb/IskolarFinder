import React, { memo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const SignUp = memo(function Login() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/signup', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login');
            })
            .catch(err => console.log(err));
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
                        <button className="primaryBtn" type="submit">Sign Up</button>
                    </div>
                </form>
                <p className="or">or sign up with</p>
                {/* <Link to="/signup" className="secondaryBtn">Sign Up</Link> */}
                <div className="signUp-icon-btn">
                    <GoogleIcon />
                    <FacebookIcon />
                </div>
            </div>
            <div className="rightContent">
                <h1>IskolarFinder</h1>
                <p>Start stepping toward your future with your desired scholarship. We seek opportunities for you — just one click away.</p>
            </div>
        </div >
    );
});

export default SignUp;