import React, { useState } from "react";

const FilterSection = ({ setSelectedArea, onSortChange }) => {
  // State for sorting option
  const [sortBy, setSortBy] = useState("");
  // State for selected location
  const [selectedLocation, setSelectedLocation] = useState("");
  // State to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State to track if Pure Veg option is selected
  const [isPureVegSelected, setIsPureVegSelected] = useState(false);

  // Function to handle area change
  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
    setSelectedLocation(""); // Reset the selected location when changing the area
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  // Function to handle location change
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  // Function to handle sort change
  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    onSortChange(sortOption);
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle Pure Veg toggle
  const handlePureVegToggle = () => {
    setIsPureVegSelected(!isPureVegSelected);
    // Pass the inverse of the current state to the parent component
    setPureVegSelected(!isPureVegSelected); 
  };

  return (
    <div className="max-w-[1200px] mb-5 mx-auto flex flex-wrap gap-3 justify-center xl:justify-start">
      {/* Dropdown for filtering by area */}
      <div className="relative">
        <button
          className="p-3 shadow rounded-full w-full xl:w-auto cursor-pointer"
          onClick={toggleDropdown}
        >
          Filter by Area
        </button>
        {/* Dropdown content */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-full bg-white shadow rounded-md z-10">
            <div className="p-2">
              {/* Options for different areas */}
              <div className="flex items-center">
                <input
                  type="radio"
                  id="area-canadian"
                  name="area"
                  value="Canadian"
                  onChange={handleAreaChange}
                />
                <label htmlFor="area-canadian" className="ml-2">Canadian</label>
              </div>
              {/* Repeat similar structure for other area options */}
            </div>
          </div>
        )}
      </div>
      {/* Button for sorting */}
      <div className="p-3 shadow rounded-full border cursor-pointer" onClick={() => handleSortChange('alphabetical')}>Sort By</div>
      {/* Other filtering options */}
      <div className='p-3 shadow rounded-full border cursor-pointer'>Fast Delivery</div>
      <div className='p-3 shadow rounded-full border cursor-pointer'>New on Swiggy</div>
      <div className='p-3 shadow rounded-full border cursor-pointer'>Ratings 4.0+</div>
      {/* Button for Pure Veg filter */}
      <div
        className={`p-3 shadow rounded-full border cursor-pointer ${
          isPureVegSelected ? "bg-green-500 text-white" : ""
        }`}
        onClick={handlePureVegToggle}
      >
        Pure Veg
      </div>
      {/* Additional filtering options */}
      <div className='p-3 shadow rounded-full border cursor-pointer'>Offers</div>
      <div className='p-3 shadow rounded-full border cursor-pointer'>Rs. 300-Rs. 600</div>
      <div className='p-3 shadow rounded-full border cursor-pointer'>Less than Rs. 300</div>
    </div>
  );
};

const Setting = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4 5.999a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm1.6 0a2.8 2.8 0 0 1-5.485.8H1.81a.8.8 0 1 1 
            0-1.6h7.707a2.801 2.801 0 0 1 5.484.8ZM3.8 13.453a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm0 1.6a2.8 2.8 0 1 
            1 2.684-3.6h7.711a.8.8 0 1 1 0 1.6h-7.71a2.801 2.801 0 0 1-2.685 2Z"
        fill="#000"
        fillOpacity=".92"
      ></path>
    </svg>
  );
};

export default FilterSection;
