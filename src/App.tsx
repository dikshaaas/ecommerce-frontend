import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import { AuthProvider } from "./context/AuthContext";
import Smartphones from "./pages/Smartphones";
import ForgotPassword from "./pages/Login/ForgotPassword";
import VerifyEmail from "./pages/Login/VerifyEmail";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/electronics" element={<Smartphones />} />
           <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
           <Route path="/verify-email" element={<VerifyEmail/>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
