import React from "react";

const ReportsPage = ({ user, hasPermission }) => {
  if (!hasPermission) {
    return (
      <div className="text-red-600 text-center text-2xl">
        Access Denied: Reporters only ;)
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-3xl font-bold">Reports Page</h2>
      <p className="text-2xl">
        Welcome!, {user.name}. You have reports access.
      </p>
    </div>
  );
};

export default ReportsPage;
