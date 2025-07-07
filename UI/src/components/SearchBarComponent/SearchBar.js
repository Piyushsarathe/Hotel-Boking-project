import React, { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
//   const cities = ["Bhopal, Central Zone, India", "Delhi, India", "Mumbai, India"];
    const navigat = useNavigate();
  const [citynm, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

//   const handleSearch = () => {
//     alert(
//       `Searching for:\nCity: ${city}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nAdults: ${adults}\nChildren: ${children}`
//     );
//   };
 const handlecity= (e) => {
    const selectcity=e.target.value;
    setCity(selectcity);
    if(selectcity==="All"){
        navigat('/');
    }
    else if("selectcity"){
        navigat('/search',{state:{citynm:selectcity}});
    }

  };

  return (
    <div className="search-bar">
      {/* <select value={city} onChange={(e) => setCity(e.target.value)}>
        {cities.map((city, i) => (
          <option key={i} value={city}>
            {city}
          </option>
        ))}
      </select> */}
      <select value={citynm} onChange={handlecity} >
          <option>Search city</option>
          <option>All</option>
          <option>bhopal</option>
          <option>Delhi</option>
          <option>indore</option>
          <option>ahmedabad,India</option>
          <option>Mumbai</option>
      </select>

      <input
        type="date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        placeholder="Check-in"
      />
      <input
        type="date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        placeholder="Check-out"
      />

      <select value={adults} onChange={(e) => setAdults(parseInt(e.target.value))}>
        {[...Array(10).keys()].map((n) => (
          <option key={n + 1} value={n + 1}>
            {n + 1} Adults
          </option>
        ))}
      </select>

      <select value={children} onChange={(e) => setChildren(parseInt(e.target.value))}>
        {[...Array(10).keys()].map((n) => (
          <option key={n} value={n}>
            {n} Children
          </option>
        ))}
      </select>

      <button onClick={handlecity}>Search</button>
    </div>
  );
};

export default SearchBar;
