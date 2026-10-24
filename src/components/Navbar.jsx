import { useState, useEffect } from "react";
import {
  MdOutlineFoodBank,
  MdOutlineSearch,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";

const navItems = ["Home", "Categories", "Menu", "About", "Contact"];

function Nav() {
  const [active, setActive] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState("");

  // Automatically update active navbar item while scrolling
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const sectionId = visibleSections[0].target.id;

          const activeItem =
            sectionId.charAt(0).toUpperCase() + sectionId.slice(1);

          setActive(activeItem);
        }
      },
      {
        rootMargin: "-15% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close the mobile menu if the screen becomes large
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setShowMenu(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (item) => {
    const section = document.getElementById(item.toLowerCase());

    if (!section) {
      console.log("Section not found:", item.toLowerCase());
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNavigation = (item) => {
    setActive(item);
    setShowMenu(false);
    scrollToSection(item);
  };

  return (
    <>
      <div className="sticky top-0 z-50 flex h-16 w-full items-center gap-2 bg-orange-50/90 shadow-sm backdrop-blur-md">
        {/* Logo */}
        <h2
          onClick={() => handleNavigation("Home")}
          className="ml-3 flex shrink-0 cursor-pointer items-center gap-0.5 sm:ml-10 sm:gap-1"
        >
          <MdOutlineFoodBank className="text-3xl text-orange-500 sm:text-4xl" />

          <span className="font-logo text-lg font-bold text-orange-500 sm:text-xl">
            Delicious
          </span>

          <span className="text-lg font-bold text-amber-700 sm:text-xl">
            Foods
          </span>
        </h2>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-3 text-lg font-bold text-stone-700 xl:gap-6">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => handleNavigation(item)}
                className={`cursor-pointer rounded-full px-3 py-2 transition-colors duration-200 ${
                  active === item
                    ? "bg-orange-200 text-orange-600"
                    : "hover:bg-orange-100 hover:text-orange-600"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-3 pr-3 sm:gap-6 sm:pr-10 lg:ml-6">
          {/* Search */}
          <button
            type="button"
            onClick={() => {
              setShowSearch(!showSearch);
              setShowMenu(false);
            }}
            aria-label="Toggle search"
            className="text-2xl text-stone-700 transition-colors hover:text-orange-600"
          >
            <MdOutlineSearch />
          </button>

          {/* Cart */}
          <button
            type="button"
            aria-label="Shopping cart"
            className="group relative text-2xl text-stone-700 transition-colors hover:text-orange-600"
          >
            <RiShoppingCart2Line />

            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-orange-50 bg-orange-500 px-1 text-[10px] font-bold text-white transition-transform group-hover:scale-110">
              0
            </span>
          </button>

          {/* Login */}
          <button
            type="button"
            onClick={() => {
              setShowLogin(true);
              setIsSignUp(false);
              setShowMenu(false);
            }}
            aria-label="Login"
            className="flex items-center gap-2 rounded-full bg-orange-500 px-3 py-2 font-semibold text-white transition-all duration-200 hover:bg-orange-600 hover:shadow-md sm:px-4"
          >
            <FaRegCircleUser className="text-lg" />
            <span className="hidden sm:inline">Login</span>
          </button>

          {/* Hamburger (mobile and tablet only) */}
          <button
            type="button"
            onClick={() => {
              setShowMenu(!showMenu);
              setShowSearch(false);
            }}
            aria-label={showMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMenu}
            className="text-3xl text-stone-700 transition-colors hover:text-orange-600 lg:hidden"
          >
            {showMenu ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <nav className="absolute left-0 top-full w-full border-t border-orange-100 bg-orange-50 shadow-lg lg:hidden">
            <ul className="flex flex-col p-3 text-lg font-bold text-stone-700">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => handleNavigation(item)}
                    className={`w-full rounded-xl px-4 py-3 text-left transition-colors duration-200 ${
                      active === item
                        ? "bg-orange-200 text-orange-600"
                        : "hover:bg-orange-100 hover:text-orange-600"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Search Input */}
        {showSearch && (
          <div className="absolute right-3 top-full z-50 mt-2 w-[calc(100vw-1.5rem)] max-w-xs rounded-2xl border border-orange-100 bg-white p-3 shadow-lg sm:right-10">
            <div className="flex items-center gap-2 rounded-xl border border-orange-200 px-3">
              <MdOutlineSearch className="shrink-0 text-xl text-orange-500" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search foods..."
                autoFocus
                className="w-full min-w-0 py-3 text-sm outline-none"
              />

              <button
                type="button"
                onClick={() => setShowSearch(false)}
                className="text-xl text-stone-400 hover:text-orange-600"
                aria-label="Close search"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Login / Sign Up Modal */}
      {showLogin && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 sm:p-5"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-orange-50 p-5 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowLogin(false)}
              aria-label="Close modal"
              className="absolute right-5 top-4 text-3xl text-stone-500 transition-colors hover:text-orange-600"
            >
              &times;
            </button>

            <div className="mb-6 text-center">
              <MdOutlineFoodBank className="mx-auto text-5xl text-orange-500" />

              <h2 className="mt-2 text-2xl font-bold text-orange-600 sm:text-3xl">
                {isSignUp ? "Create Account" : "Welcome Back!"}
              </h2>

              <p className="mt-2 text-sm text-stone-500">
                {isSignUp
                  ? "Join Delicious Foods today!"
                  : "Login to your Delicious Foods account"}
              </p>
            </div>

            {/* Form */}
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();

                alert(
                  isSignUp ? "Sign Up form submitted!" : "Login form submitted!",
                );

                setShowLogin(false);
              }}
            >
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              )}

              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />

              <input
                type="password"
                placeholder="Password"
                required
                minLength={6}
                className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />

              {isSignUp && (
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-orange-500 py-3 font-bold text-white transition-all duration-200 hover:bg-orange-600 hover:shadow-md"
              >
                {isSignUp ? "Create Account" : "Login"}
              </button>
            </form>

            {/* Switch Form */}
            <p className="mt-6 text-center text-sm text-stone-600">
              {isSignUp
                ? "Already have an account? "
                : "Don't have an account? "}

              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-bold text-orange-600 hover:text-orange-700"
              >
                {isSignUp ? "Login" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;