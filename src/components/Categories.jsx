
import { useState } from "react";

function Categories() {
  const categories = [
    {
      name: "Pizza",
      des: "Enjoy hot, cheesy pizza topped with fresh ingredients and rich flavors.",
      img: "https://i.pinimg.com/736x/93/50/c0/9350c0f6116de6745968b8d92d26ef4e.jpg",
      button: "Explore Pizza",
    },
    {
      name: "Burgers",
      des: "Juicy burgers with fresh vegetables, melted cheese, and delicious sauces.",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      button: "Explore Burgers",
    },
    {
      name: "Salads",
      des: "Fresh and healthy salads packed with colorful vegetables and tasty dressings.",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      button: "Explore Salads",
    },
    {
      name: "Pasta",
      des: "Delicious pasta served with rich sauces, herbs, and fresh ingredients.",
      img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
      button: "Explore Pasta",
    },
    {
      name: "Sushi",
      des: "Enjoy fresh sushi rolls prepared with rice, seafood, and Japanese flavors.",
      img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
      button: "Explore Sushi",
    },
    {
      name: "Fried Chicken",
      des: "Crispy golden chicken with a crunchy coating and juicy, tender meat.",
      img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
      button: "Explore Chicken",
    },
    {
      name: "Drinks",
      des: "Refresh yourself with cool drinks, fresh juices, and fruity flavors.",
      img: "https://i.pinimg.com/236x/66/22/0c/66220c73a426968c53d3befc69221096.jpg",
      button: "Explore Drinks",
    },
    {
      name: "Desserts",
      des: "Treat yourself to sweet desserts made for every special moment.",
      img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
      button: "Explore Desserts",
    },
    {
      name: "Tacos",
      des: "Enjoy flavorful tacos filled with fresh toppings, vegetables, and savory fillings.",
      img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
      button: "Explore Tacos",
    },
    {
      name: "Sandwiches",
      des: "Freshly made sandwiches filled with tasty ingredients and soft bread.",
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
      button: "Explore Sandwiches",
    },
    {
      name: "Noodles",
      des: "Satisfying noodles tossed with savory sauces, vegetables, and spices.",
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
      button: "Explore Noodles",
    },
    {
      name: "Seafood",
      des: "Discover delicious seafood prepared with fresh ingredients and rich flavors.",
      img: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=800&q=80",
      button: "Explore Seafood",
    },
    {
      name: "Steak",
      des: "Tender, juicy steak cooked to perfection and served with tasty sides.",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      button: "Explore Steak",
    },
    {
      name: "Soups",
      des: "Warm and comforting soups filled with vegetables, herbs, and rich flavors.",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
      button: "Explore Soups",
    },
    {
      name: "Breakfast",
      des: "Start your day with satisfying breakfast favorites and fresh ingredients.",
      img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
      button: "Explore Breakfast",
    },
    {
      name: "Ice Cream",
      des: "Cool down with creamy ice cream in delightful flavors and textures.",
      img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      button: "Explore Ice Cream",
    },
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const filters = ["All", "Fast Food", "Healthy", "Desserts"];
  const filteredCategories = categories.filter((cate) => {
    if (activeCategory === "All") {
      return true;
    }

    if (activeCategory === "Fast Food") {
      return [
        "Pizza",
        "Burgers",
        "Fried Chicken",
        "Tacos",
        "Sandwiches",
      ].includes(cate.name);
    }

    if (activeCategory === "Healthy") {
      return ["Salads", "Sushi", "Seafood", "Soups"].includes(cate.name);
    }

    if (activeCategory === "Desserts") {
      return ["Desserts", "Ice Cream"].includes(cate.name);
    }

    return false;
  });

  return (
    <section id="categories" className="px-5 py-10  md:px-10 scroll-mt-5">
      {/* Heading */}
      <div className="mb-8 text-center">
        <p className="mb-2 font-semibold uppercase tracking-widest text-orange-500">
          Discover Our Menu
        </p>

        <h2 className="text-3xl font-bold text-orange-950 md:text-4xl">
          Explore Food Categories
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-600 md:text-base">
          Discover your favorite foods, from delicious fast food to fresh,
          healthy meals and sweet treats.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveCategory(filter)}
            className={`rounded-full px-5 py-2.5 font-semibold transition-all duration-200 ${
              activeCategory === filter
                ? "bg-orange-500 text-white shadow-md"
                : "border border-orange-200 bg-orange-50 text-orange-800 hover:bg-orange-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Food Cards */}
     <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
  {filteredCategories.map((cate) => (
    <div
      key={cate.name}
      className="group overflow-hidden rounded-xl border border-orange-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl"
    >
      <div className="h-32 overflow-hidden bg-orange-50 sm:h-52">
        <img
          src={cate.img}
          alt={cate.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-3 sm:p-5">
        <h3 className="text-base font-bold text-orange-950 sm:text-xl">
          {cate.name}
        </h3>

        <p className="mt-1 line-clamp-3 text-xs leading-5 text-stone-600 sm:mt-2 sm:min-h-18 sm:text-sm sm:leading-6">
          {cate.des}
        </p>

        <button
          onClick={() => alert(`You selected ${cate.name}!`)}
          className="mt-3 w-full rounded-full bg-orange-500 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-600 sm:mt-4 sm:px-4 sm:py-2.5 sm:text-base"
        >
          {cate.button}
        </button>
      </div>
    </div>
  ))}
</div>

      {filteredCategories.length === 0 && (
        <p className="py-10 text-center text-stone-500">
          No food categories found.
        </p>
      )}
    </section>
  );
}

export default Categories;
