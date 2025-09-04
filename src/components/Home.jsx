import { useAuth } from "../context/AuthContext";

function Home() {
    const { user } = useAuth();

    return (
        <div className="home">
            <h2>Welcome, {user?.displayName || user?.email.split("@")[0]}</h2>

            <main>
                <p>This is your dashboard. From here you can manage scholarships, save items, and more.</p>
            </main>
            
        </div>
    );
}

export default Home;