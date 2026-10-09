import "./HeroBanner.css";
import type { HeroBannerProps } from "../../types/components";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

function HeroBanner({
    title,
    subtitle,
    offer,
    image,
    background,
    color,
    circlebackground,
    circleborder,
    activeIndex,
    totalBanners,
    onSelect,
    onNext,
    onPrevious,
}: HeroBannerProps) {
    return (
      <article className="hero-banner">
        <div
          className="hero-text"
          style={{
            color: color,
          }}
        >
          <h3 className="subtitle">{subtitle}</h3>
          <h2 className="title">{title}</h2>
          <h3 className="offer">{offer}</h3>
        </div>

        <button
          type="button"
          className="hero-circle-left"
          aria-label="Previous slide"
          onClick={onPrevious}
        >
          <img src={leftArrow} alt="" />
        </button>
        <button
          type="button"
          className="hero-circle-right"
          aria-label="Next slide"
          onClick={onNext}
        >
          <img src={rightArrow} alt="" />
        </button>
        <div className="hero-img">
          <img src={image} alt="" />
        </div>
        <div className="hero-pagination">
            {Array.from({length: totalBanners}, (_, index) =>(
                <button
                    key={index}
                    type="button"
                    className={`hero-dot ${
                        activeIndex === index ? "active" : ""
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    onClick={() => onSelect(index)}
                    />
                    
            ))}
        </div>

        <div
          className="hero-background"
          style={{
            backgroundColor: background,
          }}
        >
          <div
            className="circle-large-outer"
            style={{
              borderColor: circleborder,
            }}
          >
            <div
              className="circle-large-inner"
              style={{
                background: circlebackground,
              }}
            ></div>
          </div>
          <div
            className="circle-small-outer"
            style={{
              borderColor: circleborder,
            }}
          >
            <div
              className="circle-small-inner"
              style={{
                background: circlebackground,
              }}
            ></div>
          </div>
        </div>
      </article>
    );
}

export default HeroBanner;
