import type { CategoryNavProps } from "../../types/components";
import downarrow from "../../assets/icons/down-arrow.svg";
import "./CategoryNav.css";

function CategoryNav({
  name,
  active = false,
}: CategoryNavProps) {
  return (
    <div className={`nav-pill ${active ? "nav-pill-active" : ""}`}>
      <span>{name}</span>

      <img
        src={downarrow}
        alt=""
        className="nav-pill-arrow"
      />
    </div>
  );
}

export default CategoryNav;
