"use client";

import Image from "next/image";

export default function CheapHotels() {

  const hotels = [
    {
      name:"Howard Johnson Anaheim",
      image:"/images/hotels/howard-johnson.jpg",
      walk:7,
      rating:"⭐ 4.4",
      price:"💰 Budget",
      badge:"👍 Best Budget Pick"
    },
    {
      name:"Desert Inn & Suites",
      image:"/images/hotels/desert-inn.jpg",
      walk:3,
      rating:"⭐ 4.2",
      price:"💰 Budget",
      badge:"🏆 Closest Budget Hotel"
    },
    {
      name:"Kings Inn Anaheim",
      image:"/images/hotels/kings-inn.jpg",
      walk:10,
      rating:"⭐ 4.1",
      price:"💰 Budget",
      badge:"💰 Cheap Stay"
    },
    {
      name:"Anaheim Discovery Inn",
      image:"/images/hotels/discovery-inn.jpg",
      walk:12,
      rating:"⭐ 4.0",
      price:"💰 Budget",
      badge:"🏨 Good Value"
    },
    {
      name:"Alamo Inn & Suites",
      image:"/images/hotels/alamo-inn.jpg",
      walk:8,
      rating:"⭐ 4.2",
      price:"💰 Budget",
      badge:"👨‍👩‍👧 Family Budget"
    }
  ];

  return (

    <div>

      <h1 style={{fontSize:"42px"}}>
        Cheap Hotels Near Disneyland
      </h1>

      <p style={{marginTop:"10px"}}>
        Finding a cheap hotel near Disneyland can help families save money
        while still staying close to the park. Many affordable Anaheim
        hotels are within walking distance of Disneyland.
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
                background:"#bbf7d0",
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
          Cheap Disneyland Hotels Map
        </h2>

        <p style={{marginTop:"10px"}}>
          Many cheap hotels near Disneyland are located along Harbor
          Boulevard directly across from the Disneyland entrance.
        </p>

        <div style={{marginTop:"20px"}}>

          <iframe
            src="https://www.google.com/maps?q=cheap+hotels+near+Disneyland+Anaheim&output=embed"
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