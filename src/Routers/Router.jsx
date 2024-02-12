import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import UserList from "../Page/UserList/UserList";
import UserDetails from "../Page/UserDetails/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path:'/',
        element: <UserList/>
      },
      {
        path:'/users/:userId',
        element: <UserDetails/>
      }
    ]
  },
]);

export default router;
