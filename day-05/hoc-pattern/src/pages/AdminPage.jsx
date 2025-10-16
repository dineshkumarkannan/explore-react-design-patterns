import React from "react";

const AdminPage = ({ user, hasPermission }) => {
  if (!hasPermission) {
    return (
      <div className="text-red-600 text-center text-2xl">
        Access Denied: Admins only ;)
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-3xl font-bold">Admin Page</h2>
      <p className="text-2xl">
        Welcome!, {user.name}. You have admin permission.
      </p>
    </div>
  );
};

export default AdminPage;
