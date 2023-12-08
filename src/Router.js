import { createBrowserRouter } from "react-router-dom";
import { Home, Login, NewUser, User, DetailUser,Edit } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/new-user",
    element: <NewUser />,
  },
  {
    path: "/users",
    element: <User />,
  },
  {
    path: "/detail-user/:id",
    element: <DetailUser />,
  },
  {
    path: "/edit-user/:id",
    element: <Edit />,
  },
]);
export default router;
