"use client";

import Link from "next/link";

export const metadata = {
  title: "Uber vs Shuttle from LAX to Disneyland (2026) – Cost & Time Compared",
  description:
    "Uber or shuttle from LAX to Disneyland? Compare prices, travel time, and the best option for families travelling to Anaheim.",
};

export default function UberVsShuttle() {
  return (
    <div>

      <h1 style={{fontSize:"42px"}}>
        Uber vs Shuttle from LAX to Disneyland
      </h1>

      <p style={{marginTop:"10px"}}>
        Choosing between Uber and shuttle services is one of the biggest
        decisions when travelling from LAX to Disneyland.
      </p>



      {/* COMPARISON */}

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:"20px",
        marginTop:"30px"
      }}>

        <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
          <h3>🚗 Uber</h3>
          <p>$60 – $100</p>
          <p>35–50 mins</p>
          <p>Fastest option</p>
        </div>

        <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
          <h3>🚌 Shuttle</h3>
          <p>$30 – $50</p>
          <p>60–90 mins</p>
          <p>Cheaper but slower</p>
        </div>

      </div>



      {/* LINK TO COST PAGE */}

      <section style={{marginTop:"40px"}}>

        <div style={{
          background:"#e0f2fe",
          padding:"20px",
          borderRadius:"12px"
        }}>
          <h3>💡 Want exact Uber pricing?</h3>
          <p>
            <Link href="/uber-cost-lax-to-disneyland">
              See full Uber cost breakdown from LAX to Disneyland →
            </Link>
          </p>
        </div>

      </section>



      {/* INTERNAL LINKS */}

      <section style={{marginTop:"60px"}}>

        <h2>More travel guides</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"20px",
          marginTop:"20px"
        }}>

          <Link href="/guide/lax-to-disneyland">
            <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
              <h3>✈️ Full LAX Guide</h3>
            </div>
          </Link>

          <Link href="/cheap-hotels-near-disneyland">
            <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
              <h3>💰 Cheap Hotels</h3>
            </div>
          </Link>

        </div>

      </section>

    </div>
  );
}