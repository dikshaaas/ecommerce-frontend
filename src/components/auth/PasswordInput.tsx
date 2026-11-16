import { useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean };

export default function PasswordInput({ invalid, ...props }: PasswordInputProps) {
  const [visible, setVisible] = useState(false);
  return (
    <div className={`auth-password-control${invalid ? " invalid" : ""}`}>
      <input {...props} type={visible ? "text" : "password"} aria-invalid={invalid || undefined} />
      <button type="button" className="auth-password-toggle" onClick={() => setVisible((value) => !value)} aria-label={visible ? "Hide password" : "Show password"}>
        {visible ? <Eye size={18} /> : <EyeOff size={18} />}
      </button>
    </div>
  );
}
