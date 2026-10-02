import SectionHeader from "../components/common/SectionHeader";
import ProductCard from "../components/ecommerce/ProductCard";
import "./HomePage.css"
import { samsungs22, samsungm13, samsungm33, samsungm53, cosmetic, washingm, phone, furniture, watch, plant, access } from "../assets/images";
import CategoryCard from "../components/ecommerce/CategoryCard";


function HomePage(){
    return(
        <main>
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
        </main>
    )
}
export default HomePage