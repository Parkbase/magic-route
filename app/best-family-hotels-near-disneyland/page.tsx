"use client";

import Image from "next/image";

export default function FamilyHotels() {

  const hotels = [
    {
      name:"Howard Johnson Anaheim",
      image:"/images/hotels/howard-johnson.jpg",
      walk:7,
      rating:"⭐ 4.4",
      price:"💰💰 Mid-range",
      badge:"👨‍👩‍👧 Family Favourite"
    },
    {
      name:"Disneyland Hotel",
      image:"/images/hotels/disneyland-hotel.jpg",
      walk:8,
      rating:"⭐ 4.6",
      price:"💰💰💰 Luxury",
      badge:"🏰 Disney Experience"
    },
    {
      name:"Desert Inn & Suites",
      image:"/images/hotels/desert-inn.jpg",
      walk:3,
      rating:"⭐ 4.2",
      price:"💰 Budget",
      badge:"🚶 Closest Walk"
    },
    {
      name:"Best Western Park Place Inn",
      image:"/images/hotels/park-place-inn.jpg",
      walk:4,
      rating:"⭐ 4.3",
      price:"💰💰 Mid-range",
      badge:"👍 Great Value"
    }
  ];

  return (

    <div>

      <h1 style={{fontSize:"42px"}}>
        Best Hotels Near Disneyland for Families
      </h1>

      <p style={{marginTop:"10px"}}>
        Disneyland vacations are usually family trips, so choosing a hotel
        that works well for kids can make a big difference. Many Anaheim
        hotels near Disneyland offer family suites, pools, and easy walking
        access to the parks.
      </p>


      {/* HOTEL GRID */}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"25px",
          marginTop:"40px"
        }}
      >

        {hotels.map((hotel,index)=>(

          <div key={index} style={{
            background:"white",
            borderRadius:"14px",
            overflow:"hidden",
            boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
          }}>

            <Image
              src={hotel.image}
              width={400}
              height={260}
              alt={hotel.name}
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
                {hotel.badge}
              </span>

              <h3 style={{marginTop:"10px"}}>
                {hotel.name}
              </h3>

              <p>{hotel.rating}</p>

              <p>🚶 {hotel.walk} minute walk to Disneyland</p>

              <p>{hotel.price}</p>

            </div>

          </div>

        ))}

      </div>


      {/* MAP */}

      <section style={{marginTop:"70px"}}>

        <h2 style={{fontSize:"32px"}}>
          Family-Friendly Hotels Map
        </h2>

        <p style={{marginTop:"10px"}}>
          Most family-friendly hotels near Disneyland are located along
          Harbor Boulevard directly across from the park entrance.
        </p>

        <div style={{marginTop:"20px"}}>

          <iframe
            src="https://www.google.com/maps?q=family+hotels+near+Disneyland+Anaheim&output=embed"
            width="100%"
            height="400"
            style={{
              border:"0",
              borderRadius:"14px"
            }}
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </div>
  );
}