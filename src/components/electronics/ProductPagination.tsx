import "./ProductPagination.css";

type ProductPaginationProps = {
    totalProducts?: number;
    currentPage?: number;
    totalPages?: number;
};

function ProductPagination({
    totalProducts = 5,
    currentPage = 1,
    totalPages: _totalPages = 1,
}: ProductPaginationProps) {
    return (
        <div className="product-pagination">
            <p className="pagination-info">
                You've viewed all {totalProducts} matching products.
            </p>
            <div className="pagination-controls">
                <span className="pagination-page active">{currentPage}</span>
            </div>
        </div>
    );
}

export default ProductPagination;
