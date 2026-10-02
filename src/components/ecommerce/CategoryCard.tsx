import type { CategoryCardProps } from "../../types/components";
import "./CategoryCard.css"
function CategoryCard({
    name,
    image,
}: CategoryCardProps){
    return(
        <article className="category-card">
            <div className="category-circle">
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