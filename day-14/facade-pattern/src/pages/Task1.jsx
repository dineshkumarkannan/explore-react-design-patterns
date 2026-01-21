import React from "react";
import { useProfileFacade } from "../hooks/facade/useProfileFacade";

const Task1 = () => {
  const { userName, isProfileComplete, canEditProfile } = useProfileFacade();
  return (
    <div>
      <h3 className="text-2xl underline">Profile Facade</h3>
      <section>User Name : {userName}</section>
      <section>
        Profile Completion : {isProfileComplete ? "Completed" : "Not Completed"}
      </section>
      <section>Can Edit : {canEditProfile ? "Yes" : "No"}</section>
    </div>
  );
};

export default Task1;
