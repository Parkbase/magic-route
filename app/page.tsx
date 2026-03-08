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
          borderRadius: "14px",
        }}
      >
        <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
          LAX to Disneyland Travel Planner
        </h1>

        <p style={{ fontSize: "22px", opacity: 0.9 }}>
          The easiest way to plan your journey from Los Angeles Airport to Disneyland Resort
        </p>
      </section>


      {/* DISNEY INTRO */}
      <section
        style={{
          marginTop: "50px",
          background: "linear-gradient(120deg,#2563eb,#3b82f6)",
          color: "white",
          padding: "40px",
          borderRadius: "14px",
          textAlign: "center"
        }}
      >
        <h2 style={{fontSize:"32px"}}>Start Your Disneyland Adventure</h2>

        <p style={{marginTop:"10px",fontSize:"18px"}}>
          Getting from LAX to Disneyland is the first step in your California
          adventure. Compare travel options, see the fastest routes, and find
          hotels within walking distance of Disneyland.
        </p>
      </section>


      {/* IMAGE + INTRO */}
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
          src="https://images.unsplash.com/photo-1601735114076-4b3a5f2a4c55"
          style={{
            width: "100%",
            borderRadius: "14px",
          }}
        />

        <div>

          <h2>Planning Your Trip From LAX to Disneyland</h2>

          <p style={{marginTop:"10px"}}>
            Traveling from Los Angeles International Airport to Disneyland
            Resort in Anaheim is one of the first things visitors plan when
            arriving in Southern California.
          </p>

          <p>
            The drive from LAX to Disneyland is around
            <strong> 34 miles</strong> and normally takes
            <strong> 35–50 minutes</strong> depending on traffic.
          </p>

          <p>
            Most travelers choose Uber or Lyft, while others prefer shuttle
            services or private transfers.
          </p>

        </div>

      </section>


      {/* QUICK INFO CARDS */}
      <section style={{marginTop:"60px"}}>

        <h2 style={{marginBottom:"20px"}}>Quick Travel Info</h2>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
            gap:"20px"
          }}
        >

          <div
            style={{
              background:"white",
              padding:"24px",
              borderRadius:"14px",
              boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
            }}
          >
            <h3>Distance</h3>
            <p>34 miles (55 km)</p>
          </div>

          <div
            style={{
              background:"white",
              padding:"24px",
              borderRadius:"14px",
              boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
            }}
          >
            <h3>Travel Time</h3>
            <p>35–50 minutes</p>
          </div>

          <div
            style={{
              background:"white",
              padding:"24px",
              borderRadius:"14px",
              boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
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
          Many visitors prefer staying at hotels within walking distance of
          Disneyland so they can avoid parking fees and maximize their time in
          the parks.
        </p>

        <p>
          Several Anaheim hotels located along Harbor Boulevard are only a
          short walk from the Disneyland park entrance.
        </p>

        <p>
          See the full list of the best{" "}
          <Link href="/hotels-near-disneyland">
            walking distance hotels near Disneyland
          </Link>{" "}
          in our hotel guide.
        </p>

      </section>


      {/* TRAVEL GUIDES */}
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
            <div
              style={{
                background:"white",
                padding:"24px",
                borderRadius:"14px",
                boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
              }}
            >
              <h3>LAX to Disneyland Guide</h3>
              <p>Complete transport options and travel tips.</p>
            </div>
          </Link>

          <Link href="/best-way-lax-to-disneyland">
            <div
              style={{
                background:"white",
                padding:"24px",
                borderRadius:"14px",
                boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
              }}
            >
              <h3>Best Way to Get There</h3>
              <p>Find the fastest route from the airport.</p>
            </div>
          </Link>

          <Link href="/uber-vs-shuttle-lax-disneyland">
            <div
              style={{
                background:"white",
                padding:"24px",
                borderRadius:"14px",
                boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
              }}
            >
              <h3>Uber vs Shuttle</h3>
              <p>Compare the most popular transport options.</p>
            </div>
          </Link>

        </div>

      </section>

    </div>
  );
}