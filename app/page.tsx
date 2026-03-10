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



      {/* LAX SECTION */}

      <section
        style={{
          marginTop:"60px",
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:"30px",
          alignItems:"center"
        }}
      >

        <img
          src="/images/lax-airport.jpg"
          style={{width:"100%",borderRadius:"14px"}}
        />

        <div>

          <h2>Arriving at LAX Airport</h2>

          <p style={{marginTop:"10px"}}>
            Los Angeles International Airport (LAX) is the main gateway
            for visitors travelling to Disneyland Resort in Anaheim.
          </p>

          <p>
            Most visitors take Uber, Lyft or airport shuttles
            to travel the 34 miles from LAX to Disneyland.
          </p>

          <p>
            The drive typically takes between
            <strong> 35 and 50 minutes</strong>.
          </p>

        </div>

      </section>



      {/* QUICK INFO */}

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



      {/* HOTEL DISTRICT IMAGE */}

      <section style={{marginTop:"70px",textAlign:"center"}}>

        <h2 style={{fontSize:"34px"}}>
          Anaheim Hotel District
        </h2>

        <p style={{marginTop:"10px"}}>
          Many of the best hotels near Disneyland are located
          along Harbor Boulevard directly across from the park entrance.
        </p>

        <img
          src="/images/anaheim-hotels.jpg"
          style={{
            width:"100%",
            borderRadius:"14px",
            marginTop:"20px"
          }}
        />

      </section>



      {/* HOTEL GUIDES */}

      <section style={{marginTop:"70px"}}>

        <h2 style={{fontSize:"34px"}}>
          Disneyland Hotel Guides
        </h2>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
            gap:"25px",
            marginTop:"30px"
          }}
        >

          <Link href="/hotels-near-disneyland">

            <div style={{
              background:"white",
              borderRadius:"14px",
              padding:"24px",
              boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
            }}>

              <span style={{
                background:"#fde68a",
                padding:"4px 8px",
                borderRadius:"8px",
                fontSize:"12px",
                fontWeight:"bold"
              }}>
                🚶 Walking Distance
              </span>

              <h3 style={{marginTop:"10px"}}>
                Hotels Near Disneyland
              </h3>

              <p>Closest hotels to the Disneyland entrance.</p>

            </div>

          </Link>


          <Link href="/cheap-hotels-near-disneyland">

            <div style={{
              background:"white",
              borderRadius:"14px",
              padding:"24px",
              boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
            }}>

              <span style={{
                background:"#bbf7d0",
                padding:"4px 8px",
                borderRadius:"8px",
                fontSize:"12px",
                fontWeight:"bold"
              }}>
                💰 Budget Hotels
              </span>

              <h3 style={{marginTop:"10px"}}>
                Cheap Hotels Near Disneyland
              </h3>

              <p>Affordable hotels within walking distance.</p>

            </div>

          </Link>


          <Link href="/best-family-hotels-near-disneyland">

            <div style={{
              background:"white",
              borderRadius:"14px",
              padding:"24px",
              boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
            }}>

              <span style={{
                background:"#fecaca",
                padding:"4px 8px",
                borderRadius:"8px",
                fontSize:"12px",
                fontWeight:"bold"
              }}>
                👨‍👩‍👧 Family Hotels
              </span>

              <h3 style={{marginTop:"10px"}}>
                Best Hotels for Families
              </h3>

              <p>Family friendly resorts and suites.</p>

            </div>

          </Link>

        </div>

      </section>



      {/* TRAVEL GUIDES */}

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

              <span style={{
                background:"#bfdbfe",
                padding:"4px 8px",
                borderRadius:"8px",
                fontSize:"12px",
                fontWeight:"bold"
              }}>
                ✈️ Airport Guide
              </span>

              <h3 style={{marginTop:"10px"}}>
                LAX to Disneyland Guide
              </h3>

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

              <span style={{
                background:"#ddd6fe",
                padding:"4px 8px",
                borderRadius:"8px",
                fontSize:"12px",
                fontWeight:"bold"
              }}>
                🚗 Transport
              </span>

              <h3 style={{marginTop:"10px"}}>
                Uber vs Shuttle
              </h3>

              <p>Compare the best transport options.</p>

            </div>

          </Link>

        </div>

      </section>

    </div>
  );
}