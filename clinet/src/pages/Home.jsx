import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  console.log(saleListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?offer=true&limit=4`);

        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error.message);
      }

      const fetchRentListings = async () => {
        try {
          const res = await fetch(`/api/listing/get?type=rent&limit=4`);

          const data = await res.json();
          setRentListings(data);
          fetchSaleListings();
        } catch (error) {
          console.log(error.message);
        }
      };
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=sale&limit=4`);

        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your <span className="text-slate-500">perfect</span>
          <br />
          place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quo
          <br />
          quis obcaecati beatae voluptates, recusandae repellendus corrupti
          sequi ratione fuga.
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's check listings
        </Link>
      </div>
      {/* swiper */}
      {/* listing*/}
    </div>
  );
}
