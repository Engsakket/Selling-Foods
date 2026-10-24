
import myImg from "../assets/img.png";

function Hero() {
  return (
    <div
      id="home"
      className="relative mx-3 my-3 sm:m-5 flex min-h-0 flex-col items-center justify-between overflow-hidden rounded-3xl bg-orange-300 lg:min-h-[628px] lg:flex-row lg:rounded-4xl scroll-mt-20"
    >
      {/* Background Decorations */}
      <div className="absolute right-5 top-10 h-24 w-24 rounded-full bg-orange-200/50 blur-2xl sm:right-10 sm:h-32 sm:w-32" />

      <div className="absolute bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-amber-100/40 blur-2xl sm:h-40 sm:w-40" />

      {/* Text Content */}
      <div className="relative z-10 w-full max-w-[600px] shrink-0 px-5 py-8 sm:px-8 sm:py-10 lg:ml-5 lg:py-10 lg:pl-10">
        <span className="mb-5 inline-block cursor-pointer rounded-full bg-orange-100 px-3 py-2 text-xs font-semibold text-orange-700 shadow-sm sm:px-4 sm:text-sm">
          🍴 Fresh & Delicious Every Day
        </span>

        <h2 className="font-poppins text-3xl font-bold leading-tight text-amber-100 sm:text-4xl lg:text-5xl">
          Delicious <span className="text-orange-700">Foods</span>
          <br />
          Happy <span className="text-orange-700">Moments</span>{" "}
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-amber-700 text-xl transition-transform duration-200 hover:scale-110 sm:h-12 sm:w-12 sm:text-2xl lg:h-15 lg:w-15">
            🍕
          </span>
        </h2>

        <p className="mt-5 font-poppins text-sm font-semibold leading-7 text-amber-100 sm:text-base">
          Enjoy delicious meals made with fresh ingredients and rich flavors.
          From cheesy pizza to tasty burgers, every bite brings happiness.
          Treat yourself to your favorite food and make every moment special!
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
          <button className="rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white drop-shadow-[0_5px_8px_rgba(0,0,0,0.3)] transition-all duration-200 hover:scale-105 hover:bg-orange-700 active:scale-95 sm:px-7 sm:text-base">
            Order Now! →
          </button>

          <button className="rounded-full border-2 border-orange-400 bg-amber-50/80 px-5 py-3 text-sm font-semibold text-orange-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-600 hover:bg-orange-600 hover:text-white hover:shadow-lg hover:shadow-orange-900/20 active:translate-y-0 active:scale-95 sm:px-7 sm:text-base">
            View Menu
          </button>
        </div>

        {/* Rating */}
        <div className="mt-8 flex cursor-pointer items-center gap-3">
          <div className="flex -space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-orange-300 bg-amber-100 text-sm sm:h-10 sm:w-10 sm:text-base">
              😊
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-orange-300 bg-orange-100 text-sm sm:h-10 sm:w-10 sm:text-base">
              😋
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-orange-300 bg-amber-200 text-sm sm:h-10 sm:w-10 sm:text-base">
              😍
            </div>
          </div>

          <div>
            <div className="text-sm font-bold text-amber-900 sm:text-base">
              4.9/5 ⭐⭐⭐⭐⭐
            </div>

            <p className="text-xs text-amber-900/80 sm:text-sm">
              Loved by food lovers
            </p>
          </div>
        </div>
      </div>

      {/* Food Image */}
      <div className="relative z-10 flex w-full min-w-0 flex-1 items-center justify-center px-3 pb-8 sm:px-5 lg:px-0 lg:pb-0">
        {/* Background Circle */}
        <div className="absolute h-56 w-56 rounded-full bg-orange-200/70 blur-sm sm:h-80 sm:w-80 lg:h-[350px] lg:w-[350px]" />

        <img
          src={myImg}
          alt="Delicious food"
          className="relative h-auto max-h-[350px] w-full max-w-[320px] object-contain drop-shadow-[0_12px_8px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_20px_13px_rgba(0,0,0,0.5)] sm:max-h-[450px] sm:max-w-[450px] lg:max-h-[580px] lg:max-w-[650px]"
        />

        {/* Floating Badge */}
        <div className="absolute bottom-5 right-2 rotate-3 cursor-pointer rounded-2xl bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:rotate-0 sm:bottom-8 sm:right-5 sm:px-5 sm:py-3 lg:bottom-10 lg:right-10">
          <p className="text-sm font-bold text-orange-600 sm:text-lg">
            100% Fresh
          </p>

          <p className="text-xs text-gray-600 sm:text-sm">
            Made with love ❤️
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
