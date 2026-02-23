"use client"; // Required for interactivity in Next.js App Router
import { useState } from "react";

export default function Home() {
  // User selections
  const [group, setGroup] = useState("");
  const [time, setTime] = useState("");
  const [budget, setBudget] = useState("");

  // Recommendation logic
  const getRecommendation = () => {
    if (!group || !time || !budget) return null;

    // Simple rules (can refine later)
    if (group === "5+" || time === "Night") {
      return {
        type: "Private Shuttle",
        cost: "$140–$200 total",
        time: "45–60 mins",
        stress: "Low",
        link: "#", // Replace with affiliate link later
      };
    }
    if (group === "3–4" && time === "Day") {
      if (budget === "Lowest cost") {
        return {
          type: "Shared Shuttle",
          cost: "$25–$40 per person",
          time: "75–120 mins",
          stress: "Medium–High",
          link: "#",
        };
      } else {
        return {
          type: "Uber / Lyft",
          cost: "$90–$160",
          time: "45–70 mins",
          stress: "Medium",
          link: "#",
        };
      }
    }
    // Default
    return {
      type: "Shared Shuttle",
      cost: "$25–$40 per person",
      time: "75–120 mins",
      stress: "Medium–High",
      link: "#",
    };
  };

  const recommendation = getRecommendation();

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto font-sans">
      {/* HERO */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Plan Disneyland Smarter — Before You Even Land
        </h1>
        <p className="text-lg mb-6">
          Hotels, airport transport, and real advice for families visiting Disneyland.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Find the Best Way From LAX to Disneyland
        </button>
      </section>

      {/* 3 VALUE BLOCKS */}
      <section className="grid gap-6 md:grid-cols-3 mb-12 text-center">
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-semibold text-xl mb-2">🚐 Airport Transport</h2>
          <p>Know exactly how to get from LAX to your hotel — no guesswork.</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-semibold text-xl mb-2">🏨 Disney-Smart Hotels</h2>
          <p>Sort by walking time, shuttles, and family value.</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-semibold text-xl mb-2">🎢 Park Planning</h2>
          <p>Crowd-aware planning without Disney overload.</p>
        </div>
      </section>

      {/* TRANSPORT SELECTOR */}
      <section className="mb-12 p-4 border rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          🚀 Find Your Best Transport Option
        </h2>

        {/* Group size */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Group size</p>
          {["1–2", "3–4", "5+"].map((g) => (
            <button
              key={g}
              className={`mr-2 mb-2 px-4 py-2 rounded-lg border ${
                group === g ? "bg-blue-600 text-white" : "bg-white"
              }`}
              onClick={() => setGroup(g)}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Arrival time */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Arrival time</p>
          {["Day", "Night"].map((t) => (
            <button
              key={t}
              className={`mr-2 mb-2 px-4 py-2 rounded-lg border ${
                time === t ? "bg-blue-600 text-white" : "bg-white"
              }`}
              onClick={() => setTime(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Budget */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Budget preference</p>
          {["Lowest cost", "Best value", "Least stress"].map((b) => (
            <button
              key={b}
              className={`mr-2 mb-2 px-4 py-2 rounded-lg border ${
                budget === b ? "bg-blue-600 text-white" : "bg-white"
              }`}
              onClick={() => setBudget(b)}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Recommendation */}
        {recommendation && (
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
            <h3 className="font-bold text-xl mb-2">
              🏆 Recommended: {recommendation.type}
            </h3>
            <p>💲 Cost: {recommendation.cost}</p>
            <p>⏱ Time: {recommendation.time}</p>
            <p>😌 Stress Level: {recommendation.stress}</p>
            <a
              href={recommendation.link}
              className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Book / Learn More
            </a>
          </div>
        )}
      </section>

      {/* FOOTER CTA */}
      <section className="text-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Start Planning My Trip
        </button>
      </section>
    </main>
  );
}