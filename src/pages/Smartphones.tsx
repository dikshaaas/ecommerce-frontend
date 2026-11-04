import Footer from "../components/ecommerce/Footer";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import TopBar from "../components/layout/TopBar";
function Smartphones(){
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

        <section className="footer">
          <Footer />
        </section>
      </main>
    );
}

export default Smartphones;