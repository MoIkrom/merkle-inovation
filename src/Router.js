import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Register, User, DetailUser } from "./pages";

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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/detail-user/:id",
    element: <DetailUser />,
  },
]);
export default router;
