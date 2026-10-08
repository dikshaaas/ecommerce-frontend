import CategoryNav from "./CategoryNav";
import "./NavBar.css";

const nav = [
  {
    id: 1,
    name: "Groceries",
    active: true,
  },
  {
    id: 2,
    name: "Premium Fruits",
    active: false,
  },
  {
    id: 3,
    name: "Home & Kitchen",
    active: false,
  },
  {
    id: 4,
    name: "Fashion",
    active: false,
  },
  {
    id: 5,
    name: "Electronics",
    active: false,
  },
  {
    id: 6,
    name: "Beauty",
    active: false,
  },
  {
    id: 7,
    name: "Home Improvement",
    active: false,
  },
  {
    id: 8,
    name: "Sports, Toys & Luggage",
    active: false,
  },
];

function NavBar() {
  return (
    <section className="navbar">
      <div className="navbar-inner">
        {nav?.map ((eachNav => {
          return(
            <CategoryNav
              key={eachNav.id}
              name={eachNav.name}
              active={eachNav.active}
            />
          )
        }))}
      </div>
    </section>
  );
}

export default NavBar;
