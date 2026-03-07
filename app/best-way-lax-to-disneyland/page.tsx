export const metadata = {
  title: "Best Way to Get from LAX to Disneyland",
  description:
    "Compare Uber, shuttles and private transfers from LAX to Disneyland. Travel times, costs and the easiest way to reach Anaheim.",
};

export default function Page() {
  return (
    <main style={{maxWidth:"1100px",margin:"auto",padding:"40px"}}>

      <h1 style={{fontSize:"42px",marginBottom:"10px"}}>
        Best Way to Get from LAX to Disneyland
      </h1>

      <p style={{fontSize:"18px",color:"#555"}}>
        Disneyland Resort is about <b>34 miles from Los Angeles Airport (LAX)</b>.
        Here are the fastest and easiest transport options to reach Anaheim.
      </p>

      {/* Quick answer */}
      <div style={{
        background:"#f6f6f6",
        padding:"25px",
        borderRadius:"10px",
        marginTop:"30px"
      }}>
        <h2>Quick Answer</h2>
        <p>
          For most travellers the easiest option is <b>Uber or Lyft</b>.
          It normally takes <b>35–50 minutes</b> and costs around
          <b> $70–$110</b> depending on traffic.
        </p>
      </div>

      {/* Transport cards */}
      <h2 style={{marginTop:"40px"}}>Transport Options</h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px",
        marginTop:"20px"
      }}>

        <div style={{border:"1px solid #eee",padding:"20px",borderRadius:"10px"}}>
          <h3>Uber / Lyft</h3>
          <p><b>Time:</b> 35–50 minutes</p>
          <p><b>Cost:</b> $70–$110</p>
          <p>Fastest and most popular option for families.</p>
        </div>

        <div style={{border:"1px solid #eee",padding:"20px",borderRadius:"10px"}}>
          <h3>Airport Shuttle</h3>
          <p><b>Time:</b> 60–90 minutes</p>
          <p><b>Cost:</b> $30–$45 per person</p>
          <p>Cheaper for solo travellers but slower.</p>
        </div>

        <div style={{border:"1px solid #eee",padding:"20px",borderRadius:"10px"}}>
          <h3>Private Transfer</h3>
          <p><b>Time:</b> 35–45 minutes</p>
          <p><b>Cost:</b> $120+</p>
          <p>Luxury option with scheduled pickup.</p>
        </div>

      </div>

      {/* Travel time */}
      <h2 style={{marginTop:"50px"}}>Travel Distance</h2>

      <p>
        The drive from LAX to Disneyland is roughly <b>34 miles (55km)</b>.
        Traffic can vary significantly depending on the time of day,
        especially during afternoon rush hour in Los Angeles.
      </p>

      {/* Internal links */}
      <h2 style={{marginTop:"50px"}}>Helpful Guides</h2>

      <ul>
        <li>
          <a href="/guide/lax-to-disneyland">
            Complete LAX → Disneyland transport guide
          </a>
        </li>
        <li>
          <a href="/uber-vs-shuttle-lax-disneyland">
            Uber vs Shuttle comparison
          </a>
        </li>
        <li>
          <a href="/hotels-near-disneyland">
            Hotels near Disneyland (walking distance)
          </a>
        </li>
      </ul>

    </main>
  );
}