import { useState } from "react";
import { Check, Minus, Plus, ShoppingCart, Truck } from "lucide-react";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import TopBar from "../components/layout/TopBar";
import Footer from "../components/ecommerce/Footer";
import Breadcrumb from "./Breadcrumbs/Breadcrumb";
import ProductCard from "../components/ecommerce/ProductCard";
import { samsungs22, samsungm13, samsungm33, samsungm53 } from "../assets/images";
import "./ProductDetails.css";

const gallery = [samsungs22, samsungm13, samsungm33, samsungm53];
const recommendations = [
  { name: "Galaxy S22 Ultra", image: samsungs22, price: "₹32,999", oldPrice: "₹74,999", discount: "56% OFF", saveText: "Save ₹42,000" },
  { name: "Galaxy M13", image: samsungm13, price: "₹10,499", oldPrice: "₹14,999", discount: "30% OFF", saveText: "Save ₹4,500" },
  { name: "Galaxy M33", image: samsungm33, price: "₹16,999", oldPrice: "₹24,999", discount: "32% OFF", saveText: "Save ₹8,000" },
  { name: "Galaxy M53", image: samsungm53, price: "₹31,999", oldPrice: "₹40,999", discount: "22% OFF", saveText: "Save ₹9,000" },
  { name: "Galaxy S22 Ultra", image: samsungs22, price: "₹32,999", oldPrice: "₹74,999", discount: "56% OFF", saveText: "Save ₹42,000" },
];

const specifications = [
  ["Display", "6.8” Dynamic AMOLED 2X, 120Hz"], ["Rear camera", "108 MP + 12 MP + 10 MP + 10 MP"],
  ["Processor", "Snapdragon 8 Gen 1"], ["Battery", "5000 mAh · 45W fast charge"],
  ["RAM", "12 GB LPDDR5"], ["S Pen", "Built-in · 2ms latency"],
  ["Storage", "128 GB UFS 3.1"], ["OS", "Android 12 · One UI 4.1"],
];

function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [notice, setNotice] = useState("");
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Electronics", path: "/electronics" },
    { label: "Smartphones", path: "/electronics" },
    { label: "Galaxy S22 Ultra" },
  ];

  return (
    <main className="product-details-page">
      <TopBar />
      <Header />
      <NavBar />

      <div className="product-details-container">
        <Breadcrumb items={breadcrumbItems} />

        <section className="product-overview">
          <div className="product-gallery">
            <div className="product-main-image">
              <img src={gallery[selectedImage]} alt="Samsung Galaxy S22 Ultra" />
            </div>
            <div className="product-thumbnails" aria-label="Product images">
              {gallery.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  className={selectedImage === index ? "selected" : ""}
                  onClick={() => setSelectedImage(index)}
                  aria-label={`View product image ${index + 1}`}
                  aria-pressed={selectedImage === index}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="product-summary">
            <div className="seller-badges"><span>Samsung</span><span>Authorized Seller</span></div>
            <h1>Samsung Galaxy S22 Ultra 5G</h1>
            <p className="product-variant">Phantom Black · 128 GB · S Pen included</p>
            <div className="product-rating"><span>★★★★★</span><strong>4.5</strong><small>(128 ratings · 36 reviews)</small></div>
            <div className="product-detail-price">
              <strong>₹32,999</strong><del>₹74,999</del><span>56% OFF</span>
            </div>
            <p className="product-saving">You save ₹42,000 on this deal!</p>
            <p className="tax-note">Inclusive of all taxes</p>

            <div className="available-offers">
              <h2>Available offers</h2>
              <p><Check size={14} /> Bank offer: 10% off on HDFC Bank Credit Cards</p>
              <p><Check size={14} /> Exchange offer: Up to ₹8,000 off on exchange</p>
              <p><Check size={14} /> No-cost EMI: Starting ₹5,500/month on select cards</p>
            </div>

            <p className="delivery-note"><Truck size={15} /><strong>FREE delivery</strong> by 14 Dec 2026 to 423651</p>
            <div className="product-purchase-row">
              <div className="quantity-picker" aria-label="Quantity">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus size={14} /></button>
                <span>{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity"><Plus size={14} /></button>
              </div>
              <button type="button" className="add-to-cart" onClick={() => setNotice(`${quantity} item${quantity === 1 ? "" : "s"} added to your cart`)}><ShoppingCart size={16} /> Add to Cart</button>
              <button type="button" className="buy-now" onClick={() => setNotice("Ready for checkout")}>Buy Now</button>
            </div>
            {notice && <p className="purchase-notice" role="status">{notice}</p>}
            <p className="stock-note"><Check size={14} /> Sold by <strong>MegaMart Retail</strong> · In Stock</p>
          </div>
        </section>

        <section className="product-specifications">
          <h2>Product details</h2>
          <div className="specification-grid">
            {specifications.map(([label, value]) => <div className="specification-row" key={label}><strong>{label}</strong><span>{value}</span></div>)}
          </div>
          <h3>Key highlights</h3>
          <ul className="product-highlights">
            <li><Check size={14} /> Stunning 6.8” Dynamic AMOLED 2X display with Vision Booster</li>
            <li><Check size={14} /> Integrated S Pen with near-zero latency for notes and creativity</li>
            <li><Check size={14} /> Pro-grade 108 MP camera with 100x Space Zoom</li>
            <li><Check size={14} /> Long-lasting 5000 mAh battery with 45W super-fast charging</li>
          </ul>
        </section>

        <section className="reviews-section">
          <aside className="ratings-card">
            <h2>Customer ratings</h2><strong className="rating-score">4.5 / 5</strong><span className="rating-stars">★★★★★</span><small>128 ratings · 36 reviews</small>
            {[ ["5", 83], ["4", 28], ["3", 10], ["2", 4], ["1", 3] ].map(([star, count]) => (
              <div className="rating-bar-row" key={star}><span>{star} ★</span><div><i style={{ width: `${Number(count) / 128 * 100}%` }} /></div><small>{count}</small></div>
            ))}
            <a href="#reviews">See all 36 reviews</a>
          </aside>
          <div className="reviews-list" id="reviews">
            <h2>Top reviews</h2>
            {[
              ["Excellent display and camera", "Priya S. · 6 Oct 2026", "The display is bright and crisp, and photos look great even in low light. The S Pen is a useful bonus for quick notes.", "5 ★"],
              ["A great all-round phone", "Rohit M. · 3 Oct 2026", "Fast performance, a premium feel and plenty of storage for my apps and photos. The battery comfortably gets me through a normal day.", "4 ★"],
            ].map(([title, author, body, score]) => (
              <article className="review-card" key={title}><div className="review-heading"><div><h3>{title}</h3><p>{author} <span>Verified purchase</span></p></div><strong>{score}</strong></div><p>{body}</p><div className="review-actions"><button type="button">Helpful (24)</button><button type="button">Report</button></div></article>
            ))}
            <a className="all-reviews-link" href="#reviews">View all 36 reviews ›</a>
          </div>
        </section>

        <section className="recommendations-section">
          <div className="recommendations-heading"><h2>You may also like</h2><a href="/electronics">View all ›</a></div>
          <div className="recommendations-grid">
            {recommendations.map((product, index) => <ProductCard key={`${product.name}-${index}`} {...product} />)}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

export default ProductDetails;
