import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router";
import { supabase } from "../lib/supabase";

export async function clientAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (!email || !password || !confirmPassword) {
    return { error: "All fields are required" };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  if (password.length < 6) {
    return { error: "Password must be at least 6 characters" };
  }

  // Supabase hasher passwordet med bcrypt og gemmer brugeren i auth.users
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { error: error.message };
  }

  return redirect("/login?registered=true");
}

export default function Register() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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

          {actionData?.error && (
            <div className="error-message">{actionData.error}</div>
          )}

          <button type="submit" disabled={isSubmitting} className="btn-primary">
            {isSubmitting ? "Creating account..." : "Create Account"}
          </button>
        </Form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
