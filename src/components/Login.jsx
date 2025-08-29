import React, { memo } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";

const Login = memo(function Login() {

    return (
            <div className="loginPage">
                <div className="login">
                    <h1 className="loginH1">IskolarFinder</h1>
                    <p className="bigLogin">LOGIN</p>
                    <div className="loginForm">
                        <label>Username</label>
                        <input type="text" placeholder="Username" />
                        <label>Password</label>
                        <input className="passwordInput" type="password" placeholder="Password" />
                    </div>
                    <div className="forgotPasswordContainer">
                        <p className="forgotPassword">Forgot Password?</p>
                    </div>
                    <Link to="/home" className="loginButton" type="submit">Login</Link>
                    <p className="or">or</p>
                    <Link to="/signup" className="SignUpButton">Sign Up</Link>
                </div>
                <div className="rightContent">
                    <h1>IskolarFinder</h1>
                    <p>Start stepping toward your future with your desired scholarship. We seek opportunities for you— just one click away.</p>
                </div>
            </div>
    );
});

export default Login;