import "./HelpCard.css";
import phone from "../../assets/icons/phone.png";
import camera from "../../assets/icons/camera.png";
import charge from "../../assets/icons/charge.png";

type HelpCardProps = {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  productName?: string;
};

function HelpCard({
  title = "Need help choosing?",
  description = "Compare display, storage and battery life to find a smartphone that fits your day.",
  ctaText = "Explore Galaxy S22 Ultra",
  ctaLink = "#",
}: HelpCardProps) {
  return (
    <div className="help-card">
      <h3 className="help-card-title">{title}</h3>

      <p className="help-card-description">{description}</p>

      <div className="help-card-icons">
        <div className="help-icon">
          <img src={charge} alt="charge-icon" />
          <img src={camera} alt="camera-icon" />
          <img src={phone} alt="phone icon" />
        </div>
      </div>

      <a href={ctaLink} className="help-card-cta">
        {ctaText}
      </a>

      <p className="help-card-benefits">
        Free delivery · Secure payments · Brand warranty
      </p>
    </div>
  );
}

export default HelpCard;
