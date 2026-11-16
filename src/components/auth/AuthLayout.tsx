import type { ReactNode } from "react";
import TopBar from "../layout/TopBar";
import Header from "../layout/Header";
import NavBar from "../layout/NavBar";
import Footer from "../ecommerce/Footer";
import Breadcrumb from "../../pages/Breadcrumbs/Breadcrumb";
import AuthPromoPanel from "./AuthPromoPanel";
import "./auth.css";

type AuthLayoutProps = {
  current: "Sign in" | "Sign up" | "Sign In" | "Sign Up";
  children: ReactNode;
};

export default function AuthLayout({ current, children }: AuthLayoutProps) {
  const isSignUp = current.toLowerCase().includes("up");
  const displayLabel = isSignUp ? "Sign up" : "Sign in";

  return (
    <div className="auth-page">
      <TopBar />
      <Header />
      <NavBar />
      <div className="auth-breadcrumb-wrap">
        <Breadcrumb items={[{ label: "Home", path: "/" }, { label: displayLabel }]} />
      </div>
      <main className="auth-main">
        <div className="auth-layout">
          <AuthPromoPanel />
          <section className={`auth-card${isSignUp ? " auth-signup-card" : ""}`}>
            {children}
          </section>
        </div>
      </main>
      <Footer variant="compact" />
    </div>
  );
}
