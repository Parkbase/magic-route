import Link from "next/link";

export const metadata = {
  title: "Best Way to Get from LAX to Disneyland (2026 Guide)",
  description:
    "Best way to get from LAX to Disneyland? Compare Uber, shuttle, taxi and travel times. Full guide for families visiting Disneyland.",
};

export default function BestWayPage() {
  return (
    <div>

      {/* HERO */}

      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/lax-airport.jpg') center/cover",
          color: "white",
          padding: "100px 20px",
          borderRadius: "14px"
        }}
      >
        <h1 style={{fontSize:"42px"}}>
          Best Way to Get from LAX to Disneyland
        </h1>

        <p style={{marginTop:"10px",fontSize:"18px"}}>
          Compare Uber, shuttle, taxi and travel time — the easiest way for families.
        </p>
      </section>



      {/* QUICK ANSWER */}

      <section style={{marginTop:"40px"}}>

        <h2>Quick answer</h2>

        <div style={{
          background:"white",
          padding:"20px",
          borderRadius:"12px",
          marginTop:"15px",
          boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
        }}>
          <p><strong>Best option:</strong> Uber or Lyft</p>
          <p><strong>Travel time:</strong> 35–50 minutes</p>
          <p><strong>Cost:</strong> $60 – $100</p>
        </div>

      </section>



      {/* OPTIONS */}

      <section style={{marginTop:"50px"}}>

        <h2>Transport options compared</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"20px",
          marginTop:"20px"
        }}>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚗 Uber / Lyft</h3>
            <p>$60 – $100</p>
            <p>35–50 mins</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚌 Shuttle</h3>
            <p>$30 – $50</p>
            <p>60–90 mins</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚕 Taxi</h3>
            <p>$100+</p>
            <p>40 mins</p>
          </div>

        </div>

      </section>



      {/* LINKS */}

      <section style={{marginTop:"50px"}}>

        <h2>More details</h2>

        <p>
          👉 <Link href="/uber-cost-lax-to-disneyland">
            See Uber cost breakdown
          </Link>
        </p>

        <p>
          👉 <Link href="/uber-vs-shuttle-lax-disneyland">
            Compare Uber vs Shuttle
          </Link>
        </p>

      </section>



      {/* MAP */}

      <section style={{marginTop:"60px"}}>

        <h2>Route</h2>

        <iframe
          src="https://www.google.com/maps?q=LAX+to+Disneyland&output=embed"
          width="100%"
          height="400"
          style={{border:"0",borderRadius:"14px"}}
          loading="lazy"
        ></iframe>

      </section>



      {/* HOTELS */}

      <section style={{marginTop:"60px"}}>

        <h2>Where to stay</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"20px",
          marginTop:"20px"
        }}>

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

    </div>
  );
}