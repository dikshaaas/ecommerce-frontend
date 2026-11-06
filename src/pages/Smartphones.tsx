import Footer from "../components/ecommerce/Footer";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import TopBar from "../components/layout/TopBar";
import Breadcrumb from "../pages/Breadcrumbs/Breadcrumb";
import FilterSidebar from "../components/electronics/FilterSidebar";
import ActiveFilters from "../components/electronics/ActiveFilters";
import SortBar from "../components/electronics/SortBar";
import HelpCard from "../components/electronics/HelpCard";
import ProductPagination from "../components/electronics/ProductPagination";
import ProductCard from "../components/ecommerce/ProductCard";
import { samsungs22, samsungm13, samsungm33, samsungm53 } from "../assets/images";
import "./Smartphones.css";

const smartphoneProducts = [
  {
    id: 1,
    name: "Galaxy S22 Ultra",
    image: samsungs22,
    price: "₹32999",
    oldPrice: "₹74999",
    discount: "56% OFF",
    saveText: "Save - ₹32999",
  },
  {
    id: 2,
    name: "Galaxy S22 Ultra",
    image: samsungm13,
    price: "₹32999",
    oldPrice: "₹74999",
    discount: "56% OFF",
    saveText: "Save - ₹32999",
  },
  {
    id: 3,
    name: "Galaxy S22 Ultra",
    image: samsungm33,
    price: "₹32999",
    oldPrice: "₹74999",
    discount: "56% OFF",
    saveText: "Save - ₹32999",
  },
  {
    id: 4,
    name: "Galaxy S22 Ultra",
    image: samsungm53,
    price: "₹32999",
    oldPrice: "₹74999",
    discount: "56% OFF",
    saveText: "Save - ₹32999",
  },
  {
    id: 5,
    name: "Galaxy S22 Ultra",
    image: samsungs22,
    price: "₹32999",
    oldPrice: "₹74999",
    discount: "56% OFF",
    saveText: "Save - ₹32999",
  },
];

function Smartphones() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Electronics", path: "/electronics" },
    { label: "Smartphones" },
  ];

  const activeFilters = [
    { label: "Samsung", onRemove: () => { } },
    { label: "₹10000 – ₹70000", onRemove: () => { } },
  ];

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

      <section className="smartphones-page-wrapper">
        <Breadcrumb items={breadcrumbItems} />

        <div className="smartphones-title-section">
          <h1>Smartphones</h1>
          <p>Find the right phone for you. Explore great deals from Samsung.</p>
        </div>

        <div className="smartphones-layout">
          {/* Left Sidebar */}
          <FilterSidebar />

          {/* Right Content */}
          <div className="smartphones-main">
            <SortBar totalProducts={smartphoneProducts.length} />
            <ActiveFilters filters={activeFilters} />

            <div className="smartphones-product-grid">
              {smartphoneProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  discount={product.discount}
                  saveText={product.saveText}
                />
              ))}

              {/* Help Card in last position */}
              <HelpCard />
            </div>

            <ProductPagination totalProducts={smartphoneProducts.length} />
          </div>
        </div>
      </section>

      <section className="footer">
        <Footer />
      </section>
    </main>
  );
}

export default Smartphones;
