import React from "react";

// Simulate 250 countries
const COUNTRIES = Array.from({ length: 250 }, (_, i) => `Country ${i + 1}`);

export default function CountrySelector() {
  return (
    <div style={{ marginTop: 16 }}>
      <label>Country</label>
      <select style={{ width: "100%", padding: 8 }}>
        {COUNTRIES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
