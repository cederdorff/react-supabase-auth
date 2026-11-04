import { Form, Link, redirect, useLoaderData } from "react-router";
import { supabase } from "../lib/supabase";

export async function clientLoader() {
  // getSession() læser tokenet fra localStorage. Den spørger ikke Supabase
  const result = await supabase.auth.getSession();
  const token = result.data.session?.access_token;

  // Samme request, som getUser() sender
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const response = await fetch(`${supabaseUrl}/auth/v1/user`, {
    headers: {
      apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
      Authorization: `Bearer ${token}`,
    },
  });

  // Supabase afviser tokenet, eller der er intet token
  if (!response.ok) {
    return redirect("/login");
  }

  const user = await response.json();
  return { user };
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
