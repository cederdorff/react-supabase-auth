import { Form, Link, redirect, useLoaderData } from "react-router";
import { supabase } from "../lib/supabase";

export async function clientLoader() {
  // getUser() sender tokenet til Supabase, som tjekker signaturen
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return redirect("/login");
  }

  return { user: data.user };
}

export async function clientAction() {
  // Fjerner tokenet fra localStorage
  await supabase.auth.signOut();
  return redirect("/login");
}

export default function Profile() {
  const { user } = useLoaderData();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>My Profile</h1>
        <p className="auth-subtitle">You are logged in</p>

        <dl className="profile-list">
          <dt>Email</dt>
          <dd>{user.email}</dd>
          <dt>User ID</dt>
          <dd>{user.id}</dd>
          <dt>Last sign in</dt>
          <dd>{new Date(user.last_sign_in_at).toLocaleString()}</dd>
        </dl>

        <Form method="post">
          <button type="submit" className="btn-secondary">
            Log Out
          </button>
        </Form>

        <p className="auth-footer">
          <Link to="/">Back to start</Link>
        </p>
      </div>
    </div>
  );
}
