import { Tag, Truck, Package } from "lucide-react";
import watch from "../../assets/icons/watchehero.svg";

const promoFeatures = [
  {
    icon: Tag,
    title: "Great deals, every day",
    detail: "Discover offers on all your favourites.",
  },
  {
    icon: Truck,
    title: "Shopping made simple",
    detail: "Save your address for a faster checkout.",
  },
  {
    icon: Package,
    title: "Every order in one place",
    detail: "Track deliveries and easily shop again.",
  },
];

export default function AuthPromoPanel() {
  return (
    <aside className="auth-promo">
      <div className="auth-promo-top">
        <p className="auth-eyebrow">MORE WITH MEGAMART</p>
        <h2 className="auth-promo-title">
          Your everyday<br />favourites. One<br />account.
        </h2>
        <p className="auth-promo-description">
          From daily essentials to the latest tech, a better shopping experience starts here.
        </p>
      </div>

      <div className="auth-promo-middle">
        <div className="auth-promo-offer">
          <span className="auth-offer-line">Big brands.</span>
          <span className="auth-offer-line">Bigger savings.</span>
          <span className="auth-offer-badge">UP to 80% OFF</span>
        </div>
        <div className="auth-watch-wrap">
          <img className="auth-watch" src={watch} alt="Smartwatch" />
        </div>
      </div>

      <div className="auth-promo-bottom">
        <ul className="auth-features">
          {promoFeatures.map(({ icon: Icon, title, detail }) => (
            <li key={title} className="auth-feature-item">
              <div className="auth-feature-icon-wrap">
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <div className="auth-feature-text">
                <strong className="auth-feature-title">{title}</strong>
                <span className="auth-feature-desc">{detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
