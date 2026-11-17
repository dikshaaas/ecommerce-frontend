import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { dailyess } from "../../assets/images";
import "./GroceriesMenu.css";

const groceryGroups = [
  {
    title: "Everyday essentials",
    links: ["Staples", "Beverages", "Snacks & Foods", "Dairy & Bakery", "Personal Care", "Home Care", "Baby Care"],
  },
  {
    title: "Fresh for you",
    links: ["Vegetables & Fruits", "Premium Fruits", "Strawberry", "Mango", "Cherry"],
  },
];

export default function GroceriesMenu() {
  return (
    <div className="groceries-menu">
      <div className="groceries-menu-header">
        <h2>Shop Groceries</h2>
        <Link to="/groceries">View all ›</Link>
      </div>

      <div className="groceries-menu-content">
        {groceryGroups.map((group) => (
          <div className="groceries-menu-group" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((label) => (
              <Link to="/groceries" key={label}>{label}</Link>
            ))}
            {group.title === "Fresh for you" && (
              <p className="groceries-delivery"><MapPin size={14} /> Deliver to 423651</p>
            )}
          </div>
        ))}

        <div className="groceries-feature">
          <img src={dailyess} alt="Basket of grocery essentials" />
          <h3>Daily Essentials</h3>
          <p>UP to 50% OFF</p>
          <Link to="/groceries" className="groceries-shop-button">Shop now</Link>
        </div>
      </div>
    </div>
  );
}
