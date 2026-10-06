import "./Pagination.css";

export interface PaginationProps {
  total?: number;
  activeIndex?: number;
  variant?: "white" | "blue";
  className?: string;
  onPageChange?: (index: number) => void;
}

function Pagination({
  total = 7,
  activeIndex = 0,
  variant = "white",
  className = "",
  onPageChange,
}: PaginationProps) {
  return (
    <div className={`pagination-dots pagination-${variant} ${className}`}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => onPageChange?.(index)}
          className={index === activeIndex ? "pagination-active" : "pagination-dot"}
        />
      ))}
    </div>
  );
}

export default Pagination;
