
import myImg from "../assets/img.png";

function Hero() {
  return (
    <div className="m-5 min-h-[628px] rounded-4xl bg-orange-300 flex items-center justify-between overflow-hidden relative scroll-mt-20" id="home">

      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-orange-200/50 blur-2xl"></div>
      <div className="absolute bottom-10 left-1/2 w-40 h-40 rounded-full bg-amber-100/40 blur-2xl"></div>

      {/* Text Content */}
      <div className="pl-10 ml-5 py-10 relative z-10 max-w-[600px] shrink-0">

        <span className="inline-block cursor-pointer bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm mb-5 shadow-sm">
          🍴 Fresh & Delicious Every Day
        </span>
        <h2 className="font-poppins text-amber-100 text-5xl font-bold leading-tight ">
          Delicious <span className="text-orange-700">Foods</span>
          <br />
          Happy <span className="text-orange-700">Moments</span>{" "}
          <span className="inline-flex cursor-pointer w-15 h-15 items-center justify-center rounded-full bg-amber-700 transition-transform duration-200 hover:scale-110">
            🍕
          </span>
        </h2>

        <p className="font-poppins text-amber-100 font-semibold mt-5 leading-7">
          Enjoy delicious meals made with fresh ingredients and rich flavors.
          From cheesy pizza to tasty burgers, every bite brings happiness.
          Treat yourself to your favorite food and make every moment special!
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-7">
          <button className="rounded-full font-semibold px-7 py-3 bg-orange-600 text-white transition-all duration-200 hover:bg-orange-700 hover:scale-105 drop-shadow-[0_5px_8px_rgba(0,0,0,0.3)]">
            Order Now! →
          </button>

          <button className="rounded-full px-7 py-3 font-semibold bg-amber-50/80 text-orange-800 border-2 border-orange-400 shadow-sm transition-all duration-300 hover:bg-orange-600 hover:text-white hover:border-orange-600 hover:shadow-lg hover:shadow-orange-900/20 hover:-translate-y-1 active:translate-y-0 active:scale-95">
            View Menu
          </button>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 mt-8 cursor-pointer">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-orange-300 flex items-center justify-center">😊</div>
            <div className="w-10 h-10 rounded-full bg-orange-100 border-2 border-orange-300 flex items-center justify-center">😋</div>
            <div className="w-10 h-10 rounded-full bg-amber-200 border-2 border-orange-300 flex items-center justify-center">😍</div>
          </div>

          <div>
            <div className="text-amber-900 font-bold">4.9/5 ⭐⭐⭐⭐⭐</div>
            <p className="text-amber-900/80 text-sm">Loved by food lovers</p>
          </div>
        </div>
      </div>

      {/* Food Image */}
      <div className="relative z-10 flex-1 flex justify-center items-center min-w-0">

        {/* Background Circle */}
        <div className="absolute w-[350px] h-[350px] rounded-full bg-orange-200/70 blur-sm"></div>

        <img
          src={myImg}
          alt="Delicious food"
          className="relative w-full max-w-[650px] h-auto max-h-[580px] object-contain drop-shadow-[0_12px_8px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_20px_13px_rgba(0,0,0,0.5)]"
        />

        {/* Floating Badge */}
        <div className="absolute bottom-10 right-5 md:right-10 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300 cursor-pointer">
          <p className="text-orange-600 font-bold text-lg">100% Fresh</p>
          <p className="text-gray-600 text-sm">Made with love ❤️</p>
        </div>
      </div>

    </div>
  );
}

export default Hero;
