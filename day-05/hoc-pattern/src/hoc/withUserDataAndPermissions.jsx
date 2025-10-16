import React from "react";

const mockUserData = {
  id: "u_001",
  name: "Dinesh Kumar",
  role: "user", // "admin" or "user"
  permissions: ["reports", "view_profile"],
};

const withUserDataAndPermissions = (
  WrappedComponent,
  requiredPermission = null
) => {
  return function WithDataFetchingComponent(props) {
    const user = mockUserData;

    const hasPermission =
      user.role === "admin" ||
      (requiredPermission
        ? user.permissions.includes(requiredPermission)
        : true);

    return (
      <WrappedComponent {...props} user={user} hasPermission={hasPermission} />
    );
  };
};

export default withUserDataAndPermissions;
