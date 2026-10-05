import type { BrandBannerProps } from "../../types/components";
import "./BrandBanner.css";

function BrandBanner({
  name,
  image,
  logo,
  offer,
  background,
  textColor,
  circleColor,
  brandLabelColor,
}: BrandBannerProps) {
  return (
    <article className="brand-card">
      <div
        className="brand-background"
        style={{
          backgroundColor: background,
          color: textColor,
        }}
      >
        <div className="brand-name"
              style={{
                backgroundColor: brandLabelColor,
              }}
        
        >
          <p>{name}</p>
        </div>

        <img
          src={logo}
          alt={`${name} logo`}
          className="brand-logo"
        />

        <div className="brand-offer">
          <h3>{offer}</h3>
        </div>

        <div className="brand-image-wrapper">
          <img
            src={image}
            alt={name}
            className="brand-image"
          />
        </div>

        <div className="brand-circle"
              style={{
                borderColor: circleColor,
              }}
        >
          <div
            className="brand-circle-inner"
            style={{
              backgroundColor: circleColor,
            }}
      
      />

        </div>
      </div>
    </article>
  );
}

export default BrandBanner;
