import { FaPlane, FaBus, FaRegClock } from "react-icons/fa";

export const metadata = {
  title: "ParkBase — Quick LAX to Disneyland Transport Tool",
  description:
    "Find the fastest, cheapest, and easiest way from LAX to Disneyland. Compare Uber, Lyft, shuttles, and trains in one place.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Get from LAX to Disneyland Stress-Free
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Compare private shuttles, Uber, Lyft, and trains instantly. Find the
          fastest or cheapest option for your group.
        </p>
        <a
          href="#transport-tool"
          className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-white font-semibold shadow-lg transform hover:scale-105 transition"
        >
          Try the ParkBase Tool
        </a>
      </section>

      {/* Transport Tool Placeholder */}
      <section
        id="transport-tool"
        className="mb-16 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 border shadow-lg text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">ParkBase Transport Tool</h2>
        <p className="text-gray-700 mb-4">
          Select your group size, luggage, and priority (fastest/cheapest), and
          we’ll show the best options.
        </p>
        <div className="inline-block rounded-lg bg-green-600 px-6 py-3 text-white font-semibold hover:shadow-xl hover:scale-105 transform transition cursor-pointer">
          Start Now
        </div>
      </section>

      {/* Guide Page CTA */}
      <section className="mb-16 rounded-xl bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 border border-yellow-200 text-center shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold mb-3">
          Not sure how to get from LAX to Disneyland?
        </h2>
        <p className="text-gray-700 mb-4">
          Check our complete guide with all transport options, costs, and travel
          times.
        </p>
        <a
          href="/guide/lax-to-disneyland"
          className="inline-block rounded-lg bg-yellow-600 px-6 py-3 text-white font-semibold hover:shadow-xl hover:scale-105 transform transition"
        >
          View the Guide
        </a>
      </section>

      {/* How It Works Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white border shadow hover:shadow-xl transform hover:scale-105 transition text-center">
            <FaPlane className="mx-auto text-blue-500 text-4xl mb-4" />
            <h3 className="font-semibold mb-2">1. Input Your Details</h3>
            <p className="text-gray-700 text-sm">
              Choose your group size, luggage, and priority (fastest/cheapest).
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border shadow hover:shadow-xl transform hover:scale-105 transition text-center">
            <FaBus className="mx-auto text-green-500 text-4xl mb-4" />
            <h3 className="font-semibold mb-2">2. Compare Options</h3>
            <p className="text-gray-700 text-sm">
              See Uber, Lyft, shuttles, and train options side by side.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border shadow hover:shadow-xl transform hover:scale-105 transition text-center">
            <FaRegClock className="mx-auto text-yellow-500 text-4xl mb-4" />
            <h3 className="font-semibold mb-2">3. Book & Relax</h3>
            <p className="text-gray-700 text-sm">
              Choose your preferred transport and enjoy a stress-free ride.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        © 2026 ParkBase — Your Disneyland Transport Guide
      </footer>
    </main>
  );
}