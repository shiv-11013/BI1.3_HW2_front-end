import { useState } from "react";
import useFetch from "../useFetch";

const Hotels = () => {
  const [successMessage, setSuccessMessage] = useState("");
  
  // Replace localhost with the deployed backend URL
  const { data, loading, error } = useFetch("https://bi-1-3-hw-2-rho.vercel.app/hotels");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleDelete = async (hotelId) => {
    try {
      // Replace localhost with the deployed backend URL
      const response = await fetch(`https://bi-1-3-hw-2-rho.vercel.app/hotels/${hotelId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw "Failed to delete Hotel";
      }

      const data = await response.json();

      if (data) {
        setSuccessMessage("Hotel deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return data ? (
    <div>
      <ul>
        <h1>All Hotels</h1>
        {data.map((d) => {
          return (
            <li key={d._id}>
              {d.name}{" "}
              <button onClick={() => handleDelete(d._id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <p>No Data Found</p>
  );
};

export default Hotels;
