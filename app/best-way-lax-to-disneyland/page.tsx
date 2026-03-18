import Link from "next/link";

export const metadata = {
  title: "Best Way to Get from LAX to Disneyland (2026 Guide)",
  description:
    "Best way to get from LAX to Disneyland with kids? Compare Uber, shuttle, taxi and car seat options for families.",
};

export default function BestWayPage() {
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
          Best Way to Get from LAX to Disneyland
        </h1>

        <p style={{marginTop:"10px",fontSize:"18px"}}>
          The best option depends on your family, luggage and whether you need car seats.
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
          <p><strong>Best overall:</strong> Uber or Lyft</p>
          <p><strong>Best with young kids:</strong> Shuttle or pre-booked car with car seats</p>
        </div>

      </section>



      {/* FAMILY WARNING */}

      <section style={{marginTop:"40px"}}>

        <div style={{
          background:"#fee2e2",
          padding:"20px",
          borderRadius:"12px"
        }}>
          <h3>⚠️ Important for families</h3>
          <p>
            Uber and Lyft typically do NOT provide car seats. If you're travelling
            with young children, you may need to bring your own or choose a shuttle
            or private transfer service that offers them.
          </p>
        </div>

      </section>



      {/* OPTIONS */}

      <section style={{marginTop:"50px"}}>

        <h2>Transport options compared</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"20px",
          marginTop:"20px"
        }}>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚗 Uber / Lyft</h3>
            <p>$60 – $100</p>
            <p>35–50 mins</p>
            <p>Best for convenience</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚌 Shuttle</h3>
            <p>$30 – $50</p>
            <p>60–90 mins</p>
            <p>Better for kids (no car seat stress)</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚕 Private transfer</h3>
            <p>$120+</p>
            <p>40 mins</p>
            <p>Can include car seats</p>
          </div>

        </div>

      </section>



      {/* DETAILS */}

      <section style={{marginTop:"50px"}}>

        <h2>Uber from LAX</h2>

        <p>
          Uber is the fastest and easiest option, but may not be ideal for
          families needing car seats.
        </p>

        <p>
          👉 <Link href="/uber-cost-lax-to-disneyland">
            See Uber cost breakdown
          </Link>
        </p>

      </section>



      <section style={{marginTop:"40px"}}>

        <h2>Shuttle services</h2>

        <p>
          Shuttles are slower but often easier for families, especially
          if you don’t want to deal with car seats.
        </p>

        <p>
          👉 <Link href="/uber-vs-shuttle-lax-disneyland">
            Compare Uber vs Shuttle
          </Link>
        </p>

      </section>



      {/* MAP */}

      <section style={{marginTop:"60px"}}>

        <h2>Route from LAX to Disneyland</h2>

        <iframe
          src="https://www.google.com/maps?q=LAX+to+Disneyland&output=embed"
          width="100%"
          height="400"
          style={{border:"0",borderRadius:"14px"}}
          loading="lazy"
        ></iframe>

      </section>



      {/* HOTELS */}

      <section style={{marginTop:"60px"}}>

        <h2>Where to stay near Disneyland</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"20px",
          marginTop:"20px"
        }}>

          <Link href="/cheap-hotels-near-disneyland">
            <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
              💰 Cheap Hotels
            </div>
          </Link>

          <Link href="/best-family-hotels-near-disneyland">
            <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
              👨‍👩‍👧 Family Hotels
            </div>
          </Link>

        </div>

      </section>

    </div>
  );
}