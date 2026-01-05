import { useEffect, useState } from "react";

export const useInMemoryUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      setIsLoading(true);

      const timer = setTimeout(() => {
        const inMemoryUsers = [
          { id: 1, name: "Eve", email: "eve@example.com" },
          { id: 2, name: "Frank", email: "frank@mail.com" },
          { id: 3, name: "Grace", email: "grace@sample.com" },
        ];
        setUsers(inMemoryUsers);
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } catch (err) {
      setIsLoading(false);
    }
  }, []);

  return { users, isLoading };
};
