import CategoryNav from "./CategoryNav";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <CategoryNav name="Groceries" />
        <CategoryNav name="Premium Fruits" />
        <CategoryNav name="Home & Kitchen" />
        <CategoryNav name="Fashion" />
        <CategoryNav name="Electronics" />
        <CategoryNav name="Beauty" />
        <CategoryNav name="Home Improvement" />
        <CategoryNav name="Sports, Toys & Luggage" />
      </div>
    </nav>
  );
}

export default NavBar;
