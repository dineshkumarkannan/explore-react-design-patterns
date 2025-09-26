import React, { useRef, useState } from "react";
import SuccessToast from "./SuccessToast";

const initialErrors = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  country: "",
};

const UncontrolledWithRef = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const dobRef = useRef(null);
  const countryRef = useRef(null);

  const [errors, setErrors] = useState(initialErrors);
  const [showToast, setShowToast] = useState(false);

  function validate() {
    const newErrors = { ...initialErrors };

    if (!firstNameRef.current.value.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!lastNameRef.current.value.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (
      !emailRef.current.value.trim() ||
      !emailRef.current.value.includes("@")
    ) {
      newErrors.email = "Enter a valid email";
    }
    if (!phoneRef.current.value.trim() || phoneRef.current.value.length < 10) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!dobRef.current.value.trim()) {
      newErrors.dob = "Date of birth is required";
    }
    if (!countryRef.current.value.trim()) {
      newErrors.country = "Country is required";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      setShowToast(true);

      // Reset form
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      dobRef.current.value = "";
      countryRef.current.value = "";
    }
  }

  return (
    <div className="bg-indigo-100 w-full md:w-3/5 mx-auto py-4 px-3">
      <h2 className="text-center text-3xl font-bold text-indigo-500 mb-4">
        Contact Form (Uncontrolled with Ref)
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="row-container">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              ref={firstNameRef}
              type="text"
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
              ref={lastNameRef}
              type="text"
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
              ref={emailRef}
              type="email"
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
              ref={phoneRef}
              type="text"
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
              ref={dobRef}
              type="date"
              className={`border px-2 py-1 ${
                errors.dob ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <input
              ref={countryRef}
              type="text"
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
          <button
            type="submit"
            className="bg-indigo-700 py-2 px-4 text-indigo-100 font-bold text-2xl hover:cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Success toast */}
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

export default UncontrolledWithRef;
