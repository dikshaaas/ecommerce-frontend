import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import TopBar from "../components/layout/TopBar";
import Breadcrumb from "./Breadcrumbs/Breadcrumb";

function ProductDetails() {

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Electronics", path: "/electronics" },
    { label: "Smartphones" },
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

      <section className="products-page-wrapper">
        <Breadcrumb items={breadcrumbItems} />

        </section>
    </main>
    )
}

export default ProductDetails;