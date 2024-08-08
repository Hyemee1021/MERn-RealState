import React from "react";

export const Search = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search ..."
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <div className=" flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Type : </label>

            <div className="flex gap-2 ">
              <input className="w-5" id="all" type="checkbox" />
              <span>Rent & Sale</span>
            </div>

            <div className="flex gap-2 ">
              <input className="w-5" id="rent" type="checkbox" />
              <span>Rent</span>
            </div>

            <div className="flex gap-2 ">
              <input className="w-5" id="sale" type="checkbox" />
              <span>Sale</span>
            </div>

            <div className="flex gap-2 ">
              <input className="w-5" id="offer" type="checkbox" />
              <span>Offer</span>
            </div>
          </div>

          <div className=" flex gap-2 flex-wrap items-center">
            <label>Amenities : </label>

            <div className="flex gap-2 ">
              <input className="w-5" id="parking" type="checkbox" />
              <span>Parking</span>
            </div>

            <div className="flex gap-2 ">
              <input className="w-5" id="furnished" type="checkbox" />
              <span>Furnished</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label>Sort :</label>
            <select id="sort_order" className="border rounded-lg p-3">
              <option>Price high to low</option>
              <option>Price low to high</option>
              <option>Lastest</option>
              <option>Oldest</option>
            </select>
          </div>
          <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-80">
            Search
          </button>
        </form>
      </div>
      <div>
        <h1>Listing Results:</h1>
      </div>
    </div>
  );
};
