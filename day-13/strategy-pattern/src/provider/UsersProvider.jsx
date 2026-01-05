import { UsersContext } from "../context";
import { usersHookFactory } from "../users-hook-factory";

export function UsersProvider({ strategy, children }) {
  const useUsersHookFactory = usersHookFactory(strategy);

  return (
    <UsersContext.Provider value={useUsersHookFactory}>
      {children}
    </UsersContext.Provider>
  );
}
