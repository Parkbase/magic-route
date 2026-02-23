export const metadata = {
  title: "How to Get From LAX to Disneyland (All Options Compared)",
  description:
    "Complete guide to getting from LAX to Disneyland. Compare shuttles, Uber, Lyft, private transfers, and train options with costs and travel times.",
};

export default function GuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      {/* Headline */}
      <h1 className="text-4xl font-bold mb-6">
        How to Get From LAX to Disneyland
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        Flying into Los Angeles and heading to Disneyland? Here’s a clear,
        no-nonsense breakdown of every realistic transport option — including
        cost, time, and what works best for families.
      </p>

      {/* Quick summary */}
      <section className="mb-10 rounded-xl bg-gray-50 p-6 border">
        <h2 className="text-xl font-semibold mb-3">Quick Answer</h2>
        <p className="text-gray-700">
          For most families, a <strong>private shuttle</strong> or{" "}
          <strong>Uber/Lyft</strong> is the easiest way to get from LAX to
          Disneyland. Budget travellers may prefer a{" "}
          <strong>train + shuttle</strong> combination.
        </p>
      </section>

      {/* Options */}
      <section className="space-y-10">
        {/* Private Shuttle */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            🚐 Private Shuttle (Best for Families)
          </h2>
          <p className="text-gray-700 mb-2">
            Private shuttles offer door-to-door service with no stops. Ideal if
            you have kids, luggage, or arrive late at night.
          </p>
          <ul className="text-gray-700 list-disc ml-6">
            <li>Cost: $140–$180 per vehicle</li>
            <li>Time: 45–60 minutes</li>
            <li>Stress level: Low</li>
          </ul>
        </div>

        {/* Uber / Lyft */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            🚗 Uber or Lyft (Fastest)
          </h2>
          <p className="text-gray-700 mb-2">
            Rideshare is quick and convenient, but prices vary depending on
            traffic and demand.
          </p>
          <ul className="text-gray-700 list-disc ml-6">
            <li>Cost: $60–$120</li>
            <li>Time: 45–70 minutes</li>
            <li>Stress level: Low–Medium</li>
          </ul>

          <div className="mt-4 flex gap-3 flex-wrap">
            <a
              href="https://www.uber.com/global/en/price-estimate/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black px-5 py-3 text-white font-semibold hover:opacity-90"
            >
              Check Uber price
            </a>
            <a
              href="https://www.lyft.com/rider/fare-estimate"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-pink-600 px-5 py-3 text-white font-semibold hover:opacity-90"
            >
              Check Lyft price
            </a>
          </div>
        </div>

        {/* Train + Shuttle */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            🚆 Train + Shuttle (Cheapest)
          </h2>
          <p className="text-gray-700 mb-2">
            The lowest-cost option, but requires transfers and more planning.
          </p>
          <ul className="text-gray-700 list-disc ml-6">
            <li>Cost: $20–$30 per person</li>
            <li>Time: 90–120 minutes</li>
            <li>Stress level: Medium</li>
          </ul>
        </div>
      </section>

      {/* CTA / funnel */}
      <section className="mt-14 rounded-xl bg-blue-50 p-6 border">
        <h2 className="text-xl font-semibold mb-3">
          Want a personalised recommendation?
        </h2>
        <p className="mb-4 text-gray-700">
          Use ParkBase’s quick selector to find the best option based on your
          group size and priorities.
        </p>
        <a
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:opacity-90"
        >
          Use the ParkBase transport tool
        </a>
      </section>
    </main>
  );
}