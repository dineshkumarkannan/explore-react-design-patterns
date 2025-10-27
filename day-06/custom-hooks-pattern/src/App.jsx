import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import UserDetails from "./pages/user-details";
import Layout from "./layouts/Layout";
import PostsDetails from "./pages/posts-details";
import Clipboard from "./pages/clipboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<UserDetails />} />
        <Route path="/posts" element={<PostsDetails />} />
        <Route path="/clip-board" element={<Clipboard />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
