import UsersList from "./components/UsersList";
import { UsersProvider } from "./provider/UsersProvider";

function App() {
  return (
    <UsersProvider strategy={"inmemory"}>
      <UsersList />
    </UsersProvider>
  );
}

export default App;
