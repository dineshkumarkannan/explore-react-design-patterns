import { useCallback, useMemo, useState } from "react";

const NOTIFICATION = [
  { id: 1, type: "warning", details: "test warning", read: false },
  { id: 2, type: "success", details: "test success", read: false },
  { id: 3, type: "pending", details: "test pending", read: false },
];

export const useNotificationFacade = () => {
  const [notification, setNotification] = useState(NOTIFICATION);

  const updateNotification = useCallback((id) => {
    setNotification((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item))
    );
  }, []);

  const total_unread = useMemo(() => {
    return notification.filter((item) => !item.read).length;
  }, [notification]);

  return {
    notification,
    updateNotification,
    total_unread,
  };
};
