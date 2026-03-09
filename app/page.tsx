import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=1600&q=80') center/cover",
          color: "white",
          padding: "120px 20px",
          textAlign: "center",
          borderRadius: "14px",
        }}
      >
        <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
          LAX to Disneyland Travel Planner
        </h1>

        <p style={{ fontSize: "22px", opacity: 0.9 }}>
          The easiest way to travel from Los Angeles Airport to Disneyland Resort
        </p>
      </section>


      {/* LAX SECTION */}
      <section
        style={{
          marginTop: "60px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          alignItems: "center",
        }}
      >

        <img
          src="https://images.unsplash.com/photo-1504198266285-165a1d6b96f2?auto=format&fit=crop&w=1200&q=80"
          style={{ width: "100%", borderRadius: "14px" }}
        />

        <div>

          <h2>Arriving at LAX Airport</h2>

          <p style={{marginTop:"10px"}}>
            Los Angeles International Airport (LAX) is the main gateway
            for visitors traveling to Disneyland Resort in Anaheim.
          </p>

          <p>
            After landing, travelers typically use Uber, Lyft,
            airport shuttles, or private transfers.
          </p>

          <p>
            The drive from LAX to Disneyland is around
            <strong> 34 miles</strong> and normally takes
            <strong> 35–50 minutes</strong>.
          </p>

        </div>

      </section>


      {/* QUICK INFO */}
      <section style={{marginTop:"60px"}}>

        <h2 style={{marginBottom:"20px"}}>Quick Travel Info</h2>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
            gap:"20px"
          }}
        >

          <div style={{background:"white",padding:"24px",borderRadius:"14px",boxShadow:"0 8px 20px rgba(0,0,0,0.08)"}}>
            <h3>Distance</h3>
            <p>34 miles (55 km)</p>
          </div>

          <div style={{background:"white",padding:"24px",borderRadius:"14px",boxShadow:"0 8px 20px rgba(0,0,0,0.08)"}}>
            <h3>Travel Time</h3>
            <p>35–50 minutes</p>
          </div>

          <div style={{background:"white",padding:"24px",borderRadius:"14px",boxShadow:"0 8px 20px rgba(0,0,0,0.08)"}}>
            <h3>Best Option</h3>
            <p>Uber or Lyft</p>
          </div>

        </div>

      </section>


      {/* DISNEYLAND SECTION */}
      <section
        style={{
          marginTop:"60px",
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:"30px",
          alignItems:"center"
        }}
      >

        <div>

          <h2>Visit Disneyland Resort</h2>

          <p style={{marginTop:"10px"}}>
            Disneyland Resort in Anaheim is one of the most famous
            theme parks in the world. Millions of travelers fly
            into LAX every year before heading to the park.
          </p>

          <p>
            Planning your transportation before arriving helps
            make your Disneyland adventure smooth and stress-free.
          </p>

        </div>

        <img
          src="https://images.unsplash.com/photo-1522098543979-ffc7f79d1a8a?auto=format&fit=crop&w=1200&q=80"
          style={{width:"100%",borderRadius:"14px"}}
        />

      </section>


      {/* WALKING DISTANCE HOTELS */}
      <section
        style={{
          marginTop:"60px",
          background:"#fff7ed",
          padding:"40px",
          borderRadius:"14px"
        }}
      >

        <h2 style={{color:"#f59e0b"}}>
          Hotels Within Walking Distance of Disneyland
        </h2>

        <p style={{marginTop:"10px"}}>
          Many visitors stay at hotels within walking distance
          of Disneyland so they can avoid parking fees and
          maximize time inside the parks.
        </p>

        <p>
          Anaheim hotels along Harbor Boulevard are only a few
          minutes walk from the Disneyland entrance.
        </p>

        <p>
          See the best{" "}
          <Link href="/hotels-near-disneyland">
            walking distance hotels near Disneyland
          </Link>{" "}
          in our guide.
        </p>

      </section>


      {/* HOTEL DISTRICT IMAGE */}
      <section style={{marginTop:"60px",textAlign:"center"}}>

        <h2 style={{marginBottom:"20px"}}>
          Anaheim Hotel District
        </h2>

        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
          style={{width:"100%",borderRadius:"14px"}}
        />

      </section>


      {/* GUIDES */}
      <section style={{marginTop:"60px"}}>

        <h2 style={{marginBottom:"20px"}}>Travel Guides</h2>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
            gap:"20px"
          }}
        >

          <Link href="/guide/lax-to-disneyland">
            <div style={{background:"white",padding:"24px",borderRadius:"14px",boxShadow:"0 8px 20px rgba(0,0,0,0.08)"}}>
              <h3>LAX to Disneyland Guide</h3>
              <p>Complete transport options and tips.</p>
            </div>
          </Link>

          <Link href="/best-way-lax-to-disneyland">
            <div style={{background:"white",padding:"24px",borderRadius:"14px",boxShadow:"0 8px 20px rgba(0,0,0,0.08)"}}>
              <h3>Best Way to Get There</h3>
              <p>Find the fastest route.</p>
            </div>
          </Link>

          <Link href="/uber-vs-shuttle-lax-disneyland">
            <div style={{background:"white",padding:"24px",borderRadius:"14px",boxShadow:"0 8px 20px rgba(0,0,0,0.08)"}}>
              <h3>Uber vs Shuttle</h3>
              <p>Compare transport options.</p>
            </div>
          </Link>

        </div>

      </section>

    </div>
  );
}