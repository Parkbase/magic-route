import Link from "next/link";

export const metadata = {
  title: "Uber from LAX to Disneyland Cost (2026) – Prices, Time & Tips",
  description:
    "How much is an Uber from LAX to Disneyland? See real prices, travel time, UberXL costs for families, and tips.",
};

export default function UberCostPage() {
  return (
    <div>

      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/lax-airport.jpg') center/cover",
          color: "white",
          padding: "100px 20px",
          borderRadius: "14px"
        }}
      >
        <h1>Uber from LAX to Disneyland Cost</h1>
        <p>Prices, time and tips for families travelling to Disneyland.</p>
      </section>

      <section style={{marginTop:"40px"}}>
        <h2>Typical Uber cost</h2>

        <div style={{
          background:"white",
          padding:"20px",
          borderRadius:"12px"
        }}>
          <p>$60 – $100</p>
          <p>35–50 minutes</p>
        </div>
      </section>

      <section style={{marginTop:"50px"}}>
        <h2>Price breakdown</h2>

        <div style={{display:"grid",gap:"20px"}}>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>UberX</h3>
            <p>$60 – $80</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>UberXL</h3>
            <p>$80 – $120</p>
          </div>

        </div>
      </section>

      <section style={{marginTop:"50px"}}>
        <h2>More guides</h2>

        <p>
          <Link href="/uber-vs-shuttle-lax-disneyland">
            Compare Uber vs Shuttle
          </Link>
        </p>

      </section>

    </div>
  );
}