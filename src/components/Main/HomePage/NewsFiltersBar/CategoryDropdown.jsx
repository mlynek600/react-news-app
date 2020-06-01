import React from "react";
import "./CategoryDropdown.css";

const CategoryDropdown = ({ category, onCategoryChange }) => (
  <div id="CategoryDropdown">
    <label>Choose category: </label>
    <select value={category} onChange={e => onCategoryChange(e.target.value)}>
      <option value="business">business</option>
      <option value="entertainment">entertainment</option>
      <option value="general">general</option>
      <option value="health">health</option>
      <option value="science">science</option>
      <option value="sports">sports</option>
      <option value="technology">technology</option>
    </select>
  </div>
);

export default CategoryDropdown;
