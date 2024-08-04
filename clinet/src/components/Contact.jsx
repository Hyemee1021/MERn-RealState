import React, { useEffect, useState } from "react";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [error, setError] = useState();
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);

        const data = await res.json();

        setLandlord(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  return (
    <div>
      {landlord && (
        <div>
          <p>
            Contact:<span className="font-semibold">{landlord.username}</span>{" "}
            for <span className="font-semibold">{listing.name}</span>
          </p>
          <textarea
            name="message"
            id="message"
            value={message}
            rows="2"
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg "
          ></textarea>
        </div>
      )}
    </div>
  );
}
