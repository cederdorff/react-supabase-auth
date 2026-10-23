import { Link } from "react-router";

export default function Home() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>React Supabase Auth</h1>
        <p className="auth-subtitle">
          Create an account, log in and take a look at your JWT
        </p>

        <nav className="home-links">
          <Link to="/register" className="btn-primary">
            Create Account
          </Link>
          <Link to="/login" className="btn-secondary">
            Log In
          </Link>
        </nav>
      </div>
    </div>
  );
}
