import Link from "next/link";

export const metadata = {
  title: "Uber vs Shuttle from LAX to Disneyland (2026)",
  description:
    "Compare Uber vs shuttle from LAX to Disneyland. Costs, travel time and best option for families.",
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
        <h1>Uber vs Shuttle from LAX to Disneyland</h1>
        <p>Cost, travel time and best option for families</p>
      </section>



      {/* QUICK ANSWER */}

      <section style={{marginTop:"40px"}}>
        <div style={{background:"#dcfce7",padding:"20px",borderRadius:"12px"}}>
          <h2>💡 Quick Answer</h2>
          <p><strong>Uber is faster</strong></p>
          <p>Shuttle is cheaper and easier for families with kids</p>
        </div>
      </section>



      {/* ⚠️ FAMILY WARNING */}

      <section style={{marginTop:"40px"}}>
        <div style={{background:"#fee2e2",padding:"20px",borderRadius:"12px"}}>
          <h3>⚠️ Car seat consideration</h3>
          <p>
            Uber and Lyft do not typically provide car seats. Families with young
            children may find shuttle services or private transfers easier.
          </p>
        </div>
      </section>



      {/* COMPARISON */}

      <section style={{marginTop:"50px"}}>
        <h2>Compare options</h2>

        <div style={{display:"grid",gap:"20px"}}>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚗 Uber</h3>
            <p>$60 – $100</p>
            <p>35–50 mins</p>
            <p>Best for speed and convenience</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚌 Shuttle</h3>
            <p>$30 – $50</p>
            <p>60–90 mins</p>
            <p>Best for families with young kids</p>
          </div>

        </div>
      </section>



      {/* LINKS */}

      <section style={{marginTop:"60px"}}>

        <Link href="/uber-cost-lax-to-disneyland">
          See Uber cost breakdown →
        </Link>

      </section>

    </div>
  );
}