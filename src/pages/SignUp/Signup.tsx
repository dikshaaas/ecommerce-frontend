import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthTabs from "../../components/auth/AuthTabs";
import PasswordInput from "../../components/auth/PasswordInput";

type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  promotions: boolean;
};

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, getValues, formState: { errors, isSubmitting } } = useForm<SignupFormData>({ defaultValues: { countryCode: "+91", promotions: false, terms: false } });

  const handleSignup = async (data: SignupFormData) => {
    // Registration is not backed by an API yet; retain the existing post-submit route.
    console.log("Signup data:", { ...data, mobile: `${data.countryCode} ${data.mobile}` });
    navigate("/login");
  };

  return (
    <AuthLayout current="Sign Up">
        <h1 className="auth-heading">Create your account</h1>
        <p className="auth-subheading">Join MegaMart. Your next great deal is waiting.</p>
        <AuthTabs active="signup" />
        <form className="auth-form" onSubmit={handleSubmit(handleSignup)} noValidate>
          <div className="auth-name-grid">
            <div className="auth-field">
              <label htmlFor="first-name">First name</label>
              <input id="first-name" placeholder="First name" autoComplete="given-name" aria-invalid={!!errors.firstName} {...register("firstName", { required: "Please enter your first name.", validate: (value) => !!value.trim() || "Please enter your first name." })} />
              {errors.firstName && <span className="auth-message" role="alert">{errors.firstName.message}</span>}
            </div>
            <div className="auth-field">
              <label htmlFor="last-name">Last name</label>
              <input id="last-name" placeholder="Last name" autoComplete="family-name" aria-invalid={!!errors.lastName} {...register("lastName", { required: "Please enter your last name.", validate: (value) => !!value.trim() || "Please enter your last name." })} />
              {errors.lastName && <span className="auth-message" role="alert">{errors.lastName.message}</span>}
            </div>
          </div>
          <div className="auth-field">
            <label htmlFor="signup-email">Email address</label>
            <input id="signup-email" type="email" placeholder="you@example.com" autoComplete="email" aria-invalid={!!errors.email} {...register("email", { required: "Please enter your email address.", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." } })} />
            {errors.email && <span className="auth-message" role="alert">{errors.email.message}</span>}
          </div>
          <div className="auth-field">
            <label htmlFor="signup-mobile">Mobile number</label>
            <div className="auth-phone-control">
              <select aria-label="Country calling code" {...register("countryCode", { required: "Choose a country code." })}>
                <option value="+1">🇺🇸 +1</option><option value="+44">🇬🇧 +44</option><option value="+61">🇦🇺 +61</option><option value="+91">🇮🇳 +91</option><option value="+977">🇳🇵 +977</option>
              </select>
              <input id="signup-mobile" type="tel" placeholder="Enter mobile number" autoComplete="tel-national" aria-invalid={!!errors.mobile} {...register("mobile", { required: "Please enter your mobile number.", validate: (value) => {
                const digits = value.replace(/\D/g, "");
                return (digits.length >= 7 && digits.length <= 15) || "Enter a valid mobile number (7–15 digits).";
              } })} />
            </div>
            {errors.mobile && <span className="auth-message" role="alert">{errors.mobile.message}</span>}
          </div>
          <div className="auth-field">
            <label htmlFor="signup-password">Password</label>
            <PasswordInput id="signup-password" placeholder="Create a password" autoComplete="new-password" invalid={!!errors.password} {...register("password", { required: "Please create a password.", minLength: { value: 8, message: "Use at least 8 characters." }, validate: (value) => /[A-Za-z]/.test(value) && /\d/.test(value) || "Include at least one letter and one number." })} />
            {errors.password ? <span className="auth-message" role="alert">{errors.password.message}</span> : <span className="auth-hint">Use 8 or more characters, including a letter and a number.</span>}
          </div>
          <div className="auth-field">
            <label htmlFor="confirm-password">Confirm password</label>
            <PasswordInput id="confirm-password" placeholder="Re-enter your password" autoComplete="new-password" invalid={!!errors.confirmPassword} {...register("confirmPassword", { required: "Please confirm your password.", validate: (value) => value === getValues("password") || "Passwords do not match." })} />
            {errors.confirmPassword && <span className="auth-message" role="alert">{errors.confirmPassword.message}</span>}
          </div>
          <div className="auth-legal">
            <label className="auth-check-row"><input type="checkbox" aria-invalid={!!errors.terms} {...register("terms", { required: "You must accept the terms to create an account." })} /> <span>I agree to the <span className="auth-inline-link">Terms &amp; Conditions</span> and <span className="auth-inline-link">Privacy Policy</span>.</span></label>
            {errors.terms && <span className="auth-message" role="alert">{errors.terms.message}</span>}
            <label className="auth-check-row"><input type="checkbox" {...register("promotions")} /> <span>Send me updates about offers and promotions (optional).</span></label>
          </div>
          <button className="auth-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "Creating account…" : "Create account"}</button>
          <p className="auth-switch">Already have an account? <Link to="/login">Sign In</Link></p>
        </form>
    </AuthLayout>
  );
}

export default Signup;
