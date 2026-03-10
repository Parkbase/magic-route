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



      {/* CLOSEST HOTELS STRIP */}

      <section style={{marginTop:"60px"}}>

        <h2 style={{fontSize:"34px"}}>
          Closest Hotels to Disneyland Entrance
        </h2>

        <p style={{marginTop:"10px"}}>
          These hotels are located directly across Harbor Boulevard from the
          Disneyland entrance and are some of the shortest walks to the park.
        </p>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
            gap:"25px",
            marginTop:"30px"
          }}
        >

          <div style={{
            background:"white",
            borderRadius:"14px",
            padding:"24px",
            boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
          }}>
            <h3>Desert Inn & Suites</h3>
            <p>🚶 3 minute walk</p>
            <p>💰 Budget</p>
          </div>


          <div style={{
            background:"white",
            borderRadius:"14px",
            padding:"24px",
            boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
          }}>
            <h3>Best Western Park Place Inn</h3>
            <p>🚶 4 minute walk</p>
            <p>💰💰 Mid-range</p>
          </div>


          <div style={{
            background:"white",
            borderRadius:"14px",
            padding:"24px",
            boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
          }}>
            <h3>Disney Grand Californian</h3>
            <p>🚶 5 minute walk</p>
            <p>💰💰💰 Luxury</p>
          </div>

        </div>

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
              <h3>🚶 Hotels Near Disneyland</h3>
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
              <h3>💰 Cheap Hotels</h3>
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
              <h3>👨‍👩‍👧 Family Hotels</h3>
              <p>Family friendly resorts and suites.</p>
            </div>
          </Link>

        </div>

      </section>

    </div>
  );
}