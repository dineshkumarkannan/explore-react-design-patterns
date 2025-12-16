import React, { useEffect, useMemo, useState } from "react";
import generateUsers from "./utils/generateUsers";
import useDebounce from "./hooks/useDebounce";
import { useThrottle } from "./hooks/useThrottle";

const USERS = generateUsers(1000);

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const debouncedSetSearch = useDebounce(search, 300);
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 500);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredUsers = useMemo(() => {
    if (!search) return USERS;
    return USERS.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [debouncedSetSearch]);

  return (
    <div className="w-screen h-screen">
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-1.5 mx-1.5 w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-2 text-2xl">
        {`Scroll Y (throttled): ${throttledScrollY}px`}
      </div>

      {/* List */}
      <div className="mt-1.5 mx-1.5 overflow-auto border-2 border-gray-600">
        {filteredUsers.map((user) => (
          <div key={user.id} className="py-2">
            {user.name}
          </div>
        ))}
      </div>

      {/* <p style={{ marginTop: 20, color: "#666" }}>
        Rendering {filteredUsers.length} users
      </p> */}
    </div>
  );
};

export default Dashboard;
