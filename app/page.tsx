"use client";

import Link from "next/link";

export default function Home() {

  return (
    <main style={{fontFamily:"Arial",background:"#f8fafc"}}>

      {/* HERO */}
      <section style={{
        padding:"80px 20px",
        textAlign:"center",
        background:"linear-gradient(120deg,#2563eb,#3b82f6)",
        color:"white"
      }}>

        <h1 style={{fontSize:"48px",marginBottom:"10px"}}>
          Magic Route
        </h1>

        <p style={{fontSize:"22px",opacity:0.9}}>
          The easiest way to plan your trip from LAX Airport to Disneyland
        </p>

      </section>


      {/* QUICK INFO */}
      <section style={{
        maxWidth:"1100px",
        margin:"auto",
        padding:"50px 20px"
      }}>

        <h2 style={{fontSize:"32px"}}>LAX → Disneyland Quick Info</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px",
          marginTop:"25px"
        }}>

          <div style={{
            background:"white",
            padding:"25px",
            borderRadius:"12px",
            boxShadow:"0 3px 10px rgba(0,0,0,0.08)"
          }}>
            <h3>Distance</h3>
            <p>34 miles (55 km)</p>
          </div>

          <div style={{
            background:"white",
            padding:"25px",
            borderRadius:"12px",
            boxShadow:"0 3px 10px rgba(0,0,0,0.08)"
          }}>
            <h3>Travel Time</h3>
            <p>35 – 50 minutes</p>
          </div>

          <div style={{
            background:"white",
            padding:"25px",
            borderRadius:"12px",
            boxShadow:"0 3px 10px rgba(0,0,0,0.08)"
          }}>
            <h3>Best Option</h3>
            <p>Uber or Lyft</p>
          </div>

        </div>

      </section>


      {/* GUIDES */}
      <section style={{
        maxWidth:"1100px",
        margin:"auto",
        padding:"40px 20px"
      }}>

        <h2 style={{fontSize:"32px"}}>Travel Guides</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"20px",
          marginTop:"25px"
        }}>

          <Link href="/guide/lax-to-disneyland" style={{textDecoration:"none"}}>
            <div style={{
              background:"white",
              padding:"25px",
              borderRadius:"12px",
              boxShadow:"0 3px 10px rgba(0,0,0,0.08)"
            }}>
              <h3>LAX to Disneyland Guide</h3>
              <p>Complete transport guide from the airport to Anaheim.</p>
            </div>
          </Link>

          <Link href="/uber-vs-shuttle-lax-disneyland" style={{textDecoration:"none"}}>
            <div style={{
              background:"white",
              padding:"25px",
              borderRadius:"12px",
              boxShadow:"0 3px 10px rgba(0,0,0,0.08)"
            }}>
              <h3>Uber vs Shuttle</h3>
              <p>Compare rideshare and airport shuttle options.</p>
            </div>
          </Link>

          <Link href="/best-way-lax-to-disneyland" style={{textDecoration:"none"}}>
            <div style={{
              background:"white",
              padding:"25px",
              borderRadius:"12px",
              boxShadow:"0 3px 10px rgba(0,0,0,0.08)"
            }}>
              <h3>Best Way to Get There</h3>
              <p>Find the fastest and easiest travel option.</p>
            </div>
          </Link>

          <Link href="/hotels-near-disneyland" style={{textDecoration:"none"}}>
            <div style={{
              background:"white",
              padding:"25px",
              borderRadius:"12px",
              boxShadow:"0 3px 10px rgba(0,0,0,0.08)"
            }}>
              <h3>Hotels Near Disneyland</h3>
              <p>Best hotels within walking distance of the park.</p>
            </div>
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <section style={{
        textAlign:"center",
        padding:"40px",
        background:"#1e293b",
        color:"white",
        marginTop:"40px"
      }}>

        <p>Magic Route — LAX to Disneyland Travel Guide</p>

      </section>

    </main>
  );
}