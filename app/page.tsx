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
          Transport, hotels and travel tips for Disneyland trips
        </p>
      </section>



      {/* 🔥 FEATURED SECTION (THIS IS NEW + IMPORTANT) */}

      <section style={{marginTop:"60px"}}>

        <div style={{
          background:"#e0f2fe",
          padding:"30px",
          borderRadius:"14px"
        }}>

          <h2 style={{fontSize:"32px"}}>
            ✨ Best Way to Get from LAX to Disneyland
          </h2>

          <p style={{marginTop:"10px"}}>
            The easiest and fastest way for most families is Uber or Lyft.
            See full transport options, pricing and travel times.
          </p>

          <Link href="/best-way-lax-to-disneyland">

            <div style={{
              marginTop:"20px",
              background:"white",
              padding:"20px",
              borderRadius:"12px",
              display:"inline-block"
            }}>
              👉 View full guide
            </div>

          </Link>

        </div>

      </section>



      {/* CLOSEST HOTELS */}

      <section style={{marginTop:"60px"}}>

        <h2 style={{fontSize:"34px"}}>
          Closest Hotels to Disneyland Entrance
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"25px",
          marginTop:"20px"
        }}>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>Desert Inn & Suites</h3>
            <p>🚶 3 min walk</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>Park Place Inn</h3>
            <p>🚶 4 min walk</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>Grand Californian</h3>
            <p>🚶 5 min walk</p>
          </div>

        </div>

      </section>



      {/* LAX IMAGE SECTION */}

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
            Most visitors travel 34 miles from LAX to Disneyland.
          </p>

          <p>
            Uber is usually the fastest and easiest option.
          </p>

        </div>

      </section>



      {/* HOTEL IMAGE */}

      <section style={{marginTop:"70px",textAlign:"center"}}>

        <h2 style={{fontSize:"34px"}}>
          Anaheim Hotel District
        </h2>

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

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"25px",
          marginTop:"20px"
        }}>

          <Link href="/hotels-near-disneyland">
            <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
              🚶 Hotels Near Disneyland
            </div>
          </Link>

          <Link href="/cheap-hotels-near-disneyland">
            <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
              💰 Cheap Hotels
            </div>
          </Link>

          <Link href="/best-family-hotels-near-disneyland">
            <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
              👨‍👩‍👧 Family Hotels
            </div>
          </Link>

        </div>

      </section>



      {/* TRANSPORT GUIDES */}

      <section style={{marginTop:"70px"}}>

        <h2 style={{fontSize:"34px"}}>
          Transport Guides
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"25px",
          marginTop:"20px"
        }}>

          <Link href="/uber-cost-lax-to-disneyland">
            <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
              🚗 Uber Cost Guide
            </div>
          </Link>

          <Link href="/uber-vs-shuttle-lax-disneyland">
            <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
              🚌 Uber vs Shuttle
            </div>
          </Link>

        </div>

      </section>

    </div>
  );
}