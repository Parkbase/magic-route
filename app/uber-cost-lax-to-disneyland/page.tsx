import Link from "next/link";

export const metadata = {
  title: "Uber from LAX to Disneyland Cost (2026) – Prices, Time & Tips",
  description:
    "How much is an Uber from LAX to Disneyland? See real prices, travel time, UberXL costs and tips for families.",
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
        <h1>Uber from LAX to Disneyland Cost</h1>
        <p>Prices, travel time and tips for families</p>
      </section>



      {/* QUICK ANSWER */}

      <section style={{marginTop:"40px"}}>
        <div style={{background:"#dcfce7",padding:"20px",borderRadius:"12px"}}>
          <h2>💡 Quick Answer</h2>
          <p><strong>$60 – $100</strong></p>
          <p>⏱ 35–50 minutes</p>
        </div>
      </section>



      {/* ⚠️ FAMILY NOTE */}

      <section style={{marginTop:"40px"}}>
        <div style={{background:"#fee2e2",padding:"20px",borderRadius:"12px"}}>
          <h3>⚠️ Important for families</h3>
          <p>
            Uber does NOT usually provide car seats. If travelling with young children,
            you may need to bring your own or consider a shuttle or private transfer.
          </p>
        </div>
      </section>



      {/* OPTIONS */}

      <section style={{marginTop:"50px"}}>
        <h2>Uber options</h2>

        <div style={{display:"grid",gap:"20px"}}>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚗 UberX</h3>
            <p>$60 – $80</p>
            <p>Best for adults or light travel</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚙 UberXL</h3>
            <p>$80 – $120</p>
            <p>Best for families with luggage (bring car seats if needed)</p>
          </div>

        </div>
      </section>



      {/* LINKS */}

      <section style={{marginTop:"60px"}}>

        <Link href="/uber-vs-shuttle-lax-disneyland">
          Compare Uber vs Shuttle →
        </Link>

      </section>

    </div>
  );
}