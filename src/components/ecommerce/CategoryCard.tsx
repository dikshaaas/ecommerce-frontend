import type { CategoryCardProps } from "../../types/components";
import "./CategoryCard.css"
function CategoryCard({
    name,
    image,
    active = false,
}: CategoryCardProps) {
    return (
        <article className={`category-card ${active ? "category-card-active" : ""}`}>
            <div className={`category-circle ${active ? "category-circle-active" : ""}`}>
                <img
                    src={image}
                    alt={name}
                    className="category-image"
                />
            </div>
            <div className="category-info">
                <h3>{name}</h3>
            </div>
        </article>
    )
}
export default CategoryCard;