import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";
import "../../index.css";

type SignupFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignupFormData>();

  const handleSignup = (data: SignupFormData) => {
    console.log("Signup data:", data);
    navigate("/login");
  };

  return (
    <main className="signup-page">
      <div className="signup-container">
        <h1>Create an Account</h1>
        <p className="signup-subtitle">Sign up to get started</p>

        <form className="signup-form" onSubmit={handleSubmit(handleSignup)}>
          <div className="signup-field">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              {...register("name", {
                required: "Please enter your full name.",
                validate: (value) =>
                  value.trim().length > 0 || "Please enter your full name.",
              })}
            />
            {errors.name && (
              <p className="signup-message" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="signup-field">
            <label htmlFor="signup-email">Email address</label>
            <input
              id="signup-email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              {...register("email", {
                required: "Please enter your email.",
              })}
            />
            {errors.email && (
              <p className="signup-message" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="signup-field">
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
              {...register("password", {
                required: "Please enter a password.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
              })}
            />
            {errors.password && (
              <p className="signup-message" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="signup-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              autoComplete="new-password"
              {...register("confirmPassword", {
                required: "Please confirm your password.",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match.",
              })}
            />
            {errors.confirmPassword && (
              <p className="signup-message" role="alert">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button className="signup-button" type="submit">
            Sign Up
          </button>

          <p className="not-signup">
            Already have an account?{" "}
            <Link to="/login">
              <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Signup;
