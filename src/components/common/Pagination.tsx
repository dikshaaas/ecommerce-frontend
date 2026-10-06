import "./Pagination.css";

interface PaginationProps {
  variant?: "white" | "blue";
  className?: string;
}

function Pagination({
  variant = "white",
  className = "",
}: PaginationProps) {
  return (
    <div className={`pagination-dots pagination-${variant} ${className}`}>
      <span className="pagination-active"></span>
      <span className="pagination-dot"></span>
      <span className="pagination-dot"></span>
      <span className="pagination-dot"></span>
      <span className="pagination-dot"></span>
      <span className="pagination-dot"></span>
      <span className="pagination-dot"></span>
    </div>
  );
}

export default Pagination;
