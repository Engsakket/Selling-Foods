
import { FiHeart, FiAward, FiUsers } from "react-icons/fi";

function About() {
  return (
    <section
      id="about"
      className=" bg-orange-50 px-5 py-16 md:px-10"
    >
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-orange-500">
          About Us
        </p>

        <h1 className="text-4xl font-bold text-orange-950 md:text-5xl">
          Good Food, Happy Moments
        </h1>

        <p className="mt-5 leading-7 text-stone-600">
          We believe that great food brings people together.
          Our mission is to serve delicious meals made with
          fresh ingredients and lots of love.
        </p>
      </div>

      {/* Main Content */}
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        {/* Food Image */}
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80"
            alt="Fresh and delicious food"
            className="h-80 w-full object-cover transition-transform duration-300 hover:scale-105 md:h-105"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold leading-snug text-orange-950">
            Bringing Delicious Food to Your Table
          </h2>

          <p className="mt-5 leading-7 text-stone-600">
            At Delicious Foods, we make every meal special.
            From cheesy pizza and juicy burgers to fresh salads
            and sweet desserts, there is something for everyone.
          </p>

          <p className="mt-4 leading-7 text-stone-600">
            We focus on quality, great taste, and friendly service
            to make your food experience enjoyable every day.
          </p>

          <a
            href="#menu"
            className="mt-7 inline-block rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Explore Our Menu
          </a>
        </div>
      </div>

      {/* Our Values */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-orange-100 bg-white p-7 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
          <FiHeart className="mx-auto text-4xl text-orange-500" />

          <h3 className="mt-4 text-xl font-bold text-orange-950">
            Made with Love
          </h3>

          <p className="mt-3 leading-6 text-stone-600">
            Every dish is prepared with care to make every bite enjoyable.
          </p>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-white p-7 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
          <FiAward className="mx-auto text-4xl text-orange-500" />

          <h3 className="mt-4 text-xl font-bold text-orange-950">
            Quality Ingredients
          </h3>

          <p className="mt-3 leading-6 text-stone-600">
            We value fresh ingredients and delicious flavors in every meal.
          </p>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-white p-7 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md sm:col-span-2 lg:col-span-1">
          <FiUsers className="mx-auto text-4xl text-orange-500" />

          <h3 className="mt-4 text-xl font-bold text-orange-950">
            Happy Customers
          </h3>

          <p className="mt-3 leading-6 text-stone-600">
            Your happiness inspires us to make every dining experience better.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
