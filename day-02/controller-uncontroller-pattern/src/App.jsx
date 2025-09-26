import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import Controlled from "./pages/Controlled";
import Home from "./pages/Home";
import Uncontrolled from "./pages/Uncontrolled";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="controlled" element={<Controlled />}></Route>
        <Route path="uncontrolled" element={<Uncontrolled />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
