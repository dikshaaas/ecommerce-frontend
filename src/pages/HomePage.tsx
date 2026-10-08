import herowatch from "../assets/icons/watchehero.svg";
import Pagination from "../components/common/Pagination";
import Footer from "../components/ecommerce/Footer";
import HeroBanner from "../components/ecommerce/HeroBanner";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import TopBar from "../components/layout/TopBar";
import "./HomePage.css";
import Products from "./Product/Products";
import Categories from "./Category/Categories";
import Banners from "./Banner/Banners";
import Essentials from "./Essential/Essentials";

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
          subtitle="Best Deal Online on smart watches"
          offer="UP to 80% OFF"
          image={herowatch}
        />
      </section>

      <section>
        <Products />
      </section>

      <section>
        <Categories />
      </section>

      <section>
          <Banners />
        <div className="brand-pagination">
          <Pagination variant="blue" />
        </div>
      </section>

      <section>
        <Essentials />
      </section>

      <section className="footer">
        <Footer />
      </section>
    </main>
  );
}
export default HomePage;
