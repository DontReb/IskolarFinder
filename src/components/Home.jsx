import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { useState } from "react";

function Home() {
    const { user } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="home">
            <h2>Welcome, {user?.email}</h2>

            <nav className="dash">
                <h1 className="Home">IskolarFinder</h1>

                <div className="navButtons">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Scholarships</a></li>
                        <li><a>Calendar</a></li>
                        <li><a>Saved</a></li>
                    </ul>
                </div>

                <div className="profileMenu">
                    <button onClick={() => setShowDropdown(!showDropdown)}>
                        {user?.email.split("@")[0]} ⬇
                    </button>
                    {showDropdown && (
                        <div className="dropdown">
                            <p>{user?.email}</p>
                            <button onClick={() => auth.signOut()}>Logout</button>
                        </div>
                    )}
                </div>
            </nav>

            <main>
                <p>This is your dashboard. From here you can manage scholarships, save items, and more.</p>
            </main>
            
        </div>
    );
}

export default Home;