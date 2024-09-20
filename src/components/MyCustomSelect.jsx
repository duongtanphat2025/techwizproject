import React from "react";

function MyCustomSelect({ options, defaultValue, onChange }) {
  return (
    <select value={defaultValue} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
export default MyCustomSelect;
