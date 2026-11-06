import "./SortBar.css";

type SortBarProps = {
    totalProducts?: number;
    sortBy?: string;
};

function SortBar({
    totalProducts = 5,
    sortBy = "Recommended",
}: SortBarProps) {
    return (
        <div className="sort-bar">
            <span className="sort-bar-count">
                Showing {totalProducts} products
            </span>
            <div className="sort-bar-select">
                <span>Sort by:</span>
                <select defaultValue={sortBy} className="sort-dropdown">
                    <option value="Recommended">Recommended</option>
                    <option value="PriceLowHigh">Price: Low to High</option>
                    <option value="PriceHighLow">Price: High to Low</option>
                    <option value="Newest">Newest First</option>
                </select>
            </div>
        </div>
    );
}

export default SortBar;
