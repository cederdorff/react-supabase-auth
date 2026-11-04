import { useEffect, useState } from "react";
import { Link } from "react-router";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [email, setEmail] = useState(null);

  // Kører én gang, når forsiden bliver vist
  useEffect(() => {
    async function loadSession() {
      const { data } = await supabase.auth.getSession();
      setEmail(data.session?.user.email);
    }
    loadSession();
  }, []);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>React Supabase Auth</h1>
        <p className="auth-subtitle">
          Create an account, log in and take a look at your JWT
        </p>

        {email ? (
          <>
            <p className="auth-subtitle">Logged in as {email}</p>
            <nav className="home-links">
              <Link to="/profile" className="btn-primary">
                My Profile
              </Link>
            </nav>
          </>
        ) : (
          <nav className="home-links">
            <Link to="/register" className="btn-primary">
              Create Account
            </Link>
            <Link to="/login" className="btn-secondary">
              Log In
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}
