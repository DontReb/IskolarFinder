import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
    withCredentials: true,
});

export default function Login() {
    const [form, setForm] = useState({email: "", password: ""});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const { data, status } = await api.post("/login", form);
            if ((data && data.success) || status === 200) {
                navigate("/home");
            } else {
                setError(data?.message || "Login failed");
            }
        } catch (err) {
            const message = err?.response?.data?.message ||
            err?.message ||
            "Network or server error.";
            setError(message);
        } finally {
            setLoading(false);
        }
    };

      return (
    <div className="loginPage">
      <div className="login">
        <h1 className="loginH1">IskolarFinder</h1>
        <p className="bigLogin">LOGIN</p>

        <form className="loginForm" onSubmit={handleSubmit} noValidate>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={onChange}
            autoComplete="username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            className="passwordInput"
            type="password"
            placeholder="Your password"
            value={form.password}
            onChange={onChange}
            autoComplete="current-password"
            required
          />

          {error && <p className="error" role="alert">{error}</p>}

          <div className="forgotPasswordContainer">
            <Link to="/forgot-password" className="forgotPassword">
              Forgot Password?
            </Link>
          </div>

          <div className="loginDiv">
            <button className="loginButton" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <p className="or">or</p>
        <Link to="/signup" className="SignUpButton">Sign Up</Link>
      </div>

      <div className="rightContent">
        <h1>IskolarFinder</h1>
        <p>
          Start stepping toward your future with your desired scholarship.
          We seek opportunities for you—just one click away.
        </p>
      </div>
    </div>
  );
}