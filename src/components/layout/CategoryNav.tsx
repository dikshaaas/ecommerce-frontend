import type { CategoryNavProps } from "../../types/components";
import downarrow from "../../assets/icons/down-arrow.svg";
import "./CategoryNav.css";

function CategoryNav({ 
    name, 
}: CategoryNavProps) {
  return (
    <div className="nav-pill">
      <span>{name}</span>

      <img
        src={downarrow}
        alt=""
      />
    </div>
  );
}

export default CategoryNav;
