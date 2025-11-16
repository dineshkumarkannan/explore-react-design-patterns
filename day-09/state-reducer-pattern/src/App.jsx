import React from "react";
import RegisterForm from "./components/RegisterForm";
import { ProgressProvider } from "./context/ProgressContext";

function App() {
  return (
    <div className="w-screen min-h-screen bg-white">
      <ProgressProvider totalSteps={3}>
        <RegisterForm />
      </ProgressProvider>
    </div>
  );
}

export default App;
