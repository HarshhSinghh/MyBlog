import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blogs/",
        element: <Blogs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
        loader: async (params) => {
          // const id = parseInt(params.id, 10);
          console.log(params);
          const ids = params.params.id;
          console.log("ID:", ids);
          try {
            const response = await fetch(
              `http://127.0.0.1:8000/blogend/StudentList/${ids}/`
            );

            if (!response.ok) {
              console.error(
                `Error: HTTP request failed with status ${response.status}`
              );
              return null;
            }

            const data = await response.json();

            // Log the data for debugging purposes
            console.log("Fetched Data:", data);

            return data;
          } catch (error) {
            console.error("Error fetching data:", error);
            return null;
          }
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
