import React from "react";

function Login() {
    return (
        <div className="login">
            <h1 className="loginH1">IskolarFinder</h1>
            <p className="bigLogin">LOGIN</p>
            <div className="loginForm">
                <label>Username</label>
                <input type="text" placeholder="Username" />
                <label>Password</label>
                <input className="passwordInput" type="password" placeholder="Password" />
            </div>
            <p className="forgotPassword">Forgot Password?</p>
            <button className="loginButton" type="submit">Login</button>
        </div>
    );
}

export default Login;