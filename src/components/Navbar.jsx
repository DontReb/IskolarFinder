import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";

function Navbar() {
    const { user } = useAuth();

    return (
        <nav className="dash">
            <h1 className="Home">IskolarFinder</h1>

            {user && (
                <div className="navButtons">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a>Scholarships</a></li>
                        <li><a>Calendar</a></li>
                        <li><a>Saved</a></li>
                    </ul>
                </div>
            )}

            <div className="authLinks">
                {!user ? (
                    <>
                        <Link to="/login" className="loginbtn">Login</Link>
                        <Link to="/signup" className="signUpbtn">Sign Up</Link>
                    </>
                ) : (
                    <button onClick={() => auth.signOut()} className="logoutbtn">Logout</button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;