import "./ActiveFilters.css";

type Filter = {
    label: string;
    onRemove: () => void;
};

type ActiveFiltersProps = {
    filters: Filter[];
};

function ActiveFilters({ filters }: ActiveFiltersProps) {
    if (filters.length === 0) return null;

    return (
        <div className="active-filters">
            {filters.map((filter) => (
                <span className="filter-tag" key={filter.label}>
                    {filter.label}
                    <button
                        className="filter-tag-remove"
                        onClick={filter.onRemove}
                        aria-label={`Remove ${filter.label} filter`}
                    >
                        ×
                    </button>
                </span>
            ))}
        </div>
    );
}

export default ActiveFilters;
