import React from "react";
import "./searchbox.css";

export const SearchBox = ({ placeholder, handlechange }) => (
  <input
    className="search"
    type="text"
    placeholder={placeholder}
    onChange={handlechange}
  />
);
