import Link from "next/link";

export const metadata = {
  title: "Uber from LAX to Disneyland Cost (2026) – Prices, Time & Tips",
  description:
    "How much is an Uber from LAX to Disneyland? See real prices, travel time, UberXL costs for families, and tips.",
};

export default function UberCostPage() {
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
          Uber from LAX to Disneyland Cost
        </h1>

        <p style={{marginTop:"10px",fontSize:"18px"}}>
          Real prices, travel time and tips for families visiting Disneyland
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
          <p><strong>$60 – $100</strong> depending on time and traffic</p>
          <p>⏱ 35–50 minutes travel time</p>
        </div>

      </section>



      {/* CARDS */}

      <section style={{marginTop:"50px"}}>

        <h2>Uber options</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"20px",
          marginTop:"20px"
        }}>

          <div style={{
            background:"white",
            padding:"20px",
            borderRadius:"14px",
            boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
          }}>
            <h3>🚗 UberX</h3>
            <p>$60 – $80</p>
            <p>Best for couples</p>
          </div>

          <div style={{
            background:"white",
            padding:"20px",
            borderRadius:"14px",
            boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
          }}>
            <h3>🚙 UberXL</h3>
            <p>$80 – $120</p>
            <p>Best for families</p>
          </div>

        </div>

      </section>



      {/* FAMILY TIP */}

      <section style={{marginTop:"50px"}}>

        <div style={{
          background:"#fef3c7",
          padding:"20px",
          borderRadius:"12px"
        }}>
          <h3>👨‍👩‍👧 Family Tip</h3>
          <p>
            UberXL is usually the best option if you have kids and luggage.
            It avoids needing multiple cars.
          </p>
        </div>

      </section>



      {/* WHY PRICE CHANGES */}

      <section style={{marginTop:"50px"}}>

        <h2>Why Uber prices change</h2>

        <ul style={{lineHeight:"1.8"}}>
          <li>Traffic (LA traffic is unpredictable)</li>
          <li>Time of day</li>
          <li>Airport demand</li>
          <li>Surge pricing</li>
        </ul>

      </section>



      {/* LINKS */}

      <section style={{marginTop:"60px"}}>

        <h2>More transport guides</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"20px",
          marginTop:"20px"
        }}>

          <Link href="/uber-vs-shuttle-lax-disneyland">
            <div style={{
              background:"white",
              padding:"20px",
              borderRadius:"12px"
            }}>
              🚗 Uber vs Shuttle
            </div>
          </Link>

          <Link href="/best-way-lax-to-disneyland">
            <div style={{
              background:"white",
              padding:"20px",
              borderRadius:"12px"
            }}>
              ⭐ Best Way Guide
            </div>
          </Link>

        </div>

      </section>

    </div>
  );
}