"use client";

import { useState } from "react";

export default function HomePage() {
  const [groupSize, setGroupSize] = useState("1-2");
  const [priority, setPriority] = useState("best");

  const getRecommendation = () => {
    if (priority === "cheapest") {
      return {
        title: "Train + Shuttle",
        badge: "💸 Cheapest",
        description:
          "Best budget option if you’re comfortable with a longer journey and a transfer.",
        cost: "$20–$30 per person",
        time: "90–120 minutes",
        stress: "Medium",
        link: "https://www.google.com/search?q=LAX+to+Disneyland+train+shuttle",
        cta: "View budget options",
        color: "bg-green-600",
      };
    }

    if (groupSize === "5+") {
      return {
        title: "Private Shuttle",
        badge: "⭐ Best for families",
        description:
          "Door-to-door private transfer. No stops, no stress. Ideal for families with kids and luggage.",
        cost: "$140–$180 per vehicle",
        time: "45–60 minutes",
        stress: "Low",
        link: "https://www.google.com/search?q=LAX+to+Disneyland+private+shuttle",
        cta: "Compare private shuttles",
        color: "bg-blue-600",
      };
    }

    return {
      title: "Uber or Lyft",
      badge: "⚡ Fastest",
      description:
        "Direct ride from LAX to your hotel. Prices vary depending on traffic and demand.",
      cost: "$60–$120",
      time: "45–70 minutes",
      stress: "Low–Medium",
      link: "rideshare",
      cta: "Check ride prices",
      color: "bg-black",
    };
  };

  const recommendation = getRecommendation();

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      {/* Hero */}
      <section className="mb-14 text-center">
        <h1 className="text-4xl font-bold mb-4">
          LAX to Disneyland — Made Simple
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Compare the cheapest, fastest, and least stressful ways to get from
          LAX to Disneyland and Anaheim hotels.
        </p>

        <div className="mt-6 flex justify-center gap-4 text-sm text-gray-500">
          <span>✔ Family-friendly</span>
          <span>✔ No hidden fees</span>
          <span>✔ Real travel options</span>
        </div>
      </section>

      {/* Selector */}
      <section className="mb-12 rounded-2xl border bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">
          Find the best option for your trip
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-2">
              Group size
            </label>
            <select
              value={groupSize}
              onChange={(e) => setGroupSize(e.target.value)}
              className="w-full rounded-lg border px-4 py-3"
            >
              <option value="1-2">1–2 people</option>
              <option value="3-4">3–4 people</option>
              <option value="5+">5+ people</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full rounded-lg border px-4 py-3"
            >
              <option value="best">Best overall</option>
              <option value="cheapest">Lowest cost</option>
            </select>
          </div>
        </div>
      </section>

      {/* Recommendation Card */}
      <section className="rounded-2xl border bg-gray-50 p-8 shadow-sm">
        <span className="inline-block mb-3 rounded-full bg-gray-200 px-4 py-1 text-sm font-semibold">
          {recommendation.badge}
        </span>

        <h3 className="text-2xl font-bold mb-3">
          {recommendation.title}
        </h3>

        <p className="mb-6 text-gray-700 max-w-2xl">
          {recommendation.description}
        </p>

        <div className="grid gap-4 sm:grid-cols-3 mb-8 text-sm">
          <div>
            <strong>Cost</strong>
            <div>{recommendation.cost}</div>
          </div>
          <div>
            <strong>Time</strong>
            <div>{recommendation.time}</div>
          </div>
          <div>
            <strong>Stress</strong>
            <div>{recommendation.stress}</div>
          </div>
        </div>

        {recommendation.link === "rideshare" ? (
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://www.uber.com/global/en/price-estimate/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black px-6 py-3 text-white font-semibold hover:opacity-90"
            >
              Check Uber price
            </a>
            <a
              href="https://www.lyft.com/rider/fare-estimate"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-pink-600 px-6 py-3 text-white font-semibold hover:opacity-90"
            >
              Check Lyft price
            </a>
          </div>
        ) : (
          <a
            href={recommendation.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block rounded-lg px-6 py-3 text-white font-semibold hover:opacity-90 ${recommendation.color}`}
          >
            {recommendation.cta}
          </a>
        )}
      </section>

      <footer className="mt-14 text-center text-sm text-gray-500">
        ParkBase helps families choose the right transport — without stress,
        upsells, or confusing options.
      </footer>
    </main>
  );
}