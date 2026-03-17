"use client";

import Link from "next/link";

export default function UberCostPage() {
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
          Uber from LAX to Disneyland Cost (2026 Guide)
        </h1>

        <p style={{marginTop:"10px",fontSize:"18px"}}>
          Real prices, travel time and tips for families travelling from Los Angeles Airport to Disneyland.
        </p>
      </section>



      {/* QUICK ANSWER */}

      <section style={{marginTop:"40px"}}>

        <h2>How much is an Uber from LAX to Disneyland?</h2>

        <div style={{
          background:"white",
          padding:"20px",
          borderRadius:"12px",
          marginTop:"15px",
          boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
        }}>
          <p><strong>Typical cost:</strong> $60 – $100 USD</p>
          <p><strong>Travel time:</strong> 35 – 50 minutes</p>
          <p><strong>Distance:</strong> 34 miles (55 km)</p>
        </div>

      </section>



      {/* COST BREAKDOWN */}

      <section style={{marginTop:"50px"}}>

        <h2>Uber price breakdown</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"20px",
          marginTop:"20px"
        }}>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚗 UberX</h3>
            <p>$60 – $80</p>
            <p>Best for 1–3 people</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚙 UberXL</h3>
            <p>$80 – $120</p>
            <p>Best for families</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>⚡ Surge pricing</h3>
            <p>Can increase prices by 20–50%</p>
          </div>

        </div>

      </section>



      {/* FACTORS */}

      <section style={{marginTop:"50px"}}>

        <h2>What affects the price?</h2>

        <ul style={{marginTop:"15px",lineHeight:"1.8"}}>
          <li>Time of day (rush hour = more expensive)</li>
          <li>Airport demand and surge pricing</li>
          <li>Type of Uber selected (UberX vs XL)</li>
          <li>Traffic conditions on the freeway</li>
        </ul>

      </section>



      {/* FAMILY TIP */}

      <section style={{marginTop:"50px"}}>

        <div style={{
          background:"#fef3c7",
          padding:"20px",
          borderRadius:"12px"
        }}>
          <h3>👨‍👩‍👧 Family tip</h3>
          <p>
            If you're travelling with kids and luggage, UberXL is usually the best option.
            It costs more but avoids needing two cars.
          </p>
        </div>

      </section>



      {/* MAP */}

      <section style={{marginTop:"60px"}}>

        <h2>Route from LAX to Disneyland</h2>

        <div style={{marginTop:"20px"}}>

          <iframe
            src="https://www.google.com/maps?q=LAX+to+Disneyland&output=embed"
            width="100%"
            height="400"
            style={{border:"0",borderRadius:"14px"}}
            loading="lazy"
          ></iframe>

        </div>

      </section>



      {/* INTERNAL LINKS */}

      <section style={{marginTop:"60px"}}>

        <h2>More Disneyland travel guides</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"20px",
          marginTop:"20px"
        }}>

          <Link href="/uber-vs-shuttle-lax-disneyland">
            <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
              <h3>🚗 Uber vs Shuttle</h3>
              <p>Compare the best transport options</p>
            </div>
          </Link>

          <Link href="/guide/lax-to-disneyland">
            <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
              <h3>✈️ Full LAX Guide</h3>
              <p>All transport options explained</p>
            </div>
          </Link>

          <Link href="/cheap-hotels-near-disneyland">
            <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
              <h3>💰 Cheap Hotels</h3>
              <p>Save money staying near Disneyland</p>
            </div>
          </Link>

        </div>

      </section>

    </div>
  );
}