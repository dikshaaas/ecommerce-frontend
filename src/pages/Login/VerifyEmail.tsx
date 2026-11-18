
import { useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ShieldCheck, ArrowRight, Mail } from "lucide-react";
import AuthLayout from "../../components/auth/AuthLayout";
import "./verifyEmail.css";

function VerifyEmail() {
  const location = useLocation();

  const email = location.state?.email || "";

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleCodeChange = (value: string, index: number) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    const updatedCode = [...code];
    updatedCode[index] = digit;

    setCode(updatedCode);
    setMessage("");

    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pasted) return;

    const updatedCode = Array(6).fill("");

    pasted.split("").forEach((digit, index) => {
      updatedCode[index] = digit;
    });

    setCode(updatedCode);
    setMessage("");

    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    const verificationCode = code.join("");

    if (verificationCode.length !== 6) {
      setMessage("Please enter the complete 6-digit verification code.");
      return;
    }

    if (!email) {
      setMessage("Email address not found. Please request a new reset code.");
      return;
    }

    setIsSubmitting(true);

    try {
      setMessage("Connect your verification API to complete verification.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendCode = () => {
    setMessage("Please connect your resend-code API to send a new code.");
  };

  return (
    <AuthLayout current="Verify email">
      <div className="verify-email-card">

        <div className="verify-icon">
          <Mail size={26} />
        </div>

        <h1 className="auth-heading">
          Verify your email address
        </h1>

        <p className="auth-subheading">
          We've sent a 6-digit verification code to your
          registered email address.
        </p>

        <div className="verify-email-address">
          <Mail size={17} />
          <span>{email || "Your registered email address"}</span>
        </div>

        <form onSubmit={handleVerify} className="verify-form">

          <label className="verify-label">
            Enter verification code
          </label>

          <div className="verify-code-inputs">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                autoComplete={index === 0 ? "one-time-code" : "off"}
                maxLength={1}
                value={digit}
                onChange={(e) =>
                  handleCodeChange(e.target.value, index)
                }
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                aria-label={`Verification digit ${index + 1}`}
              />
            ))}
          </div>

          {message && (
            <p className="verify-message" role="status">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="auth-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Verifying..."
            ) : (
              <>
                Verify email
                <ArrowRight size={18} />
              </>
            )}
          </button>

          <div className="verify-resend">
            <span>Didn't receive the code?</span>
            <button
              type="button"
              onClick={handleResendCode}
            >
              Resend code
            </button>
          </div>

          <div className="verify-security">
            <ShieldCheck size={18} />
            <p>
              Your account security is important to us.
              Never share your verification code with anyone.
            </p>
          </div>

          <p className="verify-back">
            <Link to="/forgot-password">
              ← Back to forgot password
            </Link>
          </p>

        </form>
      </div>
    </AuthLayout>
  );
}

export default VerifyEmail;
