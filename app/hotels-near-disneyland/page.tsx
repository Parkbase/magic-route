"use client";

import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function HotelsNearDisneyland() {
  // SEO
  const pageTitle = "Hotels Near Disneyland — Walkable, Budget & Family-Friendly Options";
  const pageDescription =
    "Find the best hotels near Disneyland — from budget stays to family-friendly hotels, sortable by price, stars, and distance.";

  // Hotels data
  const hotelsData = {
    budget: [
      { name: "Super 8 by Wyndham Anaheim/Disneyland Dr", price: 70, stars: 3, distance: 0.5, link: "#" },
      { name: "Motel 6 Anaheim Maingate", price: 80, stars: 3, distance: 0.6, link: "#" },
      { name: "Budget Inn Anaheim", price: 75, stars: 3, distance: 0.7, link: "#" },
    ],
    family: [
      { name: "Hilton Garden Inn Anaheim Resort", price: 240, stars: 4, distance: 0.4, link: "#" },
      { name: "SpringHill Suites by Marriott Anaheim Resort/Conv Cntr", price: 220, stars: 4, distance: 0.3, link: "#" },
      { name: "Clementine Hotel & Suites Anaheim", price: 200, stars: 4, distance: 0.5, link: "#" },
    ],
    balance: [
      { name: "Best Western Plus Park Place Inn‑Mini Suites", price: 150, stars: 4, distance: 0.2, link: "#" },
      { name: "Anaheim Camelot Inn & Suites", price: 130, stars: 3, distance: 0.8, link: "#" },
      { name: "Holiday Inn Express & Suites Anaheim Resort Area", price: 180, stars: 4, distance: 0.6, link: "#" },
    ],
  };

  // State
  const [sortKey, setSortKey] = useState<"price" | "stars" | "distance">("price");
  const [maxDistance, setMaxDistance] = useState(1); // max miles from Disneyland

  // Sorting & Filtering
  const sortHotels = (hotels: typeof hotelsData.budget) => {
    return [...hotels]
      .filter(hotel => hotel.distance <= maxDistance)
      .sort((a, b) => (sortKey === "stars" ? b.stars - a.stars : a[sortKey] - b[sortKey]));
  };

  const renderStars = (count: number) =>
    "★".repeat(count) + "☆".repeat(5 - count);

  const renderSection = (title: string, hotelArray: typeof hotelsData.budget) => (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-extrabold mb-4">{title}</h2>

      {/* Filter bar */}
      <div className="mb-6 flex flex-wrap gap-4 items-center">
        <span className="font-semibold">Sort by:</span>
        <button
          onClick={() => setSortKey("price")}
          className={`px-4 py-2 rounded-xl border ${sortKey === "price" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
        >
          Price
        </button>
        <button
          onClick={() => setSortKey("stars")}
          className={`px-4 py-2 rounded-xl border ${sortKey === "stars" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
        >
          Stars
        </button>
        <button
          onClick={() => setSortKey("distance")}
          className={`px-4 py-2 rounded-xl border ${sortKey === "distance" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
        >
          Distance
        </button>

        {/* Distance slider */}
        <div className="ml-auto flex items-center gap-2">
          <label htmlFor="distance" className="font-semibold">Max Distance: {maxDistance} mi</label>
          <input
            id="distance"
            type="range"
            min={0.1}
            max={2}
            step={0.1}
            value={maxDistance}
            onChange={e => setMaxDistance(Number(e.target.value))}
            className="w-40"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {sortHotels(hotelArray).map((hotel, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-200 shadow hover:shadow-lg transition p-6 text-center"
          >
            <h3 className="text-xl font-bold">{hotel.name}</h3>
            <p className="mt-1 text-yellow-500">{renderStars(hotel.stars)}</p>
            <p className="mt-2 text-gray-600">${hotel.price}+ / night</p>
            <p className="mt-1 text-gray-500">{hotel.distance} mi from Disneyland</p>
            <a
              href={hotel.link}
              className="mt-4 inline-block font-semibold text-indigo-600 hover:underline"
            >
              Book now →
            </a>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <main className="bg-white text-gray-900">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Hotels Near Disneyland
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100">
            Sort by price, stars, or distance to find the perfect stay.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-lg text-gray-700">
          Most visitors fall into one of three groups — jump straight to what matters most to you.
        </p>
      </section>

      {renderSection("😴 Do you just want a bed?", hotelsData.budget)}
      {renderSection("👨‍👩‍👧 Family-Friendly & Comfortable", hotelsData.family)}
      {renderSection("⭐ Best Balance: Price vs Distance", hotelsData.balance)}

      {/* CTA to Transport Guide */}
      <section className="bg-indigo-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold">Need transport too?</h2>
          <p className="mt-4 text-blue-100">
            Start with our complete guide from LAX to Disneyland for the fastest and easiest way to the park.
          </p>
          <Link
            href="/guide/lax-to-disneyland"
            className="mt-8 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-gray-900 hover:bg-yellow-300 transition"
          >
            View LAX → Disneyland guide →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-gray-500">
          <p>
            Magic Route is an independent travel guide and is not affiliated with, endorsed by, or sponsored by The Walt Disney Company or Disneyland Resort.
          </p>
        </div>
      </footer>
    </main>
  );
}