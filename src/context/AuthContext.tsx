import { createContext, useContext, useState, type ReactNode } from "react";

type AuthContextType = {
  email: string | null;
  isLoggedIn: boolean;
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);

  const login = (userEmail: string) => {
    setEmail(userEmail);
  };

  const logout = () => {
    setEmail(null);
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        isLoggedIn: email !== null,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
