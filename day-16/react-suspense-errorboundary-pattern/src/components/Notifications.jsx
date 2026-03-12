import React, { use } from "react";
import { getNotificationResource } from "../resources/userResource";

const Notifications = () => {
  const notifications = use(getNotificationResource());

  return (
    <div className="w-full">
      <h2 className="text-xl mb-2">Notifications</h2>
      <ul className="text-left space-y-1">
        {notifications.map((note) => (
          <li key={note} className="border border-gray-700 rounded px-2 py-1">
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
