import SectionHeader from "../components/common/SectionHeader";
import ProductCard from "../components/ecommerce/ProductCard";
import "./HomePage.css"
import { samsungs22, samsungm13, samsungm33, samsungm53, cosmetic, washingm, phone, furniture, watch, plant, access, iphone, apple, realme, phonereal, phonexiao, xiaomi, dailyess, vegetable, fruits, strawberry, mango, cherry } from "../assets/images";
import CategoryCard from "../components/ecommerce/CategoryCard";
import BrandBanner from "../components/ecommerce/BrandBanner";
import EssentialCard from "../components/ecommerce/EssentialCard";
import Footer from "../components/ecommerce/Footer";
import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import HeroBanner from "../components/ecommerce/HeroBanner";
import herowatch from "../assets/icons/watchehero.svg";
import Pagination from "../components/common/Pagination";

function HomePage() {
    return (
        <main>
            <section className="top-bar-section">
                <TopBar />

            </section>
            <section className="header-section">
                <Header />
            </section>

            <section className="navbar-section">
                <NavBar />
            </section>

            <section className="hero-section">
                <HeroBanner
                    title="SMART WEARABLE."
                    subtitle="Best deal online on smart watches"
                    offer="UP to 80% OFF"
                    image={herowatch}
                />
            </section>

            <section className="smartphone-section">
                <SectionHeader
                    title="Grab the best deal on"
                    highlightedText="Smartphones"
                />

                <div className="product-grid">
                    <ProductCard
                        name="Galaxy S22 Ultra"
                        image={samsungs22}
                        price="₹32999"
                        oldPrice="₹74999"
                        discount="56% OFF"
                        saveText="Save ₹32999"
                    />
                    <ProductCard
                        name="Galaxy M13(4GB | 64GB)"
                        image={samsungm13}
                        price="₹10499"
                        oldPrice="₹14999"
                        discount="56% OFF"
                        saveText="Save ₹4500"
                    />
                    <ProductCard
                        name="Galaxy M33(4GB | 64GB)"
                        image={samsungm33}
                        price="₹16999"
                        oldPrice="₹24999"
                        discount="56% OFF"
                        saveText="Save ₹8000"
                    />
                    <ProductCard
                        name="Galaxy M53(4GB | 64GB)"
                        image={samsungm53}
                        price="₹31999"
                        oldPrice="₹40999"
                        discount="56% OFF"
                        saveText="Save ₹9000"
                    />
                    <ProductCard
                        name="Galaxy S22 Ultra"
                        image={samsungs22}
                        price="₹67999"
                        oldPrice="₹85999"
                        discount="56% OFF"
                        saveText="Save ₹18000"
                    />
                </div>
            </section>
            <section className="category-section">
                <SectionHeader
                    title="Shop from"
                    highlightedText="Top Categories"
                />
                <div className="category-grid">
                    <CategoryCard
                        name="Mobile"
                        image={phone}
                    />
                    <CategoryCard
                        name="Cosmetics"
                        image={cosmetic}
                    />
                    <CategoryCard
                        name="Electronics"
                        image={washingm}
                    />
                    <CategoryCard
                        name="Furniture"
                        image={furniture}
                    />
                    <CategoryCard
                        name="Watches"
                        image={watch}
                    />
                    <CategoryCard
                        name="Decor"
                        image={plant}
                    />
                    <CategoryCard
                        name="Accessories"
                        image={access}
                    />
                </div>
            </section>
            <section className="brand-section">
                <SectionHeader
                    title="Top"
                    highlightedText="Electronic Brands"
                />
                <div className="brand-grid">
                    <BrandBanner
                        name="Iphone"
                        image={iphone}
                        logo={apple}
                        offer="UP to 80% OFF"
                        background="#313131"
                        textColor="white"
                        circleColor="#404040"
                        brandLabelColor="#494949"
                    />
                    <BrandBanner
                        name="Realme"
                        image={phonereal}
                        logo={realme}
                        offer="UP to 80% OFF"
                        background="#FFF3CC"
                        textColor="black"
                        circleColor="#F6DE8D"
                        brandLabelColor="#F6DE8D"
                    />
                    <BrandBanner
                        name="Xiaomi"
                        image={phonexiao}
                        logo={xiaomi}
                        offer="UP to 80% OFF"
                        background="#FFECDF"
                        textColor="black"
                        circleColor="#FFD1B0"
                        brandLabelColor="#FFD1B0"

                    />
                </div>
                    <div className="brand-pagination">
                        <Pagination variant="blue" />
                    </div>

            </section>
            <section className="essential-section">
                <SectionHeader
                    title="Daily"
                    highlightedText="Essentials"
                />
                <div className="essential-grid">
                    <EssentialCard
                        name="Daily Essentials"
                        offer="UP to 50% OFF"
                        image={dailyess}
                    />
                    <EssentialCard
                        name="Vegetables"
                        offer="UP to 50% OFF"
                        image={vegetable}
                    />
                    <EssentialCard
                        name="Fruits"
                        offer="UP to 50% OFF"
                        image={fruits}
                    />
                    <EssentialCard
                        name="Strawberry"
                        offer="UP to 50% OFF"
                        image={strawberry}
                    />
                    <EssentialCard
                        name="Mango"
                        offer="UP to 50% OFF"
                        image={mango}
                    />
                    <EssentialCard
                        name="Cherry"
                        offer="UP to 50% OFF"
                        image={cherry}
                    />
                </div>
            </section>
            <section className="footer">
                <Footer />
            </section>
        </main>

    )
}
export default HomePage