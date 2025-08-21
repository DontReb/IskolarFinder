import React from "react";

function Login() {
    return (
        <body>
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
                    <button className="loginButton" type="submit">Login</button>
                    <p className="or">or</p>
                    <button className="SignUpButton">Sign Up</button>
                </div>
                <div className="rightContent">
                    <h1>IskolarFinder</h1>
                    <p>Start stepping toward your future with your desired scholarship. We seek opportunities for you— just one click away.</p>
                </div>
            </div>
        </body>
    );
}

export default Login;