import { useState } from "react";
import "./FilterSidebar.css";

type FilterSection = {
    title: string;
    type: "checkbox" | "range";
    options?: { label: string; count?: number }[];
    range?: { min: number; max: number };
};

const filterSections: FilterSection[] = [
    {
        title: "Brand",
        type: "checkbox",
        options: [
            { label: "Samsung", count: 5 },
            { label: "Apple", count: 0 },
            { label: "Xiaomi", count: 0 },
            { label: "Realme", count: 0 },
        ],
    },
    {
        title: "Customer rating",
        type: "checkbox",
        options: [
            { label: "4 ★ & above" },
            { label: "3 ★ & above" },
        ],
    },
    {
        title: "Storage",
        type: "checkbox",
        options: [
            { label: "64 GB" },
            { label: "128 GB" },
            { label: "256 GB" },
        ],
    },
    {
        title: "Availability",
        type: "checkbox",
        options: [{ label: "In stock only" }],
    },
];

type FilterSidebarProps = {
    priceRange?: { min: number; max: number };
    selectedBrands?: string[];
};

function FilterSidebar({
    priceRange = { min: 10000, max: 70000 },
    selectedBrands = ["Samsung"],
}: FilterSidebarProps) {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        Brand: true,
        "Customer rating": true,
        Storage: true,
        Availability: true,
    });

    const toggleSection = (title: string) => {
        setExpandedSections((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <aside className="filter-sidebar">
            <div className="filter-header">
                <h2>Filters</h2>
                <button className="clear-all-btn">Clear all</button>
            </div>

            
            <div className="filter-section">
                <div className="filter-section-header">
                    <h3>Price range</h3>
                </div>
                <p className="price-range-label">
                    ₹{priceRange.min.toLocaleString()} – ₹{priceRange.max.toLocaleString()}
                </p>
                <div className="price-slider">
                    <div className="slider-track">
                        <div className="slider-fill"></div>
                    </div>
                    <div className="slider-labels">
                        <span>₹{priceRange.min.toLocaleString()}</span>
                        <span>₹{priceRange.max.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            
            {filterSections.map((section) => (
                <div className="filter-section" key={section.title}>
                    <div
                        className="filter-section-header"
                        onClick={() => toggleSection(section.title)}
                    >
                        <h3>{section.title}</h3>
                        <button className="collapse-btn">
                            <span
                                className={
                                    expandedSections[section.title] ? "chevron-up" : "chevron-down"
                                }
                            >
                                ‹
                            </span>
                        </button>
                    </div>

                    {expandedSections[section.title] && section.options && (
                        <div className="filter-options">
                            {section.options.map((option) => (
                                <label className="filter-option" key={option.label}>
                                    <input
                                        type="checkbox"
                                        defaultChecked={selectedBrands.includes(option.label)}
                                    />
                                    <span className="checkbox-custom"></span>
                                    <span className="option-label">
                                        {option.label}
                                        {option.count !== undefined && ` (${option.count})`}
                                    </span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </aside>
    );
}

export default FilterSidebar;
