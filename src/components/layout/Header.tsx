import logo from "/Internship-works/first task/ecommerce-frontend/src/assets/icons/logo.svg";
import "./Header.css";
import userIcon from "/Internship-works/first task/ecommerce-frontend/src/assets/icons/user.svg";
import cartIcon from "/Internship-works/first task/ecommerce-frontend/src/assets/icons/Buy.svg";
import SearchBar from "./SearchBar";
function Header() {
  return (
    <header className="header">
      <div className="header-inner">
            <div className="header-logo">
                <img src={logo} alt="MegaMart" />
                <p><strong>MegaMart</strong></p>
            </div>
        <div className="search-box">
            <SearchBar/>
        </div>

        <div className="header-actions">
          <div className="header-login">
            <img 
                src={userIcon} 
                alt="" 
                className="header-action-icon"    
            />
            <div className="header-login-text">
                <span>Sign In/</span>
                <span>Sign Up</span>
            </div>
        </div>

          <div className="header-divider" />

          <div className="header-cart">
            <img 
                src={cartIcon} 
                alt="" 
                className="header-action-icon"    
            />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
