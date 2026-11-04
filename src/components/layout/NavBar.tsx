import CategoryNav from "./CategoryNav";
import "./NavBar.css";

const nav = [
  {
    id: 1,
    name: "Groceries",
    active: false,
    path: "/groceries",
  },
  {
    id: 2,
    name: "Premium Fruits",
    active: false,
    path: "/fruits",
  },
  {
    id: 3,
    name: "Home & Kitchen",
    active: false,
    path: "/homeandkitchen",
  },
  {
    id: 4,
    name: "Fashion",
    active: false,
    path: "/fashion",
  },
  {
    id: 5,
    name: "Electronics",
    active: false,
    path: "/electronics",
  },
  {
    id: 6,
    name: "Beauty",
    active: false,
    path: "/beauty",
  },
  {
    id: 7,
    name: "Home Improvement",
    active: false,
    path: "/homeimprovement",
  },
  {
    id: 8,
    name: "Sports, Toys & Luggage",
    active: false,
    path:"/sports",
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
              path={eachNav.path}
            />
          )
        }))}
      </div>
    </section>
  );
}

export default NavBar;
