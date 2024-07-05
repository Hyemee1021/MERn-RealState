import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Listing = () => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);

        const data = await res.json();

        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        console.log(data);
        setListing(data);
        console.log(listing);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchListing();
  });
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error occurred while fetching data.</p>}
      {listing && (
        <div>
          <h2>{listing.title}</h2>
          <p>{listing.description}</p>
          {/* Render other details as needed */}
        </div>
      )}
    </div>
  );
};
