import { use } from "react";
import useFetch from "../useFetch";

const NewHotel1 = ({ hotelName }) => {
  const { data, loading, error } = useFetch(
    `https://bi-1-3-hw-2-rho.vercel.app/hotels/${hotelName}`
  );
  console.log("Hotel Nameji:", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!data) return <p>No Data Found</p>;

  const hotels = Array.isArray(data) ? data : [data];

  return (
    <div>
      {hotels.map((d, index) => {
        return (
          <div key={index}>
            <p>Location: {d.location}</p>
            <p>Rating: {d.rating}</p>
            <p>price Range: {d.priceRange}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NewHotel1;
