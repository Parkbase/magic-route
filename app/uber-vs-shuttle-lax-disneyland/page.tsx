import Link from "next/link";

export const metadata = {
  title: "Uber vs Shuttle from LAX to Disneyland (2026)",
  description:
    "Compare Uber vs shuttle from LAX to Disneyland. Costs, travel time and best option for families.",
};

export default function UberVsShuttle() {
  return (
    <div>

      <h1>Uber vs Shuttle from LAX to Disneyland</h1>

      <p>Compare the best ways to get from LAX to Disneyland.</p>

      <section style={{marginTop:"30px"}}>

        <div style={{display:"grid",gap:"20px"}}>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>Uber</h3>
            <p>$60 – $100</p>
            <p>35–50 mins</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>Shuttle</h3>
            <p>$30 – $50</p>
            <p>60–90 mins</p>
          </div>

        </div>

      </section>

      <section style={{marginTop:"40px"}}>

        <p>
          👉 <Link href="/uber-cost-lax-to-disneyland">
            See Uber cost breakdown
          </Link>
        </p>

      </section>

    </div>
  );
}