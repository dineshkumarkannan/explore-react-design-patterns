import React, { useState, lazy, Suspense } from "react";
import Spinner from "./Spinner";
const CountrySelector = lazy(() => import("./CountrySelector"));

const UserForm = () => {
  const [showCountry, setShowCountry] = useState(false);

  return (
    <div className="p-10 w-[400px]">
      <h3 className="xl font-bold mb-4">User Form</h3>

      <label>Name</label>
      <input
        className="block w-[inherit] p-1.5 mb-1.5 border-b-2"
        placeholder="Please enter name here..."
      />

      <label>Email</label>
      <input
        className="block w-[inherit] p-1.5 mb-1.5 border-b-2"
        placeholder="Please enter email here..."
      />

      <button onClick={() => setShowCountry(true)} className="px-1.5 py-2">
        Select Country
      </button>

      {showCountry && (
        <Suspense fallback={<Spinner />}>
          <CountrySelector />
        </Suspense>
      )}
    </div>
  );
};

export default UserForm;
