import type { EssentialProps } from "../../types/components";
import "./EssentialCard.css";

function EssentialCard({
  name,
  offer,
  image,
  active = false,
}: EssentialProps) {
  return (
    <article className={`essential-card ${active ? "essential-card-active" : ""}`}>
      <div className="essential-image-wrapper">
        <img
          src={image}
          alt={name}
          className="essential-image"
        />
      </div>

      <div className="textfield">
        <div className="essential-name">
          <p>{name}</p>
        </div>

        <div className="essential-offer">
          <p>{offer}</p>
        </div>
      </div>
    </article>
  );
}

export default EssentialCard;
