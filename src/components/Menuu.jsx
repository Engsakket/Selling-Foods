import { use, useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

function Menuu() {
  const foods = [
    {
      name: "Margherita Pizza",
      category: "Pizza",
      price: 8.99,
      img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
      des: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
    },
    {
      name: "Cheese Burger",
      category: "Burgers",
      price: 6.99,
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      des: "Juicy beef burger with cheese, lettuce, and fresh tomatoes.",
    },
    {
      name: "Fresh Garden Salad",
      category: "Healthy",
      price: 5.49,
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      des: "Fresh vegetables with a delicious and refreshing dressing.",
    },
    {
      name: "Creamy Pasta",
      category: "Pasta",
      price: 9.49,
      img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
      des: "Creamy pasta prepared with herbs and rich sauce.",
    },
    {
      name: "Fresh Sushi",
      category: "Sushi",
      price: 10.99,
      img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
      des: "Fresh sushi rolls with rice and delicious seafood.",
    },
    {
      name: "Crispy Fried Chicken",
      category: "Chicken",
      price: 7.49,
      img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
      des: "Golden crispy chicken with juicy and tender meat.",
    },
    {
      name: "Strawberry Dessert",
      category: "Desserts",
      price: 4.99,
      img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
      des: "A sweet treat with delightful flavors for dessert lovers.",
    },
    {
      name: "Fresh Fruit Juice",
      category: "Drinks",
      price: 2.99,
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=800&q=80",
      des: "A refreshing fruity drink made for a perfect day.",
    },
  ];
  const [active, setActive] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const filters = [
    "All",
    "Pizza",
    "Burgers",
    "Healthy",
    "Pasta",
    "Sushi",
    "Chicken",
    "Desserts",
    "Drinks",
  ];
  const filteredFood = foods.filter((food) => {
    const matchCategory =
      activeCategory === "All" || food.category === activeCategory;
    const matchSearch = food.name
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
    return matchCategory && matchSearch;
  });
  const addCart = (food) => {
    setCart((previous) => [...previousCart, food]);
  };
  return (
    <>
      <div>
        <div>
          <p className="mb-2 font-semibold tracking-wide text-xl text-orange-500">
            Delicious food testing
          </p>
          <h2 className="text-4xl text-orange-950 font-bold md:text-5xl">
            Our Mennu
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-stone-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
            corporis?
          </p>
        </div>

        {/* search and cart  */}

        <div>
            <div>
                <FiSearch className=" shrink-0 text-xl text-orange-500"/>
                <input type="text" value={search} placeholder="Find your favorite meals" className="text-2xl bg-transparent text-stone-700 outline-none" onChange={(e)=>setSearch(e.target.value)}/>
            </div>
        </div>
      </div>
    </>
  );
}
export default Menuu;
