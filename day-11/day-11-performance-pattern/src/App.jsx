import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Task1 from "./pages/task1";
import Task2 from "./pages/task2";
import Task3 from "./pages/task3";
import Task4 from "./pages/task4";
import Layout from "./layouts/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index path="/task1" element={<Task1 />} />
        <Route index path="/task2" element={<Task2 />} />
        <Route index path="/task3" element={<Task3 />} />
        <Route index path="/task4" element={<Task4 />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
