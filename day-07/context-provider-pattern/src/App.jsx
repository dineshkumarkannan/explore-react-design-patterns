import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import Layout from "./components/Layout";
import { useAuth } from "./hooks/useAuth";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./provider/AuthProvider";
import LangProvider from "./provider/LangProvider";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route>
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return (
    <AuthProvider>
      <LangProvider>
        <RouterProvider router={router}></RouterProvider>
      </LangProvider>
    </AuthProvider>
  );
}

export default App;
