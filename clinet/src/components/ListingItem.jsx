import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
export const ListingItem = ({ listing }) => {
  return (
    <div className="bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden rounded-sm w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-200"
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="truncate text-lg font-semibold text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-800" />
            <p className="w-full text-sm text-gray-600">{listing.address}</p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.description}
          </p>
        </div>
      </Link>
    </div>
  );
};
