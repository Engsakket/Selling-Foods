
import { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const foods = [
  // Pizza
  { name: "Margherita Pizza", category: "Pizza", price: 8.99, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80", des: "Classic pizza with fresh tomatoes, mozzarella, and basil." },
  { name: "Pepperoni Pizza", category: "Pizza", price: 9.99, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80", des: "Crispy pizza topped with spicy pepperoni and melted cheese." },
  { name: "BBQ Chicken Pizza", category: "Pizza", price: 10.99, img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80", des: "Smoky barbecue chicken with onions and melted mozzarella." },
  { name: "Hawaiian Pizza", category: "Pizza", price: 9.49, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80", des: "Sweet pineapple and savory ham on a cheesy pizza crust." },
  { name: "Four Cheese Pizza", category: "Pizza", price: 10.49, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80", des: "A rich blend of four cheeses melted over a golden crust." },
  { name: "Vegetarian Pizza", category: "Pizza", price: 8.49, img: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80", des: "Fresh bell peppers, mushrooms, olives, and colorful vegetables." },
  { name: "Seafood Pizza", category: "Pizza", price: 11.99, img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80", des: "Delicious seafood with herbs, tomato sauce, and mozzarella." },
  { name: "Mushroom Pizza", category: "Pizza", price: 9.49, img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80&sat=-30", des: "Savory mushrooms with creamy cheese and aromatic herbs." },

  // Burgers
  { name: "Cheese Burger", category: "Burgers", price: 6.99, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80", des: "Juicy beef burger with cheese, lettuce, and fresh tomatoes." },
  { name: "Classic Beef Burger", category: "Burgers", price: 5.99, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80", des: "A classic grilled beef patty with fresh lettuce and special sauce." },
  { name: "Double Cheese Burger", category: "Burgers", price: 8.99, img: "https://tse3.mm.bing.net/th/id/OIP.ipyiIuN7ZuyLEbiQqrfPYgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", des: "Two juicy beef patties layered with melted cheddar cheese." },
  { name: "Crispy Chicken Burger", category: "Burgers", price: 6.49, img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80", des: "Crispy fried chicken with lettuce and creamy mayonnaise." },
  { name: "BBQ Burger", category: "Burgers", price: 7.49, img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80", des: "Grilled beef topped with smoky barbecue sauce and onions." },
  { name: "Mushroom Swiss Burger", category: "Burgers", price: 8.49, img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80", des: "A juicy burger with sautéed mushrooms and Swiss cheese." },
  { name: "Fish Burger", category: "Burgers", price: 6.99, img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80", des: "A crispy fish fillet with fresh lettuce and tangy tartar sauce." },
  { name: "Veggie Burger", category: "Burgers", price: 5.99, img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80&sat=-20", des: "A tasty plant-based patty with lettuce, tomato, and avocado." },

  // Healthy
  { name: "Fresh Garden Salad", category: "Healthy", price: 5.49, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80", des: "Fresh vegetables with a delicious and refreshing dressing." },
  { name: "Chicken Avocado Salad", category: "Healthy", price: 7.99, img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80", des: "Grilled chicken, creamy avocado, greens, and cherry tomatoes." },
  { name: "Greek Salad", category: "Healthy", price: 6.49, img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80", des: "Crisp cucumbers, tomatoes, olives, and feta cheese." },
  { name: "Quinoa Salad", category: "Healthy", price: 6.99, img: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=800&q=80", des: "Nutritious quinoa tossed with fresh vegetables and herbs." },
  { name: "Fruit Salad", category: "Healthy", price: 4.99, img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80", des: "A colorful mix of fresh seasonal fruits." },
  { name: "Grilled Salmon Bowl", category: "Healthy", price: 10.99, img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80", des: "Grilled salmon served with greens and wholesome grains." },
  { name: "Vegetable Buddha Bowl", category: "Healthy", price: 7.49, img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=800&q=80", des: "A nourishing bowl of roasted vegetables, grains, and greens." },
  { name: "Grilled Chicken Wrap", category: "Healthy", price: 6.99, img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80", des: "Grilled chicken and crisp vegetables wrapped in a soft tortilla." },

  // Pasta
  { name: "Creamy Pasta", category: "Pasta", price: 9.49, img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80", des: "Creamy pasta prepared with herbs and rich sauce." },
  { name: "Spaghetti Bolognese", category: "Pasta", price: 9.99, img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80", des: "Spaghetti served with a rich tomato and beef sauce." },
  { name: "Fettuccine Alfredo", category: "Pasta", price: 10.49, img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80", des: "Fettuccine coated in a smooth and creamy Parmesan sauce." },
  { name: "Penne Arrabbiata", category: "Pasta", price: 8.49, img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80", des: "Penne pasta tossed in a spicy tomato and garlic sauce." },
  { name: "Lasagna", category: "Pasta", price: 10.99, img: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80", des: "Layers of pasta, rich meat sauce, and melted cheese." },
  { name: "Pesto Pasta", category: "Pasta", price: 9.49, img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80&sat=30", des: "Pasta tossed with fresh basil pesto and Parmesan cheese." },
  { name: "Seafood Linguine", category: "Pasta", price: 12.49, img: "https://easypeasyrecipes.net/wp-content/uploads/2024/09/Quick-Italian-Seafood-Linguine-768x960.jpg", des: "Linguine served with seafood, garlic, and aromatic herbs." },
  { name: "Mac and Cheese", category: "Pasta", price: 7.49, img: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=800&q=80", des: "Comforting macaroni covered in a creamy cheese sauce." },

  // Sushi
  { name: "Fresh Sushi", category: "Sushi", price: 10.99, img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80", des: "Fresh sushi rolls with rice and delicious seafood." },
  { name: "California Roll", category: "Sushi", price: 8.49, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80", des: "A classic roll with avocado, cucumber, and crab." },
  { name: "Salmon Nigiri", category: "Sushi", price: 9.99, img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=800&q=80", des: "Slices of salmon served over perfectly seasoned rice." },
  { name: "Tuna Roll", category: "Sushi", price: 9.49, img: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80", des: "Fresh tuna rolled with seasoned rice and seaweed." },
  { name: "Dragon Roll", category: "Sushi", price: 12.99, img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80", des: "A colorful specialty roll with avocado and savory fillings." },
  { name: "Tempura Roll", category: "Sushi", price: 10.49, img: "https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&w=800&q=80", des: "Crunchy tempura wrapped in rice and nori." },
  { name: "Vegetable Sushi Roll", category: "Sushi", price: 7.49, img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80", des: "A fresh vegetarian roll with cucumber and avocado." },
  { name: "Spicy Tuna Roll", category: "Sushi", price: 10.49, img: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&w=800&q=80", des: "Tuna sushi with a spicy sauce and a touch of sesame." },

  // Chicken
  { name: "Crispy Fried Chicken", category: "Chicken", price: 7.49, img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80", des: "Golden crispy chicken with juicy and tender meat." },
  { name: "Grilled Chicken", category: "Chicken", price: 8.49, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80", des: "Tender grilled chicken seasoned with aromatic herbs." },
  { name: "Chicken Wings", category: "Chicken", price: 6.99, img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80", des: "Flavorful chicken wings with a delicious crispy coating." },
  { name: "BBQ Chicken", category: "Chicken", price: 8.99, img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80", des: "Juicy chicken glazed with smoky barbecue sauce." },
  { name: "Chicken Nuggets", category: "Chicken", price: 5.49, img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=800&q=80", des: "Bite-sized crispy chicken pieces perfect for sharing." },
  { name: "Chicken Teriyaki", category: "Chicken", price: 8.99, img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80", des: "Grilled chicken coated in a sweet and savory teriyaki glaze." },
  { name: "Chicken Parmesan", category: "Chicken", price: 10.49, img: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800&q=80", des: "Breaded chicken topped with tomato sauce and melted cheese." },
  { name: "Spicy Chicken Tenders", category: "Chicken", price: 6.99, img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80", des: "Crispy chicken strips with a bold and spicy seasoning." },

  // Desserts
  { name: "Strawberry Dessert", category: "Desserts", price: 4.99, img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80", des: "A sweet treat with delightful flavors for dessert lovers." },
  { name: "Chocolate Cake", category: "Desserts", price: 5.49, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80", des: "Rich chocolate cake with soft layers and creamy frosting." },
  { name: "Cheesecake", category: "Desserts", price: 5.99, img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80", des: "Smooth and creamy cheesecake with a buttery biscuit base." },
  { name: "Chocolate Brownie", category: "Desserts", price: 3.99, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80", des: "A rich chocolate brownie with a soft, fudgy center." },
  { name: "Ice Cream Sundae", category: "Desserts", price: 4.49, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80", des: "Creamy ice cream topped with sweet sauce and crunchy toppings." },
  { name: "Tiramisu", category: "Desserts", price: 5.99, img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80", des: "Italian dessert layered with coffee-soaked biscuits and cream." },
  { name: "Donuts", category: "Desserts", price: 2.99, img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80&sat=40", des: "Soft, sweet donuts with a delicious glazed topping." },
  { name: "Pancakes", category: "Desserts", price: 4.49, img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80", des: "Fluffy pancakes served with syrup and fresh fruit." },

  // Drinks
  { name: "Fresh Fruit Juice", category: "Drinks", price: 2.99, img: "https://tse3.mm.bing.net/th/id/OIP.Ei1eZZn7lvTvxWlhldJQogHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", des: "A refreshing fruity drink made for a perfect day." },
  { name: "Iced Coffee", category: "Drinks", price: 3.49, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80", des: "Smooth iced coffee served chilled for a refreshing boost." },
  { name: "Strawberry Smoothie", category: "Drinks", price: 4.49, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80", des: "A creamy strawberry smoothie blended with fresh fruit." },
  { name: "Lemonade", category: "Drinks", price: 2.49, img: "https://lilluna.com/wp-content/uploads/2021/02/homemade-lemonade-resize-8.jpg", des: "Fresh lemon juice with a perfect balance of sweet and sour." },
  { name: "Iced Matcha Latte", category: "Drinks", price: 4.49, img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=80", des: "A creamy green tea latte served over ice." },
  { name: "Mango Smoothie", category: "Drinks", price: 4.49, img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80", des: "A tropical mango smoothie blended until smooth and creamy." },
  { name: "Milk Tea", category: "Drinks", price: 3.49, img: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=800&q=80", des: "Sweet milk tea with a rich tea flavor and creamy finish." },
  { name: "Watermelon Juice", category: "Drinks", price: 3.49, img: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=800&q=80", des: "Fresh watermelon juice that is naturally sweet and refreshing." },
];

function Menu() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

  const filteredFoods = foods.filter((food) => {
    const matchCategory =
      activeCategory === "All" || food.category === activeCategory;

    const matchSearch = food.name
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    return matchCategory && matchSearch;
  });

  const displayedFoods = showAll
    ? filteredFoods
    : filteredFoods.slice(0, 16);

  const addToCart = (food) => {
    setCart((previousCart) => [...previousCart, food]);
  };

  return (
    <section id="menu" className="scroll-mt-20 px-4 py-10 sm:px-6 lg:px-10">
      <div className="mb-8 text-center">
        <p className="mb-2 font-semibold uppercase tracking-wide text-orange-500">
          Delicious Food
        </p>

        <h1 className="text-3xl font-bold text-orange-950 sm:text-4xl md:text-5xl">
          Our Menu
        </h1>

        <p className="mx-auto mt-3 max-w-xl leading-7 text-stone-600">
          Discover delicious meals prepared with fresh ingredients and made
          to bring happiness to every bite.
        </p>
      </div>

      {/* Search and Cart */}
      <div className="mx-auto mb-8 flex max-w-5xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex w-full items-center gap-3 rounded-full border border-orange-200 bg-white px-5 py-3 shadow-sm sm:max-w-md">
          <FiSearch className="shrink-0 text-xl text-orange-500" />

          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowAll(false);
            }}
            placeholder="Search your favorite foods..."
            aria-label="Search foods"
            className="w-full bg-transparent text-stone-700 outline-none"
          />
        </div>

        <button
          type="button"
          onClick={() =>
            alert(
              cart.length
                ? `You added ${cart.length} item(s) to your cart.`
                : "Your cart is empty!"
            )
          }
          className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
        >
          <FiShoppingCart className="text-xl" />
          Cart ({cart.length})
        </button>
      </div>

      {/* Category Filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => {
              setActiveCategory(filter);
              setShowAll(false);
            }}
            aria-pressed={activeCategory === filter}
            className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 sm:px-5 ${
              activeCategory === filter
                ? "bg-orange-500 text-white shadow-md"
                : "border border-orange-200 bg-white text-orange-800 hover:bg-orange-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Food Cards */}
      {displayedFoods.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {displayedFoods.map((food) => (
            <div
              key={food.name}
              className="group min-w-0 overflow-hidden rounded-xl border border-orange-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-28 overflow-hidden bg-orange-100 sm:h-40 lg:h-52">
                <img
                  src={food.img}
                  alt={food.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-2.5 sm:p-3 lg:p-5">
                <p className="mb-1 text-[10px] font-medium text-orange-500 sm:text-xs lg:mb-2 lg:text-sm">
                  {food.category}
                </p>

                <h2 className="text-sm font-bold text-orange-950 sm:text-base lg:text-xl">
                  {food.name}
                </h2>

                <p
                  title={food.des}
                  className="mt-1 line-clamp-2 text-xs leading-4 text-stone-600 sm:mt-2 lg:text-sm lg:leading-6"
                >
                  {food.des}
                </p>

                <div className="mt-3 flex flex-col items-start gap-2 sm:mt-4 sm:flex-row sm:items-center sm:justify-between lg:mt-5">
                  <span className="text-sm font-bold text-orange-600 sm:text-base lg:text-xl">
                    ${food.price.toFixed(2)}
                  </span>

                  <button
                    type="button"
                    onClick={() => addToCart(food)}
                    className="w-full rounded-full bg-orange-500 px-2 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange-600 sm:w-auto sm:px-3 lg:px-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-stone-500">
          No food found. Try another search.
        </p>
      )}

      {/* Show More / Show Less */}
      {filteredFoods.length > 16 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((previous) => !previous)}
            className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </section>
  );
}

export default Menu;
