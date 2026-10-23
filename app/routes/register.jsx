import { Form, Link, redirect } from "react-router";
import { supabase } from "../lib/supabase";

export async function clientAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // Supabase hasher passwordet med bcrypt og gemmer brugeren i auth.users
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error("Registration error:", error);
    return null;
  }

  return redirect("/login?registered=true");
}

export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p className="auth-subtitle">Sign up with email and password</p>

        <Form method="post" className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              autoComplete="new-password"
              minLength={6}
              placeholder="At least 6 characters"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              autoComplete="new-password"
              minLength={6}
              placeholder="Re-enter your password"
            />
          </div>

          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </Form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
