import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import { AuthProvider } from "./context/AuthContext";
import Smartphones from "./pages/Smartphones";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/electronics" element={<Smartphones />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
