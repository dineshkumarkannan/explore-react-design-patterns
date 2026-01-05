import { useInMemoryUsers } from "./hooks/useInMemoryUsers";

export const usersHookFactory = (strategy) => {
  switch (strategy) {
    case "rest":
      return;
    case "graphql":
      return;
    case "inmemory":
      return useInMemoryUsers();
    default:
      return strategy;
  }
};
