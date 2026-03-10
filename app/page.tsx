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
          borderRadius: "14px"
        }}
      >
        <h1 style={{fontSize:"50px"}}>
          LAX to Disneyland Travel Planner
        </h1>

        <p style={{fontSize:"22px",marginTop:"10px"}}>
          Transport, hotels and travel tips for visiting Disneyland Resort
        </p>

      </section>


      {/* QUICK TRAVEL INFO */}

      <section style={{marginTop:"60px"}}>

        <h2>Quick Travel Info</h2>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
            gap:"20px",
            marginTop:"20px"
          }}
        >

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>Distance</h3>
            <p>34 miles</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>Travel Time</h3>
            <p>35–50 minutes</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>Best Option</h3>
            <p>Uber / Lyft</p>
          </div>

        </div>

      </section>



      {/* HOTEL GUIDES */}

      <section style={{marginTop:"70px"}}>

        <h2 style={{fontSize:"34px"}}>
          Disneyland Hotel Guides
        </h2>

        <p style={{marginTop:"10px"}}>
          Find the best places to stay near Disneyland Resort in Anaheim.
          Whether you're looking for cheap hotels, family friendly resorts
          or hotels within walking distance of the park.
        </p>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
            gap:"25px",
            marginTop:"30px"
          }}
        >

          {/* Walking Distance */}

          <Link href="/hotels-near-disneyland">

            <div style={{
              background:"white",
              borderRadius:"14px",
              padding:"24px",
              boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
            }}>

              <h3>
                Hotels Within Walking Distance
              </h3>

              <p style={{marginTop:"10px"}}>
                Discover the closest hotels to the Disneyland entrance.
              </p>

            </div>

          </Link>


          {/* Cheap Hotels */}

          <Link href="/cheap-hotels-near-disneyland">

            <div style={{
              background:"white",
              borderRadius:"14px",
              padding:"24px",
              boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
            }}>

              <h3>
                Cheap Hotels Near Disneyland
              </h3>

              <p style={{marginTop:"10px"}}>
                Budget friendly hotels within walking distance of Disneyland.
              </p>

            </div>

          </Link>


          {/* Family Hotels */}

          <Link href="/best-family-hotels-near-disneyland">

            <div style={{
              background:"white",
              borderRadius:"14px",
              padding:"24px",
              boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
            }}>

              <h3>
                Best Hotels for Families
              </h3>

              <p style={{marginTop:"10px"}}>
                Family friendly hotels with pools and suites near Disneyland.
              </p>

            </div>

          </Link>

        </div>

      </section>



      {/* GUIDES */}

      <section style={{marginTop:"70px"}}>

        <h2 style={{fontSize:"34px"}}>
          Travel Guides
        </h2>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
            gap:"25px",
            marginTop:"30px"
          }}
        >

          <Link href="/guide/lax-to-disneyland">

            <div style={{
              background:"white",
              padding:"24px",
              borderRadius:"14px",
              boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
            }}>
              <h3>LAX to Disneyland Guide</h3>
              <p>Complete transport options from LAX.</p>
            </div>

          </Link>


          <Link href="/uber-vs-shuttle-lax-disneyland">

            <div style={{
              background:"white",
              padding:"24px",
              borderRadius:"14px",
              boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
            }}>
              <h3>Uber vs Shuttle</h3>
              <p>Compare the best transport options.</p>
            </div>

          </Link>

        </div>

      </section>

    </div>
  );
}