import Link from "next/link";
import { FaPlane, FaBus, FaHotel, FaRoute } from "react-icons/fa";

export const metadata = {
  title: "Magic Route — LAX to Disneyland Transport & Hotel Guide",
  description:
    "Magic Route helps families plan the easiest way to get from LAX to Disneyland, compare transport options, and find nearby hotels.",
};

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Magic Route
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-blue-100">
            The easiest way to get from LAX to Disneyland
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-blue-200">
            Compare shuttles, rideshares, and private transfers — plus discover
            the best nearby hotels — all in one simple guide.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/guide/lax-to-disneyland"
              className="rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-gray-900 shadow-lg hover:bg-yellow-300 transition"
            >
              Plan your route
            </Link>

            <Link
              href="/guide/lax-to-disneyland"
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
            >
              View complete guide
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
            <FaRoute className="text-3xl text-indigo-600" />
            <h3 className="mt-4 text-xl font-bold">Transport made simple</h3>
            <p className="mt-2 text-gray-600">
              Compare shuttles, Uber, Lyft, private transfers, and rental options
              with realistic travel times and costs.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
            <FaHotel className="text-3xl text-indigo-600" />
            <h3 className="mt-4 text-xl font-bold">Stay closer, stress less</h3>
            <p className="mt-2 text-gray-600">
              Find family-friendly hotels and motels near Disneyland, sorted by
              distance, price, and convenience.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
            <FaBus className="text-3xl text-indigo-600" />
            <h3 className="mt-4 text-xl font-bold">Know before you go</h3>
            <p className="mt-2 text-gray-600">
              Understand peak traffic times, luggage tips, and the fastest ways
              to arrive without surprises.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
            <h3 className="mt-4 text-xl font-bold">Hotels near Disneyland</h3>
            <p className="mt-2 text-gray-600">
              From budget places where you just need a bed, to comfortable
              family-friendly stays within walking distance of the park.
            </p>
            <Link
              href="/hotels-near-disneyland"
              className="mt-4 inline-block font-semibold text-indigo-600 hover:underline"
            >
              View hotel options →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED GUIDE */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-extrabold text-center">
            Popular guide
          </h2>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-8 shadow-md">
            <h3 className="text-2xl font-bold">
              LAX to Disneyland: Complete Transport Guide
            </h3>
            <p className="mt-3 text-gray-600">
              Everything you need to know about getting from Los Angeles
              International Airport to Disneyland Resort — including costs,
              timing, and the best options for families.
            </p>

            <Link
              href="/guide/lax-to-disneyland"
              className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500 transition"
            >
              Read the guide →
            </Link>

            <p className="mt-4 text-sm text-gray-500">
              Planning where to stay?{" "}
              <Link
                href="/hotels-near-disneyland"
                className="font-medium text-indigo-600 hover:underline"
              >
                See hotels near Disneyland →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold">
          Built for families, not travel agents
        </h2>
        <p className="mt-4 text-gray-600">
          Magic Route is an independent travel planning guide designed to help
          families make confident decisions when visiting major theme parks.
          We don’t sell tickets — we help you choose the best route, stay, and
          plan for your trip.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-gray-500">
          <p>
            Magic Route is an independent travel guide and is not affiliated
            with, endorsed by, or sponsored by The Walt Disney Company or
            Disneyland Resort.
          </p>
        </div>
      </footer>
    </main>
  );
}