import Link from "next/link";

export const metadata = {
  title: "Uber vs Shuttle from LAX to Disneyland (2026) – Cost & Time Compared",
  description:
    "Uber or shuttle from LAX to Disneyland? Compare prices, travel time and the best option for families travelling to Anaheim.",
};

export default function UberVsShuttle() {
  return (
    <div>

      {/* HERO */}

      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/lax-airport.jpg') center/cover",
          color: "white",
          padding: "120px 20px",
          borderRadius: "14px"
        }}
      >
        <h1 style={{fontSize:"42px"}}>
          Uber vs Shuttle from LAX to Disneyland
        </h1>

        <p style={{marginTop:"10px",fontSize:"18px"}}>
          Which is cheaper, faster and best for families?
        </p>
      </section>



      {/* QUICK ANSWER */}

      <section style={{marginTop:"40px"}}>

        <div style={{
          background:"#dcfce7",
          padding:"20px",
          borderRadius:"12px"
        }}>
          <h2>💡 Quick Answer</h2>
          <p><strong>Uber is faster and easier</strong></p>
          <p>Shuttles are cheaper but slower due to multiple stops</p>
        </div>

      </section>



      {/* COMPARISON CARDS */}

      <section style={{marginTop:"50px"}}>

        <h2>Compare Uber vs Shuttle</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"20px",
          marginTop:"20px"
        }}>

          {/* UBER */}

          <div style={{
            background:"white",
            padding:"20px",
            borderRadius:"14px",
            boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
          }}>
            <h3>🚗 Uber</h3>
            <p><strong>Cost:</strong> $60 – $100</p>
            <p><strong>Time:</strong> 35–50 minutes</p>
            <p>✔ Direct trip</p>
            <p>✔ Best for families</p>
          </div>


          {/* SHUTTLE */}

          <div style={{
            background:"white",
            padding:"20px",
            borderRadius:"14px",
            boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
          }}>
            <h3>🚌 Shuttle</h3>
            <p><strong>Cost:</strong> $30 – $50</p>
            <p><strong>Time:</strong> 60–90 minutes</p>
            <p>✔ Cheaper</p>
            <p>✖ Multiple stops</p>
          </div>

        </div>

      </section>



      {/* FAMILY SECTION */}

      <section style={{marginTop:"50px"}}>

        <div style={{
          background:"#fef3c7",
          padding:"20px",
          borderRadius:"12px"
        }}>
          <h3>👨‍👩‍👧 Best option for families</h3>
          <p>
            UberXL is usually the easiest option with kids and luggage.
            It’s faster, more comfortable, and avoids waiting for other passengers.
          </p>
        </div>

      </section>



      {/* COST DETAIL LINK */}

      <section style={{marginTop:"50px"}}>

        <div style={{
          background:"#e0f2fe",
          padding:"20px",
          borderRadius:"12px"
        }}>
          <h3>💰 Want exact Uber pricing?</h3>

          <p>
            <Link href="/uber-cost-lax-to-disneyland">
              See full Uber cost breakdown →
            </Link>
          </p>

        </div>

      </section>



      {/* WHY PEOPLE CHOOSE */}

      <section style={{marginTop:"50px"}}>

        <h2>Which should you choose?</h2>

        <ul style={{lineHeight:"1.8"}}>
          <li>Choose Uber if you want speed and convenience</li>
          <li>Choose Shuttle if you want to save money</li>
          <li>Families usually prefer UberXL</li>
        </ul>

      </section>



      {/* INTERNAL LINKS */}

      <section style={{marginTop:"60px"}}>

        <h2>More guides</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"20px",
          marginTop:"20px"
        }}>

          <Link href="/best-way-lax-to-disneyland">
            <div style={{
              background:"white",
              padding:"20px",
              borderRadius:"12px"
            }}>
              ⭐ Best Way Guide
            </div>
          </Link>

          <Link href="/cheap-hotels-near-disneyland">
            <div style={{
              background:"white",
              padding:"20px",
              borderRadius:"12px"
            }}>
              💰 Cheap Hotels
            </div>
          </Link>

        </div>

      </section>

    </div>
  );
}