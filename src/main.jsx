import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "../Layout.jsx";
import Contact from "./Pages/Contact.jsx";
import Project from "./Pages/Project.jsx";
import Resume from "./Pages/Resume.jsx";
import Skill from "./Pages/Skill.jsx";
import Page404 from "./Pages/Page404.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "Contact", element: <Contact /> },
      { path: "Project", element: <Project /> },
      { path: "Resume", element: <Resume /> },
      { path: "Skill", element: <Skill /> },
      { path: "*", element: <Page404 /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
