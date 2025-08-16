import React from "react";

function Navbar() {
    return (
        <nav className="dash">
            <h1>IskolarFinder</h1>
            <div className="navButtons">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Scholarships</a></li>
                    <li><a>Calendar</a></li>
                    <li><a>Saved</a></li>
                </ul>
            </div>
            <div className="authButtons">
                <a>Login</a>
                <button className="signUp">Sign Up</button>
            </div>
        </nav>
    );
}

export default Navbar;