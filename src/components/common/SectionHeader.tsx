import "../common/SectionHeader.css";

type SectionHeaderProps = {
  title: string;
  highlightedText: string;
};

function SectionHeader({
  title,
  highlightedText,
}: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div className="section-header-top">
        <h2>
          {title} <span>{highlightedText}</span>
        </h2>

        <a href="#" className="view-all">
            View All
            <span className="view-all-chevron">›</span>
        </a>

      </div>

      <div className="section-header-line">
        <div className="blue-line"></div>
      </div>
    </div>
  );
}

export default SectionHeader;
