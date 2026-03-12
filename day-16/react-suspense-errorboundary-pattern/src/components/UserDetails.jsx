import React, { use } from "react";
import { getUserResource } from "../resources/userResource";

const UserDetails = () => {
  const user = use(getUserResource());

  return (
    <div className="text-lg">
      <div className="font-semibold">{user.name}</div>
      <div className="text-sm text-gray-300">{user.role}</div>
    </div>
  );
};

export default UserDetails;
