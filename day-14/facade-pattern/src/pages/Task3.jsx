import React from "react";
import { useNotificationFacade } from "../hooks/facade/useNotificationFacade";

const Task3 = () => {
  const { notification, updateNotification, total_unread } =
    useNotificationFacade();

  return (
    <div className="max-w-md border rounded p-4">
      <h3 className="text-xl font-bold mb-2">
        Notifications ({total_unread} unread)
      </h3>

      {notification.length === 0 ? (
        <p className="text-gray-500">No notifications</p>
      ) : (
        notification.map((item) => (
          <div
            key={item.id}
            className={`flex justify-between items-center p-2 mb-2 rounded ${
              item.read ? "bg-gray-100" : "bg-blue-50"
            }`}
          >
            <div>
              <p className="font-medium">{item.details}</p>
              <span className="text-xs text-gray-500">Type: {item.type}</span>
            </div>

            {!item.read && (
              <button
                onClick={() => updateNotification(item.id)}
                className="text-sm text-blue-600 hover:underline"
              >
                Mark as read
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Task3;
