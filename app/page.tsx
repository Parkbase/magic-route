import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1601735114076-4b3a5f2a4c55') center/cover",
          color: "white",
          padding: "120px 20px",
          textAlign: "center",
          borderRadius: "12px",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          LAX to Disneyland Travel Guide
        </h1>

        <p style={{ fontSize: "20px", opacity: 0.9 }}>
          Plan the easiest route from Los Angeles Airport to Disneyland Resort
        </p>
      </section>


      {/* IMAGE + INTRO SECTION */}
      <section
        style={{
          marginTop: "50px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          alignItems: "center",
        }}
      >

        <img
          src="https://images.unsplash.com/photo-1601735114076-4b3a5f2a4c55"
          style={{
            width: "100%",
            borderRadius: "12px",
          }}
        />

        <div>

          <h2>Planning Your Trip From LAX to Disneyland</h2>

          <p style={{ marginTop: "10px" }}>
            Traveling from Los Angeles International Airport to Disneyland
            Resort in Anaheim is one of the first things visitors need to plan
            when arriving in Southern California.
          </p>

          <p>
            The drive from LAX to Disneyland is roughly
            <strong> 34 miles</strong> and normally takes
            <strong> 35–50 minutes</strong> depending on traffic.
          </p>

          <p>
            Most visitors use Uber or Lyft, while others choose shuttle
            transfers or private transport services.
          </p>

        </div>

      </section>


      {/* QUICK INFO CARDS */}
      <section style={{ marginTop: "50px" }}>

        <h2 style={{ marginBottom: "20px" }}>Quick Travel Info</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Distance</h3>
            <p>34 miles (55 km)</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Travel Time</h3>
            <p>35–50 minutes</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Best Option</h3>
            <p>Uber or Lyft</p>
          </div>

        </div>

      </section>


      {/* WALKING DISTANCE HOTELS */}
      <section
        style={{
          marginTop: "60px",
          background: "#f1f5f9",
          padding: "40px",
          borderRadius: "12px",
        }}
      >

        <h2>Hotels Within Walking Distance of Disneyland</h2>

        <p style={{ marginTop: "10px" }}>
          Many visitors prefer staying at hotels within walking distance of
          Disneyland so they can avoid parking fees and maximize time in the
          parks.
        </p>

        <p>
          The Harbor Boulevard area near the park entrance has several hotels
          located just a few minutes walk from the Disneyland gates.
        </p>

        <p>
          See the full list of the best{" "}
          <Link href="/hotels-near-disneyland">
            walking distance hotels near Disneyland
          </Link>{" "}
          in our guide.
        </p>

      </section>


      {/* TRAVEL GUIDES */}
      <section style={{ marginTop: "50px" }}>

        <h2 style={{ marginBottom: "20px" }}>Travel Guides</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >

          <Link href="/guide/lax-to-disneyland">
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                cursor: "pointer",
              }}
            >
              <h3>LAX to Disneyland Guide</h3>
              <p>Complete transport options and tips.</p>
            </div>
          </Link>

          <Link href="/best-way-lax-to-disneyland">
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                cursor: "pointer",
              }}
            >
              <h3>Best Way to Get There</h3>
              <p>Find the fastest option.</p>
            </div>
          </Link>

          <Link href="/uber-vs-shuttle-lax-disneyland">
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                cursor: "pointer",
              }}
            >
              <h3>Uber vs Shuttle</h3>
              <p>Compare transport options.</p>
            </div>
          </Link>

        </div>

      </section>

    </div>
  );
}