import type { CategoryNavProps } from "../../types/components";
import downarrow from "../../assets/icons/down-arrow.svg";
import "./CategoryNav.css";
import { Link } from "react-router-dom";

function CategoryNav({
  name,
  active = false,
  path,
}: CategoryNavProps) {
  return (
    <Link
      to={path}
    className={`nav-pill ${active ? "nav-pill-active" : ""}`}>
      <span>{name}</span>

      <img
        src={downarrow}
        className="nav-pill-arrow"
      />
    </Link>
  );
}

export default CategoryNav;
