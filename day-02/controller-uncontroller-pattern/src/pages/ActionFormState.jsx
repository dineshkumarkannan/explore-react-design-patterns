import React, { useEffect, useState } from "react";
import SuccessToast from "../components/SuccessToast";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="px-6 py-4 bg-indigo-300"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

const hanldeSubmit = async (prevState, formData) => {
  console.log("submitted..", formData);
  const firstName = formData.get("firstName").trim();
  const lastName = formData.get("lastName").trim();
  const email = formData.get("email").trim();
  const country = formData.get("country").trim();

  if (!firstName) {
    return { success: false, message: "First Name is required" };
  }
  if (!lastName) {
    return { success: false, message: "Last Name is required" };
  }
  if (!email || !email.includes("@")) {
    return { success: false, message: "Email should be valid" };
  }
  if (!country) {
    return { success: false, message: "Country is required" };
  }

  await new Promise((res) => setTimeout(res, 2000));

  return { success: true, message: "Contact form submitter successfully!" };
};

const ContactForm = () => {
  const [formState, formAction, isPending] = useActionState(hanldeSubmit, {
    success: false,
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (formState.success) {
      setShowToast(true);
      setInputs({ firstName: "", lastName: "", email: "", country: "" });
    }
  }, [formState]);

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <input
        type="firstName"
        name="firstName"
        placeholder="First Name"
        value={inputs.firstName}
        onChange={handleChange}
      />
      <input
        type="lastName"
        name="lastName"
        placeholder="Last Name"
        value={inputs.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={inputs.email}
        onChange={handleChange}
      />
      <input
        type="country"
        name="country"
        placeholder="Country"
        value={inputs.country}
        onChange={handleChange}
      />
      <Submit />

      {formState.message && (
        <p className={formState.success ? "text-green-600" : "text-red-600"}>
          {formState.message}
        </p>
      )}
      {/* Success toast */}
      {showToast && (
        <SuccessToast
          message="Form submitted successfully!"
          onClose={() => setShowToast(false)}
          duration={2000}
        />
      )}
    </form>
  );
};

const ActionFormState = () => {
  return (
    <div className="w-[100%] bg-indigo-900 mx-auto p-6 md:w-[50%] ">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-200">
        Contact Form
      </h2>
      {/* <ErrorBoundary fallback={<p>Something wend wrong!</p>}> */}
      <ContactForm />
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default ActionFormState;
