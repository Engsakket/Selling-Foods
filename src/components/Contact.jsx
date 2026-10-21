
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-5 bg-orange-50 px-5 py-16 md:px-10"
    >
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-orange-500">
          Contact Us
        </p>

        <h1 className="text-4xl font-bold text-orange-950 md:text-5xl">
          Let's Talk About Food
        </h1>

        <p className="mx-auto mt-5 leading-7 text-stone-600">
          Have a question or need help with your order? We'd love to hear from
          you. Send us a message and we'll get back to you soon.
        </p>
      </div>

      {/* Contact Content */}
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

        {/* Contact Information */}
        <div className="rounded-3xl bg-orange-500 p-8 text-white shadow-lg md:p-10">
          <h2 className="text-3xl font-bold">
            Get in Touch
          </h2>

          <p className="mt-4 leading-7 text-orange-50">
            We're always happy to help you enjoy a better food experience.
            Contact us anytime during our business hours.
          </p>

          <div className="mt-10 space-y-7">
            <div className="flex items-start gap-4">
              <FiMapPin className="mt-1 shrink-0 text-2xl" />
              <div>
                <h3 className="font-bold">Our Location</h3>
                <p className="mt-1 text-orange-50">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiPhone className="mt-1 shrink-0 text-2xl" />
              <div>
                <h3 className="font-bold">Phone Number</h3>
                <p className="mt-1 text-orange-50">
                  +855 12 345 678
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMail className="mt-1 shrink-0 text-2xl" />
              <div>
                <h3 className="font-bold">Email Address</h3>
                <p className="mt-1 text-orange-50">
                  hello@deliciousfoods.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiClock className="mt-1 shrink-0 text-2xl" />
              <div>
                <h3 className="font-bold">Opening Hours</h3>
                <p className="mt-1 text-orange-50">
                  Monday - Sunday: 8:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm md:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your message has been submitted.");
            e.target.reset();
          }}
        >
          <h2 className="text-2xl font-bold text-orange-950">
            Send Us a Message
          </h2>

          <div className="mt-7 space-y-5">
            <div>
              <label className="mb-2 block font-medium text-stone-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-orange-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-stone-700">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-orange-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-stone-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="What is this about?"
                required
                className="w-full rounded-xl border border-orange-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-stone-700">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                required
                className="w-full resize-none rounded-xl border border-orange-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-orange-500 py-3 font-semibold text-white transition duration-200 hover:bg-orange-600 hover:shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
