import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Mail, ShieldCheck, ArrowRight } from "lucide-react";
import AuthLayout from "../../components/auth/AuthLayout";
import "./ForgotPassword.css";

type ForgotPasswordData = {
  email: string;
};

function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordData>();

  const handleForgotPassword = async (data: ForgotPasswordData) => {
    const email = data.email.trim();

    // TODO: Call your backend API to send the verification code.

    navigate("/verify-email", {
      state: { email },
    });
  };

  return (
    <AuthLayout current="Forgot password">
      <div className="forgot-password-card">
        <h1 className="auth-heading">Forgot your password?</h1>

        <p className="auth-subheading">
          No worries. Enter your registered email and we'll send you a link to
          reset your password.
        </p>

        <form
          className="auth-form"
          onSubmit={handleSubmit(handleForgotPassword)}
          noValidate
        >
          <div className="auth-field">
            <label htmlFor="forgot-email">Registered email address</label>

            <input
              id="forgot-email"
              type="email"
              placeholder="Enter your email address"
              autoComplete="email"
              aria-invalid={!!errors.email}
              {...register("email", {
                required: "Please enter your email address.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address.",
                },
              })}
            />

            {errors.email && (
              <span className="auth-message" role="alert">
                {errors.email.message}
              </span>
            )}
          </div>

          <button className="auth-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Mail size={18} />
                Send reset link
                <ArrowRight size={18} />
              </>
            )}
          </button>

          <div className="forgot-security">
            <ShieldCheck size={18} />
            <p>
              For your security, your password reset link should expire after 30
              minutes. Check your spam folder if it doesn't arrive.
            </p>
          </div>

          <p className="forgot-back">
            <Link to="/login">← Back to sign in</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}

export default ForgotPassword;
