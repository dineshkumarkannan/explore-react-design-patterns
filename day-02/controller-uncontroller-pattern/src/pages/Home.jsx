import React from "react";

const Home = () => {
  return (
    <div className="bg-indigo-100 text-indigo-800 w-[100%] flex flex-col gap-4 p-4 mx-auto md:w-[60%] ">
      <h2 className="text-3xl font-bold text-center">
        Controlled & Uncontrolled Pattern
      </h2>
      <div>
        <h3 className="text-2xl font-bold">Controlled Component</h3>
        <ul className="ml-2 flex flex-col gap-2">
          <li>
            In a controlled component, the form input values is controlled by
            React state. Means component states "Single source of truth" of the
            input values
          </li>
          <li>
            When update the input value, the hanlder updates the component
            state, which in turn re-render the component & update the inputs
            value prop.
          </li>
          <li>
            Controll component offers control over the values, enables real-time
            validation, condition based rendering of user input.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Uncontrolled Component</h3>
        <ul className="ml-2 flex flex-col gap-2">
          <li>
            Uncontrolled components let the DOM manage their state internally
            React does not directly control the input value
          </li>
          <li>
            Use a 'ref' to access the input value directly from the DOM when
            needed.
          </li>
          <li>
            Controll component offers control over the values, enables real-time
            validation, condition based rendering of user input.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
