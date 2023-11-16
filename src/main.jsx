import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddUser from "./Pages/AddUser/AddUser";
import UpdateUser from "./Pages/UpdateUser/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "add-user",
    element: <AddUser />,
  },
  {
    path: "edit-user/:id",
    element: <UpdateUser />,
    loader: ({ params }) => fetch(`http://localhost:5300/users/${params.id}`),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
