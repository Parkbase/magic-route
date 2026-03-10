"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hotels() {

  const [filter,setFilter] = useState("all");

  const hotels = [
    {
      name:"Disney's Grand Californian Hotel",
      image:"/images/hotels/grand-californian.jpg",
      walk:3,
      rating:"⭐ 4.7",
      price:"💰💰💰 Luxury",
      badge:"🏆 Best Location"
    },
    {
      name:"Disneyland Hotel",
      image:"/images/hotels/disneyland-hotel.jpg",
      walk:8,
      rating:"⭐ 4.6",
      price:"💰💰💰 Luxury",
      badge:"⭐ Disney Hotel"
    },
    {
      name:"Best Western Park Place Inn",
      image:"/images/hotels/park-place-inn.jpg",
      walk:4,
      rating:"⭐ 4.3",
      price:"💰💰 Mid-range",
      badge:"👍 Best Value"
    },
    {
      name:"Howard Johnson Anaheim",
      image:"/images/hotels/howard-johnson.jpg",
      walk:7,
      rating:"⭐ 4.4",
      price:"💰 Budget",
      badge:"👨‍👩‍👧 Family Favourite"
    }
  ];

  const filteredHotels = hotels.filter(hotel => {
    if(filter==="all") return true;
    if(filter==="3") return hotel.walk<=3;
    if(filter==="5") return hotel.walk<=5;
    if(filter==="10") return hotel.walk<=10;
  });

  return (

    <div>

      <h1 style={{fontSize:"42px"}}>
        Hotels Within Walking Distance of Disneyland
      </h1>

      <p style={{marginTop:"10px"}}>
        Staying at a hotel within walking distance of Disneyland is one of
        the easiest ways to visit the parks.
      </p>


      {/* FILTER BAR */}

      <div style={{
        marginTop:"30px",
        display:"flex",
        gap:"10px",
        flexWrap:"wrap"
      }}>

        <button onClick={()=>setFilter("all")}>All Hotels</button>

        <button onClick={()=>setFilter("3")}>3 Min Walk</button>

        <button onClick={()=>setFilter("5")}>5 Min Walk</button>

        <button onClick={()=>setFilter("10")}>10 Min Walk</button>

      </div>


      {/* HOTEL GRID */}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
          gap:"25px",
          marginTop:"40px"
        }}
      >

        {filteredHotels.map((hotel,index)=>(

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
                background:"#fde68a",
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

    </div>

  );
}