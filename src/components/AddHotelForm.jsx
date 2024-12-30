import React, { useState } from "react";

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    // priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Form Data Submitted:", formData);

    try {
      const response = await fetch(
        "https://bi-1-3-hw-2-rho.vercel.app/hotels",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log("Response:", response);

      if (response.ok) {
        console.log("Form Data Submitted", formData);
        setSubmittedData(formData); // Update state with submitted form data
      } else {
        console.log("Error submitting form");
      }
    } catch (error) {
      console.log("Error Submitting the Form");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Inn">Inn</option>
            <option value="Resort">Resort</option>
            <option value="Mid-Range">Mid-Range</option>
          </select>
        </div>

        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Website:</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Check In Time:</label>
          <input
            type="text"
            name="checkInTime"
            value={formData.checkInTime}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Check Out Time:</label>
          <input
            type="text"
            name="checkOutTime"
            value={formData.checkOutTime}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Amenities (comma separated):</label>
          <input
            type="text"
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
          />
        </div>

        {/* <div>
          <label>Price Range:</label>
          <select
            name="priceRange"
            value={formData.priceRange}
            onChange={handleChange}
          >
            <option value="">Select Price Range</option>
            {priceRanges.map((range, index) => (
              <option key={index} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div> */}

        <div>
          <label>Reservations Needed:</label>
          <input
            type="checkbox"
            name="reservationsNeeded"
            checked={formData.reservationsNeeded}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Parking Available:</label>
          <input
            type="checkbox"
            name="isParkingAvailable"
            checked={formData.isParkingAvailable}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Wifi Available:</label>
          <input
            type="checkbox"
            name="isWifiAvailable"
            checked={formData.isWifiAvailable}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Pool Available:</label>
          <input
            type="checkbox"
            name="isPoolAvailable"
            checked={formData.isPoolAvailable}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Spa Available:</label>
          <input
            type="checkbox"
            name="isSpaAvailable"
            checked={formData.isSpaAvailable}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Restaurant Available:</label>
          <input
            type="checkbox"
            name="isRestaurantAvailable"
            checked={formData.isRestaurantAvailable}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Photos (comma separated URLs):</label>
          <input
            type="text"
            name="photos"
            value={formData.photos}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          <ul>
            <li>
              <strong>Name:</strong> {submittedData.name}
            </li>
            <li>
              <strong>Category:</strong> {submittedData.category}
            </li>
            <li>
              <strong>Location:</strong> {submittedData.location}
            </li>
            <li>
              <strong>Rating:</strong> {submittedData.rating}
            </li>
            <li>
              <strong>Website:</strong> {submittedData.website}
            </li>
            <li>
              <strong>Phone Number:</strong> {submittedData.phoneNumber}
            </li>
            <li>
              <strong>Check In Time:</strong> {submittedData.checkInTime}
            </li>
            <li>
              <strong>Check Out Time:</strong> {submittedData.checkOutTime}
            </li>
            <li>
              <strong>Amenities:</strong> {submittedData.amenities}
            </li>
            <li>
              <strong>Price Range:</strong> {submittedData.priceRange}
            </li>
            <li>
              <strong>Reservations Needed:</strong>{" "}
              {submittedData.reservationsNeeded ? "Yes" : "No"}
            </li>
            <li>
              <strong>Parking Available:</strong>{" "}
              {submittedData.isParkingAvailable ? "Yes" : "No"}
            </li>
            <li>
              <strong>Wifi Available:</strong>{" "}
              {submittedData.isWifiAvailable ? "Yes" : "No"}
            </li>
            <li>
              <strong>Pool Available:</strong>{" "}
              {submittedData.isPoolAvailable ? "Yes" : "No"}
            </li>
            <li>
              <strong>Spa Available:</strong>{" "}
              {submittedData.isSpaAvailable ? "Yes" : "No"}
            </li>
            <li>
              <strong>Restaurant Available:</strong>{" "}
              {submittedData.isRestaurantAvailable ? "Yes" : "No"}
            </li>
            <li>
              <strong>Photos:</strong> {submittedData.photos}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddHotelForm;
