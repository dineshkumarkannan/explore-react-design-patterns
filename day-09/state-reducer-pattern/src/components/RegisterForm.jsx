import React, { useReducer } from "react";
import {
  FormInitialState,
  registerFormReducer,
} from "../reducers/register-form-reducer";
import ProgressBar from "./ProgressBar";
import { useProgress } from "../context/ProgressContext";

const StepName = ({ state, dispatch }) => {
  const { formData, error } = state;
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h3 className="font-bold text-lg">Name</h3>

      <section className="flex flex-col w-full max-w-sm">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          className="p-3 border-2 border-amber-800 rounded-lg"
          onChange={(e) =>
            dispatch({
              type: "set_field",
              field: "firstName",
              value: e.target.value,
            })
          }
        />
        {error.firstName && (
          <p className="text-red-600 text-sm">{error.firstName}</p>
        )}
      </section>

      <section className="flex flex-col w-full max-w-sm">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          className="p-3 border-2 border-amber-800 rounded-lg"
          onChange={(e) =>
            dispatch({
              type: "set_field",
              field: "lastName",
              value: e.target.value,
            })
          }
        />
        {error.lastName && (
          <p className="text-red-600 text-sm">{error.lastName}</p>
        )}
      </section>
    </div>
  );
};

const StepContact = ({ state, dispatch }) => {
  const { formData, error } = state;
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h3 className="font-bold text-lg">Contact Details</h3>

      <section className="flex flex-col w-full max-w-sm">
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          className="p-3 border-2 border-amber-800 rounded-lg"
          onChange={(e) =>
            dispatch({
              type: "set_field",
              field: "country",
              value: e.target.value,
            })
          }
        />
        {error.country && (
          <p className="text-red-600 text-sm">{error.country}</p>
        )}
      </section>

      <section className="flex flex-col w-full max-w-sm">
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          className="p-3 border-2 border-amber-800 rounded-lg"
          onChange={(e) =>
            dispatch({
              type: "set_field",
              field: "phone",
              value: e.target.value,
            })
          }
        />
        {error.phone && <p className="text-red-600 text-sm">{error.phone}</p>}
      </section>
    </div>
  );
};

const StepWork = ({ state, dispatch }) => {
  const { formData, error } = state;
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h3 className="font-bold text-lg">Work Information</h3>

      <section className="flex flex-col w-full max-w-sm">
        <input
          type="text"
          name="currentWorkType"
          placeholder="Work Type"
          value={formData.currentWorkType}
          className="p-3 border-2 border-amber-800 rounded-lg"
          onChange={(e) =>
            dispatch({
              type: "set_field",
              field: "currentWorkType",
              value: e.target.value,
            })
          }
        />
        {error.currentWorkType && (
          <p className="text-red-600 text-sm">{error.currentWorkType}</p>
        )}
      </section>
    </div>
  );
};

const validateForStep = (formData, step) => {
  const errors = {};
  const stepFields = {
    0: ["firstName", "lastName"],
    1: ["country", "phone"],
    2: ["currentWorkType"],
  };

  const fields = stepFields[step] || [];
  fields.forEach((f) => {
    const value = formData[f];
    if (
      value === null ||
      value === undefined ||
      value.toString().trim() === ""
    ) {
      errors[f] = `${f} is required`;
    }
  });

  return errors;
};

const RegisterForm = () => {
  const [state, dispatch] = useReducer(registerFormReducer, FormInitialState);
  const { step, next, previous } = useProgress();

  const handleNext = () => {
    const errors = validateForStep(state.formData, step);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "set_errors", errors });
      return;
    }
    // clear errors and advance
    dispatch({ type: "clear_errors" });
    next();
  };

  const handlePrev = () => {
    // clear errors on back navigation
    dispatch({ type: "clear_errors" });
    previous();
  };

  const handleSubmit = (e) => {
    e && e.preventDefault();
    // final validation for last step
    const errors = validateForStep(state.formData, step);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "set_errors", errors });
      return;
    }
    console.log("Submitting", state.formData);
    dispatch({ type: "reset" });
  };

  return (
    <div className="w-full md:w-[60%] mx-auto mt-10 flex flex-col gap-2.5">
      <h2 className="text-3xl font-bold text-center">Register Form</h2>

      <ProgressBar />

      <div className="bg-amber-100 p-8 mt-6 flex flex-col gap-4 rounded-2xl shadow">
        {step === 0 && <StepName state={state} dispatch={dispatch} />}
        {step === 1 && <StepContact state={state} dispatch={dispatch} />}
        {step === 2 && <StepWork state={state} dispatch={dispatch} />}

        <div className="w-full flex gap-4 justify-center mt-6">
          {step > 0 && (
            <button
              onClick={handlePrev}
              className="p-3 px-6 border bg-white rounded-lg hover:bg-gray-100"
            >
              Prev
            </button>
          )}

          {step < 2 ? (
            <button
              onClick={handleNext}
              className="p-3 px-6 border bg-white rounded-lg hover:bg-gray-100"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="p-3 px-6 border bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
      </div>

      <pre className="mt-4 bg-black text-green-300 p-4 rounded-lg text-sm">
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
};

export default RegisterForm;
