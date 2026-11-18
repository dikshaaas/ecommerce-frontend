import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronDown, ChevronRight, Search, ShoppingBag, Smartphone } from "lucide-react";
import Footer from "../components/ecommerce/Footer";
import ProductCard from "../components/ecommerce/ProductCard";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import TopBar from "../components/layout/TopBar";
import type { StoreProduct } from "../data/products";
import { searchProducts } from "../services/products";
import "./SearchResults.css";

type SearchFilter = "all" | "smartphones" | "inStock";

function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get("q")?.trim() ?? "";
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const [filterSelection, setFilterSelection] = useState<{ query: string; filter: SearchFilter }>({ query: "", filter: "all" });
  const [sort, setSort] = useState("Relevance");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    let current = true;
    setLoading(true);
    setError("");

    searchProducts(query, controller.signal)
      .then((results) => {
        if (current) setProducts(results);
      })
      .catch((searchError: unknown) => {
        if (current && !(searchError instanceof DOMException && searchError.name === "AbortError")) {
          setError("We couldn't load search results. Please try again.");
        }
      })
      .finally(() => {
        if (current) setLoading(false);
      });

    return () => {
      current = false;
      controller.abort();
    };
  }, [query]);

  const filter = filterSelection.query === query ? filterSelection.filter : "all";
  const setFilter = (nextFilter: SearchFilter) => setFilterSelection({ query, filter: nextFilter });

  const sortedProducts = useMemo(() => {
    if (sort !== "Price: Low to high") return products;
    return [...products].sort((a, b) => Number(a.price.replace(/[^0-9]/g, "")) - Number(b.price.replace(/[^0-9]/g, "")));
  }, [products, sort]);
  const hasSamsungResults = !loading && products.some((product) => product.brand.toLowerCase() === "samsung");
  const visibleProducts = sortedProducts.filter((product) => {
    if (filter === "inStock") return product.inStock !== false;
    if (filter === "smartphones") return (product.category ?? (product.brand.toLowerCase() === "samsung" ? "smartphones" : "")).toLowerCase().includes("smartphone");
    return true;
  });

  return (
    <main className="search-results-page">
      <section className="top-bar-section"><TopBar /></section>
      <section className="header-section"><Header /></section>
      <section className="navbar-section"><NavBar /></section>
      <div className="search-results-content">
        <div className="search-breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Search results</span></div>
        <section className="search-intro">
          <h1>Search results for “{query || "all products"}”</h1>
          <p>{products.length} products found. Discover {query ? `${query} products` : "products"} at everyday great prices.</p>
        </section>
        <div className="search-toolbar">
          <div className="search-filters" role="group" aria-label="Filter search results">
            <button type="button" className={filter === "all" ? "selected" : ""} onClick={() => setFilter("all")}>All results ({products.length})</button>
            {hasSamsungResults && <button type="button" className={filter === "smartphones" ? "selected" : ""} onClick={() => setFilter("smartphones")}>Smartphones ({products.filter((product) => product.category?.toLowerCase().includes("smartphone") || product.brand.toLowerCase() === "samsung").length})</button>}
            <button type="button" className={filter === "inStock" ? "selected" : ""} onClick={() => setFilter("inStock")}>In stock ({products.filter((product) => product.inStock !== false).length})</button>
          </div>
          <label className="search-sort">Sort by:
            <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort results">
              <option>Relevance</option>
              <option>Price: Low to high</option>
            </select>
            <ChevronDown size={14} />
          </label>
        </div>
        {loading ? <div className="search-empty"><p>Loading products…</p></div> : error ? <div className="search-empty"><p>{error}</p></div> : visibleProducts.length ? (
          <div className="product-grid search-results-product-grid">
            {visibleProducts.map((product, index) => <div key={`${product.id}-${index}`}>
              <ProductCard productId={product.id} name={product.name} image={product.image} price={product.price} oldPrice={product.oldPrice} discount={product.discount} saveText={product.saveText} />
            </div>)}
          </div>
        ) : <div className="search-empty"><Search size={24} /><h2>No products found for “{query}”</h2><p>Try another search, or browse the store for more to explore.</p><Link to="/">Browse MegaMart</Link></div>}
        <div className="search-pagination"><span>Showing {visibleProducts.length ? 1 : 0}–{visibleProducts.length} of {products.length} results</span><button type="button" aria-current="page">1</button></div>
        <section className="search-discovery">
          {hasSamsungResults ? <>
            <div className="search-shop-card"><Smartphone size={22} /><div><h2>Shop Samsung smartphones</h2><p>Galaxy S22 Ultra, Galaxy M13, M33 and M53.</p><Link to="/electronics">Explore smartphones</Link></div></div>
            <div className="search-suggestions"><h2>Searches you might like</h2><div><Link to="/search?q=Galaxy%20S22%20Ultra">Galaxy S22 Ultra</Link><Link to="/search?q=Samsung%20Galaxy%20M13">Samsung Galaxy M13</Link></div><p>Try a model name or filter by storage and price.</p></div>
          </> : <>
            <div className="search-shop-card"><ShoppingBag size={22} /><div><h2>Explore MegaMart</h2><p>Find groceries, fresh fruits, home essentials, electronics and more.</p><Link to="/">Browse the store</Link></div></div>
            <div className="search-suggestions"><h2>Browse popular departments</h2><div><Link to="/">Groceries</Link><Link to="/">Premium fruits</Link><Link to="/electronics">Electronics</Link></div><p>Or try a different product name in the search box.</p></div>
          </>}
        </section>
        <section className="search-help"><Search size={21} /><div><h2>Looking for something else?</h2><p>Search essentials, groceries and more, or browse all categories.</p></div><Link to="/">All categories <ChevronRight size={14} /></Link></section>
      </div>
      <Footer />
    </main>
  );
}

export default SearchResults;
