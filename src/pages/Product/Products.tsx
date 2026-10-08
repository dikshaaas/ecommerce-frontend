import SectionHeader from "../../components/common/SectionHeader";
import { samsungs22, samsungm13, samsungm53, samsungm33,  } from "../../assets/images";
import ProductCard from "../../components/ecommerce/ProductCard";
const products = [
  {
    id: 1,
    name: "Galaxy S22 Ultra",
    image: samsungs22,
    price: "₹32999",
    oldPrice: "₹74999",
    discount: "56% OFF",
    saveText: "Save ₹32999",
  },
  {
    id: 2,
    name: "Galaxy S23 Ultra",
    image: samsungm13,
    price: "₹32999",
    oldPrice: "₹74999",
    discount: "56% OFF",
    saveText: "Save ₹32999",
  },
  {
    id: 3,
    name: "Galaxy S24 Ultra",
    image: samsungm53,
    price: "₹32999",
  },
  {
    id: 4,
    name: "Galaxy S25 Ultra",
    image: samsungm33,
    price: "₹32999",
  },
  {
    id: 5,
    name: "Galaxy S26 Ultra",
    image: samsungs22,
    price: "₹32999",
    oldPrice: "₹74999",
    discount: "56% OFF",
    saveText: "Save ₹32999",
  },
];

const Products = () => {
  return (
    <section className="smartphone-section">
      <SectionHeader
        title="Grab the best deal on"
        highlightedText="Smartphones"
      />

      <div className="product-grid">
        {products?.map((eachProduct, index) => {
          return (
            <div key={eachProduct.id}>
              <ProductCard
                key={eachProduct?.id}
                name={eachProduct?.name}
                image={eachProduct?.image}
                price={eachProduct?.price}
                oldPrice={eachProduct?.oldPrice}
                discount={eachProduct?.discount}
                saveText={eachProduct?.saveText}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
