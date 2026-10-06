import "./TopBar.css"
import locationIcon from "/Internship-works/first task/ecommerce-frontend/src/assets/icons/location.svg";
import deliveryIcon from "/Internship-works/first task/ecommerce-frontend/src/assets/icons/truck.svg";
import offerIcon from "/Internship-works/first task/ecommerce-frontend/src/assets/icons/Discount.svg";
function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <p>Welcome to worldwide Megamart!</p>
        </div>

        <div className="top-bar-right">
          <div className="top-bar-item">
            <img 
                src={locationIcon} 
                alt="" 
                className="top-bar-icon"
            />
            <span>
              Deliver to <strong>423651</strong>
            </span>
          </div>

          <div className="top-bar-item">
            <img 
                src={deliveryIcon} 
                alt="" 
                className="top-bar-icon"    
            />
            <span>Track your order</span>
          </div>

          <div className="top-bar-item">
            <img 
                src={offerIcon}
                alt="" 
                className="top-bar-icon"   
            />
            <span>All Offers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
