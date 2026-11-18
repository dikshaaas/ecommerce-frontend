import type { ProductCardProps } from "../../types/components";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({
  productId = "samsung-galaxy-s22-ultra",
  name,
  image,
  price,
  oldPrice,
  discount,
  saveText,
  active = false,
}: ProductCardProps) {
  const hasDiscount = Boolean(discount);
  const hasSave = Boolean(saveText);
  return (
    <Link to={`/product-details/${productId}`} className={`product-card ${active ? "product-card-active" : ""}`}>
      <div className="product-image-wrapper">
        <img src={image} alt={image} className="product-image" />

        {hasDiscount && <span className="discount-badge">{discount}</span>}
      </div>
      <div className="product-info">
        <h3>{name}</h3>

        <div className="product-price">
          <strong>{price}</strong>

          {oldPrice && <span className="old-price">{oldPrice}</span>}
        </div>

        {hasSave &&<p className="save-text">{saveText}</p>}
      </div>
    </Link>
  );
}

export default ProductCard;
