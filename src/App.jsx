import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HomeNoAccount from "./components/homeNoAccount";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useAuth, AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import "./css/App.css";
import "./css/NavBar.css";
import "./css/Home.css";
import "./css/login.css";
import "./css/signUp.css"

function App() {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  const hideNavbarRoutes = ["/login", "/signup"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={user ? <Home /> : <HomeNoAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Private route */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

function AppWrapper(){
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
}

export default AppWrapper;