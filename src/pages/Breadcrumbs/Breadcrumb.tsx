import { Link } from "react-router-dom";
import type { BreadcrumbProps } from "../../types/components";

import "./Breadcrumb.css";

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span className="breadcrumb-item" key={`${item.label}-${index}`}>
            {item.path && !isLast ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <span className={isLast ? "breadcrumb-current" : ""}>
                {item.label}
              </span>
            )}

            {!isLast && <span className="breadcrumb-separator">/</span>}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
