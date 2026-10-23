import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("register", "routes/register.jsx"),
  route("login", "routes/login.jsx"),
  route("profile", "routes/profile.jsx"),
];
