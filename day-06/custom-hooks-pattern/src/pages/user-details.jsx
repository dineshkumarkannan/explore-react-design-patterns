import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const initialFormData = {
  name: "",
  email: "",
};

const UserDetails = () => {
  const [storedData, setStoredData, clearStoredData] = useLocalStorage(
    "user-details",
    initialFormData
  );
  const [formData, setFormData] = useState(storedData || initialFormData);

  useEffect(() => {
    if (storedData) setFormData(storedData);
  }, [storedData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      setStoredData(updated); // Persist instantly
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User submitted:", formData);
    alert("User details saved!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-md space-y-6 dark:bg-gray-900">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        User Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <section className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm text-gray-600 mb-1 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="text-gray-700 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-white"
          />
        </section>

        <section className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm text-gray-600 mb-1 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="text-gray-700 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-white"
          />
        </section>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-all"
        >
          Save Details
        </button>
        <button
          type="button"
          onClick={() => clearStoredData()}
          className="w-full bg-red-600 text-white rounded-lg py-2 hover:bg-red-700 transition-all"
        >
          Clear Details
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
