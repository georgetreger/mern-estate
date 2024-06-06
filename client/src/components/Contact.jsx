import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [landLord, setLandLord] = useState(null);
  const [messsage, setMessage] = useState("");
  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandLord(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  const onChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      {landLord && (
        <div className="flex flex-col gap-4">
          <p>
            Contact: <span className="font-semibold">{landLord.username}</span>{" "}
            for
            <span className="font-semibold"> {listing.name.toLowerCase()}</span>
          </p>
          <textarea
            className="p-2 w-full border border-gray-300 rounded-md mt-2 outline-none"
            onChange={onChange}
            name="message"
            id="message"
            rows="2"
            value={messsage}
            placeholder="Enter your message here"
          ></textarea>
           <Link className="bg-slate-700 text-white text-center p-3 rounded-md hover:opacity-90" to={`mailto:${landLord.email}?subject=Regarding 
           ${listing.name}&body=${messsage}`}>
             Send Message
           </Link>
        </div>
      )}
    </>
  );
}
