import type { CategoryNavProps } from "../../types/components";
import downarrow from "../../assets/icons/down-arrow.svg";
import "./CategoryNav.css";
import { Link } from "react-router-dom";

function CategoryNav({
  name,
  active = false,
  path,
  dropdown,
}: CategoryNavProps) {
  return (
    <div className={`category-nav-item${name === "Groceries" ? " category-nav-item-groceries" : ""}`}>
      <Link to={path} className={`nav-pill ${active ? "nav-pill-active" : ""}`}>
        <span>{name}</span>

        <img src={downarrow} className="nav-pill-arrow" alt="" />
      </Link>

      {dropdown && <div className="category-dropdown">{dropdown}</div>}
    </div>
  );
}

export default CategoryNav;
