import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="dash">
            <h1>IskolarFinder</h1>
            <div className="navButtons">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a>Scholarships</a></li>
                    <li><a>Calendar</a></li>
                    <li><a>Saved</a></li>
                </ul>
            </div>
            <div className="authButtons">
                <Link to="/login" className="loginLink">Login</Link>
                <Link to="/signup">
                    <button className="signUp">Sign Up</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;