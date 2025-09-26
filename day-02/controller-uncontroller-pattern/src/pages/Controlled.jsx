import React, { useState } from "react";
import SuccessToast from "../components/SuccessToast";
import { useFormStatus } from "react-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  country: "",
};

function validate(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = "First name is required";
  if (!values.lastName.trim()) errors.lastName = "Last name is required";
  if (!values.email.trim() || !values.email.includes("@"))
    errors.email = "Valid email is required";
  if (!values.phone.trim() || values.phone.length < 10)
    errors.phone = "Phone number must be at least 10 digits";
  if (!values.dob.trim()) errors.dob = "Date of birth is required";
  if (!values.country.trim()) errors.country = "Country is required";
  return errors;
}

function Sumbit() {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <button
      type="submit"
      className="bg-indigo-700 py-2 px-4 text-indigo-100 font-bold text-2xl hover:cursor-pointer"
    >
      Submit
    </button>
  );
}

const Controlled = () => {
  const [contact, setContact] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit() {
    // e.preventDefault();
    const validationErrors = validate(contact);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      (async function () {
        await new Promise((resolve, rejecct) =>
          setTimeout(() => {
            console.log("Form Submitted:", contact);
            setContact(initialState);
            setShowToast(true);
            return resolve(true);
          }, 2000)
        );
      })();
    }
  }

  return (
    <div className="bg-indigo-100 w-full md:w-3/5 mx-auto py-4 px-3">
      <h2 className="text-center text-3xl font-bold text-indigo-500 mb-4">
        Contact Form
      </h2>
      <form action={(e) => handleSubmit()}>
        <div className="row-container">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={contact.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className={`border px-2 py-1 ${
                errors.firstName ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={contact.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className={`border px-2 py-1 ${
                errors.lastName ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="row-container">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              placeholder="Email"
              className={`border px-2 py-1 ${
                errors.email ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
              placeholder="Phone"
              className={`border px-2 py-1 ${
                errors.phone ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="row-container">
          <div>
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={contact.dob}
              onChange={handleChange}
              placeholder="Date of Birth"
              className={`border px-2 py-1 ${
                errors.dob ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              value={contact.country}
              onChange={handleChange}
              placeholder="Country"
              className={`border px-2 py-1 ${
                errors.country ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country}</p>
            )}
          </div>
        </div>

        <div className="w-full flex justify-center mt-4">
          <Sumbit />
        </div>
      </form>

      {showToast && (
        <SuccessToast
          message="Form submitted successfully!"
          onClose={() => setShowToast(false)}
          duration={2000}
        />
      )}
    </div>
  );
};

export default Controlled;
