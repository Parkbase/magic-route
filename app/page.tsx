import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/disneyland-castle.jpg') center/cover",
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
          The easiest way to get from Los Angeles Airport to Disneyland Resort
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
          src="/images/lax-airport.jpg"
          style={{ width: "100%", borderRadius: "14px" }}
        />

        <div>

          <h2>Arriving at LAX Airport</h2>

          <p style={{marginTop:"10px"}}>
            Los Angeles International Airport (LAX) is the main gateway
            for visitors travelling to Disneyland Resort in Anaheim.
          </p>

          <p>
            After landing, travelers usually take Uber, Lyft, airport
            shuttles, or private transfers to reach Disneyland.
          </p>

          <p>
            The drive from LAX to Disneyland is about
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
            theme parks in the world.
          </p>

          <p>
            Millions of visitors fly into LAX every year before
            heading to the park.
          </p>

          <p>
            Planning transportation ahead of time helps make
            your Disneyland trip smooth and stress-free.
          </p>

        </div>

        <img
          src="/images/disneyland-entrance.jpg"
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
          Anaheim hotels along Harbor Boulevard are only
          a few minutes walk from the Disneyland entrance.
        </p>

        <p>
          See the best{" "}
          <Link href="/hotels-near-disneyland">
            walking distance hotels near Disneyland
          </Link>{" "}
          in our guide.
        </p>

      </section>


      {/* ANAHEIM HOTELS IMAGE */}
      <section style={{marginTop:"60px",textAlign:"center"}}>

        <h2 style={{marginBottom:"20px"}}>
          Anaheim Hotel District
        </h2>

        <img
          src="/images/anaheim-hotels.jpg"
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