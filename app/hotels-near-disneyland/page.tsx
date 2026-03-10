import Image from "next/image";

export default function Hotels() {
  return (
    <div>

      <h1 style={{fontSize:"42px"}}>
        Hotels Within Walking Distance of Disneyland
      </h1>

      <p style={{marginTop:"10px"}}>
        Staying at a hotel within walking distance of Disneyland is one of
        the easiest ways to visit the parks. Many Anaheim hotels along
        Harbor Boulevard are only a few minutes walk from the
        Disneyland entrance.
      </p>


      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"25px",
          marginTop:"40px"
        }}
      >

        {/* Grand Californian */}

        <div style={{
          background:"white",
          borderRadius:"14px",
          overflow:"hidden",
          boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
        }}>

          <Image
            src="/images/hotels/grand-californian.jpg"
            width={400}
            height={260}
            alt="Disney Grand Californian Hotel"
            style={{width:"100%",height:"200px",objectFit:"cover"}}
          />

          <div style={{padding:"18px"}}>

            <span style={{
              background:"#fde68a",
              padding:"4px 8px",
              borderRadius:"8px",
              fontSize:"12px",
              fontWeight:"bold"
            }}>
              🏆 Best Location
            </span>

            <h3 style={{marginTop:"10px"}}>
              Disney's Grand Californian Hotel
            </h3>

            <p>⭐ 4.7 rating</p>

            <p>🚶 3 minute walk to Disneyland</p>

            <p>💰💰💰 Luxury</p>

          </div>

        </div>


        {/* Disneyland Hotel */}

        <div style={{
          background:"white",
          borderRadius:"14px",
          overflow:"hidden",
          boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
        }}>

          <Image
            src="/images/hotels/disneyland-hotel.jpg"
            width={400}
            height={260}
            alt="Disneyland Hotel"
            style={{width:"100%",height:"200px",objectFit:"cover"}}
          />

          <div style={{padding:"18px"}}>

            <span style={{
              background:"#bfdbfe",
              padding:"4px 8px",
              borderRadius:"8px",
              fontSize:"12px",
              fontWeight:"bold"
            }}>
              ⭐ Disney Hotel
            </span>

            <h3 style={{marginTop:"10px"}}>
              Disneyland Hotel
            </h3>

            <p>⭐ 4.6 rating</p>

            <p>🚶 8 minute walk to Disneyland</p>

            <p>💰💰💰 Luxury</p>

          </div>

        </div>


        {/* Park Place Inn */}

        <div style={{
          background:"white",
          borderRadius:"14px",
          overflow:"hidden",
          boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
        }}>

          <Image
            src="/images/hotels/park-place-inn.jpg"
            width={400}
            height={260}
            alt="Best Western Park Place Inn"
            style={{width:"100%",height:"200px",objectFit:"cover"}}
          />

          <div style={{padding:"18px"}}>

            <span style={{
              background:"#bbf7d0",
              padding:"4px 8px",
              borderRadius:"8px",
              fontSize:"12px",
              fontWeight:"bold"
            }}>
              👍 Best Value
            </span>

            <h3 style={{marginTop:"10px"}}>
              Best Western Park Place Inn
            </h3>

            <p>⭐ 4.3 rating</p>

            <p>🚶 4 minute walk to Disneyland</p>

            <p>💰💰 Mid-range</p>

          </div>

        </div>


        {/* Howard Johnson */}

        <div style={{
          background:"white",
          borderRadius:"14px",
          overflow:"hidden",
          boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
        }}>

          <Image
            src="/images/hotels/howard-johnson.jpg"
            width={400}
            height={260}
            alt="Howard Johnson Anaheim"
            style={{width:"100%",height:"200px",objectFit:"cover"}}
          />

          <div style={{padding:"18px"}}>

            <span style={{
              background:"#fecaca",
              padding:"4px 8px",
              borderRadius:"8px",
              fontSize:"12px",
              fontWeight:"bold"
            }}>
              👨‍👩‍👧 Family Favourite
            </span>

            <h3 style={{marginTop:"10px"}}>
              Howard Johnson Anaheim
            </h3>

            <p>⭐ 4.4 rating</p>

            <p>🚶 7 minute walk to Disneyland</p>

            <p>💰 Budget</p>

          </div>

        </div>

      </div>

    </div>
  );
}