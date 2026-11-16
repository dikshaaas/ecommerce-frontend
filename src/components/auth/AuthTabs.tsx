import { Link } from "react-router-dom";

export default function AuthTabs({ active }: { active: "login" | "signup" }) {
  return (
    <div className="auth-tabs" aria-label="Authentication">
      <Link to="/login" className={active === "login" ? "active" : ""} aria-current={active === "login" ? "page" : undefined}>Sign in</Link>
      <Link to="/signup" className={active === "signup" ? "active" : ""} aria-current={active === "signup" ? "page" : undefined}>Sign up</Link>
    </div>
  );
}
