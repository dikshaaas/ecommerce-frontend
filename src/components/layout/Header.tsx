import { Link } from "react-router-dom";
import { useState } from "react";
import { Apple, Box, ChevronDown, ChevronRight, Flower2, Headphones, Heart, Home, Monitor, Shirt, ShoppingBasket, Sofa, Watch, X } from "lucide-react";
import logo from "../../assets/icons/logo.svg";
import "./Header.css";
import userIcon from "../../assets/icons/user.svg";
import cartIcon from "../../assets/icons/Buy.svg";
import SearchBar from "./SearchBar";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { email, isLoggedIn, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const username = email
    ?.split("@")[0]
    .split(/[._+-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  const closeMenu = () => setMenuOpen(false);
  const categories = [
    { label: "Groceries", icon: ShoppingBasket, to: "/groceries" },
    { label: "Premium Fruits", icon: Apple, to: "/fruits" },
    { label: "Home & Kitchen", icon: Home, to: "/homeandkitchen" },
    { label: "Fashion", icon: Shirt, to: "/fashion" },
    { label: "Electronics", icon: Monitor, to: "/electronics", children: ["Smartphones", "Laptops & tablets", "Televisions", "Home appliances", "Mobile accessories"] },
    { label: "Beauty", icon: Flower2, to: "/beauty" },
    { label: "Home Improvement", icon: Sofa, to: "/homeimprovement" },
    { label: "Sports, Toys & Luggage", icon: Watch, to: "/sports" },
  ];

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
          <SearchBar onMenuClick={() => setMenuOpen(true)} />
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
              <img src={userIcon} alt="" className="header-action-icon" />
              <span className="header-welcome">Hi, {username || "there"}</span>
              <ChevronDown size={16} aria-hidden="true" />
            </div>
          )}

          <div className="header-divider" />

          <div className="header-cart">
            <img src={cartIcon} alt="" className="header-action-icon" />
            <span>Cart</span>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="drawer-backdrop" onMouseDown={closeMenu}>
          <aside className="menu-drawer" aria-label="Main menu" onMouseDown={(event) => event.stopPropagation()}>
            <div className="drawer-welcome">
              <div className="drawer-welcome-heading"><img src={userIcon} alt="" /><strong>{isLoggedIn ? `Hi, ${username || "there"}!` : "Hello, welcome!"}</strong><button type="button" aria-label="Close menu" onClick={closeMenu}><X size={20} /></button></div>
              <p>Sign in for a more personal shopping experience.</p>
              {isLoggedIn ? <button className="drawer-auth-button" type="button" onClick={() => { logout(); closeMenu(); }}>Log out</button> : <Link to="/login" className="drawer-auth-button" onClick={closeMenu}>Sign Up / Sign In</Link>}
            </div>
            <div className="drawer-section-title"><strong>Shop by category</strong><Link to="/electronics" onClick={closeMenu}>View all</Link></div>
            <nav className="drawer-categories">
              {categories.map(({ label, icon: Icon, to, children }) => (
                <div className="drawer-category" key={label}>
                  <Link to={to} onClick={closeMenu}><Icon size={17} /><span>{label}</span><ChevronRight size={16} /></Link>
                  {children && <div className="drawer-subcategories">{children.map((child) => <Link key={child} to="/electronics" onClick={closeMenu}>{child}<ChevronRight size={13} /></Link>)}</div>}
                </div>
              ))}
            </nav>
            <div className="drawer-section-title drawer-account-title"><strong>Your MegaMart</strong></div>
            <nav className="drawer-account-links">
              <Link to={isLoggedIn ? "/login" : "/login"} onClick={closeMenu}><img src={userIcon} alt="" />My account</Link>
              <Link to="/login" onClick={closeMenu}><Box size={17} />My orders</Link>
              <Link to="/login" onClick={closeMenu}><Heart size={17} />My wishlist</Link>
              <Link to="/login" onClick={closeMenu}><Headphones size={17} />Help & support</Link>
            </nav>
            <div className="drawer-footer"><p>Deliver to 423651 · <a href="#location">Change location</a></p><p>Whats App / Call Us\n+1 202-918-2132</p></div>
          </aside>
        </div>
      )}
    </header>
  );
}

export default Header;
