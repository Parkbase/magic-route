"use client";

import { useState } from "react";
import Link from "next/link";
import RouteMap from "./components/RouteMap";

export default function Home() {

  const [transport, setTransport] = useState("uber");

  const options:any = {
    uber:{time:"35–50 minutes",price:"$70–$110"},
    shuttle:{time:"60–90 minutes",price:"$30–$45 per person"},
    private:{time:"35–45 minutes",price:"$120+"}
  }

  return (
    <main style={{maxWidth:"1100px",margin:"auto",padding:"40px"}}>

      {/* HERO */}
      <h1 style={{fontSize:"44px",marginBottom:"10px"}}>
        Magic Route
      </h1>

      <p style={{fontSize:"20px",color:"#555"}}>
        Plan the easiest trip from LAX Airport to Disneyland Resort.
      </p>


      {/* ESTIMATOR TOOL */}
      <div style={{
        background:"#f5f5f5",
        padding:"30px",
        borderRadius:"10px",
        marginTop:"40px"
      }}>

        <h2>Transport Estimator</h2>

        <p>Select a transport option to estimate time and cost.</p>

        <select
          value={transport}
          onChange={(e)=>setTransport(e.target.value)}
          style={{padding:"10px",marginTop:"15px"}}
        >
          <option value="uber">Uber / Lyft</option>
          <option value="shuttle">Airport Shuttle</option>
          <option value="private">Private Transfer</option>
        </select>

        <div style={{marginTop:"25px",fontSize:"18px"}}>
          <p><b>Estimated Travel Time:</b> {options[transport].time}</p>
          <p><b>Estimated Cost:</b> {options[transport].price}</p>
        </div>

      </div>


      {/* MAP */}
      <RouteMap />


      {/* GUIDES */}
      <h2 style={{marginTop:"50px"}}>Helpful Guides</h2>

      <ul style={{fontSize:"18px",lineHeight:"32px"}}>

        <li>
          <Link href="/guide/lax-to-disneyland">
            Complete LAX → Disneyland Guide
          </Link>
        </li>

        <li>
          <Link href="/uber-vs-shuttle-lax-disneyland">
            Uber vs Shuttle Comparison
          </Link>
        </li>

        <li>
          <Link href="/best-way-lax-to-disneyland">
            Best Way to Get From LAX to Disneyland
          </Link>
        </li>

        <li>
          <Link href="/hotels-near-disneyland">
            Hotels Near Disneyland
          </Link>
        </li>

      </ul>

    </main>
  );
}