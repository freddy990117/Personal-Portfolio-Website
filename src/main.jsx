import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "../Layout.jsx";
import Contact from "./Pages/Contact.jsx";
import Project from "./Pages/Project.jsx";
import Resume from "./Pages/Resume.jsx";
import Page404 from "./Pages/Page404.jsx";
import Homepage from "./Pages/Homepage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "Contact", element: <Contact /> },
      { path: "Project", element: <Project /> },
      { path: "Resume", element: <Resume /> },
      { path: "*", element: <Page404 /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
