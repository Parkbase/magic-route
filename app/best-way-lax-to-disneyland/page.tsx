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
          The best option depends on your family, luggage and car seat needs.
        </p>
      </section>



      {/* QUICK ANSWER */}

      <section style={{marginTop:"40px"}}>
        <div style={{background:"#dcfce7",padding:"20px",borderRadius:"12px"}}>
          <h2>💡 Quick Answer</h2>
          <p><strong>Best overall:</strong> Uber or Lyft</p>
          <p><strong>Best with young kids:</strong> Shuttle or private transfer with car seats</p>
        </div>
      </section>



      {/* FAMILY WARNING */}

      <section style={{marginTop:"40px"}}>
        <div style={{background:"#fee2e2",padding:"20px",borderRadius:"12px"}}>
          <h3>⚠️ Important for families</h3>
          <p>
            Uber and Lyft typically do NOT provide car seats. If travelling with
            young children, you may need to bring your own or choose a shuttle
            or private transfer service.
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
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚌 Shuttle</h3>
            <p>$30 – $50</p>
            <p>60–90 mins</p>
          </div>

          <div style={{background:"white",padding:"20px",borderRadius:"12px"}}>
            <h3>🚕 Private transfer</h3>
            <p>$120+</p>
            <p>40 mins</p>
          </div>

        </div>
      </section>



      {/* LINKS */}

      <section style={{marginTop:"50px"}}>

        <p>
          👉 <Link href="/uber-cost-lax-to-disneyland">
            See Uber cost breakdown
          </Link>
        </p>

        <p>
          👉 <Link href="/uber-vs-shuttle-lax-disneyland">
            Compare Uber vs Shuttle
          </Link>
        </p>

      </section>



      {/* FAQ SECTION (🔥 THIS IS THE GOLD) */}

      <section style={{marginTop:"70px"}}>

        <h2>Frequently Asked Questions</h2>

        <div style={{marginTop:"20px"}}>

          <div style={{marginBottom:"20px"}}>
            <h3>Do Ubers from LAX have car seats?</h3>
            <p>
              No, Uber and Lyft vehicles typically do not include car seats.
              Families travelling with young children will need to bring their
              own or choose a different transport option.
            </p>
          </div>

          <div style={{marginBottom:"20px"}}>
            <h3>Is Uber safe for kids in Los Angeles?</h3>
            <p>
              Yes, but California law requires children to use appropriate car
              seats depending on age. This is why many families prefer shuttles
              or private transfers.
            </p>
          </div>

          <div style={{marginBottom:"20px"}}>
            <h3>What is the cheapest way to get from LAX to Disneyland?</h3>
            <p>
              Shuttle services are usually the cheapest option, but they take
              longer due to multiple stops.
            </p>
          </div>

          <div style={{marginBottom:"20px"}}>
            <h3>What is the fastest way to get from LAX to Disneyland?</h3>
            <p>
              Uber or Lyft is typically the fastest option, taking around
              35–50 minutes depending on traffic.
            </p>
          </div>

        </div>

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