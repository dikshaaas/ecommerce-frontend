import { apple, iphone, phonereal, phonexiao, realme, xiaomi } from '../../assets/images'
import BrandBanner from '../../components/ecommerce/BrandBanner'
import SectionHeader from '../../components/common/SectionHeader';

const banners = [
    {
        id:1,
        name:"IPHONE",
        image:iphone,
        logo:apple,
        offer:"UP to 80% OFF",
        background:"#313131",
        textColor:"white",
        circleColor:"#404040",
        brandLabelColor:"#494949", 
    },
    {
        id:2,
        name:"REALME",
        image:phonereal,
        logo:realme,
        offer:"UP to 80% OFF",
        background:"#FFF3CC",
        textColor:"black",
        circleColor:"#F6DE8D",
        brandLabelColor:"#F6DE8D",
    },
    {
        id:3,
        name:"XIAOMI",
        image:phonexiao,
        logo:xiaomi,       
        offer:"UP to 80% OFF",
        background:"#FFECDF",
        textColor:"black",
        circleColor:"#FFD1B0",
        brandLabelColor:"#FFD1B0",
        
    },
]

const Banners = () => {
  return (
    <section className="brand-section">
        <SectionHeader 
            title="Top" 
            highlightedText="Electronic Brands" 
        />
        <div className="brand-grid">
            {banners?.map ((eachBanner, index) => {
                return(
                    <BrandBanner
                        key={eachBanner.id}
                        name={eachBanner.name}
                        image={eachBanner.image}
                        logo={eachBanner.logo}
                        offer={eachBanner.offer}
                        background={eachBanner.background}
                        textColor={eachBanner.textColor}
                        circleColor={eachBanner.circleColor}
                        brandLabelColor={eachBanner.brandLabelColor}
                    />
                );
            })}
        </div>
        </section>
    
  );
};

export default Banners;