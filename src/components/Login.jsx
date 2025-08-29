import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success") {
                navigate('/home');
            }
        })
        .catch(err => console.log(err));
    }

    return (
            <div className="loginPage">
                <div className="login">
                    <h1 className="loginH1">IskolarFinder</h1>
                    <p className="bigLogin">LOGIN</p>
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input type="text" placeholder="Username" onChange={(e) => setEmail(e.target.value)} />
                        <label>Password</label>
                        <input className="passwordInput" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <div className="forgotPasswordContainer">
                            <p className="forgotPassword">Forgot Password?</p>
                        </div>
                        <div className="loginDiv">
                            <button className="loginButton" type="submit">Login</button>
                        </div>
                    </form>
                    <p className="or">or</p>
                    <Link to="/signup" className="SignUpButton">Sign Up</Link>
                </div>
                <div className="rightContent">
                    <h1>IskolarFinder</h1>
                    <p>Start stepping toward your future with your desired scholarship. We seek opportunities for you— just one click away.</p>
                </div>
            </div>
    );
}

export default Login;