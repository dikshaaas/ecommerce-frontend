import { access, cosmetic, furniture, phone, plant, washingm, watch } from '../../assets/images';
import SectionHeader from '../../components/common/SectionHeader';
import CategoryCard from '../../components/ecommerce/CategoryCard';

const categories = [
  {
    id: 1,
    name: "Mobile",
    image: phone,
  },
  {
    id: 2,
    name: "Cosmetics",
    image: cosmetic,
  },
  {
    id: 3,
    name: "Electronics",
    image: washingm,
  },
  {
    id: 4,
    name: "Furniture",
    image: furniture,
  },
  {
    id: 5,
    name: "Watches",
    image: watch,
  },
  {
    id: 6,
    name: "Decor",
    image: plant,
  },
  {
    id: 7,
    name: "Accessories",
    image: access,
  },
];

const Categories = () => {
  return (
    <section className="category-section">
        <SectionHeader 
          title="Shop from" 
          highlightedText="Top Categories" 
        />
        <div className="category-grid">
          {categories?.map((eachCategory, index) => {
            return(
                <CategoryCard
                  key={eachCategory.id}
                  name={eachCategory.name}
                  image={eachCategory.image}
                />
            );
          })}
        </div>
      </section>
    
  );
};

export default Categories;
