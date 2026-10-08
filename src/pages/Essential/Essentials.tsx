import { cherry, dailyess, fruits, mango, strawberry, vegetable } from '../../assets/images'
import SectionHeader from '../../components/common/SectionHeader';
import EssentialCard from '../../components/ecommerce/EssentialCard';

const essentials = [
    {
        id:1,
        name:"Daily Essentials",
        offer:"UP to 50% OFF",
        image:dailyess,
        active:true,
    }, 
    {
        id:2,
        name:"Vegetables",
        offer:"UP to 50% OFF",
        image: vegetable,
    },
    {
        id: 3,
        name:"Fruits",
        offer:"UP to 50% OFF",
        image:fruits,
    },
    {
        id:4,
        name:"Strawberry",
        offer:"UP to 50% OFF",
        image:strawberry,
    },
    {
        id:5,
        name:"Mango",
        offer:"UP to 50% OFF",
        image:mango,
    },
    {
        id:6,
        name:"Cherry",
        offer:"UP to 50% OFF",
        image:cherry,
    },
]

const Essentials = () => {
  return (
    <section className="essential-section">
      <SectionHeader 
        title="Daily" 
        highlightedText="Essentials" 
      />
      <div className="essential-grid">
        {essentials?.map ((eachEssential, index)=> {
            return (
              <EssentialCard
                key={eachEssential.id}
                name={eachEssential.name}
                offer={eachEssential.offer}
                image={eachEssential.image}
                active={eachEssential?.active}
              />
            );
        })}
      </div>
    </section>
  );
};

export default Essentials