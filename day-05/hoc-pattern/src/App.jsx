import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import ReportsPage from "./pages/ReportsPage";
import withUserDataAndPermissions from "./hoc/withUserDataAndPermissions";

const ProfileWithUser = withUserDataAndPermissions(ProfilePage);
const AdminWithUser = withUserDataAndPermissions(AdminPage, "admin");
const ReportsWithUser = withUserDataAndPermissions(ReportsPage, "reports");

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<ProfileWithUser />} />
        <Route path="admin" element={<AdminWithUser />} />
        <Route path="reports" element={<ReportsWithUser />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
