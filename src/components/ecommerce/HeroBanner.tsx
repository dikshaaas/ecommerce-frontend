import "./HeroBanner.css";
import type { HeroBannerProps } from "../../types/components";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";
import Pagination from "../common/Pagination";

function HeroBanner({
    title,
    subtitle,
    offer,
    image,
}: HeroBannerProps) {
    return (
        <article className="hero-banner">
            <div className="hero-text">
                <h3 className="subtitle">{subtitle}</h3>
                <h2 className="title">{title}</h2>
                <h3 className="offer">{offer}</h3>
            </div>

            <button
                type="button"
                className="hero-circle-left"
                aria-label="Previous slide"
            >
                <img src={leftArrow} alt="" />
            </button>
            <button
                type="button"
                className="hero-circle-right"
                aria-label="Next slide"
            >
                <img src={rightArrow} alt="" />
            </button>
            <div className="hero-img">
                <img src={image} alt="" />
            </div>
            <div className="hero-pagination">
                <Pagination variant="white" />
            </div>

            <div className="hero-background">
                <div className="circle-large-outer">
                    <div className="circle-large-inner"></div>
                </div>
                <div className="circle-small-outer">
                    <div className="circle-small-inner"></div>
                </div>
            </div>
        </article>
    );
}

export default HeroBanner;
