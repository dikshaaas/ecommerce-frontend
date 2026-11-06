import { Link } from "react-router-dom";
import "./ElectronicsMenu.css";

export default function ElectronicsMenu() {
  return (
    <div className="mega-menu">
      <div className="menu-header">
        <h2>Explore Electronics</h2>

        <Link to="/electronics">Shop all electronics ›</Link>
      </div>

      <div className="menu-content">
        <div>
          <h3>Mobiles & accessories</h3>
          <Link to="/electronics">Smartphones ›</Link>
          <Link to="/electronics/feature-phones">Feature phones</Link>
          <Link to="/electronics/mobile-cases">Mobile cases</Link>
          <Link to="/electronics/chargers">Chargers & cables</Link>
          <Link to="/electronics/power-banks">Power banks</Link>
        </div>

        <div>
          <h3>Computers & tablets</h3>
          <Link to="/electronics/laptops">Laptops</Link>
          <Link to="/electronics/tablets">Tablets</Link>
          <Link to="/electronics/monitors">Monitors</Link>
          <Link to="/electronics/keyboards">Keyboards & mice</Link>
          <Link to="/electronics/storage">Storage devices</Link>
        </div>

        <div>
          <h3>TV, audio & appliances</h3>
          <Link to="/electronics/televisions">Televisions</Link>
          <Link to="/electronics/headphones">Headphones</Link>
          <Link to="/electronics/speakers">Speakers</Link>
          <Link to="/electronics/washing-machines">Washing machines</Link>
          <Link to="/electronics/appliances">Kitchen appliances</Link>
        </div>

        <div className="featured-product">
          <h3>Galaxy S22 Ultra</h3>
          <h2>₹32999</h2>
          <p>56% OFF</p>
          <Link to="/electronics" className="featured-button">
            Shop now
          </Link>
        </div>
      </div>

      <div className="popular-brands">
        <span>Popular brands</span>
        <div>Samsung　 Apple　 Realme　 Xiaomi</div>
      </div>
    </div>
  );
}
