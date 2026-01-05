import React, { useContext } from "react";
import { UsersContext } from "../context";

const UsersList = () => {
  const users = useContext(UsersContext);
  return (
    <div className="flex-row w-[40%] m-4">
      <h3 className="text-2xl font-bold mb-4">Users List</h3>
      {users.users &&
        users.users.map((user) => {
          return (
            <div key={user.id} className="mb-2 hover:bg-gray-100 px-2">
              <div>{user.name}</div>
              {user.email}
            </div>
          );
        })}
    </div>
  );
};

export default UsersList;
