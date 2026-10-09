import { useState } from 'react'
import herowatch from "../../assets/icons/watchehero.svg"
import { samsungs22, plant } from '../../assets/images'
import HeroBanner from '../../components/ecommerce/HeroBanner'
const banner = [
  {
    id: 1,
    title: "SMART WEARABLE.",
    subtitle: "Best Deal Online on smart watches",
    image: herowatch,
    offer: "UP to 80% OFF",
    background: "#212844",
    color: "#ffffff",
    circleborder: "#2C3454",
    circlebackground: "#2C3454",
  },
  {
    id: 2,
    title: "SMART PHONES.",
    subtitle: "Grab your best Deals on smart phones",
    image: samsungs22,
    offer: "UP to 56% OFF",
    background: "#21443C",
    color: "#ffffff",
    circleborder: "#3C6B60",
    circlebackground: "#3c6b60",
  },
  {
    id: 3,
    title: "DECOR ESSENTIALS.",
    subtitle: "Give Your Space Stylish Upgrade",
    image: plant,
    offer: "UP to 35% OFF",
    background: "#3e280e",
    color: "#ffffff",
    circleborder: "#6C5528",
    circlebackground: "#6C5528",
  },
];

const Herobanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeBanner = banner[activeIndex];

    const handleNext = () =>{
        setActiveIndex((current) => (current +1 )% banner.length);
    };

    const handlePrevious =() =>{
        setActiveIndex((current) => (current -1 + banner.length)% banner.length);
    };
    return (

     <section className="hero-section">
           
                <HeroBanner
                    key={activeBanner.id}
                    title={activeBanner.title}
                    subtitle={activeBanner.subtitle}
                    offer={activeBanner.offer}
                    image={activeBanner.image}
                    background={activeBanner.background}
                    color={activeBanner.color}
                    circleborder={activeBanner.circleborder}
                    circlebackground={activeBanner.circlebackground}
                    activeIndex={activeIndex}
                    totalBanners={banner.length}
                    onSelect={setActiveIndex}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                />
            
      </section>
  );
};

export default Herobanner;
