import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import "./Header.css";
import userIcon from "../../assets/icons/user.svg";
import cartIcon from "../../assets/icons/Buy.svg";
import SearchBar from "./SearchBar";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const {  isLoggedIn, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <img src={logo} alt="MegaMart" />
          <p>
            <strong>MegaMart</strong>
          </p>
        </div>

        <div className="search-box-wrapper">
          <SearchBar />
        </div>

        <div className="header-actions">
          {!isLoggedIn ? (
            <Link to="/login" className="header-login">
              <img src={userIcon} alt="" className="header-action-icon" />

              <div className="header-login-text">
                <span>Sign In/</span>
                <span>Sign Up</span>
              </div>
            </Link>
          ) : (
            <div className="header-user">

              <button type="button" className="header-logout" onClick={logout}>
                Logout
              </button>
            </div>
          )}

          <div className="header-divider" />

          <div className="header-cart">
            <img src={cartIcon} alt="" className="header-action-icon" />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
