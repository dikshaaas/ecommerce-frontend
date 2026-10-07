import "./Pagination.css";

interface PaginationProps {
  variant?: "white" | "blue";
}

function Pagination({ 
  variant = "white" 
}: PaginationProps) {
  return (
    <div className={`pagination-dots pagination-${variant}`}>
      <span className="pagination-active" />
      <span className="pagination-dot" />
      <span className="pagination-dot" />
      <span className="pagination-dot" />
      <span className="pagination-dot" />
      <span className="pagination-dot" />
      <span className="pagination-dot" />
    </div>
  );
}

export default Pagination;

