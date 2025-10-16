import React from "react";

const ProfilePage = ({ user }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Profile Page</h2>
      <p className="text-2xl">
        <strong>Name: </strong> {user?.name}
      </p>
      <p className="text-2xl">
        <strong>Role: </strong> {user?.role}
      </p>
    </div>
  );
};

export default ProfilePage;
