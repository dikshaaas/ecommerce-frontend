import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";
import "../../index.css";

type LoginFormData = {
  email: string;
  password: string;
};

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const handleLogin = (data: LoginFormData) => {
    login(data.email.trim());
    navigate("/");
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <h1>Welcome to MegaMart</h1>
        <p className="login-subtitle">Sign in to your account</p>

        <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
          <div className="login-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              {...register("email", {
                required: "Please enter your email.",
                validate: (value) =>
                  value.trim().length > 0 || "Please enter your email.",
              })}
            />

            {errors.email && (
              <p className="login-message" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              {...register("password", {
                required: "Please enter your password.",
              })}
            />

            {errors.password && (
              <p className="login-message" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="login-button" type="submit">
            Login
          </button>

          <div className="not-login">
            <Link to="/signup">
              Don't have an account? <strong>Sign Up</strong>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
