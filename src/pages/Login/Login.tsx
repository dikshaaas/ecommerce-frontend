import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthTabs from "../../components/auth/AuthTabs";
import PasswordInput from "../../components/auth/PasswordInput";

type LoginFormData = { email: string; password: string; remember: boolean };

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    defaultValues: { remember: true }
  });

  const handleLogin = async (data: LoginFormData) => {
    login(data.email.trim());
    navigate("/");
  };

  return (
    <AuthLayout current="Sign in">
      <h1 className="auth-heading">Welcome back!</h1>
      <p className="auth-subheading">Sign in to MegaMart for a seamless shopping experience.</p>
      <AuthTabs active="login" />
      <form className="auth-form" onSubmit={handleSubmit(handleLogin)} noValidate>
        <div className="auth-field">
          <label htmlFor="login-email">Email address</label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter your email address"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email", {
              required: "Please enter your email address.",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." },
            })}
          />
          {errors.email && <span className="auth-message" role="alert">{errors.email.message}</span>}
        </div>
        <div className="auth-field">
          <label htmlFor="login-password">Password</label>
          <PasswordInput
            id="login-password"
            placeholder="Enter your password"
            autoComplete="current-password"
            invalid={!!errors.password}
            {...register("password", {
              required: "Please enter your password.",
              minLength: { value: 8, message: "Password must be at least 8 characters." }
            })}
          />
          {errors.password && <span className="auth-message" role="alert">{errors.password.message}</span>}
        </div>
        <div className="auth-row-between">
          <label className="auth-check-row">
            <input type="checkbox" {...register("remember")} />
            <span>Remember me</span>
          </label>
              <Link to="/forgot-password" className="auth-inline-link">
                  Forgot password?
              </Link>
        </div>
        <button className="auth-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing in…" : <>Sign in <ArrowRight size={18} /></>}
        </button>
        <p className="auth-switch">New to MegaMart? <Link to="/signup">Sign up</Link></p>
      </form>
      <p className="auth-privacy">
        <ShieldCheck size={16} /> Your information is safe and secure with us.
      </p>
    </AuthLayout>
  );
}

export default Login;
