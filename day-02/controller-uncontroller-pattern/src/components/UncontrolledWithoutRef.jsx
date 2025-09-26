import React from "react";

const UncontrolledWithoutRef = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries());
    if (
      !formEntries.firstName ||
      !formEntries.lastName ||
      !formEntries.email ||
      !formEntries.email.includes("@") ||
      !formEntries.phone ||
      !formEntries.dob ||
      !formEntries.country
    ) {
      alert("Form Invalid!");
    } else {
      alert("Form Successfully submitted!");
    }
  }

  return (
    <div className="bg-indigo-100 w-full md:w-3/5 mx-auto py-4 px-3">
      <h2 className="text-center text-3xl font-bold text-indigo-500 mb-4">
        Contact Form (UnControlled without Ref)
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="row-container">
          <div>
            <label htmlFor="firstName">
              First Name <span className="text-red-400">*</span>
            </label>
            <input type="text" name="firstName" id="firstName" required />
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name <span className="text-red-400">*</span>
            </label>
            <input type="text" name="lastName" id="lastName" required />
          </div>
        </div>
        <div className="row-container">
          <div>
            <label htmlFor="email">
              Email <span className="text-red-400">*</span>
            </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="phone">
              Phone <span className="text-red-400">*</span>
            </label>
            <input type="text" name="phone" id="phone" required />
          </div>
        </div>
        <div className="row-container">
          <div>
            <label htmlFor="dob">
              Date of Birth <span className="text-red-400">*</span>
            </label>
            <input type="date" name="dob" id="dob" required />
          </div>
          <div>
            <label htmlFor="country">
              Country <span className="text-red-400">*</span>
            </label>
            <input type="text" name="country" id="country" required />
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
    </div>
  );
};

export default UncontrolledWithoutRef;
