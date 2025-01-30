import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "../Layout.jsx";
import Contact from "./Pages/Contact.jsx";
import Project from "./Pages/Project.jsx";
import Resume from "./Pages/Resume.jsx";
import Page404 from "./Pages/Page404.jsx";
import Homepage from "./Pages/Homepage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "/", element: <Homepage /> },
//       { path: "Contact", element: <Contact /> },
//       { path: "Project", element: <Project /> },
//       { path: "Resume", element: <Resume /> },
//       { path: "*", element: <Page404 /> },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

// 改成使用 HashRouter，因為它能避免由於 URL 路徑錯誤導致的 404 錯誤，
// 並且能確保網站即使在刷新或深鏈接的情況下，也能正確加載。
createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Project" element={<Project />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </HashRouter>
);
